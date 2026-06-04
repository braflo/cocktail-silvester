import { notFound } from "next/navigation"
import { Header } from "@/app/components/header/Header"
import { COCKTAILS } from "@/app/_types/constants"
import { Cocktail } from "@/app/components/cocktail/Cocktail"

interface CocktailDetailsPageProps {
  params: Promise<{ slug: string }>
}

export default async function CocktailDetailsPage({ params }: CocktailDetailsPageProps) {
  const { slug } = await params
  const cocktail = COCKTAILS.find((c) => c.slug === slug)

  if (!cocktail) notFound()

  return (
    <div>
      <Header />
      <Cocktail cocktail={cocktail} />
    </div>
  )
}
