import "../styles/about.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-tag">ABOUT ME</p>

          <h2>
            Building Digital
            <br />
            Experiences That
            <br />
            Matter.
          </h2>
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            I'm <strong>Manimela Naga Chakri</strong>, a Computer Science
            Engineering student passionate about Full Stack Development.
            I enjoy transforming ideas into responsive, scalable and
            user-friendly web applications using modern technologies.
          </p>

          <div className="about-grid">

            <div>
              <h3>Frontend</h3>
              <span>React • JavaScript • HTML • CSS</span>
            </div>

            <div>
              <h3>Backend</h3>
              <span>Node.js • Express • MongoDB</span>
            </div>

            <div>
              <h3>Programming</h3>
              <span>Java • Python</span>
            </div>

            <div>
              <h3>Goal</h3>
              <span>Software Engineer</span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;