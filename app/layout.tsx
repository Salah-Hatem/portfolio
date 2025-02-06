import type { Metadata } from "next"
import { GoogleTagManager } from "@next/third-parties/google"

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
      <GoogleTagManager gtmId="GTM-PFPT6KQ2" />
      <body className={`${inter.style.fontFamily} } antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
