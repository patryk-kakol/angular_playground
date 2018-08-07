import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Pinapples', 2),
    new Ingredient('Bananas', 5),
    new Ingredient('Chockolate cookies', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
