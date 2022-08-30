import { Recipe, recipesStorage } from "./model";
import { context, ContractPromiseBatch } from "near-sdk-as";

// buys a recipe
export function buyRecipe(recipeId: string): void {
	const recipe = getRecipe(recipeId);
	if (recipe == null) {
		throw new Error("recipe not found");
	}
	if (recipe.price.toString() != context.attachedDeposit.toString()) {
		throw new Error(
			"attached deposit should be greater than the recipe's price"
		);
	}
	assert(
		recipe.owner.toString() != context.sender.toString(),
		"Not a customer"
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
}

// transfers the ownership of a recipe
export function transferOwnership(recipeId: string, _owner: string): void {
	const recipe = getRecipe(recipeId);
	if (recipe == null) {
		throw new Error("recipe not found");
	}
	assert(recipe.owner.toString() == context.sender, "Only recipe owner");
	assert(_owner.length > 0, "Enter a valid accountId for new owner");
	recipe.transferOwnership(_owner);
	recipesStorage.set(recipe.id, recipe);
}

// modifies the formula of a recipe
export function modifyRecipe(recipeId: string, _formula: string): void {
	const recipe = getRecipe(recipeId);
	if (recipe == null) {
		throw new Error("recipe not found");
	}
	assert(recipe.owner.toString() == context.sender, "Only recipe owner");
	recipe.modifyRecipe(_formula);
	recipesStorage.set(recipe.id, recipe);
}

export function setRecipe(recipe: Recipe): void {
	let storedRecipe = recipesStorage.get(recipe.id);
	if (storedRecipe !== null) {
		throw new Error(`a recipe with id=${recipe.id} already exists`);
	}
	recipesStorage.set(recipe.id, Recipe.fromPayload(recipe));
}

export function getRecipe(recipeId: string): Recipe | null {
	return recipesStorage.get(recipeId);
}

export function getRecipes(): Array<Recipe> {
	return recipesStorage.values();
}
