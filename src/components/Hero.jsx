import { motion } from "framer-motion";
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <motion.p
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{duration:.8}}
          className="small"
        >
          FULL STACK DEVELOPER
        </motion.p>

        <motion.h1
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{delay:.3}}
        >
          Manimela
          <br />
          Naga Chakri
        </motion.h1>

        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.6}}
          className="description"
        >
          I build elegant, modern and responsive web applications using
          React, Node.js, Express.js and MongoDB.
        </motion.p>

        <motion.div
          className="buttons"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.9}}
        >

        <div className="hero-buttons">

  <a href="#projects" className="primary-btn">
    Explore Projects
  </a>
  </div>

        </motion.div>

      </div>

      <motion.div
        className="hero-right"
        initial={{opacity:0,x:80}}
        animate={{opacity:1,x:0}}
        transition={{duration:1}}
      >

        <img src="/assets/profile.jpeg" alt="Manimela Naga Chakri" />

      </motion.div>

    </section>
  );
}

export default Hero;