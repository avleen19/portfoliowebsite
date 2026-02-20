import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* LEFT SIDE - FORM */}
        <div className="contact-left">
          <h2>Get In Touch</h2>
          <p>Have a project in mind or want to collaborate? Send me a message.</p>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required />
            <button type="submit" className="primary-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE - LINKS */}
        <div className="contact-right">
          <h3>Contact Info</h3>

          <div className="contact-links">
            <a href="mailto:avleenkaur1904@gmail.com">
              📧 avleenkaur1904@gmail.com
            </a>

            <a
              href="https://github.com/avleen19"
              target="_blank"
              rel="noreferrer"
            >
              💻 GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/avleen-kaur-835b93269"
              target="_blank"
              rel="noreferrer"
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
