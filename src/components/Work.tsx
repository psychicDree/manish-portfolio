'use client'

import { useState } from 'react'

interface PortfolioItem {
  id: number
  title: string
  category: string
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
    title: 'app-backend',
    category: 'game',
    details: {
      title: 'app-backend',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/app-backend'
    }
  },
  {
    id: 2,
    title: 'app-gdk-diagrams',
    category: 'game',
    details: {
      title: 'app-gdk-diagrams',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/app-gdk-diagrams'
    }
  },
  {
    id: 3,
    title: 'app-server',
    category: 'game',
    details: {
      title: 'app-server',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/app-server'
    }
  },
  {
    id: 4,
    title: 'AssignmentInventory',
    category: 'game',
    details: {
      title: 'AssignmentInventory',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/AssignmentInventory'
    }
  },
  {
    id: 5,
    title: 'AsyncLoadingScreen',
    category: 'game',
    details: {
      title: 'AsyncLoadingScreen',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/AsyncLoadingScreen'
    }
  },
  {
    id: 6,
    title: 'BikeController',
    category: 'game',
    details: {
      title: 'BikeController',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/BikeController'
    }
  },
  {
    id: 7,
    title: 'CortexAI',
    category: 'game',
    details: {
      title: 'CortexAI',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/CortexAI'
    }
  },
  {
    id: 8,
    title: 'Cricket-Game',
    category: 'game',
    details: {
      title: 'Cricket-Game',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/Cricket-Game'
    }
  },
  {
    id: 9,
    title: 'demo-rpg',
    category: 'game',
    details: {
      title: 'demo-rpg',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/demo-rpg'
    }
  },
  {
    id: 10,
    title: 'game-template',
    category: 'game',
    details: {
      title: 'game-template',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/game-template'
    }
  },
  {
    id: 11,
    title: 'GameClient',
    category: 'game',
    details: {
      title: 'GameClient',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/GameClient'
    }
  },
  {
    id: 12,
    title: 'gamedev-maths-c-',
    category: 'game',
    details: {
      title: 'gamedev-maths-c-',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/gamedev-maths-c-'
    }
  },
  {
    id: 13,
    title: 'GameServer',
    category: 'game',
    details: {
      title: 'GameServer',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/GameServer'
    }
  },
  {
    id: 14,
    title: 'learn-coding-ios-app',
    category: 'game',
    details: {
      title: 'learn-coding-ios-app',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/learn-coding-ios-app'
    }
  },
  {
    id: 15,
    title: 'lego-engine',
    category: 'game',
    details: {
      title: 'lego-engine',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/lego-engine'
    }
  },
  {
    id: 16,
    title: 'manish-portfolio',
    category: 'game',
    details: {
      title: 'manish-portfolio',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/manish-portfolio'
    }
  },
  {
    id: 17,
    title: 'Multiplyer-Sample-in-Unity-2019-using-Photon',
    category: 'game',
    details: {
      title: 'Multiplyer-Sample-in-Unity-2019-using-Photon',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/Multiplyer-Sample-in-Unity-2019-using-Photon'
    }
  },
  {
    id: 18,
    title: 'OpenGL-Tutorials',
    category: 'game',
    details: {
      title: 'OpenGL-Tutorials',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/OpenGL-Tutorials'
    }
  },
  {
    id: 19,
    title: 'Procedural-Planet',
    category: 'game',
    details: {
      title: 'Procedural-Planet',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/Procedural-Planet'
    }
  },
  {
    id: 20,
    title: 'proxy-list',
    category: 'game',
    details: {
      title: 'proxy-list',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/proxy-list'
    }
  },
  {
    id: 21,
    title: 'SquareAndRectangle',
    category: 'game',
    details: {
      title: 'SquareAndRectangle',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/SquareAndRectangle'
    }
  },
  {
    id: 22,
    title: 'SWAT-In-City',
    category: 'game',
    details: {
      title: 'SWAT-In-City',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/SWAT-In-City'
    }
  },
  {
    id: 23,
    title: 'swift-frontend-rive-ui',
    category: 'game',
    details: {
      title: 'swift-frontend-rive-ui',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/swift-frontend-rive-ui'
    }
  },
  {
    id: 24,
    title: 'Unity-Script-Collection',
    category: 'game',
    details: {
      title: 'Unity-Script-Collection',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/Unity-Script-Collection'
    }
  },
  {
    id: 25,
    title: 'user-interface-cpp',
    category: 'game',
    details: {
      title: 'user-interface-cpp',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/user-interface-cpp'
    }
  },
  {
    id: 26,
    title: 'Zombie-Apocolypse---3D',
    category: 'game',
    details: {
      title: 'Zombie-Apocolypse---3D',
      description: 'GitHub repository',
      created: '-',
      technologies: '-',
      role: 'Owner',
      view: 'https://github.com/psychicDree/Zombie-Apocolypse---3D'
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