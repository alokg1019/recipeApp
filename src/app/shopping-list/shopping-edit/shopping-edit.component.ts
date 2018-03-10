import { Component, OnInit, ViewChild,ElementRef,Output,EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  //To access the reference elements
  @ViewChild('nameRef') nameInputRef: ElementRef;
  @ViewChild('numberRef') numberInputRef: ElementRef;
  
  //Event emitter
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.numberInputRef.nativeElement.value;
    const ingredient = new Ingredient(ingName,ingAmount);
    this.ingredientAdded.emit(ingredient);
  }

}
