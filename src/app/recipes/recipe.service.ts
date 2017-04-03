import { Recipe } from './recipe.model';

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This a simple test', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
        new Recipe('A another recipe', 'This a simple test', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg')
  ];  

  getRecipes() {
      return this.recipes.slice();
  }
}