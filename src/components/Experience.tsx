import React from 'react';

interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  description: string[];
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
      ],
      skills: ['Python', 'Rust', 'TypeScript', 'PostgreSQL', 'BrowserUse', 'OpenAI APIs', 'Docker', 'Linux', 'Prometheus', 'Grafana', 'NFS', 'Trusted Execution Environment (TEE)', 'Git']
    },
    {
      date: 'August 2024 - October 2024',
      title: 'Delivery Software Engineer 3',
      company: 'Turing',
      description: [
        'Collaborated with the PepsiCo USA team to develop dashboards delivering meaningful insights into Frito-Lay data through interactive charts and high-performance APIs.',
        'Engineered a high-performance back-end with Java Spring Boot and PostgreSQL, leveraging the MVC architecture to efficiently handle complex tasks and deliver high-throughput REST APIs.',
        'Developed reusable React components, managed complex state using Redux and React Hooks, integrated APIs, and implemented caching to efficiently process and display large volumes of data.'
      ],
      skills: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'Redux', 'JavaScript', 'TypeScript', 'Git']
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
      ],
      skills: ['Rust', 'TypeScript', 'React', 'Zustand', 'AWS', 'Docker', 'Linux', 'Solidity', 'Web3.js', 'Ethers.js', 'ZK', 'Ethereum', 'Smart Contracts', 'Trusted Execution Environment (TEE)', 'Truffle', 'NGINX', 'Git']
    }
  ];

  return (
    <section id="experience" className="reveal">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="experience-skills-layout">
        <div className="experience-column">

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
                  
                  <div className="timeline-skills">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="timeline-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
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
