import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients: Ingredient[];
  private subscription : Subscription;
  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    console.log(this.ingredients);
  }
  constructor(private shoppingListService : ShoppingListService){

  }
  ngOnInit(){
    this.ingredients= this.shoppingListService.getIngredients();
    this.subscription= this.shoppingListService.ingredientsChanged
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients=ingredients
      }
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onEditItem(index:number){
    this.shoppingListService.startedEditing.next(index);
  }
}
