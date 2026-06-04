import styles from "./page.module.css"
import { Header } from "./components/header/Header"
import { Card } from "./components/card/Card"
import { COCKTAILS } from "./_types/constants"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {COCKTAILS.map((cocktail) => (
          <Link key={cocktail.slug} href={`/cocktail-details/${cocktail.slug}`}>
            <Card cocktail={cocktail} />
          </Link>
        ))}
      </main>
    </>
  )
}
