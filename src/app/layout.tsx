import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'

const lato = Lato({ 
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'SM 2023 THAIBOXNING',
  description: 'Svenska mästerskapet i Thaiboxning 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <body className={lato.className}>{children}</body>
    </html>
  )
}
