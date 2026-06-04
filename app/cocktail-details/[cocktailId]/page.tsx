"use client"
import { use } from "react";
import { Header } from "@/app/components/header/Header";
import { useRouter } from "next/navigation";
import { COCKTAILS } from "../../_types/constants";
import { Cocktail } from "../../components/cocktail/Cocktail";

interface CocktailDetailsPageProps {
  params: Promise<{ cocktailId: number }>
}

const CocktailDetailsPage = ({ params }: CocktailDetailsPageProps) => {
  const { cocktailId } = use(params);
  const router = useRouter();
  return <div>
    <Header />
    <Cocktail cocktail={COCKTAILS[+cocktailId]} onClose={() => router.push("/")}/>
    </div>
}
export default CocktailDetailsPage;