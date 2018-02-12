import { NgModule } from '@angular/core';
import { HeaderComponent } from './Header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../routes/app-router.module';
import { ShoppinglistService } from '../shared/services/shoppinglist.service';
import { RecipeService } from '../shared/services/recipe.service';
import { DataStorageService } from '../shared/services/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth-guard.service';


@NgModule({
declarations: [ HeaderComponent, HomeComponent],
imports: [ SharedModule, AppRoutingModule],
providers: [
  ShoppinglistService,
  RecipeService,
  DataStorageService,
  AuthService,
  AuthGuard
],
exports: [AppRoutingModule, HeaderComponent]
})

export class CoreModule {}
