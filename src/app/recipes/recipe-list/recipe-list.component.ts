import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'Testing recipe ',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new Recipe(
      'The second recipe',
      'Second testing recipe ',
      'https://static.onecms.io/wp-content/uploads/sites/19/2004/04/26/sea-bass-ck-630002-x.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
