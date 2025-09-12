import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Manish Jha - Game Developer Portfolio',
  description: 'Manish Jha - Game Developer with 6+ years of experience in Unity development, game design, and UI/UX. View my portfolio of projects and skills.',
  keywords: 'Game Developer, Unity Developer, Portfolio, Manish Jha, Game Design, UI/UX',
  authors: [{ name: 'Manish Jha' }],
  openGraph: {
    type: 'website',
    url: 'https://psychicDree.github.io/manish-portfolio/',
    title: 'Manish Jha - Game Developer Portfolio',
    description: 'Game Developer with 6+ years of experience in Unity development, game design, and UI/UX. View my portfolio of projects and skills.',
    images: [
      {
        url: 'https://psychicDree.github.io/manish-portfolio/assets/home-img.png',
        width: 1200,
        height: 630,
        alt: 'Manish Jha Portfolio',
      },
    ],
    siteName: 'Manish Jha Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manish Jha - Game Developer Portfolio',
    description: 'Game Developer with 6+ years of experience in Unity development, game design, and UI/UX. View my portfolio of projects and skills.',
    images: ['https://psychicDree.github.io/manish-portfolio/assets/home-img.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        {/* Force fresh deployment - Game Developer Portfolio */}
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 