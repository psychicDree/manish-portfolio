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
    title: 'Web Design',
    category: 'web',
    image: 'https://i.postimg.cc/43Th5VXJ/work-1.png',
    details: {
      title: 'The services we provide for design',
      description: 'Two smartphones displaying a sleek, dark-themed dashboard interface',
      created: '22 Apr 2025',
      technologies: 'html css',
      role: 'frontend',
      view: 'www.domain.com'
    }
  },
  {
    id: 2,
    title: 'App Design',
    category: 'app',
    image: 'https://i.postimg.cc/sXLjnC5p/work-2.png',
    details: {
      title: 'Mobile App Lanfing Design & App Maintain',
      description: 'A stylish burger restaurant mobile app interface displayed on two smartphones',
      created: '15 Apr 2025',
      technologies: 'html css',
      role: 'frontend',
      view: 'www.domain.com'
    }
  },
  {
    id: 3,
    title: 'Brand Design',
    category: 'design',
    image: 'https://i.postimg.cc/QNB1jXYZ/work-3.png',
    details: {
      title: 'Logo Design Creativity & Application',
      description: 'Three smartphone screens displaying a beautifully designed travel booking application interface',
      created: '10 Apr 2025',
      technologies: 'html css',
      role: 'frontend',
      view: 'www.domain.com'
    }
  },
  {
    id: 4,
    title: 'App Design',
    category: 'app',
    image: 'https://i.postimg.cc/s2DGqyG8/work-4.png',
    details: {
      title: 'Mobile App Landing Design & Services',
      description: 'Modern workout website interface design featuring a bold and energetic visual layout',
      created: '4 Apr 2025',
      technologies: 'html css',
      role: 'frontend',
      view: 'www.domain.com'
    }
  },
  {
    id: 5,
    title: 'Brand Design',
    category: 'web',
    image: 'https://i.postimg.cc/TYVyPhrF/work-5.png',
    details: {
      title: 'Design for Technology & Services',
      description: 'An app design that is clean, functional, and ideal for gamers looking to manage their digital assets and purchases',
      created: '28 Mar 2025',
      technologies: 'html css',
      role: 'frontend',
      view: 'www.domain.com'
    }
  },
  {
    id: 6,
    title: 'Web Design',
    category: 'design',
    image: 'https://i.postimg.cc/wMdqKcbv/work-6.png',
    details: {
      title: 'App for Technology & Services',
      description: 'An app design that is clean and modern, making food browsing and ordering easy',
      created: '20 Mar 2025',
      technologies: 'html css',
      role: 'frontend',
      view: 'www.domain.com'
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
            className={`work-item ${activeFilter === 'web' ? 'active-work' : ''}`}
            onClick={() => setActiveFilter('web')}
          >
            Web
          </span>
          <span 
            className={`work-item ${activeFilter === 'app' ? 'active-work' : ''}`}
            onClick={() => setActiveFilter('app')}
          >
            App
          </span>
          <span 
            className={`work-item ${activeFilter === 'design' ? 'active-work' : ''}`}
            onClick={() => setActiveFilter('design')}
          >
            Design
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
                  <li>View - <span><a href="#">{item.details.view}</a></span></li>
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
                    <li>View - <span><a href="#">{selectedItem.details.view}</a></span></li>
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