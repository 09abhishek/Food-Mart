import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // Injecting the services so that the child components would follow the same instance of recipe services.
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
selectedRecipe: Recipe;

  // Injecting to provide the same instance of recipe services.
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        //ES6 arrow function {arguments list} => {Body}
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
        );
  }

}
