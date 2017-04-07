import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe(
			'Tasty Schnitzel', 
			'A super-tasty Schnitzel - just awesome!', 
			'http://givememora.com/wp-content/uploads/2014/03/shnitzel.jpg', 
			[
				new Ingredient('Meat',1),
				new Ingredient('French Fires', 20),
			]),
		new Recipe(
			'Big Fat Burger', 
			'What else you need say?', 
			'http://www.fatburgercanada.com/wp-content/uploads/2015/07/fatburger_0001_DoubleFatCheese-541x633.png',
			[
				new Ingredient('Buns', 2),
				new Ingredient('Meat', 1)
			])
	];  

	constructor(private slService: ShoppingListService) {}

	getRecipes() {
		return this.recipes.slice();
	}

	getRecipe(index: number) {
		return this.recipes[index];
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}

}