"use client"

import styles from "./page.module.css"
import { Header } from "./components/header/Header"
import { Card } from "./components/card/Card"
import { COCKTAILS } from "./@types/constants"
import React from "react"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {COCKTAILS.map((cocktail, index) => (
          <Link key={cocktail.name} href={`/cocktail-details/${index}`}>
            <Card cocktail={cocktail} />
          </Link>
        ))}
      </main>
    </>
  )
}
