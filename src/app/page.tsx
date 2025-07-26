'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Sidebar from '@/components/Sidebar'
import Home from '@/components/Home'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

// Dynamically import components that might cause hydration issues
const DynamicContact = dynamic(() => import('@/components/Contact'), {
  ssr: false
})

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'work', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isClient])

  useEffect(() => {
    if (!isClient) return

    // Load external scripts only on client
    const loadScripts = () => {
      const mixitupScript = document.createElement('script')
      mixitupScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/mixitup/3.3.1/mixitup.min.js'
      mixitupScript.async = true
      document.head.appendChild(mixitupScript)

      const swiperScript = document.createElement('script')
      swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'
      swiperScript.async = true
      document.head.appendChild(swiperScript)
    }

    loadScripts()
  }, [isClient])

  return (
    <>
      <div className="nav-toggle" id="nav-toggle">
        <i className="uil uil-bars"></i>
      </div>

      <Sidebar activeSection={activeSection} />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Work />
        <DynamicContact />
        <Footer />
      </main>
    </>
  )
} 