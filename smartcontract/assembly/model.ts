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
    totalAmount: u128;
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
        recipe.sold = 0;
        recipe.totalAmount = u128.from(0);

        return recipe;
    }
    public buyRecipe(): void {
        this.sold = this.sold + 1;
        this.buyers.push(context.sender);
        this.totalAmount = u128.add(this.price, this.totalAmount);
    }

    public transferOwnership(owner: string): void {
        this.owner = owner;
    }

    public modifyRecipe(formula: string): void {
        this.formula = formula;
    }

    public changePrice(newPrice: u128): void {
        this.price = newPrice;
    }
}


export const recipesStorage = new PersistentUnorderedMap<string, Recipe>("LISTED_RECIPES");

export const ownedRecipesStorage = new PersistentUnorderedMap<string, string[]>("OWNED_RECIPES");

export const boughtRecipesStorage = new PersistentUnorderedMap<string, string[]>("BOUGHT_RECIPES");

