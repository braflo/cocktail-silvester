"use client"

import type { Cocktail as CocktailType } from "@/app/_types/cocktail"
import Image from "next/image"
import { useRouter } from "next/navigation"
import "./cocktail.css"

interface CocktailProps {
  cocktail: CocktailType
}

const Cocktail = ({ cocktail }: CocktailProps) => {
  const { name, img, description, ingredients } = cocktail
  const router = useRouter()

  return (
    <div className="cocktail">
      <button onClick={() => router.push("/")} aria-label="Close">X</button>
      <Image className="img-detail" src={img} alt={name} width={400} height={400} />
      <div className="cocktail-info">
        <h3>{name}</h3>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient.enumLink}>
              {ingredient.volume} {ingredient.name}
            </li>
          ))}
        </ul>
        <p>{description}</p>
      </div>
    </div>
  )
}
export { Cocktail }
