export default function About() {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section-title" data-heading="My Intro">About me</h2>

        <div className="about-container container grid">
          <img src="/about-img.png" alt="" className="about-img" />

          <div className="about-data">
            <h3 className="about-heading">Hi, I'm Manish Jha, based in India</h3>
            <p className="about-description">I'm a game developer, with extensive knowledge and years of experience,
              working with quality work in game technologies, UI and UX design</p>

            <div className="about-info">
              <div className="about-box">
                <i className="uil uil-award about-icon"></i>
                <h3 className="about-title">Experience</h3>
                <span className="about-subtitle">6 + Years</span>
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
          <div className="education">
            <h3 className="qualification-title">
              <i className="uil uil-graduation-cap"></i>Education
            </h3>

            <div className="timeline">
              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">SOS Hermann Gmeiner School (Faridabad, Haryana)</h3>
                <p className="timeline-text">High School</p>
                <span className="timeline-date">
                  <i className="uil uil-calendar-alt"></i>2013 - 2016
                </span>
              </div>

              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">Kalinga University (Chhattisgarh, India)</h3>
                <p className="timeline-text">Bachalor in Computer Application</p>
                <span className="timeline-date">
                  <i className="uil uil-calendar-alt"></i>2016 - 2019
                </span>
              </div>

              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">IITB University (Mumbai, India)</h3>
                <p className="timeline-text">Masters in ML and AI</p>
                <span className="timeline-date">
                  <i className="uil uil-calendar-alt"></i>2025 - Present
                </span>
              </div>
            </div>
          </div>

          <div className="experience">
            <h3 className="qualification-title">
              <i className="uil uil-suitcase"></i>Experience
            </h3>

            <div className="timeline">
              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">Passion Gaming Pvt. Ltd. (Gurugram, India)</h3>
                <p className="timeline-text">Senior Unity Developer SDE-II</p>
                <span className="timeline-date">
                  <i className="uil uil-calendar-alt"></i>2024 - Present
                </span>
              </div>

              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">Jurval Corp. (Navarra, Spain)</h3>
                <p className="timeline-text">Team Lead SDE-II</p>
                <span className="timeline-date">
                  <i className="uil uil-calendar-alt"></i>2023 - 2024
                </span>
              </div>

              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">Techbeliever Pvt. Ltd. (Noida, India)</h3>
                <p className="timeline-text">Unity Developer SDE-I</p>
                <span className="timeline-date">
                  <i className="uil uil-calendar-alt"></i>2021 - 2023
                </span>
              </div>

              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">Pinktech Design (Delhi, India)</h3>
                <p className="timeline-text">Junior Unity Developer</p>
                <span className="timeline-date">
                  <i className="uil uil-calendar-alt"></i>2020 - 2021
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 