'use client'

import { useState } from 'react'
import Link from 'next/link'
import { portfolioItems, type PortfolioItem, type ProjectStatus } from '@/data/projects'
import { getAssetPath } from '@/utils/paths'

type Filter = 'all' | ProjectStatus

// Facets derived from the data, so a tab can never render an empty section the
// way the old hardcoded Mobile/VR tabs did.
const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'Released', label: 'Shipped' },
  { id: 'Alpha', label: 'In development' },
  { id: 'Open source', label: 'Open source' },
]

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')

  const visibleItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.status === activeFilter)

  const featuredItems = visibleItems.filter((item) => item.featured)
  const restItems = visibleItems.filter((item) => !item.featured)

  const statusClass = (status: ProjectStatus) =>
    `case-status case-status-${status.toLowerCase().replace(/\s+/g, '-')}`

  const renderCard = (item: PortfolioItem) => (
    <article
      key={item.id}
      className={`work-card${item.featured ? ' work-card-featured' : ''}`}
    >
      {item.image && (
        <div className="work-art">
          <img
            src={getAssetPath(item.image)}
            alt={`${item.title} key art`}
            className={`work-art-img work-art-${item.imageFit || 'cover'}`}
            loading="lazy"
          />
        </div>
      )}

      <div className="work-card-meta">
        <span className={statusClass(item.status)}>{item.status}</span>
        <span>{item.year}</span>
        <span>{item.platform}</span>
      </div>

      <h3 className="work-title">{item.title}</h3>
      <p className="work-card-summary">
        {item.caseStudy?.headline || item.details.description}
      </p>

      <Link href={`/work/${item.slug}`} className="work-button">
        Case study<i className="uil uil-arrow-right work-button-icon"></i>
      </Link>
    </article>
  )

  return (
    <section className="work section" id="work">
      <h2 className="section-title" data-heading="My Portfolio">Selected Work</h2>

      <div className="work-filters">
        {FILTERS.map((filter) => (
          <span
            key={filter.id}
            className={`work-item ${activeFilter === filter.id ? 'active-work' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </span>
        ))}
      </div>

      {featuredItems.length > 0 && (
        <div className="work-featured-row container">
          {featuredItems.map((item) => renderCard(item))}
        </div>
      )}

      {restItems.length > 0 && (
        <div className="work-scroller-wrap container">
          <div className="work-scroller">
            {restItems.map((item) => renderCard(item))}
          </div>
        </div>
      )}

      {visibleItems.length > 0 && (
        <div className="work-index-wrap container">
          <h3 className="work-index-title">Full index</h3>
          <table className="work-index">
            <thead>
              <tr>
                <th scope="col">Project</th>
                <th scope="col">Year</th>
                <th scope="col">Platform</th>
                <th scope="col">Stack</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {visibleItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Link href={`/work/${item.slug}`} className="work-index-link">
                      {item.title}
                    </Link>
                  </td>
                  <td>{item.year}</td>
                  <td>{item.platform}</td>
                  <td className="work-index-stack">{item.details.technologies}</td>
                  <td>
                    <span className={statusClass(item.status)}>{item.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
