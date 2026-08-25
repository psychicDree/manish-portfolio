'use client'

import personalInfo from '@/data/personalInfo.json'
import { getAssetPath } from '@/utils/paths'

export default function About() {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section-title" data-heading="My Intro">About me</h2>

        <div className="about-container container grid">
          <img src={getAssetPath("/about-img.png")} alt="" className="about-img" />

          <div className="about-data">
            <h3 className="about-heading">Hi, I'm {personalInfo.personal.name}, based in {personalInfo.personal.location}</h3>
            <p className="about-description">{personalInfo.personal.description}</p>

            <div className="about-info">
              <div className="about-box">
                <i className="uil uil-award about-icon"></i>
                <h3 className="about-title">Experience</h3>
                <span className="about-subtitle">{personalInfo.skills.experience}</span>
              </div>

              <div className="about-box">
                <i className="uil uil-suitcase-alt about-icon"></i>
                <h3 className="about-title">Completed</h3>
                <span className="about-subtitle">10 + Projects</span>
              </div>

              <div className="about-box">
                <i className="uil uil-headphones-alt about-icon"></i>
                <h3 className="about-title">Support</h3>
                <span className="about-subtitle">Online 24/7</span>
              </div>
            </div>

            <a href="#contact" className="button">
              <i className="uil uil-navigator button-icon"></i>Contact me
            </a>
          </div>
        </div>
      </section>

      <section className="qualification section">
        <h2 className="section-title" data-heading="My Journey">Qualifications</h2>

        <div className="qualification-container container grid">
          <div className="experience">
            <h3 className="qualification-title">
              <i className="uil uil-suitcase"></i>Experience
            </h3>

            <div className="timeline">
              {personalInfo.about.experience.map((job) => (
                <div className="timeline-item" key={`${job.company}-${job.period}`}>
                  <div className="circle-dot"></div>
                  <h3 className="timeline-title">
                    {job.company}
                    {job.project && <span className="timeline-project"> · {job.project}</span>}
                  </h3>
                  <p className="timeline-text">{job.role}</p>
                  <span className="timeline-date">
                    <i className="uil uil-calendar-alt"></i>{job.period} · {job.location}
                  </span>
                  <ul className="timeline-highlights">
                    {job.highlights.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="education">
            <h3 className="qualification-title">
              <i className="uil uil-graduation-cap"></i>Education
            </h3>

            <div className="timeline">
              {personalInfo.about.education.map((entry) => (
                <div className="timeline-item" key={entry.institution}>
                  <div className="circle-dot"></div>
                  <h3 className="timeline-title">{entry.institution}</h3>
                  <p className="timeline-text">{entry.degree}</p>
                  <span className="timeline-date">
                    <i className="uil uil-calendar-alt"></i>{entry.period}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  )
} 