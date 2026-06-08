import React from 'react';

interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  description: string[];
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      date: 'December 2024 - May 2026',
      title: 'Backend Software Engineer',
      company: 'Marlin Protocol (Blackfish technologies)',
      description: [
        'Engineered the Oyster Serverless CLI, an interactive CLI tool built in Rust, dramatically simplifying serverless deployments and improving developer workflows through automation.',
        'Led R&D for Twitter Agent Service, an AI-powered solution built in Python & BrowserUse that securely manages Twitter API credentials within a Trusted Execution Environment (TEE), enabling verifiable tweets while preserving confidentiality.',
        'Built a pay-per-prompt AI chat platform and high-performance payment gateway using Rust, TS and x402, enabling AI agents to monetize APIs and LLM interactions through stablecoin micropayments without requiring credit cards.',
        'Spearheaded the research and end-to-end development of Oyster Persistent Storage using NFS, GoCryptfs, Docker, and Nix, enabling users to persist data across system reboots.',
        'Implemented company-wide monitoring using a Prometheus backend (TypeScript) and Grafana dashboards, along with live Telegram alerts for active issues, enabling real-time performance insights and proactive issue detection, which reduced issue resolution response time by 80% while improving system reliability.'
      ]
    },
    {
      date: 'August 2024 - October 2024',
      title: 'Delivery Software Engineer 3',
      company: 'Turing',
      description: [
        'Collaborated with the PepsiCo USA team to develop dashboards delivering meaningful insights into Frito-Lay data through interactive charts and high-performance APIs.',
        'Engineered a high-performance back-end with Java Spring Boot and PostgreSQL, leveraging the MVC architecture to efficiently handle complex tasks and deliver high-throughput REST APIs.',
        'Developed reusable React components, managed complex state using Redux and React Hooks, integrated APIs, and implemented caching to efficiently process and display large volumes of data.'
      ]
    },
    {
      date: 'December 2021 - June 2024',
      title: 'Full-Stack Software Engineer',
      company: 'Marlin Protocol (Blackfish technologies)',
      description: [
        'Spearheaded the research and development of Oyster Serverless, a serverless platform to securely run code inside a Trusted Execution Environment (TEE) using AWS Nitro Enclaves, Docker, iptables, DNS proxy, and cgroups.',
        'Significantly contributed to the research and development of Marlin Oyster, a Trusted Execution Environment (TEE) system based on AWS nitro enclaves which allow computations to happen verifiably and securely.',
        'Played a significant role in developing the client-side SDK (TypeScript) and a multi-threaded server-side zk-proof generator (Rust) for Kalypso, a decentralized system for trustless zk-proof generation.',
        'Successfully contributed to front-end development by integrating APIs (Axios/fetch) and smart contracts (web3.js, ethers.js), and developing over 5 responsive applications using React, Hooks, Zustand, CSS and Bootstrap, collectively locking over 200 million USD of TVL.'
      ]
    }
  ];

  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: ['Python', 'TypeScript', 'JavaScript', 'Rust', 'Java']
    },
    {
      title: 'Artificial Intelligence',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <line x1="9" y1="1" x2="9" y2="4"></line>
          <line x1="15" y1="1" x2="15" y2="4"></line>
          <line x1="9" y1="20" x2="9" y2="23"></line>
          <line x1="15" y1="20" x2="15" y2="23"></line>
          <line x1="20" y1="9" x2="23" y2="9"></line>
          <line x1="20" y1="15" x2="23" y2="15"></line>
          <line x1="1" y1="9" x2="4" y2="9"></line>
          <line x1="1" y1="15" x2="4" y2="15"></line>
        </svg>
      ),
      skills: ['Cursor', 'Codex', 'Claude Code', 'Antigravity', 'Ollama', 'BrowserUse', 'OpenAI APIs']
    },
    {
      title: 'Frameworks & Libraries',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line> 
        </svg>
      ),
      skills: ['Flask', 'FastAPI', 'Actix (Rust)', 'Node.js', 'Express', 'React', 'Redux', 'Zustand', 'Spring Boot']
    },
    {
      title: 'Databases',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
      skills: ['PostgreSQL', 'MongoDB']
    },
    {
      title: 'Cloud & DevOps',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </svg>
      ),
      skills: ['AWS', 'Google Cloud', 'Docker', 'Linux', 'Git']
    },
    {
      title: 'Web3 & Blockchain',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      skills: ['Solidity', 'Web3.js', 'Ethers.js', 'ethers-rs', 'ZK', 'Ethereum', 'Smart Contracts', 'Trusted Execution Environment (TEE)']
    },
    {
      title: 'Tools & Technologies',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      skills: ['Prometheus', 'Grafana', 'Caddy', 'NGINX', 'Truffle', 'NFS', 'Cloudflare Workers']
    }
  ];

  return (
    <section id="experience" className="reveal">
      <div className="section-header">
        <h2 className="section-title">Experience & Skills</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="experience-skills-layout">
        <div className="experience-column">
          <h3 className="column-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="column-icon">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            Experience
          </h3>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item reveal-child">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">{exp.date}</span>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <p className="timeline-company">{exp.company}</p>
                  <ul className="timeline-description">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="skills-column">
          <h3 className="column-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="column-icon">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
              <line x1="12" y1="22" x2="12" y2="15.5"></line>
              <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
              <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
              <line x1="12" y1="2" x2="12" y2="8.5"></line>
            </svg>
            Skills
          </h3>
          <div className="skills-vertical-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category reveal-child">
                <h4>
                  {category.icon}
                  {category.title}
                </h4>
                <div className="skill-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
