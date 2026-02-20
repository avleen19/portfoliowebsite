import "../styles/home.css";

export default function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h4 className="intro">👋 Hello, I'm</h4>

        <h1>
          Avleen <span className="highlight">Kaur</span>
        </h1>

        <h2 className="role">
          Software Engineer | MERN | Java | AWS
        </h2>

        <p className="description">
          I build scalable full-stack applications and love solving
          complex backend problems while crafting clean frontend experiences.
        </p>

        <div className="hero-buttons">
          {/* Scroll to Projects */}
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          {/* Scroll to Contact */}
          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="socials">
          <a
            href="https://github.com/avleen19"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/avleen-kaur-835b93269"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:avleenkaur1904@gmail.com">
            Email
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="glow-circle"></div>
      </div>
    </section>
  );
}
