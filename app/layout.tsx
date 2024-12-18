import type { Metadata } from "next"

import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Salah Hatem - Full Stack Developer",
  description: "UI/UX Designer & Full Stack Web Developer",
  icons: {
    icon: "/images/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth ">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.style.fontFamily} } antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
