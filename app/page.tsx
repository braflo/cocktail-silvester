"use client"

import styles from "./page.module.css"
import { Header } from "./components/header/Header"
import { Card } from "./components/card/Card"
import { COCKTAILS } from "./@types/constants"
import React, { useEffect } from "react"
import { Cocktail } from "./@types/cocktail"
import { Cocktail as CocktailComponent } from "./components/cocktail/Cocktail"

export default function Home() {
  const [cocktail, setCocktail] = React.useState<Cocktail | null>(null)

  return (
    <div>
      <Header />
      <main className={styles.main}>
        {cocktail && (
          <CocktailComponent
            onClose={() => setCocktail(null)}
            cocktail={cocktail}
          />
        )}
        {!cocktail &&
          COCKTAILS.map((cocktail) => (
            <div key={cocktail.name} onClick={() => setCocktail(cocktail)}>
              <Card key={cocktail.name} cocktail={cocktail} />
            </div>
          ))}
      </main>
    </div>
  )
}
