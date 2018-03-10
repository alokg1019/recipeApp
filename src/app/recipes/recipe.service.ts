import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService{
    
    recipeSelected = new EventEmitter<Recipe>();

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
}