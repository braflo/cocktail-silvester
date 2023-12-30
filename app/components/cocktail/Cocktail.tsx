import { Cocktail } from "@/app/@types/cocktail"
import "./cocktail.css"

interface CocktailProps {
  cocktail: Cocktail
  onClose: () => void
}

const Cocktail = ({ cocktail, onClose }: CocktailProps) => {
  const { name, img, description, ingredients } = cocktail
  return (
    <div className="cocktail">
      <button onClick={onClose}>X</button>
      <img className="img-detail" src={img} alt={name} />
      <div className="cocktail-info">
        <h3>{name}</h3>
        <ul>
          {ingredients.map((ingredient) => {
            return (
              <li key={ingredient.enumLink}>
                {ingredient.volume} {ingredient.name}
              </li>
            )
          })}
        </ul>
        <p>{description}</p>
      </div>
    </div>
  )
}
export { Cocktail }
