import { Ingredient } from 'app/shared/ingredient.model';

export class Recipe {
  public name: string;
  public details: string;
  public imagePath: string;
  public ingredients: Ingredient [];

  constructor(name: string, desc: string, iPath: string , ingredients: Ingredient []) {

    this.name = name;
    this.details = desc;
    this.imagePath = iPath;
    this.ingredients = ingredients;
  }
}

