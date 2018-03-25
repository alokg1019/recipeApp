import { Component, OnInit, ViewChild,ElementRef,Output,EventEmitter, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/Forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  //To access the reference elements
  // @ViewChild('nameRef') nameInputRef: ElementRef;
  // @ViewChild('numberRef') numberInputRef: ElementRef;
  
  //Event emitter
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  subscriptions : Subscription;
  editMode = false;
  editedItemIndex : number;
  editedItem :Ingredient; 


  @ViewChild('f') editForm: NgForm

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.subscriptions = this.shoppingListService.startedEditing.subscribe(
      (index:number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.editForm.setValue(
          {
            name: this.editedItem.name,
            amount : this.editedItem.amount
          }
        )
      }
    );
  }

  onAddItem(form:NgForm){

    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.numberInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);

    if(this.editMode)
    {
      this.shoppingListService.updateIngredient(this.editedItemIndex,newIngredient);
    }
    else
    {
      this.shoppingListService.addIngredient(newIngredient);
    }


    // this.ingredientAdded.emit(ingredient);
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }

}
