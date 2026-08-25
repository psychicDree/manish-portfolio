import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ProjectTrailer from '@/components/ProjectTrailer'
import { getProjectBySlug, portfolioItems } from '@/data/projects'
import { getAssetPath } from '@/utils/paths'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Static export needs the full slug set up front; there is no server at runtime.
export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}

  const description = project.caseStudy?.headline || project.details.description
  return {
    title: `${project.title} — Manish Jha`,
    description,
    openGraph: {
      type: 'article',
      title: `${project.title} — Manish Jha`,
      description,
    },
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const index = portfolioItems.findIndex((item) => item.slug === project.slug)
  const previous = portfolioItems[index - 1]
  const next = portfolioItems[index + 1]
  const study = project.caseStudy

  return (
    <main className="case">
      <div className="case-shell container">
        <Link href="/#work" className="case-back">
          <i className="uil uil-arrow-left"></i>Work index
        </Link>

        <header className="case-header">
          <div className="case-meta">
            <span className={`case-status case-status-${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
              {project.status}
            </span>
            <span>{project.year}</span>
            <span>{project.platform}</span>
            <span>{project.details.role}</span>
          </div>
          <h1 className="case-title">{project.title}</h1>
          {study && <p className="case-headline">{study.headline}</p>}
        </header>

        {project.video ? (
          <ProjectTrailer
            youtubeId={project.video.youtubeId}
            poster={project.video.poster}
            label={project.video.label}
          />
        ) : project.image ? (
          <div className="work-art case-media">
            <img
              src={getAssetPath(project.image)}
              alt={`${project.title} key art`}
              className={`work-art-img work-art-${project.imageFit || 'cover'}`}
            />
          </div>
        ) : null}

        <div className="case-body">
          <article className="case-narrative">
            {study ? (
              <>
                <section className="case-section">
                  <h2 className="case-section-title">Context</h2>
                  <p>{study.context}</p>
                </section>

                <section className="case-section">
                  <h2 className="case-section-title">The problem</h2>
                  <p>{study.challenge}</p>
                </section>

                <section className="case-section">
                  <h2 className="case-section-title">What I built</h2>
                  <ul className="case-list">
                    {study.contributions.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </section>

                {study.outcomes && study.outcomes.length > 0 && (
                  <section className="case-section">
                    <h2 className="case-section-title">Outcome</h2>
                    <ul className="case-list case-list-outcome">
                      {study.outcomes.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </section>
                )}
              </>
            ) : (
              <section className="case-section">
                <h2 className="case-section-title">Overview</h2>
                <p>{project.details.description}</p>
              </section>
            )}
          </article>

          <aside className="case-spec">
            <h2 className="case-spec-title">Spec</h2>
            <dl className="case-spec-list">
              {(study?.stack ?? [
                { label: 'Stack', value: project.details.technologies },
                { label: 'Role', value: project.details.role },
              ]).map((row) => (
                <div key={row.label} className="case-spec-row">
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
              <div className="case-spec-row">
                <dt>Status</dt>
                <dd>{project.status}</dd>
              </div>
              <div className="case-spec-row">
                <dt>Platform</dt>
                <dd>{project.platform}</dd>
              </div>
            </dl>

            <a
              href={project.details.view}
              target="_blank"
              rel="noopener noreferrer"
              className="button case-cta"
            >
              <i className="uil uil-external-link-alt button-icon"></i>
              {project.details.view.includes('play.google.com') ? 'Google Play' : 'Source'}
            </a>
          </aside>
        </div>

        {project.gallery && project.gallery.length > 0 && (
          <section className="case-section case-gallery-section">
            <h2 className="case-section-title">Gallery</h2>
            <div className="work-gallery case-gallery">
              {project.gallery.map((shot) => (
                <img
                  key={shot.src}
                  src={getAssetPath(shot.src)}
                  alt={shot.alt}
                  className="work-gallery-img"
                  loading="lazy"
                />
              ))}
            </div>
          </section>
        )}

        <nav className="case-pager">
          {previous ? (
            <Link href={`/work/${previous.slug}`} className="case-pager-link">
              <span className="case-pager-label">Previous</span>
              <span className="case-pager-title">{previous.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/work/${next.slug}`} className="case-pager-link case-pager-next">
              <span className="case-pager-label">Next</span>
              <span className="case-pager-title">{next.title}</span>
            </Link>
          )}
        </nav>
      </div>
    </main>
  )
}
