import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { RecipeService } from '../../../app/shared/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
recipe: Recipe;
id: number;
  constructor(private recipeService: RecipeService,
             private route: ActivatedRoute,
             private router: Router ) { }

  ngOnInit() {
    //this.sListService.addIngs(this.recipe.ingredients);
this.route.params.subscribe((params : Params) => {
this.id = +params['id'];
this.recipe = this.recipeService.getRecipeById(this.id);
});
  }

  sendToShList(){
   console.log('ings :', this.recipe.ingredients);
   this.recipeService.addIngrs(this.recipe.ingredients)
  }

  onEditRecipe(){
   this.router.navigate(['edit'], {relativeTo: this.route })
  }

  onDeleteRecipe(){
this.recipeService.deleteRecipe(this.id);
this.router.navigate(['/recipes']);
  }

}
