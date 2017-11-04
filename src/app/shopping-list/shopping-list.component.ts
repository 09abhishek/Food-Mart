import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient [] = [
  new Ingredient('Chicken Pieces ' , 10),
  new Ingredient('Tomato' , 2),
];
  constructor() { }

  ngOnInit() {
  }
  onIngredientAdded(ingredient: Ingredient) {
    console.log('in shoppping list :' + ingredient);
    this.ingredients.push(ingredient);
  }
  // onIngredeientDelete()
  // console.log('In delete Ingredient');
  // this.ingredients.pull();
}
