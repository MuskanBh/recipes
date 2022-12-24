import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected= new EventEmitter<Recipe>();
  private recipes: Recipe[]=[
    new Recipe('A Sample Recipe', 'This is a description', 'https://www.vadigran.com/media/website_image_4by3_2400/assets/c15e4176-7404-11ea-83f7-00505697ce7a/5411468121360.jpeg', [
      new Ingredient('Banana', 10)
    ]),
    new Recipe('A Sample Recipe 2', 'This is a description', 'https://www.vadigran.com/media/website_image_4by3_2400/assets/c15e4176-7404-11ea-83f7-00505697ce7a/5411468121360.jpeg', [
      new Ingredient('Potato', 20)
    ])];

  getRecipes(){
    return this.recipes.slice();
  }
  constructor(private shoppingListService: ShoppingListService) { }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);

  }
}
