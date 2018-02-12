import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthRoutesModule} from './auth-route.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
declarations: [SignInComponent,SignUpComponent],
imports: [FormsModule, AuthRoutesModule]
})
export class AuthModule {

}
