import {Ingredient} from "../shared/ingredient.model";

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];


  constructor(name: string, desc: string, imagepath: string, ingredients: Ingredient[] ) {
  this.name = name;
  this.description = desc;
  this.imagePath = imagepath;
  this.ingredients = ingredients;
}
}
