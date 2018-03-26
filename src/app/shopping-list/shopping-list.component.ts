import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from "./shopping-list.service";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

    private subscription: Subscription;
    ingredients: Ingredient[];

    constructor(private slService: ShoppingListService) {
    }

    ngOnInit() {
        this.ingredients = this.slService.getIngredients();

        this.subscription = this.slService.ingredientsChanged
            .subscribe((ingredients: Ingredient[]) => {
                    this.ingredients = ingredients;
                }
            );
    }

    onEditItem(index: number) {
        // next is equivalent to emit as emittting to the listeners.
        this.slService.startedEditing.next(index);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
