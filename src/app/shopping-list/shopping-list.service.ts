import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";

export class ShoppingListService{
    
    // ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Oranges',5),
    ];

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngredientsList()
    {
        //passing a copy of the array
        return this.ingredients.slice();
    }

    addIngredients(ingredients:Ingredient[]){
        
        //ES6 spread operator used
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());

    }

    getIngredient(index:number){
        return this.ingredients[index];
    }

}