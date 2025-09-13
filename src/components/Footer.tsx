import personalInfo from '@/data/personalInfo.json'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <div className="footer-container container grid">
          <div>
            <h1 className="footer-title">Manish Jha</h1>
            <span className="footer-subtitle">Game Developer</span>
          </div>

          <ul className="footer-links">
            <li>
              <a href="#work" className="footer-links">Work</a>
            </li>
            <li>
              <a href="#contact" className="footer-links">Contact</a>
            </li>
          </ul>

          <div className="footer-socials">
            <a href={personalInfo.social.github.url} target="_blank" className="footer-social">
              <i className={personalInfo.social.github.icon}></i>
            </a>

            <a href="https://www.instagram.com" target="_blank" className="footer-social">
              <i className="uil uil-instagram"></i>
            </a>

            <a href="https://www.x.com" target="_blank" className="footer-social">
              <i className="uil uil-twitter"></i>
            </a>
          </div>
        </div>

        <p className="footer-copy">
          &#169; <a href="https://codepen.io/leonam-silva-de-souza">ULTRA CODE</a>. All rights reserved
        </p>
      </div>
    </footer>
  )
} 