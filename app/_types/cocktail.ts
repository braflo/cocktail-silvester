import { Garnishes, Mixers, Spirits } from "../static/ingredients"

export interface Ingredient {
  name: string
  enumLink: Spirits | Mixers | Garnishes
  volume: string
}

export interface Cocktail {
  name: string
  description: string
  ingredients: Ingredient[]
  img: string
  isAlcoholfree?: boolean
}
