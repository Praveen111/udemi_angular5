import { Component, OnInit,EventEmitter,Output,ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { NgForm } from "@angular/forms";
import { ShoppinglistService } from 'app/shared/services/shoppinglist.service'
import { Ingredient } from 'app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
sub : Subscription;
editMode = false;
editedItemIndex: number;
editedItem : Ingredient;
//@Output() onAddItemsEvent = new EventEmitter<Ingredient>();

@ViewChild('f') sListForm :NgForm;
  constructor(private sListservice: ShoppinglistService) { }

  ngOnInit() {
    this.sub = this.sListservice.startEditing.subscribe(
      (index) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem =this.sListservice.getIngredient(this.editedItemIndex);
        this.sListForm.setValue({
            name: this.editedItem.name,
            amount : this.editedItem.amount
        })
      }
    );
  }


  onAddItems(form : NgForm){

console.log(form);
const value = form.value;
const newIng = new Ingredient(value.name, value.amount);
//console.log('new ingredient :', newIng);
if(this.editMode){
this.sListservice.updateIngs(this.editedItemIndex,newIng);
this.editMode = !this.editMode;

} else{
  this.sListservice.addIngredient(newIng);
}

this.sListForm.reset();
}

onClear(){
  this.sListForm.reset();
  this.editMode = false;
}

onDelete(){
this.sListservice.deleteIngs(this.editedItemIndex);
this.onClear();
//console.log('onDelete',this.editedItemIndex)

}

ngOnDestroy(){
this.sub.unsubscribe();
}
}
