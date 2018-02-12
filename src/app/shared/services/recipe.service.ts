import { EventEmitter,Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Recipe } from 'app/recipe/recipe.model';
import { Ingredient } from 'app/shared/ingredient.model';
import { ShoppinglistService } from 'app/shared/services/shoppinglist.service';


@Injectable()
export class RecipeService {
// public recipeSelected = new EventEmitter<Recipe>()
// public ingSelected =new EventEmitter<Ingredient[]>();
   recipeChanges = new Subject<Recipe[]>();
  private recipes : Recipe[] =[
    new Recipe('A Test Recipe',
    'this is simply a test recipe',
    'https://thumb10.shutterstock.com/display_pic_with_logo/1132418/438024283/stock-vector-indian-cuisine-thali-or-traditional-steamed-rice-and-flatbread-served-with-indian-bean-stew-438024283.jpg',
  [ new Ingredient('Tomato', 25), new Ingredient('cucumber', 20)]),
  new Recipe('A Test Recipe 2',
  'this is simply a test recipe 2',
  'https://thumb10.shutterstock.com/display_pic_with_logo/1132418/438024283/stock-vector-indian-cuisine-thali-or-traditional-steamed-rice-and-flatbread-served-with-indian-bean-stew-438024283.jpg',
 [new Ingredient('Chilly', 15), new Ingredient('pepper', 5)])
];

constructor(private sListService: ShoppinglistService) {}

getRecipes() {
  return this.recipes.slice(); // to get the copy of this array
}

getRecipeById(index: number) {
  return this.recipes[index];
}
addIngrs(ings: Ingredient[]) {

  this.sListService.addIngs(ings);
}

addRecipe(recipe: Recipe){
   this.recipes.push(recipe);
   this.recipeChanges.next(this.recipes.slice());
}

updateRecipe(index : number, newRecipe: Recipe){
  this.recipes[index] = newRecipe;
  this.recipeChanges.next(this.recipes.slice());
}

deleteRecipe(index: number){
this.recipes.splice(index, 1);
this.recipeChanges.next(this.recipes.slice());
}

setRecipes(recipes: Recipe[]) {
this.recipes =recipes;
this.recipeChanges.next(this.recipes);
}
}

