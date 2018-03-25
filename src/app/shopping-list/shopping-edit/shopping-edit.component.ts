import { Component, OnInit, ViewChild,ElementRef,Output,EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/Forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  //To access the reference elements
  // @ViewChild('nameRef') nameInputRef: ElementRef;
  // @ViewChild('numberRef') numberInputRef: ElementRef;
  
  //Event emitter
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(form:NgForm){

    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.numberInputRef.nativeElement.value;
    const value = form.value;
    const ingredient = new Ingredient(value.name,value.amount);

    this.shoppingListService.addIngredient(ingredient);
    // this.ingredientAdded.emit(ingredient);
  }

}
