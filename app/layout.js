import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '🍁 Oliver Brooks\' Portfolio',
  description: 'A small résumé and CVE showcase application built with Next.JS and React.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + "bg-white dark:bg-slate-800"}>{children}</body>
    </html>
  )
}
