import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
//@Output() recipeSelected = new EventEmitter<void>();
@Input() recipe : Recipe;
@Input() index : number;
  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
  }

//   onItemClick(){
//     console.log('onItemClick()' + this.recipe);
//     //this.recipeSelected.emit();
// this.recipeService.recipeSelected.emit(this.recipe);
//   }

}
