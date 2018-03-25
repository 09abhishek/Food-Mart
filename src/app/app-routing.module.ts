import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes =[
    // giving no path to redirect to the recipe.
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', component: RecipesComponent,
        children: {
     { path: '', redirectTo: '/recipes', pathMatch: 'full'}
    }},
    { path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule],

})
export class AppRoutingModule{



}