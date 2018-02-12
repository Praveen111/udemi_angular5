import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { HttpClient } from '@angular/common/http';
import { Recipe } from 'app/recipe/recipe.model';
import { RecipeService } from '../services/recipe.service';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/map';
import { AuthService } from 'app/auth/auth.service';
@Injectable()

export class DataStorageService {

constructor(private http: Http,
            private recipeService: RecipeService,
            private authService : AuthService){}


storeRecipes(){
  const token = this.authService.getToken();
 return this.http.put('https://ng-recipe-book-d5584.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
}

getRecipes(){

  const token = this.authService.getToken();

return this.http.get('https://ng-recipe-book-d5584.firebaseio.com/recipes.json?auth=' + token)
// .map((response : Response) => {
//   //const recipes: Recipe[] = response.json();
//   console.log('inside subscribe', response);
//   for(let recipe of response){
//      if(!recipe['ingredients']){
//         recipe['ingredients'] = [];
//      }
//   }

//   return recipes;
//    //this.recipeService.setRecipes(recipes);
// })
.subscribe((response: Response) => {
    const recipes1: Recipe[] = response.json();
   console.log('inside subscribe', recipes1);
    this.recipeService.setRecipes(recipes1);
  });


}

}
