import { Garnishes, Mixers, Spirits } from "../static/ingredients"
import { Cocktail } from "./cocktail"

export const COCKTAILS: Cocktail[] = [
  {
    name: "Old Fashioned",
    slug: "old-fashioned",
    description:
      "Spirit-forward with a whisper of sweetness — bittersweet orange, rounded bourbon warmth, and just enough sugar to smooth the edges without hiding the spirit. One of the oldest cocktails on record: the word 'cocktail' was defined in 1806 as spirits, sugar, water, and bitters. This is essentially that definition in a glass.",
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
    img: "/old-fashioned.jpg",
  },
  {
    name: "Dark 'n' Stormy",
    slug: "dark-n-stormy",
    description:
      "Deep and brooding — rich dark rum against sharp, fiery ginger beer, a collision of heat and sweetness that earns its name. A registered trademark of Gosling Brothers of Bermuda and the island's unofficial national drink, born from the rum sailors had and the ginger beer the British navy brought.",
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
    img: "/dark-n-stormy-vitor-diniz-2.jpg",
  },
  {
    name: "Espresso Martini",
    slug: "espresso-martini",
    description:
      "Silky, intensely caffeinated, and bittersweet — shaken hard to produce the signature frothy crema on top. Created in 1983 by London bartender Dick Bradsell for a model who asked him to make something that would 'wake me up and then f*** me up.'",
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
    img: "/espresso-martini-alex-hoces.jpg",
  },
  {
    name: "Gin Fizz",
    slug: "gin-fizz",
    description:
      "Light and effervescent with a clean citrus backbone — gin, lemon, sugar, and soda, deceptively simple and endlessly drinkable. The fizz family was first formally classified by Jerry Thomas in his 1876 bar guide. The Ramos Gin Fizz variant became so popular in 1900s New Orleans that Governor Huey Long once flew a bartender to New York just to make them.",
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
    img: "/gin-fizz-airam-dato-on-2.jpg",
  },
  {
    name: "Daiquiri",
    slug: "daiquiri",
    description:
      "Lean and perfectly balanced — rum, lime, and a whisper of sugar. Nothing hidden, nowhere to hide. Named after the Daiquirí mine near Santiago de Cuba, where American engineer Jennings Cox mixed local rum with lime juice in 1898. JFK reportedly had one every day.",
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
    img: "/daiquiri-esmihel-muhammed.jpg",
  },
  {
    name: "Clover Club",
    slug: "clover-club",
    description:
      "Silky and delicate — gin softened by raspberry and rounded by aquafaba foam, tart and floral with surprising complexity. Named after a Philadelphia men's club that met at the Bellevue-Stratford Hotel in the 1890s, it vanished with Prohibition and was only properly revived by craft bartenders in the early 2000s.",
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
    img: "/clover-club-say-s.jpg",
  },
  {
    name: "French 75",
    slug: "french-75",
    description:
      "Crisp, celebratory, and sharply elegant — gin, lemon, and sugar lifted by champagne, a sour with ambition. Named after the French 75mm field gun, renowned for its devastating velocity. It was a favourite at Harry's New York Bar in Paris during both World Wars.",
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
    slug: "aviation",
    description:
      "Pale violet and gently tart — gin meets Maraschino and a breath of Crème de Violette, a drink that tastes like it arrived from another era. Created to celebrate Aviation around 1916 in New York, it nearly vanished when Crème de Violette disappeared from the American market for decades. Its revival in the 2000s became one of the defining moments of the craft cocktail renaissance.",
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
    img: "/aviation-masuma-rahaman-2.jpg",
  },
  {
    name: "Shakerato",
    slug: "shakerato",
    description:
      "Bittersweet and ice-cold with a thick, frothy crown — espresso and black tea shaken hard until silky, the demerara just rounding off the edge. Born on Italian summer terraces as caffè shakerato, it's the espresso's answer to a cocktail: no spirit, all attitude.",
    ingredients: [
      {
        name: "Espresso",
        enumLink: Mixers.Espresso,
        volume: "2 oz"
      },
      {
        name: "Black Tea",
        enumLink: Mixers.BlackTea,
        volume: "2 oz"
      },
      {
        name: "Demerara Syrup",
        enumLink: Mixers.DemeraraSyrup,
        volume: "0.25 oz"
      }
    ],
    isAlcoholfree: true,
    img: "/shakerato-kuiyibo.jpg"
  },
  {
    name: "A little Thyme off",
    slug: "a-little-thyme-off",
    description:
      "Herbal and bright — thyme syrup lends an earthy, slightly floral depth to sharp lemon and spicy ginger beer. A sophisticated alcohol-free original that doesn't apologise for missing the spirits.",
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
    name: "Bees Knees",
    slug: "bees-knees",
    description:
      "Honey-smooth and bright with lemon, the botanical gin threading everything together. 'The bee's knees' was Prohibition-era slang for the very best — and the honey was practical too, used to mask the rough edges of bathtub gin. One of the finest things to come out of that era.",
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
        name: "Honey Syrup",
        enumLink: Mixers.HoneySyrup,
        volume: "0.5 oz",
      },
    ],
    img: "/bees-knees-ivan-s.jpg",
  },
  {
    name: "Everythings gonna bee alright",
    slug: "everythings-gonna-bee-alright",
    description: "Honey-sweet and citrus-bright with the grassy, slightly bitter edge of Club Mate and a thread of thyme running through it. Flo's alcohol-free original — perfect for the after you've already drank too much, and any other.",
    ingredients: [
      {
        name: "Lime Juice",
        enumLink: Mixers.LimeJuice,
        volume: "1 oz",
      },
      {
        name: "Thyme Syrup",
        enumLink: Mixers.ThymeSyrup,
        volume: "0.5 oz",
      },
      {
        name: "Honey Syrup",
        enumLink: Mixers.HoneySyrup,
        volume: "0.5 oz",
      },
      {
        name: "Club Mate",
        enumLink: Mixers.ClubMate,
        volume: "4 oz",
      },
    ],
    isAlcoholfree: true,
    img: "/everythings-gonna-bee-alright-daniel-duarte.jpg",
  },
  {
    name: "Amaretto Sour",
    slug: "amaretto-sour",
    description: "Plush and voluptuous — almond sweetness cut by sharp lemon and lifted by a velvety aquafaba foam, with a splash of bourbon for backbone. Bartender Jeffrey Morgenthaler rescued the Amaretto Sour from cheap-mix obscurity in 2012 with exactly this formula, and it's been one of the most-ordered cocktails ever since. Babsi's favourite sweet cocktail for good reason. :)",
    ingredients: [
      {
        name: "Amaretto",
        enumLink: Spirits.Amaretto,
        volume: "1.5 oz",
      },
      {
        name: "Bourbon",
        enumLink: Spirits.Bourbon,
        volume: "0.5 oz",
      },
      {
        name: "Lemon Juice",
        enumLink: Mixers.LemonJuice,
        volume: "1 oz",
      },
      {
        name: "Simple Syrup",
        enumLink: Mixers.SimpleSyrup,
        volume: "0.75 oz",
      },
      {
        name: "Aquafaba",
        enumLink: Mixers.Aquafaba,
        volume: "0.75 oz",
      },
    ],
    img: "/amaretto-sour-poul-hoang.jpg",
  },
  {
    name: "Elk's Own",
    slug: "elks-own",
    description: "Warm and wintry — whisky and ruby port intertwine with bright lemon and a silky aquafaba texture, rich and aromatic. The Elk's Own was a staple of early 20th-century American lodge culture, its combination of whisky and fortified wine a nod to the Scots-Irish tradition of mixing the two. A drink for cold evenings and slow conversation.",
    ingredients: [
      {
        name: "Whisky",
        enumLink: Spirits.Whiskey,
        volume: "1 oz",
      },
      {
        name: "Ruby Port Wine",
        enumLink: Spirits.PortWine,
        volume: "0.75 oz",
      },
      {
        name: "Lemon Juice",
        enumLink: Mixers.LemonJuice,
        volume: "0.75 oz",
      },
      {
        name: "Aquafaba",
        enumLink: Mixers.Aquafaba,
        volume: "0.75 oz",
      },
      {
        name: "Demerara Syrup",
        enumLink: Mixers.DemeraraSyrup,
        volume: "0.5 oz",
      },
    ],
    img: "/elks-own-dam-i.jpg",
  },
  {
    name: "Mojito",
    slug: "mojito",
    description:
      "Bright and bracingly fresh — white rum lifted by sharp lime and cooling mint, lengthened with soda. Born in Havana, this drink has been attributed to everything from 16th-century pirates to Ernest Hemingway, who was known to frequent La Bodeguita del Medio, its most famous home.",
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
    img: "/mojito-mohamed-olwy.jpg",
  },
  {
    name: "Mockito",
    slug: "mockito",
    description:
      "Everything you love about a Mojito, without the rum — crisp mint, tart lime, gentle sweetness, and a long soda finish. Refreshing enough that nobody will notice what's missing. The name is the joke.",
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
    img: "/mockito-willians-huerta.jpg",
  },
  {
    name: "Mint Julep",
    slug: "mint-julep",
    description:
      "Cold, sweet, and deeply minty with a slow bourbon warmth underneath — best drunk through a short straw to keep your nose in the mint. The official drink of the Kentucky Derby since 1938, where over 120,000 are served on race weekend. The word 'julep' traces back to the Arabic yulab, meaning rosewater.",
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
