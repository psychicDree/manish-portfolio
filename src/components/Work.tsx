/// <reference types="react" />
'use client'

import { useState, useEffect } from 'react'

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
    title: 'Rummy Passion',
    category: 'game',
    details: {
      title: 'Rummy Passion - Card Game',
      description: 'Developing Tools and Pipelines for Rummy Passion to streamline development and reduce iteration time. Optimized code for maximum performance and efficiency, resulting in a 20% improvement in app response time.',
      created: '2024',
      technologies: 'Unity, C#, Socket Programming, Cloud Content, Addressables',
      role: 'Software Developer (SDE-2)',
      view: 'https://github.com/psychicDree'
    }
  },
  {
    id: 2,
    title: 'Warland Realm',
    category: 'game',
    details: {
      title: 'Warland Realm - NFT eSports Game',
      description: 'NFT-based eSports Competitive Game. Implemented Creatures, Player and Bots Locomotion Systems to support multiplayer aspect like performance, synchronization, and reusability. Worked on MOBA and Battle Royale mechanics for 5v5 gameplay.',
      created: '2023-2024',
      technologies: 'Unity, C#, Unreal Engine, Blueprint, Blockchain',
      role: 'Team Lead',
      view: 'https://github.com/psychicDree'
    }
  },
  {
    id: 3,
    title: 'Underground Waifus',
    category: 'game',
    details: {
      title: 'Underground Waifus - NFT TCG',
      description: 'Successfully launched a NFT-based TCG on Steam, Epic, and Android platforms. Engineered play-to-earn systems using blockchain technology. Reduced loading times by 25% through optimization.',
      created: '2023-2024',
      technologies: 'Unity, C#, Blockchain, Steam SDK, Epic Games Store',
      role: 'Team Lead',
      view: 'https://github.com/psychicDree'
    }
  },
  {
    id: 4,
    title: 'Khiladi Adda Games',
    category: 'game',
    details: {
      title: 'Khiladi Adda - Multiplayer Games',
      description: 'Created Multiplayer Ludo and Card Game Court Piece for Internal product Integration. Built Multiplayer Board Games, Ludo for internal product integration, and Chess Game Published on Google Play Store.',
      created: '2021-2023',
      technologies: 'Unity, C#, Photon Engine, Socket.IO, Playfab, Firebase',
      role: 'Game Developer',
      view: 'https://github.com/psychicDree'
    }
  },
  {
    id: 5,
    title: 'Beat Killer',
    category: 'game',
    details: {
      title: 'Beat Killer - 3D Audio Game',
      description: 'Created a 3D Singleplayer Audio-based game published on Google Play Store. Research the demographics and statistics relating to the game to determine the type of gameplay to use.',
      created: '2020-2021',
      technologies: 'Unity, C#, Firebase, Facebook SDK, Google SDK, Google Admob',
      role: 'Game Developer',
      view: 'https://github.com/psychicDree'
    }
  },
  {
    id: 6,
    title: 'Unity Script Collection',
    category: 'game',
    details: {
      title: 'Unity Script Collection',
      description: 'Collection of reusable Unity scripts and utilities for game development. Includes various gameplay mechanics, UI systems, and optimization tools.',
      created: '2020-2024',
      technologies: 'Unity, C#, Game Development',
      role: 'Developer',
      view: 'https://github.com/psychicDree/Unity-Script-Collection'
    }
  },
  {
    id: 7,
    title: 'OpenGL Tutorials',
    category: 'game',
    details: {
      title: 'OpenGL Graphics Programming',
      description: 'Educational content and tutorials for OpenGL graphics programming. Covers shader programming, 3D rendering, and graphics optimization techniques.',
      created: '2020-2024',
      technologies: 'OpenGL, C++, Graphics Programming',
      role: 'Developer',
      view: 'https://github.com/psychicDree/OpenGL-Tutorials'
    }
  },
  {
    id: 8,
    title: 'Multiplayer Unity Sample',
    category: 'game',
    details: {
      title: 'Multiplayer Unity with Photon',
      description: 'Sample project demonstrating multiplayer game development using Unity and Photon networking. Includes lobby system, matchmaking, and real-time gameplay.',
      created: '2019-2024',
      technologies: 'Unity, C#, Photon, Multiplayer',
      role: 'Developer',
      view: 'https://github.com/psychicDree/Multiplyer-Sample-in-Unity-2019-using-Photon'
    }
  },
  {
    id: 9,
    title: 'Procedural Planet Generator',
    category: 'game',
    details: {
      title: 'Procedural Planet Generator',
      description: 'Procedural generation system for creating realistic planets with terrain, atmosphere, and biomes. Uses advanced noise algorithms and shader programming.',
      created: '2020-2024',
      technologies: 'Unity, C#, Shaders, Procedural Generation',
      role: 'Developer',
      view: 'https://github.com/psychicDree/Procedural-Planet'
    }
  },
  {
    id: 10,
    title: 'Game Development Math',
    category: 'game',
    details: {
      title: 'Game Development Mathematics',
      description: 'Mathematical utilities and algorithms commonly used in game development. Includes vector operations, collision detection, and physics calculations.',
      created: '2020-2024',
      technologies: 'C++, Mathematics, Game Physics',
      role: 'Developer',
      view: 'https://github.com/psychicDree/gamedev-maths-c-'
    }
  }
]

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [repoDescriptionsById, setRepoDescriptionsById] = useState<Record<number, string>>({})
  const [isFetchingDescription, setIsFetchingDescription] = useState<boolean>(false)

  const getOwnerRepoFromUrl = (url: string): { owner: string, repo: string } | null => {
    try {
      const parsed = new URL(url)
      const segments = parsed.pathname.split('/').filter(Boolean)
      if (segments.length >= 2) {
        return { owner: segments[0], repo: segments[1] }
      }
      return null
    } catch {
      return null
    }
  }

  const extractSummaryFromMarkdown = (markdown: string): string => {
    const normalized = markdown
      .replace(/\r\n|\r/g, '\n')
      .trim()

    // Split by blank line to get paragraphs
    const paragraphs = normalized.split(/\n\s*\n/)

    // Choose the first meaningful paragraph (not a heading/image/badge)
    const firstMeaningful = paragraphs.find(p => {
      const trimmed = p.trim()
      if (!trimmed) return false
      if (/^#/m.test(trimmed)) return false
      if (/^!/m.test(trimmed)) return false
      if (/\[!\[.*?\]\(.*?\)\]\(.*?\)/.test(trimmed)) return false
      return true
    }) || ''

    // Strip markdown links/images and inline code
    let plain = firstMeaningful
      .replace(/```[\s\S]*?```/g, '')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/!\[[^\]]*\]\([^\)]*\)/g, '')
      .replace(/\[[^\]]*\]\([^\)]*\)/g, (m) => m.replace(/\[|\]|\([^\)]*\)/g, ''))
      .replace(/^>\s?/gm, '')
      .replace(/^#+\s?/gm, '')
      .replace(/\s+/g, ' ')
      .trim()

    if (!plain) return ''
    if (plain.length > 220) plain = plain.slice(0, 217).replace(/\s+$/, '') + '...'
    return plain
  }

  const fetchDescriptionForItem = async (item: PortfolioItem): Promise<string> => {
    const repoInfo = getOwnerRepoFromUrl(item.details.view)
    if (!repoInfo) return ''

    const { owner, repo } = repoInfo

    // Try fetching raw README from default branch via HEAD pointer
    try {
      const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/HEAD/README.md`
      const res = await fetch(rawUrl)
      if (res.ok) {
        const markdown = await res.text()
        const summary = extractSummaryFromMarkdown(markdown)
        if (summary) return summary
      }
    } catch {}

    // Fallback: GitHub Repo description
    try {
      const apiUrl = `https://api.github.com/repos/${owner}/${repo}`
      const res = await fetch(apiUrl)
      if (res.ok) {
        const data = await res.json()
        if (data && typeof data.description === 'string' && data.description.trim().length > 0) {
          return data.description.trim()
        }
      }
    } catch {}

    return ''
  }

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item)
  }

  useEffect(() => {
    const load = async () => {
      if (!selectedItem) return
      if (repoDescriptionsById[selectedItem.id]) return
      setIsFetchingDescription(true)
      const desc = await fetchDescriptionForItem(selectedItem)
      setRepoDescriptionsById((prev: Record<number, string>) => ({ ...prev, [selectedItem.id]: desc || 'GitHub repository' }))
      setIsFetchingDescription(false)
    }
    load()
  }, [selectedItem])

  // Prefetch descriptions for all items to show alongside projects
  useEffect(() => {
    let isCancelled = false
    const run = async () => {
      const next: Record<number, string> = {}
      for (const item of portfolioItems) {
        const desc = await fetchDescriptionForItem(item)
        if (isCancelled) return
        next[item.id] = desc || 'GitHub repository'
      }
      if (!isCancelled) setRepoDescriptionsById(next)
    }
    run()
    return () => { isCancelled = true }
  }, [])

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
                <p className="details-description">{repoDescriptionsById[item.id] || item.details.description}</p>
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
                  <p className="details-description">{repoDescriptionsById[selectedItem.id] || selectedItem.details.description}</p>

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