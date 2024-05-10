"use client"
import { Header } from "@/app/components/header/Header";
import { useRouter } from "next/navigation";
import { COCKTAILS } from "../../@types/constants";
import { Cocktail } from "../../components/cocktail/Cocktail";

interface CocktailDetailsPageProps {
  params: { cocktailId: number}
}

const CocktailDetailsPage = ({ params: {cocktailId} }: CocktailDetailsPageProps) => {
  const router = useRouter();
  return <div>
    <Header />
    <Cocktail cocktail={COCKTAILS[+cocktailId]} onClose={() => router.push("/")}/>
    </div>
}
export default CocktailDetailsPage;