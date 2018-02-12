import { PreloadAllModules } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../auth/auth-guard.service';
import { RecipeComponent } from '../recipe/recipe.component';
import { RecipeStartComponent } from '../recipe/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from '../recipe/recipe-details/recipe-details.component';
import { RecipeEditComponent } from '../recipe/recipe-edit/recipe-edit.component';
import { HomeComponent } from '../core/home/home.component';
 import { SignUpComponent } from 'app/auth/sign-up/sign-up.component';
 import { SignInComponent } from 'app/auth/sign-in/sign-in.component';

const appRoutes: Routes = [
//  { path: '', redirectTo: '/recipes', pathMatch: 'full'},

{ path: '', component: HomeComponent},
{ path: 'signup', component: SignUpComponent},
 { path: 'login', component: SignInComponent},
{ path: 'recipes', loadChildren: '../recipe/recipes.module#RecipesModule'},
{ path: 'shopping-list', loadChildren: '../shopping-list/shopping-list.module#ShoppinlistModule'}

];

@NgModule({
imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
exports: [RouterModule]
})
export class AppRoutingModule {

}
