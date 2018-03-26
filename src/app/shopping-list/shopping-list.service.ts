import {Ingredient} from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient [] = [
    new Ingredient('Chicken Pieces ' , 10),
    new Ingredient('Tomato' , 2),
  ];

 getIngredients() {
   return this.ingredients.slice();
 }

    getIngredient(index: number){
     return this.ingredients[index];
    }
    addIngredient(ingredient: Ingredient) {
   this.ingredients.push(ingredient);
   this.ingredientsChanged.next(this.ingredients.slice());
 }
 addIngredients(ingredients: Ingredient[]) {
   // for(let ingredient of ingredients){
   //   this.addIngredients(ingredient);
   // }
this.ingredients.push(...ingredients);
this.ingredientsChanged.next(this.ingredients.slice());
 }
}

