'use client'

import { useState } from 'react'

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  details: {
    title: string
    description: string
    created: string
    technologies: string
    role: string
    view: string
  }
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Multiplayer Racing Game',
    category: 'game',
    image: 'https://i.postimg.cc/43Th5VXJ/work-1.png',
    details: {
      title: 'Real-time Multiplayer Racing Game with Unity',
      description: 'A high-performance racing game featuring real-time multiplayer functionality using Photon Fusion 2, advanced vehicle physics, and dynamic weather systems.',
      created: '22 Apr 2025',
      technologies: 'Unity, C#, Photon Fusion 2, Firebase',
      role: 'Lead Unity Developer',
      view: 'https://github.com/psychicDree/racing-game'
    }
  },
  {
    id: 2,
    title: 'Mobile RPG Adventure',
    category: 'mobile',
    image: 'https://i.postimg.cc/sXLjnC5p/work-2.png',
    details: {
      title: 'Cross-platform Mobile RPG with Advanced AI',
      description: 'A feature-rich RPG game with procedurally generated levels, advanced AI systems, and cross-platform multiplayer support for iOS and Android.',
      created: '15 Apr 2025',
      technologies: 'Unity, C#, Swift, Kotlin, Firebase',
      role: 'Game Developer & Mobile Lead',
      view: 'https://github.com/psychicDree/mobile-rpg'
    }
  },
  {
    id: 3,
    title: 'VR Escape Room',
    category: 'vr',
    image: 'https://i.postimg.cc/QNB1jXYZ/work-3.png',
    details: {
      title: 'Immersive VR Puzzle Game with Haptic Feedback',
      description: 'A virtual reality escape room experience featuring complex puzzle mechanics, realistic physics interactions, and immersive audio-visual design.',
      created: '10 Apr 2025',
      technologies: 'Unity, C#, Oculus SDK, SteamVR',
      role: 'VR Developer',
      view: 'https://github.com/psychicDree/vr-escape'
    }
  },
  {
    id: 4,
    title: 'Battle Royale Game',
    category: 'game',
    image: 'https://i.postimg.cc/s2DGqyG8/work-4.png',
    details: {
      title: 'Large-scale Battle Royale with 100+ Players',
      description: 'A massive multiplayer battle royale game supporting 100+ concurrent players with advanced networking, dynamic environments, and sophisticated matchmaking.',
      created: '4 Apr 2025',
      technologies: 'Unity, C#, Photon Fusion 2, MongoDB',
      role: 'Senior Unity Developer',
      view: 'https://github.com/psychicDree/battle-royale'
    }
  },
  {
    id: 5,
    title: 'Educational Game Platform',
    category: 'mobile',
    image: 'https://i.postimg.cc/TYVyPhrF/work-5.png',
    details: {
      title: 'Interactive Learning Platform for Children',
      description: 'An educational game platform featuring adaptive learning algorithms, progress tracking, and engaging mini-games designed for children aged 5-12.',
      created: '28 Mar 2025',
      technologies: 'Unity, C#, Firebase, Machine Learning',
      role: 'Game Developer & Educational Designer',
      view: 'https://github.com/psychicDree/edu-platform'
    }
  },
  {
    id: 6,
    title: 'Stealth Action Game',
    category: 'game',
    image: 'https://i.postimg.cc/wMdqKcbv/work-6.png',
    details: {
      title: 'Stealth-based Action Adventure Game',
      description: 'A sophisticated stealth game featuring advanced AI behavior trees, dynamic lighting systems, and procedural level generation for endless replayability.',
      created: '20 Mar 2025',
      technologies: 'Unity, C#, NavMesh, Post-Processing',
      role: 'Game Developer & AI Specialist',
      view: 'https://github.com/psychicDree/stealth-game'
    }
  }
]

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item)
  }

  const closePopup = () => {
    setSelectedItem(null)
  }

  return (
    <>
      <section className="work section" id="work">
        <h2 className="section-title" data-heading="My Portfolio">Recent Works</h2>

        <div className="work-filters">
          <span 
            className={`work-item ${activeFilter === 'all' ? 'active-work' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </span>
          <span 
            className={`work-item ${activeFilter === 'game' ? 'active-work' : ''}`}
            onClick={() => setActiveFilter('game')}
          >
            Games
          </span>
          <span 
            className={`work-item ${activeFilter === 'mobile' ? 'active-work' : ''}`}
            onClick={() => setActiveFilter('mobile')}
          >
            Mobile
          </span>
          <span 
            className={`work-item ${activeFilter === 'vr' ? 'active-work' : ''}`}
            onClick={() => setActiveFilter('vr')}
          >
            VR
          </span>
        </div>

        <div className="work-container container grid">
          {filteredItems.map((item) => (
            <div key={item.id} className={`work-card mix ${item.category}`}>
              <img src={item.image} alt="" className="work-img" />
              <h3 className="work-title">{item.title}</h3>
              <span 
                className="work-button"
                onClick={() => handleItemClick(item)}
              >
                Demo<i className="uil uil-arrow-right work-button-icon"></i>
              </span>

              <div className="portfolio-item-details">
                <h3 className="details-title">{item.details.title}</h3>
                <p className="details-description">{item.details.description}</p>
                <ul className="details-info">
                  <li>Created - <span>{item.details.created}</span></li>
                  <li>Technologies - <span>{item.details.technologies}</span></li>
                  <li>Role - <span>{item.details.role}</span></li>
                  <li>View - <span><a href={item.details.view} target="_blank" rel="noopener noreferrer">{item.details.view}</a></span></li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedItem && (
        <div className="portfolio-popup open">
          <div className="portfolio-popup-inner">
            <div className="portfolio-popup-content grid">
              <span className="portfolio-popup-close" onClick={closePopup}>
                <i className="uil uil-times"></i>
              </span>
              <div className="pp-thumbnail">
                <img src={selectedItem.image} alt="" className="portfolio-popup-img" />
              </div>

              <div className="portfolio-popup-info">
                <div className="portfolio-popup-subtitle">
                  Featured - <span>{selectedItem.title}</span>
                </div>
                <div className="portfolio-popup-body">
                  <h3 className="details-title">{selectedItem.details.title}</h3>
                  <p className="details-description">{selectedItem.details.description}</p>

                  <ul className="details-info">
                    <li>Created - <span>{selectedItem.details.created}</span></li>
                    <li>Technologies - <span>{selectedItem.details.technologies}</span></li>
                    <li>Role - <span>{selectedItem.details.role}</span></li>
                    <li>View - <span><a href={selectedItem.details.view} target="_blank" rel="noopener noreferrer">{selectedItem.details.view}</a></span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 