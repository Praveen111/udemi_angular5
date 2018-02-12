import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { DataStorageService } from 'app/shared/services/data-storage.service';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'header-comp',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  constructor(private dataStorage: DataStorageService,
              private authService: AuthService,
              private route: Router) {}

  onSave() {
    this.dataStorage.storeRecipes().subscribe((response: Response) => {
      console.log(response);
    });
  }

  onGet() {
    this.dataStorage.getRecipes();
  }

  Onlogout(){
   this.authService.logout();
   this.route.navigate(['/']);
  }
}

