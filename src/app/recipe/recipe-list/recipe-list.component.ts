import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../shared/services/recipe.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscriber } from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
@Output() onNewRecipeClick = new EventEmitter<Recipe>();
sub = new Subscription();
recipes : Recipe[];
    constructor(private recipeService: RecipeService,
                private router: Router,
                private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.recipeService.recipeChanges.subscribe((recipes) => {
      this.recipes = recipes;
          });
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeSelected(rObj : Recipe){
  // console.log('hitting recipeWasselected',rObj);
  //    this.recipeWasselected.emit(rObj);
  // }

  onNewRecipe(){
   this.router.navigate(['new'], { relativeTo : this.route})
  }

 ngOnDestroy(){
   this.sub.unsubscribe();
 }
}
