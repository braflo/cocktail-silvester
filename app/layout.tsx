import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Classic & Custom Cocktails",
  description: "Classic & Custom Cocktails",
}

export type LayoutProps = {
  children: ReactNode
  types: ReactNode
  params?: any
}
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
