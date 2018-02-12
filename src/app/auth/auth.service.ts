import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


@Injectable()
export class AuthService {

  token = '';

  constructor(private router: Router) {}
  signUp(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => {
          console.log(error);
        }
      );
  }

  signIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getToken().then(
            (token1) => {
              this.token = token1;
            });
        }
      )
      .catch(
        error => {
          console.log(error);
        }
      );

  }

  getToken() {

    firebase.auth().currentUser.getToken().then(
      (token1) => {
        this.token = token1;
      });
    return this.token;
  }

  logout() {

    firebase.auth().signOut();
    this.token = '';
    this.router.navigate(['/login']);
  }

  isAuthenticated() {

    if(this.token ===  '') {
          return false;
    } else {
         return true;
    }
    // return this.token != null;
  }
}

