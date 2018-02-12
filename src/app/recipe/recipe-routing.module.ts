import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../auth/auth-guard.service';
import { RecipeComponent } from '../recipe/recipe.component';
import { RecipeStartComponent } from '../recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from '../recipe/recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from '../recipe/recipe-details/recipe-details.component';


const recipeRoutes: Routes = [
  { path: '', component: RecipeComponent, children : [
    { path: '' , component: RecipeStartComponent},
    { path: 'new', component: RecipeEditComponent, canActivate:[AuthGuard]},
    { path: ':id', component: RecipeDetailsComponent},
    { path: ':id/edit', component: RecipeEditComponent, canActivate:[AuthGuard]}
 ] },
];

@NgModule({
imports: [RouterModule.forChild(recipeRoutes)],
exports: [RouterModule]
})
export class RecipeRoutingModule {

}
