import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Ingredient } from 'app/shared/ingredient.model';
import { RecipeService } from 'app/shared/services/recipe.service';

@Injectable()
export class ShoppinglistService {
  public onAddItemsChanged = new Subject<Ingredient []>();
   startEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 8)
    ];


    addIngredient(obj: Ingredient) {
      console.log('My ing :',obj);
      this.ingredients.push(obj);
      this.onAddItemsChanged.next(this.ingredients.slice());
    }

getAll(){
  return this.ingredients.slice();
}

getIngredient(index){
return this.ingredients[index];
}

addIngs(ings: Ingredient[]){
console.log('inside addIngs:', ings);
this.ingredients.push(...ings);

this.onAddItemsChanged.next(this.ingredients);
}

updateIngs( index, ing: Ingredient){
this.ingredients[index]= ing;
this.onAddItemsChanged.next(this.ingredients.slice());
}

deleteIngs(index : number){
this.ingredients.splice(index,1);
this.onAddItemsChanged.next(this.ingredients.slice());
}


}
