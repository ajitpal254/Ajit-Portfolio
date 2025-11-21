import React, { useState, useEffect } from "react";
import "./App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import resume from "./assets/Ajit Pal - Master.pdf";
import ContactForm from "./ContactForm";

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="animated-bg"></div>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-brand">AJIT PAL</div>
          <ul className="navbar-links">
            <li>
              <button onClick={() => scrollToSection("about")}>About</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("skills")}>Skills</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("experience")}>Experience</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("projects")}>Projects</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("education")}>Education</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")}>Contact</button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content fade-in-up">
          <div className="hero-image-wrapper">
            <img
              src={require("./assets/c9e06d35-838b-425e-863d-542b2aa0d3e8.jpg")}
              alt="Ajit Pal"
              className="hero-image"
            />
          </div>
          <h1 className="hero-title">
            Hi, I'm <span style={{ color: 'var(--primary-light)' }}>Ajit Pal</span>
          </h1>
          <p className="hero-subtitle">Full Stack Developer & Problem Solver</p>
          <p className="hero-description">
            I craft exceptional digital experiences with modern technologies.
            Specializing in building scalable applications that make a
            difference in e-commerce, finance, and beyond.
          </p>
          <div className="hero-buttons">
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              <EmailIcon className="btn-icon" />
              Get In Touch
            </a>
            <a href={resume} download className="btn btn-outline">
              <DownloadIcon className="btn-icon" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate developer with 4+ years of professional experience
          </p>
        </div>
        <div className="cards-grid">
          <div className="card fade-in-up">
            <h3 className="card-title">Who I Am</h3>
            <p className="card-content">
              A highly accomplished Full Stack Developer with over 4 years of
              professional experience in designing, developing, and deploying
              scalable, secure, and high-performance applications across
              e-commerce, retail, and finance sectors.
            </p>
          </div>
          <div className="card fade-in-up">
            <h3 className="card-title">What I Do</h3>
            <p className="card-content">
              I specialize in building modern web applications using Java,
              Spring Boot, Node.js, React, and Angular. My expertise includes
              Microservices architecture, RESTful API development, and
              cloud-native solutions with AWS.
            </p>
          </div>
          <div className="card fade-in-up">
            <h3 className="card-title">My Approach</h3>
            <p className="card-content">
              I believe in writing clean, maintainable code and following Agile
              methodologies. I'm passionate about optimizing performance,
              leading technical initiatives, and collaborating cross-functionally
              to deliver high-impact features.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '800',
              color: 'var(--primary)',
              marginBottom: '0.5rem'
            }}>4+</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
              Years Experience
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '800',
              color: 'var(--primary)',
              marginBottom: '0.5rem'
            }}>10+</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
              Technologies
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '800',
              color: 'var(--primary)',
              marginBottom: '0.5rem'
            }}>3</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
              Major Companies
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '800',
              color: 'var(--primary)',
              marginBottom: '0.5rem'
            }}>100%</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
              Dedication
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            My toolkit for building exceptional applications
          </p>
        </div>
        <div className="skills-grid">
          <div className="skill-card fade-in-up">
            <h4 className="skill-title">Expertise Area</h4>
            <p className="skill-content">
              Web Applications, Java Microservices, REST APIs, Agile Methodology
            </p>
          </div>
          <div className="skill-card fade-in-up">
            <h4 className="skill-title">Languages & Frameworks</h4>
            <p className="skill-content">
              Java, JavaScript, TypeScript, Angular, React, Node.js, HTML5, CSS3
            </p>
          </div>
          <div className="skill-card fade-in-up">
            <h4 className="skill-title">Backend Technologies</h4>
            <p className="skill-content">
              Spring Boot, Microservices, Maven, Kafka, Express.js
            </p>
          </div>
          <div className="skill-card fade-in-up">
            <h4 className="skill-title">Databases</h4>
            <p className="skill-content">
              MySQL, Oracle, MongoDB, Firebase, MSSQL, DBeaver
            </p>
          </div>
          <div className="skill-card fade-in-up">
            <h4 className="skill-title">DevOps & Cloud</h4>
            <p className="skill-content">
              Docker, AWS, Jenkins, GitLab, CI/CD Pipelines
            </p>
          </div>
          <div className="skill-card fade-in-up">
            <h4 className="skill-title">Tools & Testing</h4>
            <p className="skill-content">
              Git, Jira, Postman, SoapUI, Bitbucket, REST API Testing
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Building impactful solutions across industries
          </p>
        </div>
        <div className="cards-grid">
          {/* BMO */}
          <div className="card fade-in-up">
            <WorkIcon style={{ color: "var(--primary)", fontSize: "2rem", marginBottom: "1rem" }} />
            <h3 className="card-title">Full Stack Developer</h3>
            <p className="card-subtitle">BMO – Capitex Project | April 2025 – Present</p>
            <ul className="card-list">
              <li className="card-list-item">
                Building stock-based financial services using Java 17 and microservices architecture
              </li>
              <li className="card-list-item">
                Implemented Kafka for real-time event streaming and asynchronous communication
              </li>
              <li className="card-list-item">
                Integrated AWS cloud services to manage infrastructure and deployments
              </li>
              <li className="card-list-item">
                Used MSSQL for data storage related to trading and transactions
              </li>
            </ul>
            <p className="project-tech">Tech Stack: Java 17, Kafka, AWS, MSSQL</p>
          </div>

          {/* Walmart */}
          <div className="card fade-in-up">
            <WorkIcon style={{ color: "var(--primary)", fontSize: "2rem", marginBottom: "1rem" }} />
            <h3 className="card-title">Software Developer</h3>
            <p className="card-subtitle">Walmart Canada | Aug 2023 – Feb 2024</p>
            <ul className="card-list">
              <li className="card-list-item">
                Integrated new search and filtering features using Java and Spring Boot
              </li>
              <li className="card-list-item">
                Implemented RESTful APIs for e-commerce cart and checkout workflows
              </li>
              <li className="card-list-item">
                Contributed to improving application performance and reducing API response time
              </li>
            </ul>
            <p className="project-tech">Tech Stack: Java, Spring Boot, REST APIs</p>
          </div>

          {/* Meson */}
          <div className="card fade-in-up">
            <WorkIcon style={{ color: "var(--primary)", fontSize: "2rem", marginBottom: "1rem" }} />
            <h3 className="card-title">Software Engineer</h3>
            <p className="card-subtitle">Meson Technologies | Jan 2021 – June 2023</p>
            <ul className="card-list">
              <li className="card-list-item">
                Developed microservice-based applications for retail clients using Spring Boot and React
              </li>
              <li className="card-list-item">
                Led the implementation of CI/CD pipelines using Jenkins and Docker
              </li>
              <li className="card-list-item">
                Worked closely with QA and business teams to ensure timely delivery
              </li>
            </ul>
            <p className="project-tech">Tech Stack: Spring Boot, React, Jenkins, Docker</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world applications I've built and deployed
          </p>
        </div>
        <div className="cards-grid">
          <div className="card project-card fade-in-up">
            <CodeIcon style={{ color: "var(--primary)", fontSize: "2rem", marginBottom: "1rem" }} />
            <h3 className="card-title">3Amshopp</h3>
            <p className="card-subtitle">Multi-Vendor E-Commerce Marketplace</p>
            <ul className="card-list">
              <li className="card-list-item">
                Built a scalable React-based front-end for a Canadian multi-vendor platform
              </li>
              <li className="card-list-item">
                Integrated Firebase for authentication and cloud storage
              </li>
              <li className="card-list-item">
                Deployed frontend on Netlify and backend (Node.js APIs) on Render
              </li>
              <li className="card-list-item">
                Implemented real-time inventory management and order processing
              </li>
            </ul>
            <div style={{
              background: 'rgba(52, 152, 219, 0.1)',
              border: '1px solid rgba(52, 152, 219, 0.3)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.875rem',
              marginTop: '1rem',
              fontSize: '0.875rem'
            }}>
              <strong style={{ color: 'var(--primary)' }}>📝 Note for Recruiters:</strong>
              <p style={{ margin: '0.5rem 0 0 0', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                The backend is hosted on a free tier service and may take 50-60 seconds to spin up on first visit.
                Subsequent requests will be instant. Thank you for your patience!
              </p>
            </div>
            <p className="project-tech">React, Node.js, Firebase, MongoDB, Netlify, Render</p>
            <div className="project-link">
              <a
                href="https://3amshoppme.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Live Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic foundation for technical excellence
          </p>
        </div>
        <div className="cards-grid">
          <div className="card fade-in-up">
            <SchoolIcon style={{ color: "var(--primary)", fontSize: "2rem", marginBottom: "1rem" }} />
            <h3 className="card-title">
              Mobile Application Design and Development
            </h3>
            <p className="card-subtitle">Post Graduate Certificate</p>
            <p className="card-content">
              Lambton College, Toronto | Jan 2020 - Aug 2021
            </p>
          </div>
          <div className="card fade-in-up">
            <SchoolIcon style={{ color: "var(--primary)", fontSize: "2rem", marginBottom: "1rem" }} />
            <h3 className="card-title">Bachelor of Computer Applications</h3>
            <p className="card-subtitle">Undergraduate Degree</p>
            <p className="card-content">
              Punjab Technical University | July 2016 - Aug 2019
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="section-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            I'm always open to discussing new opportunities and projects
          </p>
        </div>

        <ContactForm />

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
            Or connect with me on:
          </p>
          <div className="hero-buttons">
            <a
              href="https://www.linkedin.com/in/ajit-pal-513043350/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <LinkedInIcon className="btn-icon" />
              LinkedIn
            </a>
            <a
              href="https://github.com/ajitpal254"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <GitHubIcon className="btn-icon" />
              GitHub
            </a>
            <a href={resume} download className="btn btn-outline">
              <DownloadIcon className="btn-icon" />
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-social">
            <a
              href="https://www.linkedin.com/in/ajit-pal-513043350/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/ajitpal254"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <GitHubIcon />
            </a>
          </div>
          <p className="footer-text">
            © 2025 Ajit Pal. Crafted with passion and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
