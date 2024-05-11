import { Garnishes, Mixers, Spirits } from "../static/ingredients"
import { Cocktail } from "./cocktail"

export const COCKTAILS: Cocktail[] = [
  {
    name: "Old Fashioned",
    description:
      "A classic cocktail that never goes out of style. The Old Fashioned is a simple drink that is easy to make and quick to enjoy.",
    ingredients: [
      {
        name: "Bourbon",
        enumLink: Spirits.Bourbon,
        volume: "2 oz",
      },
      {
        name: "Angostura Bitters",
        enumLink: Mixers.AngosturaBitters,
        volume: "4 dashes",
      },
      {
        name: "Demerara Syrup",
        enumLink: Mixers.DemeraraSyrup,
        volume: "0.25 oz",
      },
      {
        name: "Orange Peel",
        enumLink: Garnishes.OrangeWedge,
        volume: "1",
      },
    ],
    img: "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
  },
  {
    name: "Mojito",
    description:
      "A classic Cuban cocktail. The Mojito is a simple drink that is easy to make and quick to enjoy.",
    ingredients: [
      {
        name: "White Rum",
        enumLink: Spirits.RumWhite,
        volume: "2 oz",
      },
      {
        name: "Lime Juice",
        enumLink: Mixers.LimeJuice,
        volume: "0.75 oz",
      },
      {
        name: "Simple Syrup",
        enumLink: Mixers.SimpleSyrup,
        volume: "0.75 oz",
      },
      {
        name: "Mint Leaves",
        enumLink: Garnishes.MintLeaves,
        volume: "6",
      },
      {
        name: "Soda Water",
        enumLink: Mixers.SodaWater,
        volume: "1 oz",
      },
    ],
    img: "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
  },
  {
    name: "Dark 'n' Stormy",
    description:
      "A classic cocktail that never goes out of style. The Dark 'n' Stormy is a simple drink that is easy to make and quick to enjoy.",
    ingredients: [
      {
        name: "Black Rum",
        enumLink: Spirits.RumBlack,
        volume: "2 oz",
      },
      {
        name: "Ginger Beer",
        enumLink: Mixers.GingerBeer,
        volume: "4 oz",
      },
      {
        name: "Lime Wedge",
        enumLink: Garnishes.LimeWedge,
        volume: "1",
      },
    ],
    img: "https://www.thecocktaildb.com/images/media/drink/t1tn0s1504374905.jpg",
  },
  {
    name: "Espresso Martini",
    description:
      "A classic cocktail that never goes out of style. The Espresso Martini is a simple drink that is easy to make and quick to enjoy.",
    ingredients: [
      {
        name: "Vodka",
        enumLink: Spirits.Vodka,
        volume: "1 oz",
      },
      {
        name: "Coffee Liqueur",
        enumLink: Mixers.CoffeeLiqueur,
        volume: "1 oz",
      },
      {
        name: "Espresso",
        enumLink: Mixers.Espresso,
        volume: "1 oz",
      },
      {
        name: "Demerara Syrup",
        enumLink: Mixers.DemeraraSyrup,
        volume: "0.25 oz",
      },
    ],
    img: "https://www.thecocktaildb.com/images/media/drink/n0sx531504372951.jpg",
  },
  {
    name: "Gin Fizz",
    description:
      "A classic cocktail that never goes out of style. The Gin Fizz is a simple drink that is easy to make and quick to enjoy.",
    ingredients: [
      {
        name: "Gin",
        enumLink: Spirits.Gin,
        volume: "2 oz",
      },
      {
        name: "Lemon Juice",
        enumLink: Mixers.LemonJuice,
        volume: "0.75 oz",
      },
      {
        name: "Simple Syrup",
        enumLink: Mixers.SimpleSyrup,
        volume: "0.75 oz",
      },
      {
        name: "Soda Water",
        enumLink: Mixers.SodaWater,
        volume: "1 oz",
      },
    ],
    img: "https://www.thecocktaildb.com/images/media/drink/xhl8q31504351772.jpg",
  },
  {
    name: "Daiquiri",
    description:
      "A classic cocktail that never goes out of style. The Daiquiri is a simple drink that is easy to make and quick to enjoy.",
    ingredients: [
      {
        name: "White Rum",
        enumLink: Spirits.RumWhite,
        volume: "2 oz",
      },
      {
        name: "Lime Juice",
        enumLink: Mixers.LimeJuice,
        volume: "0.75 oz",
      },
      {
        name: "Simple Syrup",
        enumLink: Mixers.SimpleSyrup,
        volume: "0.75 oz",
      },
    ],
    img: "https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg",
  },
  {
    name: "Clover Club",
    description:
      "A classic cocktail that never goes out of style. The Clover Club is a simple drink that is easy to make and quick to enjoy.",
    ingredients: [
      {
        name: "Gin",
        enumLink: Spirits.Gin,
        volume: "1.5 oz",
      },
      {
        name: "Lemon Juice",
        enumLink: Mixers.LemonJuice,
        volume: "0.75 oz",
      },
      {
        name: "Raspberry Syrup",
        enumLink: Mixers.RaspberrySyrup,
        volume: "0.75 oz",
      },
      {
        name: "Aquafaba",
        enumLink: Mixers.Aquafaba,
        volume: "0.75 oz",
      },
      {
        name: "Raspberry",
        enumLink: Garnishes.Raspberry,
        volume: "3",
      },
    ],
    img: "https://www.thecocktaildb.com/images/media/drink/t0aja61504348715.jpg",
  },
  {
    name: "French 75",
    description:
      "A classic cocktail that never goes out of style. The French 75 is a simple drink that is easy to make and quick to enjoy.",
    ingredients: [
      {
        name: "Gin",
        enumLink: Spirits.Gin,
        volume: "1.5 oz",
      },
      {
        name: "Lemon Juice",
        enumLink: Mixers.LemonJuice,
        volume: "0.75 oz",
      },
      {
        name: "Simple Syrup",
        enumLink: Mixers.SimpleSyrup,
        volume: "0.75 oz",
      },
      {
        name: "Champagne",
        enumLink: Mixers.Champagne,
        volume: "2 oz",
      },
    ],
    img: "https://www.thecocktaildb.com/images/media/drink/4qnyty1504368615.jpg",
  },
  {
    name: "Aviation",
    description:
      "A classic cocktail that never goes out of style. The Aviation is a simple drink that is easy to make and quick to enjoy.",
    ingredients: [
      {
        name: "Gin",
        enumLink: Spirits.Gin,
        volume: "2 oz",
      },
      {
        name: "Lemon Juice",
        enumLink: Mixers.LemonJuice,
        volume: "0.75 oz",
      },
      {
        name: "Maraschino Liqueur",
        enumLink: Mixers.MarashinoLiqueur,
        volume: "0.5 oz",
      },
      {
        name: "Creme de Violette",
        enumLink: Mixers.CremeDeViolette,
        volume: "0.25 oz",
      },
    ],
    img: "https://www.thecocktaildb.com/images/media/drink/ruutxt1478253328.jpg",
  },
  {
    name: "A little Thyme off",
    description:
      "A classic cocktail that never goes out of style. The A little Thyme off is a simple drink that is easy to make and quick to enjoy.",
    ingredients: [
      {
        name: "Thyme Syrup",
        enumLink: Mixers.ThymeSyrup,
        volume: "1 oz",
      },
      {
        name: "Lemon Juice",
        enumLink: Mixers.LemonJuice,
        volume: "1 oz",
      },
      {
        name: "Ginger Beer",
        enumLink: Mixers.GingerBeer,
        volume: "2 oz",
      },
      {
        name: "Thyme",
        enumLink: Garnishes.Thyme,
        volume: "1",
      },
    ],
    isAlcoholfree: true,
    img: "https://www.thecocktaildb.com/images/media/drink/pbw4e51606766578.jpg",
  },
  {
    name: "Mockito",
    description:
      "A classic cocktail that never goes out of style. The Mockito is a simple drink that is easy to make and quick to enjoy.",
    ingredients: [
      {
        name: "Mint Leaves",
        enumLink: Garnishes.MintLeaves,
        volume: "6",
      },
      {
        name: "Lime Juice",
        enumLink: Mixers.LimeJuice,
        volume: "0.75 oz",
      },
      {
        name: "Simple Syrup",
        enumLink: Mixers.SimpleSyrup,
        volume: "0.75 oz",
      },
      {
        name: "Soda Water",
        enumLink: Mixers.SodaWater,
        volume: "1 oz",
      },
    ],
    isAlcoholfree: true,
    img: "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
  },
  {
    name: "Mint Julep",
    description:
      "A classic cocktail that never goes out of style. The Mint Julep is a simple drink that is easy to make and quick to enjoy.",
    ingredients: [
      {
        name: "Bourbon",
        enumLink: Spirits.Bourbon,
        volume: "2 oz",
      },
      {
        name: "Demerara Syrup",
        enumLink: Mixers.DemeraraSyrup,
        volume: "0.5 oz",
      },
      {
        name: "Mint Leaves",
        enumLink: Garnishes.MintLeaves,
        volume: "4",
      },
    ],
    img: "https://www.thecocktaildb.com/images/media/drink/squyyq1439907312.jpg",
  },
]
