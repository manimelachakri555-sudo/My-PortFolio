import "../styles/contact.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-left">

        <p>GET IN TOUCH</p>

        <h2>Let's Build Something Great Together.</h2>

        <p className="contact-text">
          I'm currently looking for internship opportunities and exciting
          projects. Feel free to contact me.
        </p>

        <div className="contact-info">

          <div>
            <FaEnvelope />
            <span>manimelachakri555@gmail.com</span>
          </div>

          <div>
            <FaPhone />
            <span>+91 9912567489</span>
          </div>
<div>
  📍
  <span>Kakinada, Andhra Pradesh</span>
</div>
          <div>
            <FaGithub />
            <a href="github.com/manimelachakri555-sudo" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>

          <div>
            <FaLinkedin />
            <a href="linkedin.com/in/naga-chakri-manimela" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>

        </div>

      </div>

      <form className="contact-form">

        <input type="text" placeholder="Your Name" />

        <input type="email" placeholder="Your Email" />

        <textarea
          rows="6"
          placeholder="Write your message..."
        ></textarea>

        <button type="submit">Send Message</button>

      </form>

    </section>
  );
}

export default Contact;