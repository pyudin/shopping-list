import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'Testing recipe ',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [new Ingredient('bread', 2), new Ingredient('meat', 2)]
    ),
    new Recipe(
      'The second recipe',
      'Second testing recipe ',
      'https://static.onecms.io/wp-content/uploads/sites/19/2004/04/26/sea-bass-ck-630002-x.jpg',
      [new Ingredient('potato', 2), new Ingredient('fish', 1)]
    ),
  ];
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
