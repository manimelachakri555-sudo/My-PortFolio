import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        MN
      </div>

     <ul className="nav-links">
  <li><a href="/">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#education">Journey</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>

     <a
  href="/resume/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="resume-btn"
>
  Resume
</a>

    </nav>
  );
}

export default Navbar;