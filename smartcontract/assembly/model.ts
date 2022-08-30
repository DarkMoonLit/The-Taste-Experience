import { PersistentUnorderedMap, context, u128 } from "near-sdk-as";

/**
 * Class representing a Recipe
 */
@nearBindgen
export class Recipe {
    id: string;
    name: string;
    owner: string;
    description: string;
    formula: string;
    image: string;
    price: u128;
    sold: u32;
    buyers: Array<string>;
    
    public static fromPayload(payload: Recipe): Recipe {
        const recipe = new Recipe();
        recipe.id = payload.id;
        recipe.name = payload.name;
        recipe.description = payload.description;
        recipe.formula = payload.formula;
        recipe.image = payload.image;
        recipe.price = payload.price;
        recipe.owner = context.sender;
        recipe.buyers = new Array<string>();
        return recipe;
    }
    public buyRecipe(): void {
        this.sold = this.sold + 1;
        this.buyers.push(context.sender);
    }

    public transferOwnership(owner: string): void {
        this.owner = owner;
    }

    public modifyRecipe(formula: string): void {
        this.formula = formula;
    }
}


export const recipesStorage = new PersistentUnorderedMap<string, Recipe>("LISTED_RECIPES");
