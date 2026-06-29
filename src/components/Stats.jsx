import "../styles/stats.css";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaCertificate, FaGithub } from "react-icons/fa";

const stats = [
  {
    icon: <FaLaptopCode />,
    number: "3+",
    title: "Projects Completed",
  },
  {
    icon: <FaCode />,
    number: "12+",
    title: "Technologies",
  },
  {
    icon: <FaCertificate />,
    number: "10+",
    title: "Certificates",
  },
  {
    icon: <FaGithub />,
    number: "5+",
    title: "GitHub Commits",
  },
];

function Stats() {
  return (
    <section className="stats">

      <div className="stats-title">

        <p>ACHIEVEMENTS</p>

        <h2>Numbers That Describe Me</h2>

      </div>

      <div className="stats-grid">

        {stats.map((item, index) => (

          <motion.div
            className="stat-card"
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * .15 }}
            viewport={{ once: true }}
          >

            <div className="icon">

              {item.icon}

            </div>

            <h3>{item.number}</h3>

            <span>{item.title}</span>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Stats;