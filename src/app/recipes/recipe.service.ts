import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService{
    
    // recipeSelected = new EventEmitter<Recipe>();

    recipeChanged = new Subject<Recipe[]>();

    constructor(private shoppingListService:ShoppingListService){}

    private recipes: Recipe[] = [
        new Recipe('Rolls',
        'Recipe for roll','http://assets.kraftfoods.com/recipe_images/opendeploy/52512_640x428.jpg',
        [
            new Ingredient('Potato', 4),
            new Ingredient('Dough', 1)
        ]),
        new Recipe('Pizza Recipe','Recipe for pizza','https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg',
        [
            new Ingredient('Pizza Dough',1),
            new Ingredient('Cheese', 1)
        ])   
      ];

      getRecipes()
      {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
            this.shoppingListService.addIngredients(ingredients);
      }

      getrecipe(index:number){
        return this.recipes[index];
      }

      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }

      updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
      }

}