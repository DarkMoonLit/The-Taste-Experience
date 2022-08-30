import { v4 as uuid4 } from "uuid";
import { parseNearAmount } from "near-api-js/lib/utils/format";

const GAS = 100000000000000;

export function createRecipe(recipe) {
	recipe.id = uuid4();
	recipe.price = parseNearAmount(recipe.price + "");
	return window.contract.setRecipe({ recipe });
}

export function getRecipes() {
	return window.contract.getRecipes();
}

export function transferOwnership({ id, owner }) {
	return window.contract.transferOwnership({ recipeId: id, _owner: owner });
}

export function modifyRecipe({ id, formula }) {
	return window.contract.modifyRecipe({ recipeId: id, _formula: formula });
}

export async function buyRecipe({ id, price }) {
	await window.contract.buyRecipe({ recipeId: id }, GAS, price);
}
