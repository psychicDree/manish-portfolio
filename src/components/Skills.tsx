'use client'

import { useState } from 'react'
import personalInfo from '@/data/personalInfo.json'

interface SkillData {
  name: string
  percentage: number
}

interface SkillCategory {
  id: string
  title: string
  subtitle: string
  icon: string
  skills: SkillData[]
}

// Convert JSON skills data to component format
const skillCategories: SkillCategory[] = [
  {
    id: personalInfo.skills.categories.unityDeveloper.id,
    title: personalInfo.skills.categories.unityDeveloper.title,
    subtitle: personalInfo.skills.categories.unityDeveloper.subtitle,
    icon: personalInfo.skills.categories.unityDeveloper.icon,
    skills: personalInfo.skills.categories.unityDeveloper.skills
  },
  {
    id: personalInfo.skills.categories.levelDesigner.id,
    title: personalInfo.skills.categories.levelDesigner.title,
    subtitle: personalInfo.skills.categories.levelDesigner.subtitle,
    icon: personalInfo.skills.categories.levelDesigner.icon,
    skills: personalInfo.skills.categories.levelDesigner.skills
  },
  {
    id: personalInfo.skills.categories.multiplayerDevelopment.id,
    title: personalInfo.skills.categories.multiplayerDevelopment.title,
    subtitle: personalInfo.skills.categories.multiplayerDevelopment.subtitle,
    icon: personalInfo.skills.categories.multiplayerDevelopment.icon,
    skills: personalInfo.skills.categories.multiplayerDevelopment.skills
  },
  {
    id: personalInfo.skills.categories.nativeDevelopment.id,
    title: personalInfo.skills.categories.nativeDevelopment.title,
    subtitle: personalInfo.skills.categories.nativeDevelopment.subtitle,
    icon: personalInfo.skills.categories.nativeDevelopment.icon,
    skills: personalInfo.skills.categories.nativeDevelopment.skills
  }
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('unityDeveloper')

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title" data-heading="My Abilities">My Experience</h2>

      <div className="skills-container container grid">
        <div className="skills-tabs">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className={`skills-header ${activeCategory === category.id ? 'skills-active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <i className={`${category.icon} skills-icon`}></i>
              <div className="skills-header-content">
                <h1 className="skills-title">{category.title}</h1>
                <span className="skills-subtitle">{category.subtitle}</span>
              </div>
              <i className="uil uil-angle-down skills-arrow"></i>
            </div>
          ))}
        </div>

        <div className="skills-content">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className={`skills-group ${activeCategory === category.id ? 'skills-active' : ''}`}
              data-content
              id={category.id}
            >
              <div className="skills-list grid">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skills-data">
                    <div className="skills-titles">
                      <h3 className="skills-name">{skill.name}</h3>
                      <span className="skills-number">{skill.percentage}%</span>
                    </div>
                    <div className="skills-bar">
                      <span 
                        className="skills-percentage" 
                        style={{ width: `${skill.percentage}%` }}
                      ></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 