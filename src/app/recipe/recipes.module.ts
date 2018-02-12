import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from '../recipe/recipe-routing.module';
import { RecipeComponent } from '../recipe/recipe.component';
import { RecipeStartComponent } from '../recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from '../recipe/recipe-edit/recipe-edit.component';
import { RecipeListComponent } from '../recipe/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from '../recipe/recipe-details/recipe-details.component';
import { RecipeItemComponent } from '../recipe/recipe-list/recipe-item/recipe-item.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
declarations: [RecipeComponent,
          RecipeStartComponent,
          RecipeEditComponent,
          RecipeListComponent,
          RecipeDetailsComponent,
          RecipeItemComponent
          ],
imports: [CommonModule, ReactiveFormsModule, RecipeRoutingModule, SharedModule]
})
export class RecipesModule {

}
