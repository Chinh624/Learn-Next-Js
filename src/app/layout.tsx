import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import './globals.css'
// layout full every page example header - footer 
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learn Next Js',
  description: '-----------',
}

export default function RootLayout({
  children,}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <header><h1>Header</h1></header>
      <body className={inter.className}>{children}</body>
      <footer><h1>Footer</h1></footer>
    </html>
  )
}

