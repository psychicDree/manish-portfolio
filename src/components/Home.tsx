'use client'

import { useState, useEffect } from 'react'
import personalInfo from '@/data/personalInfo.json'

// Access your data
const { name, title, email } = personalInfo.personal
const { facebook, instagram } = personalInfo.social

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-container container grid">
        <div className="home-social">
          <span className="home-social-follow">Follow Me</span>
          <div className="home-social-links">
            <a href={instagram.url} target="_blank" className="home-social-link">
              <i className={instagram.icon}></i>
            </a>

            <a href={personalInfo.social.twitter.url} target="_blank" className="home-social-link">
              <i className={personalInfo.social.twitter.icon}></i>
            </a>

            <a href={personalInfo.social.linkedin.url} target="_blank" className="home-social-link">
              <i className={personalInfo.social.linkedin.icon}></i>
            </a>
          </div>
        </div>

        <img src="/manish-portfolio/home-img.png" alt="" className="home-img" onError={(e) => {
          e.currentTarget.style.display = 'none';
        }} />

        <div className="home-data">
          <h1 className="home-title">Hi, I'm {name}</h1>
          <h3 className="home-subtitle">{title}</h3>
          <p className="home-description">{personalInfo.personal.description}</p>
          <a href="#about" className="button">
            <i className="uil uil-user button-icon"></i>
            More About me!
          </a>
        </div>

        <div className="my-info">
          <div className="info-item">
            <i className={`${personalInfo.messaging.messenger.icon} info-icon`}></i>
            <div>
              <h3 className="info-title">{personalInfo.messaging.messenger.platform}</h3>
              <span className="info-subtitle">{personalInfo.messaging.messenger.username}</span>
            </div>
          </div>

          <div className="info-item">
            <i className={`${personalInfo.messaging.whatsapp.icon} info-icon`}></i>
            <div>
              <h3 className="info-title">{personalInfo.messaging.whatsapp.platform}</h3>
              <span className="info-subtitle">{personalInfo.messaging.whatsapp.phone}</span>
            </div>
          </div>

          <div className="info-item">
            <i className={`${personalInfo.messaging.email.icon} info-icon`}></i>
            <div>
              <h3 className="info-title">{personalInfo.messaging.email.platform}</h3>
              <span className="info-subtitle">{personalInfo.messaging.email.address}</span>
            </div>
          </div>
        </div>

        {/* Resume Preview Section */}
        <div className="resume-preview-section">
          <h3 className="resume-preview-title">Resume</h3>
          <div className="resume-preview-container">
            <a 
              href="/manish-portfolio/resumes/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="resume-preview-link"
              aria-label="View full resume PDF in new tab"
            >
              <div className="resume-preview-image-container">
                <img 
                  src="/manish-portfolio/resume_page-0001.jpg" 
                  alt="Resume preview - Click to view full PDF" 
                  className="resume-preview-image"
                  loading="lazy"
                />
                <div className="resume-preview-overlay">
                  <span className="resume-preview-text">Click to view full resume</span>
                </div>
              </div>
            </a>
            <p className="resume-preview-description">
              Click the preview above to open the full resume PDF in a new tab
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 