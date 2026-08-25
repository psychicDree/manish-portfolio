'use client'

import { useState } from 'react'
import { getAssetPath } from '@/utils/paths'

interface ProjectTrailerProps {
  youtubeId: string
  poster: string
  label: string
}

// Click-to-load facade: nothing reaches YouTube until the visitor presses play.
export default function ProjectTrailer({ youtubeId, poster, label }: ProjectTrailerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  if (isPlaying) {
    return (
      <div className="work-video case-media">
        <iframe
          className="work-video-frame"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={label}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    )
  }

  return (
    <div className="work-video case-media">
      <button
        type="button"
        className="work-video-facade"
        onClick={() => setIsPlaying(true)}
        aria-label={`Play ${label}`}
      >
        <img src={getAssetPath(poster)} alt="" className="work-video-poster" />
        <span className="work-video-play">
          <i className="uil uil-play"></i>
        </span>
        <span className="work-video-label">{label}</span>
      </button>
    </div>
  )
}
