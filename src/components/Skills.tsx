import personalInfo from '@/data/personalInfo.json'

// Capability matrix. Each domain names the tech and then says where it was
// actually used — the `applied` line is the part that carries weight, so it is
// never optional in the data.
export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title" data-heading="My Abilities">What I work with</h2>

      <div className="skills-matrix container">
        {personalInfo.skills.matrix.map((domain) => (
          <article className="skills-domain" key={domain.id}>
            <header className="skills-domain-head">
              <i className={`${domain.icon} skills-domain-icon`}></i>
              <h3 className="skills-domain-title">{domain.title}</h3>
            </header>

            <ul className="skills-tags">
              {domain.tech.map((tech) => (
                <li className="skills-tag" key={tech}>{tech}</li>
              ))}
            </ul>

            <p className="skills-applied">{domain.applied}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
