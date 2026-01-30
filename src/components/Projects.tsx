import React from 'react';
import collectiveImg from '../assets/images/collective.png';
import trusttagImg from '../assets/images/trusttag.png';
import krishiImg from '../assets/images/krishi.png';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  image: string;
  achievement?: string;
}

interface ProjectCardProps {
  project: Project;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Collective',
      description: 'An equity crowdfunding mobile app using Flutter managed by smart contracts on Ethereum blockchain. Features a platform-exclusive ERC20 token (CTV) for investing in campaigns in exchange for equity.',
      tech: ['Flutter', 'Node.js', 'Solidity', 'AWS', 'Ethereum', 'Truffle'],
      github: 'https://github.com/sagarparker/Collective',
      image: collectiveImg,
      achievement: '🏆 Polygon India BUILD IT Hackathon (₹40,000)'
    },
    {
      title: 'TrustTag',
      description: 'A smart tag system using a mobile app to scan QR codes and fetch product history stored on Hedera DLT. Integrated Hedera Consensus Service (HCS) for verifiable timestamping and ordering of events.',
      tech: ['Flutter', 'Node.js', 'AWS', 'Hedera Hashgraph'],
      github: 'https://github.com/sagarparker/TrustTag',
      image: trusttagImg,
      achievement: '🥉 Top 3 - Hedera India Hackathon (₹16,000)'
    },
    {
      title: 'KrishiGruha',
      description: 'A platform for buying and selling agricultural produce online at best prices. Built with React Native mobile app, Express/Node.js backend with JWT authentication, and MongoDB database.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Hedera Hashgraph', 'Express'],
      github: 'https://github.com/sagarparker/KrishiGruha',
      image: krishiImg
    }
  ];

  const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        {project.achievement && (
          <span className="project-achievement">{project.achievement}</span>
        )}
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <a href={project.github} className="project-github-btn">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub Repo
        </a>
      </div>
    </div>
  );

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
