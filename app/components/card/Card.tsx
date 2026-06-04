import { Cocktail } from "@/app/_types/cocktail"
import Image from "next/image"
import "./card.css"

interface CardProps {
  cocktail: Cocktail
}

const Card = ({ cocktail }: CardProps) => {
  return (
    <div className="card">
      <Image
        src={cocktail.img}
        alt={cocktail.name}
        width={700}
        height={700}
        sizes="(max-width: 768px) 100vw, 350px"
        style={{ width: "100%", height: "auto" }}
      />
      <h2>{cocktail.name}</h2>
    </div>
  )
}
export { Card }
