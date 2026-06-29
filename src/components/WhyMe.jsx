import "../styles/whyme.css";
import { motion } from "framer-motion";

function WhyMe() {
  return (
    <section className="whyme">

      <motion.div

      initial={{opacity:0,x:-60}}

      whileInView={{opacity:1,x:0}}

      viewport={{once:true}}

      >

      <p>WHY ME</p>

      <h2>

      Let's Build Something Amazing Together.

      </h2>

      </motion.div>

      <motion.div

      initial={{opacity:0,x:60}}

      whileInView={{opacity:1,x:0}}

      viewport={{once:true}}

      >

      <ul>

      <li>✔ Clean and Responsive UI</li>

      <li>✔ MERN Stack Development</li>

      <li>✔ REST API Integration</li>

      <li>✔ Authentication Systems</li>

      <li>✔ Problem Solving Skills</li>

      <li>✔ Team Collaboration</li>

      </ul>

      </motion.div>

    </section>
  );
}

export default WhyMe;