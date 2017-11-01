import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe ('Chicken Briyani', 'Hydrabadi Chicken Briyani', 'https://PriyaTour-Travels.000webhostapp.com/wp-content/uploads/2017/10/chicken-biryani.jpg'),
  new Recipe ('Mutton Briyani', 'Masala Mutton Briyani', 'https://PriyaTour-Travels.000webhostapp.com/wp-content/uploads/2017/10/mutton-biryani.jpg'),
  new Recipe ('Veg Briyani', 'Kashmiri Veg Briyani', 'https://PriyaTour-Travels.000webhostapp.com/wp-content/uploads/2017/10/veg-biryani.jpg'),
  new Recipe ('Pork Briyani', 'Tangy Pork Briyani', 'https://PriyaTour-Travels.000webhostapp.com/wp-content/uploads/2017/10/pork-briyani.jpg'),
  new Recipe ('Fish Briyani', 'Tuna Fish Briyani', 'https://PriyaTour-Travels.000webhostapp.com/wp-content/uploads/2017/10/fish-briyani.jpg'),
];
  constructor() { }

  ngOnInit() {
  }

}
