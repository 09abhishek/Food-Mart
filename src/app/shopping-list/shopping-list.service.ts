import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  ingredientsChanged =new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient [] = [
    new Ingredient('Chicken Pieces ' , 10),
    new Ingredient('Tomato' , 2),
  ];

 getIngredients() {
   return this.ingredients.slice();
 }
 addIngredients(ingredient: Ingredient) {
   this.ingredients.push(ingredient);
   this.ingredientsChanged.emit(this.ingredients.slice());
 }
}

