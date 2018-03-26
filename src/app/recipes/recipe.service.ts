import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';


@Injectable()

export class RecipeService {


  private recipes: Recipe[] = [
    new Recipe (
      'Chicken Briyani',
      'Hydrabadi Chicken Briyani',
      'https://PriyaTour-Travels.000webhostapp.com/wp-content/uploads/2017/10/chicken-biryani.jpg',
      [
        new Ingredient('Tender Chicken pieces', 10),
        new Ingredient('Basmati Rice', 1/2),
        new Ingredient('Cashew', 10),
        new Ingredient('Garam Masala', 1)
      ]),
    new Recipe (
      'Mutton Briyani',
      'Masala Mutton Briyani',
      'https://PriyaTour-Travels.000webhostapp.com/wp-content/uploads/2017/10/mutton-biryani.jpg',
      [
        new Ingredient('Tender Mutton pieces', 10),
        new Ingredient('Basmati Rice', 1/2),
        new Ingredient('Cashew', 10),
        new Ingredient('Garam Masala', 1)
      ]),
    new Recipe (
      'Veg Briyani',
      'Kashmiri Veg Briyani',
      'https://PriyaTour-Travels.000webhostapp.com/wp-content/uploads/2017/10/veg-biryani.jpg',
      [
        new Ingredient('Cauliflower', 0.2),
        new Ingredient('Carrot', 2),
        new Ingredient('Peas', 10),
        new Ingredient('Tomato', 1),
        new Ingredient('Basmati Rice', 1/2),
        new Ingredient('Cashew', 10),
        new Ingredient('Garam Masala', 1)
      ]),
    new Recipe (
      'Pork Briyani',
      'Tangy Pork Briyani',
      'https://PriyaTour-Travels.000webhostapp.com/wp-content/uploads/2017/10/pork-briyani.jpg',
      [
        new Ingredient('Tender Pork pieces', 10),
        new Ingredient('Basmati Rice', 1/2),
        new Ingredient('Cashew', 10),
        new Ingredient('Garam Masala', 1)
      ]),
    new Recipe (
      'Fish Briyani',
      'Tuna Fish Briyani',
      'https://PriyaTour-Travels.000webhostapp.com/wp-content/uploads/2017/11/fish-briyani.jpg',
      [
        new Ingredient('Tender Tuna Fish pieces', 10),
        new Ingredient('Basmati Rice', 1/2),
        new Ingredient('Cashew', 10),
        new Ingredient('Garam Masala', 1)
      ]),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number){
      return this.recipes[index];
  }
}
