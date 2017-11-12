import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {

 public recipeSelected = new EventEmitter<Recipe>();
  private recipe: Recipe[] = [
    new Recipe ('Chicken Briyani', 'Hydrabadi Chicken Briyani', 'https://PriyaTour-Travels.000webhostapp.com/wp-content/uploads/2017/10/chicken-biryani.jpg'),
    new Recipe ('Mutton Briyani', 'Masala Mutton Briyani', 'https://PriyaTour-Travels.000webhostapp.com/wp-content/uploads/2017/10/mutton-biryani.jpg'),
    new Recipe ('Veg Briyani', 'Kashmiri Veg Briyani', 'https://PriyaTour-Travels.000webhostapp.com/wp-content/uploads/2017/10/veg-biryani.jpg'),
    new Recipe ('Pork Briyani', 'Tangy Pork Briyani', 'https://PriyaTour-Travels.000webhostapp.com/wp-content/uploads/2017/10/pork-briyani.jpg'),
    new Recipe ('Fish Briyani', 'Tuna Fish Briyani', 'https://PriyaTour-Travels.000webhostapp.com/wp-content/uploads/2017/11/fish-briyani.jpg'),
  ];

  getRecipe() {
    return this.recipe.slice();
  }

}
