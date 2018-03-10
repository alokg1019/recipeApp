import { Recipe } from "./recipe.model";

export class RecipeService{
    
    private recipes: Recipe[] = [
        new Recipe('Rolls','Recipe for roll','http://assets.kraftfoods.com/recipe_images/opendeploy/52512_640x428.jpg'),
        new Recipe('Pizza Recipe','Recipe for pizza','https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg')   
      ];

      getRecipes()
      {
          return this.recipes.slice();
      }
}