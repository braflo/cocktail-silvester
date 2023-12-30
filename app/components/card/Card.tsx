import { Cocktail } from "@/app/@types/cocktail"
import "./card.css"

interface CardProps {
  cocktail: Cocktail
}

const Card = ({ cocktail }: CardProps) => {
  return (
    <div className="card">
      <img src={cocktail.img} alt="" />
      <h2>{cocktail.name}</h2>
      <div className="flag-container"></div>
    </div>
  )
}
export { Card }
