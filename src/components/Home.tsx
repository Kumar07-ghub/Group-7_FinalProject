import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Rocket, Users } from 'lucide-react';

const Home: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dixit Gami',
      role: 'Full Stack Developer',
      path: '/dixit',
      specialty: 'React & Node.js',
      color: 'member-card-purple'
    },
    {
      name: 'rajvir Singh',
      role: 'Frontend Developer',
      path: '/rajvir',
      specialty: 'UI/UX Design',
      color: 'member-card-cyan'
    },
    {
      name: 'Puja Sharma',
      role: 'Backend Developer',
      path: '/puja',
      specialty: 'Database & APIs',
      color: 'member-card-orange'
    },
    {
      name: 'TarunKumar Abburi',
      role: 'DevOps Engineer',
      path: '/tarun',
      specialty: 'Cloud & Deployment',
      color: 'member-card-green'
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Welcome to Our
              <span className="gradient-text"> Portfolio Showcase</span>
            </h1>
            <p className="hero-description">
              Meet our talented team of developers and explore our individual journeys, 
              skills, and projects. Each member brings unique expertise to create amazing digital experiences.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <Users className="stat-icon" />
                <span className="stat-number">4</span>
                <span className="stat-label">Team Members</span>
              </div>
              <div className="stat">
                <Code className="stat-icon" />
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <Rocket className="stat-icon" />
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-circle hero-circle-1"></div>
            <div className="hero-circle hero-circle-2"></div>
            <div className="hero-circle hero-circle-3"></div>
            <Palette className="hero-icon" />
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="team-section">
        <div className="section-header">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-description">
            Click on any member to explore their individual portfolio and achievements
          </p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <Link key={member.name} to={member.path} className={`member-card ${member.color}`}>
              <div className="member-card-content">
                <div className="member-avatar">
                  <span className="member-initial">{member.name.charAt(0)}</span>
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-specialty">{member.specialty}</p>
                <div className="member-card-arrow">
                  <ArrowRight />
                </div>
              </div>
              <div className="member-card-bg"></div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Our Expertise</h2>
        <div className="features-grid">
          <div className="feature-card">
            <Code className="feature-icon" />
            <h3>Full Stack Development</h3>
            <p>Modern web applications with cutting-edge technologies</p>
          </div>
          <div className="feature-card">
            <Palette className="feature-icon" />
            <h3>UI/UX Design</h3>
            <p>Beautiful, intuitive interfaces that users love</p>
          </div>
          <div className="feature-card">
            <Rocket className="feature-icon" />
            <h3>Performance</h3>
            <p>Fast, scalable solutions optimized for all devices</p>
          </div>
          <div className="feature-card">
            <Users className="feature-icon" />
            <h3>Team Collaboration</h3>
            <p>Seamless teamwork and agile development practices</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
