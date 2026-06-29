import "../styles/education.css";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024",
    title: "Started B.Tech in Computer Science",
    desc: "Began my Computer Science Engineering journey, learning programming fundamentals and web development."
  },
  {
    year: "2025",
    title: "Frontend Development",
    desc: "Built responsive websites using HTML, CSS, JavaScript and React."
  },
  {
    year: "2026",
    title: "MERN Stack Projects",
    desc: "Developed full-stack applications using React, Node.js, Express.js and MongoDB."
  },
  {
    year: "2028",
    title: "Graduation",
    desc: "Expected graduation with a Bachelor's degree in Computer Science Engineering."
  }
];

function Education() {
  return (
    <section className="education" id="education">
      <div className="education-heading">
        <p>MY JOURNEY</p>
        <h2>Education & Experience</h2>
      </div>

      <div className="timeline">
        {timeline.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;