import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingEdit') slform : NgForm;
  subscription : Subscription;
  editMode= false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private shoppingListService : ShoppingListService) {

  }
  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
    .subscribe(
      (index: number)=>{
        this.editedItemIndex= index;
        this.editMode=true;
        this.editedItem= this.shoppingListService.getIngredient(index);
        this.slform.setValue({name: this.editedItem.name, amount: this.editedItem.amount});
      }
    );
  }
  onAddItem(form : NgForm){
    const value= form.value;
    const newIngredint = new Ingredient(value.name, value.amount);
    if (this.editMode == false){
      this.shoppingListService.addIngredient(newIngredint);
    }
    else {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredint);
    }
    this.editMode=false;
    form.reset();
  }
  onClear(){
    this.slform.reset();
    this.editMode=false;
  }
  onDelete(){
    this.onClear();
    this.shoppingListService.onDeleteItem(this.editedItemIndex);
  }
  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
