import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Download, Award, Users, Clock } from 'lucide-react';
import dixitImage from '../images/dixit.jpeg';

/* 
 * Dixit Gami Portfolio Component
 * Created by: Dixit Gami
 * Role: Full Stack Developer
 */

const DixitPortfolio: React.FC = () => {
  const skills = [
    { name: 'React.js', level: 90, icon: '⚛️' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'TypeScript', level: 80, icon: '🔷' },
    { name: 'MongoDB', level: 75, icon: '🍃' },
    { name: 'Express.js', level: 85, icon: '🚀' },
    { name: 'AWS', level: 70, icon: '☁️' }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      image: '🛒'
    },
    {
      title: 'Task Management App',
      description: 'Real-time collaborative task management with socket.io. Includes drag-and-drop interface and team collaboration features.',
      tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      link: '#',
      image: '📋'
    },
    {
      title: 'API Gateway Service',
      description: 'Microservices architecture with rate limiting and authentication. Built for high-performance enterprise applications.',
      tech: ['Node.js', 'Redis', 'Docker', 'JWT'],
      link: '#',
      image: '🔐'
    }
  ];

  const achievements = [
    { number: '50+', label: 'Projects Completed', icon: <Code className="w-6 h-6" /> },
    { number: '3+', label: 'Years Experience', icon: <Clock className="w-6 h-6" /> },
    { number: '100+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> },
    { number: '15+', label: 'Awards Won', icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <div className="portfolio-container">
      <div className="portfolio-header dixit-gradient">
        <div className="portfolio-hero">
          <div className="portfolio-avatar-container">
            <div className="portfolio-avatar">
              <img 
                src={dixitImage} 
                alt="Dixit Gami" 
                className="avatar-image"
              />
              <div className="avatar-ring"></div>
            </div>
          </div>
          <div className="portfolio-info">
            <div className="portfolio-badge">Available for Hire</div>
            <h1 className="portfolio-name">Dixit Gami</h1>
            <h2 className="portfolio-title">Full Stack Developer</h2>
            <p className="portfolio-bio">
              Passionate full-stack developer with 3+ years of experience building 
              scalable web applications. Specializing in React, Node.js, and cloud technologies.
              I love turning complex problems into simple, beautiful solutions.
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
            <Code className="section-icon" />
            <h3>Technical Skills</h3>
            <p className="section-description">My expertise in various technologies and frameworks</p>
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
                    className="skill-progress dixit-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="portfolio-section">
          <div className="section-header">
            <Server className="section-icon" />
            <h3>Featured Projects</h3>
            <p className="section-description">Some of my recent work that showcases my skills</p>
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
                    <span key={tech} className="tech-tag dixit-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="portfolio-section">
          <div className="section-header">
            <Database className="section-icon" />
            <h3>Experience Highlights</h3>
            <p className="section-description">My professional journey and growth</p>
          </div>
          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-marker dixit-marker"></div>
              <div className="timeline-content">
                <h4>Senior Full Stack Developer</h4>
                <span className="timeline-period">2022 - Present</span>
                <p>Leading development of enterprise web applications using React and Node.js. Mentoring junior developers and implementing best practices.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker dixit-marker"></div>
              <div className="timeline-content">
                <h4>Full Stack Developer</h4>
                <span className="timeline-period">2021 - 2022</span>
                <p>Built scalable APIs and responsive frontends for various client projects. Collaborated with cross-functional teams to deliver high-quality solutions.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DixitPortfolio;