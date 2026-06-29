import "../styles/skills.css";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, name: "HTML5", level: "Intermediate" },
  { icon: <FaCss3Alt />, name: "CSS3", level: "Intermediate" },
  { icon: <FaJs />, name: "JavaScript", level: "Beginner" },
  { icon: <FaReact />, name: "React", level: "Beginner" },
  { icon: <FaNodeJs />, name: "Node.js", level: "Beginner" },
  { icon: <SiExpress />, name: "Express.js", level: "Beginner" },
  { icon: <SiMongodb />, name: "MongoDB", level: "Beginner" },
  { icon: <FaJava />, name: "Java", level: "Intermediate" },
  { icon: <FaPython />, name: "Python", level: "Intermediate" },
  { icon: <FaGitAlt />, name: "Git", level: "Beginner" },
  { icon: <FaGithub />, name: "GitHub", level: "Intermediate" },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <p>MY SKILLS</p>
        <h2>Technologies I Work With</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="skill-icon">{skill.icon}</div>

            <h3>{skill.name}</h3>

            <span>{skill.level}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;