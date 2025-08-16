import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Database, Server, Shield, Download, Award, Users, Clock } from 'lucide-react';
import poojaImage from '../images/pooja.jpeg';

/* 
 * Pooja Sharma Portfolio Component
 * Created by: Pooja Sharma
 * Role: Backend Developer & Database Specialist
 */

const PoojaPortfolio: React.FC = () => {
  const skills = [
    { name: 'Python', level: 90, icon: '🐍' },
    { name: 'SQL/NoSQL', level: 95, icon: '🗄️' },
    { name: 'Django/Flask', level: 85, icon: '⚡' },
    { name: 'PostgreSQL', level: 90, icon: '🐘' },
    { name: 'MongoDB', level: 80, icon: '🍃' },
    { name: 'API Development', level: 90, icon: '🔌' }
  ];

  const projects = [
    {
      title: 'Microservices Architecture',
      description: 'Scalable backend system with Docker and Kubernetes deployment. Built for high-availability enterprise applications.',
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
      link: '#',
      image: '🏗️'
    },
    {
      title: 'Real-time Analytics API',
      description: 'High-performance API handling millions of requests per day. Optimized for speed and scalability.',
      tech: ['Django', 'Redis', 'Celery', 'ElasticSearch'],
      link: '#',
      image: '📊'
    },
    {
      title: 'Data Pipeline System',
      description: 'ETL pipeline for processing large-scale data sets. Automated data processing and analytics workflows.',
      tech: ['Apache Airflow', 'Python', 'AWS S3', 'Pandas'],
      link: '#',
      image: '🔄'
    }
  ];

  const achievements = [
    { number: '25+', label: 'Backend Systems', icon: <Server className="w-6 h-6" /> },
    { number: '4+', label: 'Years Experience', icon: <Clock className="w-6 h-6" /> },
    { number: '50+', label: 'APIs Built', icon: <Database className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime', icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="portfolio-container">
      <div className="portfolio-header pooja-gradient">
        <div className="portfolio-hero">
          <div className="portfolio-avatar-container">
            <div className="portfolio-avatar">
              <img 
                src={poojaImage} 
                alt="Pooja Sharma" 
                className="avatar-image"
              />
              <div className="avatar-ring"></div>
            </div>
          </div>
          <div className="portfolio-info">
            <div className="portfolio-badge">Available for Hire</div>
            <h1 className="portfolio-name">Pooja Sharma</h1>
            <h2 className="portfolio-title">Backend Developer & Database Specialist</h2>
            <p className="portfolio-bio">
              Backend developer with expertise in building robust, scalable systems. 
              Specialized in database optimization, API design, and cloud architecture.
              I transform complex backend challenges into elegant, efficient solutions.
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
            <Database className="section-icon" />
            <h3>Technical Expertise</h3>
            <p className="section-description">My expertise in backend technologies and database systems</p>
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
                    className="skill-progress pooja-progress" 
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
            <p className="section-description">Some of my recent backend and database projects</p>
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
                    <span key={tech} className="tech-tag pooja-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="portfolio-section">
          <div className="section-header">
            <Shield className="section-icon" />
            <h3>Core Competencies</h3>
            <p className="section-description">My specialized areas of expertise</p>
          </div>
          <div className="competencies-grid">
            <div className="competency-card">
              <Database className="competency-icon" />
              <h4>Database Design</h4>
              <p>Expert in designing normalized database schemas and optimizing query performance</p>
            </div>
            <div className="competency-card">
              <Server className="competency-icon" />
              <h4>API Development</h4>
              <p>Building RESTful and GraphQL APIs with comprehensive documentation and testing</p>
            </div>
            <div className="competency-card">
              <Shield className="competency-icon" />
              <h4>Security & Performance</h4>
              <p>Implementing security best practices and performance optimization strategies</p>
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
              <div className="timeline-marker pooja-marker"></div>
              <div className="timeline-content">
                <h4>Senior Backend Developer</h4>
                <span className="timeline-period">2021 - Present</span>
                <p>Architecting and maintaining high-performance backend systems for enterprise clients. Leading technical decisions and mentoring junior developers.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker pooja-marker"></div>
              <div className="timeline-content">
                <h4>Database Administrator</h4>
                <span className="timeline-period">2020 - 2021</span>
                <p>Managing database infrastructure and optimization for large-scale applications. Implementing backup strategies and monitoring solutions.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PoojaPortfolio;