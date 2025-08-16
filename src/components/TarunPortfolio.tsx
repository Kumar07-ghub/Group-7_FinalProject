import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Cloud, Settings, Zap, Download, Award, Users, Clock } from 'lucide-react';
import tarunImage from '../images/tarun.jpeg';

/* 
 * TarunKumar Abburi Portfolio Component
 * Created by: TarunKumar Abburi
 * student ID: 8992974
 * Role: DevOps Engineer & Cloud Architect
 */

const TarunPortfolio: React.FC = () => {
  const skills = [
    { name: 'AWS/Azure', level: 85, icon: '☁️' },
    { name: 'Docker/Kubernetes', level: 90, icon: '🐳' },
    { name: 'CI/CD Pipelines', level: 85, icon: '🔄' },
    { name: 'Terraform', level: 80, icon: '🏗️' },
    { name: 'Jenkins', level: 75, icon: '🤖' },
    { name: 'Linux/Unix', level: 90, icon: '🐧' }
  ];

  const projects = [
    {
      title: 'Cloud Migration Project',
      description: 'Migrated legacy infrastructure to AWS with 40% cost reduction. Implemented automated scaling and monitoring solutions.',
      tech: ['AWS', 'Terraform', 'Docker', 'Jenkins'],
      link: '#',
      image: '🚀'
    },
    {
      title: 'Automated Deployment Pipeline',
      description: 'CI/CD pipeline reducing deployment time from hours to minutes. Built with GitLab CI and Kubernetes for scalability.',
      tech: ['Kubernetes', 'GitLab CI', 'Helm', 'Prometheus'],
      link: '#',
      image: '⚡'
    },
    {
      title: 'Infrastructure Monitoring',
      description: 'Complete monitoring solution with alerting and dashboards. Real-time visibility into system performance and health.',
      tech: ['Grafana', 'Prometheus', 'ElasticSearch', 'Kibana'],
      link: '#',
      image: '📊'
    }
  ];

  const achievements = [
    { number: '40%', label: 'Cost Reduction', icon: <Cloud className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Achieved', icon: <Zap className="w-6 h-6" /> },
    { number: '85%', label: 'Faster Deployments', icon: <Settings className="w-6 h-6" /> },
    { number: '30+', label: 'Infrastructure Projects', icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <div className="portfolio-container">
      <div className="portfolio-header tarun-gradient">
        <div className="portfolio-hero">
          <div className="portfolio-avatar-container">
            <div className="portfolio-avatar">
              <img 
                src={tarunImage} 
                alt="TarunKumar Abburi" 
                className="avatar-image"
              />
              <div className="avatar-ring"></div>
            </div>
          </div>
          <div className="portfolio-info">
            <div className="portfolio-badge">Available for Hire</div>
            <h1 className="portfolio-name">TarunKumar Abburi</h1>
            <h2 className="portfolio-title">DevOps Engineer & Cloud Architect</h2>
            <p className="portfolio-bio">
              DevOps engineer passionate about automation, cloud infrastructure, and 
              continuous deployment. Expert in containerization and monitoring solutions.
              I build robust, scalable infrastructure that powers modern applications.
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
            <Cloud className="section-icon" />
            <h3>DevOps & Cloud Skills</h3>
            <p className="section-description">My expertise in cloud technologies and DevOps practices</p>
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
                    className="skill-progress tarun-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="portfolio-section">
          <div className="section-header">
            <Settings className="section-icon" />
            <h3>Featured Projects</h3>
            <p className="section-description">Some of my recent infrastructure and automation projects</p>
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
                    <span key={tech} className="tech-tag tarun-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="portfolio-section">
          <div className="section-header">
            <Zap className="section-icon" />
            <h3>DevOps Specializations</h3>
            <p className="section-description">My specialized areas of expertise</p>
          </div>
          <div className="specializations-grid">
            <div className="specialization-card">
              <Cloud className="specialization-icon" />
              <h4>Cloud Architecture</h4>
              <p>Designing scalable, cost-effective cloud solutions on AWS and Azure platforms</p>
            </div>
            <div className="specialization-card">
              <Settings className="specialization-icon" />
              <h4>Infrastructure as Code</h4>
              <p>Automating infrastructure deployment and management using Terraform and CloudFormation</p>
            </div>
            <div className="specialization-card">
              <Zap className="specialization-icon" />
              <h4>CI/CD Automation</h4>
              <p>Building robust deployment pipelines that ensure reliable and fast software delivery</p>
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
              <div className="timeline-marker tarun-marker"></div>
              <div className="timeline-content">
                <h4>Senior DevOps Engineer</h4>
                <span className="timeline-period">2022 - Present</span>
                <p>Leading cloud infrastructure projects and automation initiatives. Mentoring DevOps teams and implementing best practices.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker tarun-marker"></div>
              <div className="timeline-content">
                <h4>Cloud Engineer</h4>
                <span className="timeline-period">2020 - 2022</span>
                <p>Managing containerized applications and CI/CD pipeline development. Optimizing cloud costs and performance.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TarunPortfolio;