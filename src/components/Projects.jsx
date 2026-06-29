import "../styles/projects.css";
import projects from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-title">
        <p>FEATURED PROJECTS</p>
        <h2>My Best Work</h2>
      </div>

      {projects.map((project) => (

        <div className="project-card" key={project.id}>

          <div className="hero-image">
            <img src={project.hero} alt={project.title} />
          </div>

          <div className="gallery">

            {project.gallery.map((image, index) => (

              <img
                key={index}
                src={image}
                alt={`${project.title}-${index}`}
              />

            ))}

          </div>

          <div className="project-info">

            <h2>{project.title}</h2>

            <h4>{project.subtitle}</h4>

            <p>{project.description}</p>

            <h3>Key Features</h3>

            <ul>

              {project.features.map((feature, index) => (

                <li key={index}>✓ {feature}</li>

              ))}

            </ul>

            <div className="tech">

              {project.tech.map((tech, index) => (

                <span key={index}>{tech}</span>

              ))}

            </div>

            <div className="buttons">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>

            </div>

          </div>

        </div>

      ))}

    </section>
  );
}

export default Projects;