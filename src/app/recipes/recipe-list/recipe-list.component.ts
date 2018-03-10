import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Rolls','Recipe for roll','http://assets.kraftfoods.com/recipe_images/opendeploy/52512_640x428.jpg'),
    new Recipe('Pizza Recipe','Recipe for pizza','https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg')

  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();


  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe)
  {
      this.recipeWasSelected.emit(recipe);
  }

}
