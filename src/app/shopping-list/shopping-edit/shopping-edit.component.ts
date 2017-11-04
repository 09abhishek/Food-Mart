import {Component, EventEmitter, OnInit, ViewChild, Output, ElementRef} from '@angular/core';

import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') NameInputRef: ElementRef;
  @ViewChild('amountInput') AmountInputRef: ElementRef;
// @Output() IngredientsAdded = new EventEmitter<{Name: String, amount: number}>();
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientDelete = new EventEmitter<Ingredient>();
  constructor() { }
  ngOnInit() {
  }
  onAddItem()
  {
    const ingName = this.NameInputRef.nativeElement.value;
    const ingAmount = this.AmountInputRef.nativeElement.value;
    console.log(ingName,ingAmount);
    const newIngredient = new Ingredient(ingName,ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
  onDeleteItem() {
    this.ingredientDelete.emit()
  }
}
