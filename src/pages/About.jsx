import "../styles/about.css";

export default function About() {
  return (
    <section id="about" className="about-section">

      <h2 className="section-title">About Me</h2>

      <div className="about-container">

        {/* LEFT SIDE TEXT */}
        <div className="about-content">
          <p className="about-text">
            I am <strong>Avleen Kaur</strong>, a Computer Science Engineering student 
             passionate about building scalable full-stack 
            applications and solving real-world problems through clean architecture 
            and efficient code.
          </p>

          <p className="about-text">
            I specialize in MERN stack development, backend systems using Java 
            and Node.js, and cloud deployment using AWS. My strong foundation in 
            Data Structures & Algorithms helps me design optimized and reliable systems.
          </p>

          <p className="about-text">
            I have built projects ranging from e-commerce platforms to 
            machine learning applications, combining frontend excellence 
            with robust backend engineering.
          </p>

          {/* <div className="contact-info">
            <p><strong>Email:</strong> avleenkaur1904@gmail.com</p>
            <p><strong>LinkedIn:</strong> linkedin.com/in/avleen-kaur-835b93269</p>
            <p><strong>GitHub:</strong> github.com/avleen19</p>
          </div> */}
        </div>

        {/* RIGHT SIDE SKILLS */}
        <div className="skills-container">

          <div className="skill-category">
            <h3>Languages</h3>
            <div className="skills">
              <div className="skill-box">Java</div>
              <div className="skill-box">C++</div>
              <div className="skill-box">JavaScript</div>
              <div className="skill-box">SQL</div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Web & Backend</h3>
            <div className="skills">
              <div className="skill-box">React.js</div>
              <div className="skill-box">Node.js</div>
              <div className="skill-box">Express.js</div>
              <div className="skill-box">REST APIs</div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Database & Cloud</h3>
            <div className="skills">
              <div className="skill-box">MySQL</div>
              <div className="skill-box">MongoDB</div>
              <div className="skill-box">AWS</div>
              <div className="skill-box">MongoDB Atlas</div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Tools</h3>
            <div className="skills">
              <div className="skill-box">Git</div>
              <div className="skill-box">Docker</div>
              <div className="skill-box">Postman</div>
              <div className="skill-box">VS Code</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
