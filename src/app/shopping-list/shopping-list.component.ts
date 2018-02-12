import { Component, OnInit,Output,EventEmitter,OnChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { ShoppinglistService } from '../../app/shared/services/shoppinglist.service'
import { Ingredient } from '../shared/ingredient.model';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
//@Output() onNewIngredient = new EventEmitter<Ingredient>();
private subscription: Subscription;
ingredients: Ingredient[];
  constructor(private sListService: ShoppinglistService) { }

  ngOnInit() {

    this.ingredients = this.sListService.getAll();
    this.subscription = this.sListService.onAddItemsChanged.subscribe((res)=> {
      this.ingredients = res;
    });

  }

  onEditItems(i){
   console.log('index', i);
   this.sListService.startEditing.next(i);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
