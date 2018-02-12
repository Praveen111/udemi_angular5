import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private auth_service: AuthService) { }

  ngOnInit() {
  }

  onFormSubmit(form: NgForm) {
  const email = form.value.email;
  const password = form.value.password;
   console.log(email + password);
    this.auth_service.signUp(email,password);
  }

}
