import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn:'root'
})

export class DataStorageService{

  constructor(private http: HttpClient, private recipeService: RecipeService){

  }
  storeRecipes(){
    // const httpOptions ={
    //   headers: new HttpHeaders({
    //     'Accesss-Control-Allow-Origin':'*'}
    //   )
    // };
    const recipes = this.recipeService.getRecipes();
    console.log(recipes);
    this.http.put('https://recipe-book-9f92f-default-rtdb.firebaseio.com//recipes.json', recipes).subscribe(response => {
      console.log(response);
    });
  }
  fetchRecipes(){
    return this.http.get('https://recipe-book-9f92f-default-rtdb.firebaseio.com/recipes.json').subscribe(recipes => {
      console.log(recipes);
    });
  }
}
