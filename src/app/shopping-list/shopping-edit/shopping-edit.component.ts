import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') NameInputRef: ElementRef;
  @ViewChild('amountInput') AmountInputRef: ElementRef;


  constructor(private slService: ShoppingListService) { }
  ngOnInit() {
  }
  onAddItem()
  {
    const ingName = this.NameInputRef.nativeElement.value;
    const ingAmount = this.AmountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    this.slService.addIngredient(newIngredient);
  }

}
