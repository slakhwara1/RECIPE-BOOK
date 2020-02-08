import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe' ,
     'This is simply a test' ,
     'https://images-gmi-pmc.edge-generalmills.com/63b528dc-8beb-4289-96e3-6d8bef0a898d.jpg',
     [
       new Ingredient('Meat', 1),
       new Ingredient('French Fries' , 20)
     ]),
     new Recipe('Another Test Recipe' ,
       'This is simply another test' ,
     'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2018/09/dessert-main-image-molten-cake.jpg',
     [
       new Ingredient('Buns' , 2),
       new Ingredient('Meat' , 1)
     ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  constructor(private slService: ShoppingListService) { }
}
