import { Garnishes, Mixers, Spirits } from "../static/ingredients";

export type CocktailIngredient = Spirits | Mixers;

export interface Ingredient {
  name: CocktailIngredient | Garnishes
  volume: string
}

export interface Cocktail {
  name: string
  description: string
  ingredients: Ingredient[]
  img: string
  isAlcoholfree?: boolean
}
