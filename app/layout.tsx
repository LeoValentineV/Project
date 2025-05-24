import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata = {
  title: "Изучаем сложные предложения",
  description: "Обучающее приложение по темам русского языка: БСП, СПП и ССП",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <main className="min-h-screen bg-background">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
