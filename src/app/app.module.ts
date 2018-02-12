import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; // introduced angular 4 onwards

import { ShoppinlistModule } from './shopping-list/shopping-list.module';
import { RecipesModule } from 'app/recipe/recipes.module';
import { AppRoutingModule } from 'app/routes/app-router.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from 'app/auth/auth.module';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';


@NgModule({
   declarations: [
       AppComponent,
               ],
     imports: [
       CommonModule,
       BrowserModule,
       FormsModule,
       HttpModule,
       ReactiveFormsModule,
       AppRoutingModule,
       RecipesModule,
       SharedModule,
       ShoppinlistModule,
       AuthModule,
       CoreModule
     ],
     schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
     bootstrap: [AppComponent]

})
export class AppModule { }
