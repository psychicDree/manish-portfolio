'use client'

import { useState, useEffect } from 'react'

interface SidebarProps {
  activeSection: string
}

export default function Sidebar({ activeSection }: SidebarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const navToggle = document.getElementById('nav-toggle')
    const navClose = document.getElementById('nav-close')
    const sidebar = document.getElementById('sidebar')

    const handleNavToggle = () => {
      setIsSidebarOpen(true)
      sidebar?.classList.add('show-sidebar')
    }

    const handleNavClose = () => {
      setIsSidebarOpen(false)
      sidebar?.classList.remove('show-sidebar')
    }

    navToggle?.addEventListener('click', handleNavToggle)
    navClose?.addEventListener('click', handleNavClose)

    return () => {
      navToggle?.removeEventListener('click', handleNavToggle)
      navClose?.removeEventListener('click', handleNavClose)
    }
  }, [isClient])

  const handleNavClick = (sectionId: string) => {
    if (!isClient) return
    
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsSidebarOpen(false)
    document.getElementById('sidebar')?.classList.remove('show-sidebar')
  }

  return (
    <aside className="sidebar" id="sidebar">
      <nav className="nav">
        <div className="nav-logo">
          <a href="#" className="nav-logo-text">M</a>
        </div>

        <div className="nav-menu">
          <div className="menu">
            <ul className="nav-list">
              <li className="nav-item">
                <a 
                  href="#home" 
                  className={`nav-link ${activeSection === 'home' ? 'active-link' : ''}`}
                  onClick={() => handleNavClick('home')}
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a 
                  href="#about" 
                  className={`nav-link ${activeSection === 'about' ? 'active-link' : ''}`}
                  onClick={() => handleNavClick('about')}
                >
                  About
                </a>
              </li>

              <li className="nav-item">
                <a 
                  href="#skills" 
                  className={`nav-link ${activeSection === 'skills' ? 'active-link' : ''}`}
                  onClick={() => handleNavClick('skills')}
                >
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a 
                  href="#work" 
                  className={`nav-link ${activeSection === 'work' ? 'active-link' : ''}`}
                  onClick={() => handleNavClick('work')}
                >
                  Work
                </a>
              </li>

              <li className="nav-item">
                <a 
                  href="#contact" 
                  className={`nav-link ${activeSection === 'contact' ? 'active-link' : ''}`}
                  onClick={() => handleNavClick('contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="btn-share">
          <i className="uil uil-share-alt social-share"></i>
        </div>

        <div className="nav-close" id="nav-close">
          <i className="uil uil-times"></i>
        </div>
      </nav>
    </aside>
  )
} 