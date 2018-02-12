import { Router,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Routes } from '@angular/router/src/config';

const authRoutes: Routes = [
  { path: 'signup', component: SignUpComponent},
  { path: 'login', component: SignInComponent}
];

@NgModule({

imports:[RouterModule.forChild(authRoutes)],
exports: [RouterModule]
})

export class AuthRoutesModule {}
