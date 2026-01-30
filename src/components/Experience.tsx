import React from 'react';

interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  description: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      date: 'December 2024 - Present',
      title: 'Backend Software Engineer',
      company: 'Blackfish Technologies (Marlin Protocol)',
      description: [
        'Engineered the Oyster Serverless CLI, an interactive CLI tool built in Rust, dramatically simplifying serverless deployments and improving developer workflows through automation.',
        'Led R&D for Twitter Agent Service, an AI-powered solution built in Python that securely manages Twitter API credentials within a TEE, enabling verifiable tweets while preserving confidentiality.',
        'Spearheaded the research and end-to-end development of Oyster Persistent Storage using NFS, GoCryptfs, Docker, and Nix, enabling users to persist data across system reboots.',
        'Implemented company-wide monitoring using a Prometheus backend (TypeScript) and Grafana dashboard, enabling real-time performance insights, proactive issue detection, and significantly improving system reliability and operational transparency.'
      ]
    },
    {
      date: 'August 2024 - October 2024',
      title: 'Senior Software Engineer',
      company: 'Turing',
      description: [
        'Engineered a high-performance back-end with Java Spring Boot and PostgreSQL, leveraging the MVC architecture to efficiently handle complex tasks and deliver high-throughput REST APIs.',
        'Collaborated with the front-end team to build reusable React components, manage complex state using Redux and React Hooks, and handle API integration for processing large volumes of data.'
      ]
    },
    {
      date: 'December 2021 - June 2024',
      title: 'Software Engineer',
      company: 'Blackfish Technologies (Marlin Protocol)',
      description: [
        'Spearheaded the research and development of Oyster Serverless, a serverless platform to securely run code inside a TEE using AWS Nitro Enclaves, Docker, iptables, DNS proxy, and cgroups.',
        'Significantly contributed to the R&D of Marlin Oyster, a TEE system based on AWS Nitro Enclaves for verifiable and secure computations.',
        'Played a significant role in developing the client-side SDK (TypeScript) and a multi-threaded server-side zk-proof generator (Rust) for Kalypso, a decentralised system that enables protocols to delegate the process of zk-proof generation to a trustless system.',
        'Successfully contributed to front-end development by integrating APIs (Axios/fetch) and smart contracts (web3.js, ethers.js), and developing over 5 responsive applications using React, Hooks, Zustand, CSS and Bootstrap, collectively locking over 200 million USD of TVL.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
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
    </section>
  );
};

export default Experience;
