import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Palette, Monitor, Smartphone, Download, Award, Users, Clock } from 'lucide-react';
import rajvirImage from '../images/rajveer.jpeg';

/* 
 * rajvir Singh Portfolio Component
 * Created by: rajvir Singh
 * Role: Frontend Developer & UI/UX Designer
 */

const RajvirPortfolio: React.FC = () => {
  const skills = [
    { name: 'React.js', level: 95, icon: '⚛️' },
    { name: 'UI/UX Design', level: 90, icon: '🎨' },
    { name: 'Figma', level: 85, icon: '🎯' },
    { name: 'CSS/Sass', level: 90, icon: '💅' },
    { name: 'JavaScript', level: 85, icon: '🟨' },
    { name: 'Adobe Creative Suite', level: 80, icon: '✨' }
  ];

  const projects = [
    {
      title: 'Banking App Redesign',
      description: 'Complete UI/UX redesign of mobile banking application. Improved user engagement by 40% and reduced support tickets.',
      tech: ['Figma', 'React Native', 'Framer Motion'],
      link: '#',
      image: '🏦'
    },
    {
      title: 'SaaS Dashboard',
      description: 'Modern analytics dashboard with interactive data visualization. Built for enterprise clients with real-time data updates.',
      tech: ['React', 'D3.js', 'Tailwind CSS'],
      link: '#',
      image: '📈'
    },
    {
      title: 'E-learning Platform',
      description: 'Responsive web application for online course management. Features adaptive learning paths and progress tracking.',
      tech: ['Vue.js', 'Vuetify', 'Chart.js'],
      link: '#',
      image: '📚'
    }
  ];

  const achievements = [
    { number: '100+', label: 'Designs Created', icon: <Palette className="w-6 h-6" /> },
    { number: '5+', label: 'Years Experience', icon: <Clock className="w-6 h-6" /> },
    { number: '75+', label: 'Projects Delivered', icon: <Monitor className="w-6 h-6" /> },
    { number: '95%', label: 'Client Satisfaction', icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <div className="portfolio-container">
      <div className="portfolio-header rajvir-gradient">
        <div className="portfolio-hero">
          <div className="portfolio-avatar-container">
            <div className="portfolio-avatar">
              <img 
                src={rajvirImage} 
                alt="rajvir Singh" 
                className="avatar-image"
              />
              <div className="avatar-ring"></div>
            </div>
          </div>
          <div className="portfolio-info">
            <div className="portfolio-badge">Available for Hire</div>
            <h1 className="portfolio-name">rajvir Singh</h1>
            <h2 className="portfolio-title">Frontend Developer & UI/UX Designer</h2>
            <p className="portfolio-bio">
              Creative frontend developer and designer with a passion for creating 
              beautiful, intuitive user experiences. Expert in modern JavaScript frameworks and design tools.
              I craft digital experiences that users love to interact with.
            </p>
            <div className="portfolio-actions">
              <a href="#" className="portfolio-btn primary">
                <Download size={18} />
                <span>Download CV</span>
              </a>
              <a href="#" className="portfolio-btn secondary">
                <Mail size={18} />
                <span>Get in Touch</span>
              </a>
            </div>
            <div className="portfolio-links">
              <a href="#" className="portfolio-link" title="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="portfolio-link" title="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="portfolio-link" title="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-content">
        {/* Achievements Section */}
        <section className="achievements-section">
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <div className="achievement-number">{achievement.number}</div>
                <div className="achievement-text">{achievement.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="portfolio-section">
          <div className="section-header">
            <Palette className="section-icon" />
            <h3>Design & Development Skills</h3>
            <p className="section-description">My expertise in frontend technologies and design tools</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-header">
                  <div className="skill-info">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress rajvir-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="portfolio-section">
          <div className="section-header">
            <Monitor className="section-icon" />
            <h3>Featured Projects</h3>
            <p className="section-description">Some of my recent design and development work</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <span className="project-emoji">{project.image}</span>
                </div>
                <div className="project-header">
                  <h4 className="project-title">{project.title}</h4>
                  <a href={project.link} className="project-link">
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag rajvir-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="portfolio-section">
          <div className="section-header">
            <Smartphone className="section-icon" />
            <h3>Design Philosophy</h3>
            <p className="section-description">My approach to creating exceptional user experiences</p>
          </div>
          <div className="philosophy-grid">
            <div className="philosophy-card">
              <h4>User-Centered Design</h4>
              <p>Every design decision is made with the end user in mind, ensuring intuitive and accessible experiences.</p>
            </div>
            <div className="philosophy-card">
              <h4>Responsive First</h4>
              <p>Mobile-first approach ensuring seamless experiences across all devices and screen sizes.</p>
            </div>
            <div className="philosophy-card">
              <h4>Performance Optimization</h4>
              <p>Clean, efficient code that delivers fast loading times and smooth interactions.</p>
            </div>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="section-header">
            <Clock className="section-icon" />
            <h3>Experience Highlights</h3>
            <p className="section-description">My professional journey and growth</p>
          </div>
          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-marker rajvir-marker"></div>
              <div className="timeline-content">
                <h4>Senior Frontend Developer</h4>
                <span className="timeline-period">2022 - Present</span>
                <p>Leading UI/UX design and frontend development for multiple client projects. Mentoring design teams and implementing best practices.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker rajvir-marker"></div>
              <div className="timeline-content">
                <h4>UI/UX Designer</h4>
                <span className="timeline-period">2020 - 2022</span>
                <p>Designed user interfaces and experiences for web and mobile applications. Collaborated with development teams to ensure design feasibility.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RajvirPortfolio;