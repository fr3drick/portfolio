import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Award, 
  Briefcase, 
  Code, 
  GraduationCap, 
  ExternalLink,
  Phone,
  Terminal,
  Database,
  Search,
  CheckCircle2,
  Layers,
  Activity,
  Cloud
} from 'lucide-react';

const Header = () => (
  <header className="header">
    <div className="container header-content">
      <div className="logo">FI<span>.</span></div>
      <nav className="nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
      <a href="mailto:fredrickirubor@gmail.com" className="cta-button">Get in Touch</a>
    </div>
  </header>
);

const Hero = () => (
  <section id="hero" className="hero">
    <div className="container hero-content">
      <div className="hero-text">
        <h1 className="name">Fredrick Irubor</h1>
        <h2 className="title">Senior Quality Assurance Engineer</h2>
        <p className="description">
          A certified tester and quality assurance engineer with six years of experience in Performance testing, Test automation, Manual Testing, and API testing. I specialize in optimizing testing workflows and ensuring high-quality software delivery through innovative automation solutions. Outside of work, I am passionate about AI generative technologies, Linux, swimming, reading novels, and jogging.
        </p>
        <div className="hero-links">
          <div className="hero-social">
            <a href="https://linkedin.com/in/Fredrick-irubor" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
            <a href="https://github.com/Fr3drick" target="_blank" rel="noopener noreferrer"><Github /></a>
            <a href="mailto:fredrickirubor@gmail.com"><Mail /></a>
          </div>
          <div className="hero-contact">
            <span className="contact-item"><MapPin size={18} /> Lagos, Nigeria</span>
            <span className="contact-item"><Phone size={18} /> +234 806 160 8679</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => {
  const jobs = [
    {
      company: "Verto Financial Technologies Ltd",
      role: "Senior Quality Analyst",
      period: "02/2024 - Present",
      location: "Lagos",
      achievements: [
        "Championed the API test automation drive using Postman and AWS Codebuild.",
        "Automated over 90% of all API endpoints used in the organization.",
        "Pioneered the setup of automated API performance Testing using JMeter and AWS Codebuild.",
        "Reduced time taken for full API regression test from 18 hours to 45 minutes.",
        "Mentored new colleagues on test automation and general testing best practices."
      ]
    },
    {
      company: "First City Monument Bank",
      role: "Quality Assurance Engineer",
      period: "10/2022 - 02/2024",
      location: "Lagos",
      achievements: [
        "Reduced turnaround time for regression tests on APIs and UIs from 48 hours to 30 minutes with automated test suites.",
        "Employed blackbox test techniques (Boundary value analysis, Equivalence partitioning) to maintain >95% bug-free releases.",
        "Collaborated with DevOps to incorporate high-level tests into CI/CD pipelines (Jenkins, Azure Pipelines).",
        "Used Postman and RestAssured for APIs, Selenium and Cypress for UIs."
      ]
    },
    {
      company: "Access Bank PLC",
      role: "Quality Assurance and Software Tester",
      period: "11/2019 - 10/2022",
      location: "Lagos",
      achievements: [
        "Spearheaded the drive for more test automation in daily activities.",
        "Identified critical applications exposed to high loads and executed performance tests to uncover bottlenecks.",
        "Onboarded team members on Zephyr on JIRA for test case management, moving away from spreadsheets."
      ]
    }
  ];

  return (
    <section id="experience" className="experience bg-alt">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {jobs.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{job.role}</h3>
                  <span className="timeline-date">{job.period}</span>
                </div>
                <h4 className="timeline-company">{job.company}</h4>
                <ul className="achievements">
                  {job.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  const certs = [
    { name: "Certified Tester Advanced Level - Test Analyst, ISTQB", link: "https://atsqa.org/certified-testers/profile/4fbd62c084374414a1c4b6c0d78f1754" },
    { name: "Certified Tester Foundation Level, ISTQB", link: "https://atsqa.org/certified-testers/profile/4fbd62c084374414a1c4b6c0d78f1754" },
    "AWS Certified Cloud Practitioner",
    { name: "Microsoft Certified Azure Developer Associate AZ204", link: "https://learn.microsoft.com/en-us/users/91244425/credentials/728fe088996a4f00" },
    { name: "Microsoft Certified Azure DevOps Engineer Expert AZ400", link: "https://learn.microsoft.com/api/credentials/share/en-us/91244425/4CBEE798725B537A" },
    "Certificate in IT, British Computer Society",
    { name: "Microsoft Certified Azure Fundamentals AZ900", link: "https://www.credly.com/badges/4d5bf5b9-b09c-4059-a9fe-0ce1c6d89cbf" },
    { name: "Microsoft Certified Azure AI Fundamentals AI900", link: "https://www.credly.com/badges/bfa935e9-09d6-4046-9240-04d19ad21a55" },
    { name: "Microsoft Certified Azure Data Fundamentals DP900", link: "https://www.credly.com/badges/ed4b70f8-8bc3-4181-80fe-f376d1a94e20" },
    "Associate Member, Chartered Institute of Bankers Nigeria",
    { name: "IBM - Enterprise Design Thinking Practitioner", link: "https://www.credly.com/badges/aeed950a-53ef-48f4-b607-b56eea150c4a" }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certs-grid">
          {certs.map((cert, index) => (
            <div key={index} className="cert-card">
              <Award className="cert-icon" size={24} />
              {typeof cert === 'string' ? <p>{cert}</p> : <a href={cert.link} target="_blank" rel="noopener noreferrer">{cert.name}</a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: "Performance Testing", category: "Performance", icon: <Activity size={20} /> },
    { name: "JMeter / LoadNinja", category: "Performance", icon: <Activity size={20} /> },
    { name: "Selenium with Java", category: "Automation", icon: <Code size={20} /> },
    { name: "Cypress", category: "Automation", icon: <Code size={20} /> },
    { name: "Postman / Newman", category: "API", icon: <Layers size={20} /> },
    { name: "RestAssured", category: "API", icon: <Layers size={20} /> },
    { name: "Python / JavaScript", category: "Languages", icon: <Terminal size={20} /> },
    { name: "SQL (MSSQL, Oracle, MySQL)", category: "Database", icon: <Database size={20} /> },
    { name: "Manual Testing & reporting", category: "Functional", icon: <Search size={20} /> },
    { name: "Black Box Testing", category: "Functional", icon: <Search size={20} /> },
    { name: "Agile Methodologies", category: "Process", icon: <CheckCircle2 size={20} /> },
    { name: "Linux", category: "DevOps", icon: <Terminal size={20} /> },
    { name: "Cloud (AWS, Azure)", category: "DevOps", icon: <Cloud size={20} /> }
  ];

  return (
    <section id="skills" className="skills bg-alt">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Selenium Test Automation Solution",
      tech: "Selenium, Java, Maven, TestNG",
      desc: "Robust automation framework for web application testing.",
      link: "https://github.com/fr3drick/Selenium_Framework"
    },
    {
      title: "Zipopotamus API Automation",
      tech: "RestAssured, TestNG, Maven",
      desc: "Automated test suite for zip code lookup API services.",
      link: "https://github.com/fr3drick/Zippopotamus-RestAssured"
    },
    {
      title: "JMeterCI",
      tech: "JMeter, GitHub Actions",
      desc: "Performance testing integrated into CI/CD pipelines.",
      link: "https://github.com/fr3drick/jmeterCI"
    },
    {
      title: "NewmanCI",
      tech: "Newman, Postman, GitHub Actions",
      desc: "API test automation integrated into CI/CD pipelines.",
      link: "https://github.com/fr3drick/newmanCI"
    },
    {
      title: "FERN Payment Gateway",
      tech: "Payment gateway",
      desc: "Automated testing for secure payment processing systems.",
      link: "https://fernng.com/"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Key Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} />
                  </a>
                ) : (
                  <ExternalLink size={20} />
                )}
              </div>
              <p className="project-tech">{project.tech}</p>
              <p className="project-desc">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = () => (
  <section id="education" className="education bg-alt">
    <div className="container">
      <h2 className="section-title">Education</h2>
      <div className="edu-card">
        <GraduationCap size={32} className="edu-icon" />
        <div className="edu-content">
          <h3>Bachelor of Engineering (Electrical and Electronic Engineering)</h3>
          <h4>University of Benin | 2012 - 2017</h4>
          <p>Second Class Upper Division</p>
          <p className="edu-project">Project: Design and Implementation of a G.S.M Signal Jammer</p>
        </div>
      </div>
      <div className="edu-card" style={{marginTop: '2rem'}}>
        <GraduationCap size={32} className="edu-icon" />
        <div className="edu-content">
          <h3>Senior Secondary School Certificate Examination (SSCE)</h3>
          <h4>Saint Patrick's Model College | 2006 - 2012</h4>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container footer-content">
      <div className="footer-info">
        <h3>Fredrick Irubor</h3>
        <p>Senior Quality Assurance Engineer</p>
      </div>
      <div className="footer-links">
        <a href="https://linkedin.com/in/Fredrick-irubor" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Fr3drick" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:fredrickirubor@gmail.com">Email</a>
      </div>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Fredrick Irubor. All rights reserved.
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Certifications />
        <Skills />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
