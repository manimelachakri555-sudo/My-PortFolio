import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <h2>Manimela Naga Chakri</h2>

      <p>
        Full Stack Developer • MERN Stack • React • Node.js
      </p>

      <hr />

      <span>
        © {new Date().getFullYear()} Manimela Nagachakri. All Rights Reserved.
      </span>

    </footer>
  );
}

export default Footer;