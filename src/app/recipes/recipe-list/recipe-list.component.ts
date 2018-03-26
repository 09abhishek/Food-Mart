import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[];

// INJECTING RECIPE SERVICES NO NEED TO ADD PROVIDERS CAUSE WE HAVE ALREADY INCLUDED IN THE PARENT COMPONENT
    constructor(private recipeService: RecipeService,
                private router: Router,
                private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes()

    }

    onNewRecipe() {
        // adding relative route '/new' because we are on the recipe list
        // component so ... recipes/new will be new route
         this.router.navigate(['new'], {relativeTo: this.route})
    }
}
