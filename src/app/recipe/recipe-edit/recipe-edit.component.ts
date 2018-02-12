import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validator, Validators } from '@angular/forms';
import { RecipeService } from 'app/shared/services/recipe.service';
import { ShoppinglistService } from 'app/shared/services/shoppinglist.service';
import { Recipe } from 'app/recipe/recipe.model';



@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id: number;
editMode= false;
recipeForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipeService: RecipeService,
              private sListService: ShoppinglistService) { }

  ngOnInit() {
    this.route.params.subscribe((params : Params) => {
      this.id = params['id'];
     this.editMode = params['id'] != null;
      console.log(this.editMode);
      this.initForm();
    });

  }

onCancel() {

  this.router.navigate(['../'], {relativeTo: this.route});
}

  private initForm() {

    let recipeName = '';
    let rImagePath = '';
    let rDescription = '';
    let recipeIngridients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      rImagePath = recipe.imagePath;
      rDescription = recipe.details;

if(recipe['ingredients']){
for(let ing of recipe.ingredients){
     recipeIngridients.push(new FormGroup({
       'name': new FormControl(ing.name),
        'amount': new FormControl(ing.amount)
     }));

}
}
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(rImagePath, Validators.required),
      'description': new FormControl(rDescription, Validators.required),
      'ingredients': recipeIngridients
    });
  }

  onSubmit() {

const newRecipe = new Recipe(this.recipeForm.value['name'],
                             this.recipeForm.value['description'],
                             this.recipeForm.value['imagePath'],
                             this.recipeForm.value['ingredients']);
   if(this.editMode){
this.recipeService.updateRecipe(this.id, newRecipe)
   } else{
this.recipeService.addRecipe(newRecipe);
   }
this.onCancel();
  }

  onAddRecipe() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null,[Validators.required,
      Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));
  }

  onDeleteIng(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }


}
