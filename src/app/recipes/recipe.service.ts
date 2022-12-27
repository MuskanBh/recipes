import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected= new Subject<Recipe>();
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[]=[
    new Recipe('A Sample Recipe', 'This is a description', 'https://www.vadigran.com/media/website_image_4by3_2400/assets/c15e4176-7404-11ea-83f7-00505697ce7a/5411468121360.jpeg', [
      new Ingredient('Banana', 10)
    ]),
    new Recipe('A Sample Recipe 2', 'This is a description', 'https://www.vadigran.com/media/website_image_4by3_2400/assets/c15e4176-7404-11ea-83f7-00505697ce7a/5411468121360.jpeg', [
      new Ingredient('Potato', 20)
    ])];

  setRecipes(recipes :Recipe[]){
    this.recipes=recipes;
  }
  getRecipes(){
    return this.recipes.slice();
  }
  getRecipe(index: number){
    return this.recipes[index];
  }
  constructor(private shoppingListService: ShoppingListService) { }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);

  }
  deleteRecipe(index: number){
    this.recipes.splice(index,1);
    this.recipeChanged.next(this.recipes.slice());
  }
  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index]= newRecipe;
    this.recipeChanged.next(this.recipes.slice());

  }
}
