import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, FormArray, Validators } from '@angular/Forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { relative } from 'path';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number;
  editMode = false;
  recipeForm : FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService,
    private router:Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  private initForm(){

    const recipe = this.recipeService.getrecipe(this.id);
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);
    if(this.editMode)
    {
        recipeName = recipe.name;
        recipeDescription = recipe.description;
        recipeImagePath = recipe.imagePath;

        if(recipe.ingredients){

          for(let ingredient of recipe.ingredients){
            recipeIngredients.push(new FormGroup({
              'name' : new FormControl(ingredient.name,Validators.required),
              'amount' : new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[0-9]+[0-9]*$/)])
            }));
          }

        }

        
    }

    this.recipeForm = new FormGroup(
      {
        'name': new FormControl(recipeName,Validators.required),
        'imagePath': new FormControl(recipeImagePath,Validators.required),
        'description': new FormControl(recipeDescription, Validators.required),
        'ingredients': recipeIngredients

      });
  }

  onSubmit(){
    console.log(this.recipeForm);
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']
    // );
    if(this.editMode){
      // this.recipeService.updateRecipe(this.id,newRecipe);

      //this can be used since the form follows the structure expected by the service method.
      // or  we can create a recipe object ( as shown in the commented portion and pass that)
      this.recipeService.updateRecipe(this.id,this.recipeForm.value);
    }
    else{
      this.recipeService.addRecipe(this.recipeForm.value);
    }

      this.onCancel();

  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
      'amount': new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]+[0-9]*$/)])
      })
    )
  }

  onCancel(){
      this.router.navigate(['../'],{relativeTo: this.route});
  }

}