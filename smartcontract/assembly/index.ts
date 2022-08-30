import {Recipe, recipesStorage, boughtRecipesStorage, ownedRecipesStorage} from "./model";
import {context, ContractPromiseBatch, u128} from "near-sdk-as";


/**
 * Function used to buy a recipe
 * @param recipeId ID of the recipe
 */
export function buyRecipe(recipeId: string): void {
	const recipe = getRecipe(recipeId);

	assert(recipe != null, "Recipe not found");

	assert(
		recipe.price.toString() == context.attachedDeposit.toString(),
		"Attached deposit should equal to the recipe's price"
	);

	assert(
		recipe.owner.toString() != context.sender.toString(),
		"Cannot buy a own recipe"
	);

	if (recipe.buyers.length > 0) {
		assert(
			recipe.buyers.indexOf(context.sender) == -1,
			"Already bought recipe"
		);
	}

	ContractPromiseBatch.create(recipe.owner).transfer(context.attachedDeposit);
	recipe.buyRecipe();
	recipesStorage.set(recipe.id, recipe);

	let userRecipes = boughtRecipesStorage.get(context.sender);
	userRecipes.push(recipeId);
	boughtRecipesStorage.set(context.sender, userRecipes);
}

/**
 * Function used to transfer the ownership of a given recipe
 * @param recipeId ID of the recipe
 * @param _owner New owner of the recipe
 */
export function transferOwnership(recipeId: string, _owner: string): void {
	const recipe = getRecipe(recipeId);

	assert(recipe != null, "Recipe not found");
	assert(recipe.owner.toString() == context.sender, "Only the owner can transfer a recipe");
	assert(_owner.length > 0, "Enter a valid accountId for new owner");
	assert(recipe.owner.toString() != _owner, "Cannot transfer to own");

	recipe.transferOwnership(_owner);
	recipesStorage.set(recipe.id, recipe);

	let userRecipes = ownedRecipesStorage.get(context.sender);
	let recipeIndex = userRecipes.indexOf(recipeId);
	userRecipes.splice(recipeIndex, 1);
	ownedRecipesStorage.set(context.sender, userRecipes);

	let newUserRecipes = ownedRecipesStorage.get(_owner);
	newUserRecipes.push(recipeId);
	ownedRecipesStorage.set(_owner, newUserRecipes);
}

/**
 * Function used to modify the formula of a given recipe
 * @param recipeId ID of the recipe
 * @param _formula Modified formula of the recipe
 */
export function modifyRecipe(recipeId: string, _formula: string): void {
	const recipe = getRecipe(recipeId);

	assert(recipe != null, "Recipe not found");
	assert(recipe.owner.toString() == context.sender, "Only the owner can modify recipe formula");
	assert(_formula.length > 0, "Formula is required");

	recipe.modifyRecipe(_formula);
	recipesStorage.set(recipe.id, recipe);
}

/**
 * Function used to modify the price of a given recipe
 * @param recipeId ID of the recipe
 * @param _newPrice Modified price of the recipe
 */
export function changeRecipe(recipeId: string, _newPrice: u128): void {
	const recipe = getRecipe(recipeId);

	assert(recipe != null, "Recipe not found");
	assert(recipe.owner.toString() == context.sender, "Only the owner can modify recipe price");
	assert(u128.gt(_newPrice, u128.Min), "Price is required");

	recipe.changePrice(_newPrice);
	recipesStorage.set(recipe.id, recipe);
}

/**
 * Function used to add a recipe
 * @param recipe Recipe details object which contains attributes mentioned in Recipe Class
 */
export function setRecipe(recipe: Recipe): void {
	let storedRecipe = recipesStorage.get(recipe.id);

	assert(storedRecipe == null, `A recipe with id=${recipe.id} already exists`);

	assert(recipe.id.length > 0, "ID is required");
	assert(recipe.name.length > 0, "Name is required");
	assert(recipe.description.length > 0, "Description is required");
	assert(u128.gt(recipe.price, u128.Min), "Price is required");
	assert(recipe.formula.length > 0, "Formula is required");

	recipesStorage.set(recipe.id, Recipe.fromPayload(recipe));

	let ownedRecipes = ownedRecipesStorage.get(context.sender);
	ownedRecipes.push(recipe.id);
	ownedRecipesStorage.set(context.sender, ownedRecipes);
}

/**
 * Function used to get details of a recipe
 * @param recipeId ID of the recipe
 * @return If a recipe is present with the provided ID, returns that recipe. Otherwise, null.
 */
export function getRecipe(recipeId: string): Recipe | null {
	return recipesStorage.get(recipeId);
}

/**
 * Function used to get all Recipes present in the contract
 * @return Array of Recipes
 */
export function getRecipes(): Array<Recipe> {
	return recipesStorage.values();
}

/**
 * Function used to get all the Recipes that logged-in user bought
 * @return Array of recipes
 */
export function getUserRecipes(): Array<Recipe> {
	let recipeIds = boughtRecipesStorage.get(context.sender);

	let recipes : Recipe[] = [];

	for (let i=0; i<recipeIds.length; i++){
		if(recipesStorage.contains(recipeIds[i])) {
			recipes.push(recipesStorage.getSome(recipeIds[i]));
		}
	}
	return recipes;
}

/**
 * Function used to get all the Recipes that logged-in owned
 * @return Array of recipes
 */
export function getOwnedRecipes(): Array<Recipe> {
	let recipeIds = ownedRecipesStorage.get(context.sender);

	let recipes : Recipe[] = [];

	for (let i=0; i<recipeIds.length; i++){
		if(recipesStorage.contains(recipeIds[i])) {
			recipes.push(recipesStorage.getSome(recipeIds[i]));
		}
	}
	return recipes;
}