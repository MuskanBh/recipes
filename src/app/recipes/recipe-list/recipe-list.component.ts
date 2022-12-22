import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[]=[
    new Recipe('A Sample Recipe', 'This is a description', 'https://www.vadigran.com/media/website_image_4by3_2400/assets/c15e4176-7404-11ea-83f7-00505697ce7a/5411468121360.jpeg'),
    new Recipe('A Sample Recipe', 'This is a description', 'https://www.vadigran.com/media/website_image_4by3_2400/assets/c15e4176-7404-11ea-83f7-00505697ce7a/5411468121360.jpeg') ];

  constructor(){

  }

  ngOnInit(){

  }

}
