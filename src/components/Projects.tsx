import React from 'react';
import Fade from './Fade';
import FeatureHeader from './FeatureHeader';
import { ArrowUpRight, GitHub, Trophy } from './Icons';
import collectiveImg from '../assets/images/collective.png';
import trusttagImg from '../assets/images/trusttag.png';
import x402ChatImg from '../assets/images/x402_chat.png';
import rpythonImg from '../assets/images/r_python.png';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  image?: string;
  award?: string;
}

const projects: Project[] = [
  {
    title: 'Collective',
    description:
      'An equity crowdfunding mobile app built with Flutter and governed by smart contracts on Ethereum, featuring a platform-exclusive ERC-20 token (CTV) for investing in campaigns in exchange for equity.',
    tech: ['Flutter', 'Node.js', 'Solidity', 'Ethereum', 'Truffle'],
    github: 'https://github.com/sagarparker/Collective',
    image: collectiveImg,
    award: 'Winner: Polygon India BUILD IT Hackathon (₹40,000)',
  },
  {
    title: 'rpython',
    description:
      'A Python interpreter written in Rust, featuring an AST parser, a two-pass bytecode compiler, and a stack-based virtual machine that supports dynamic control flow, nested functions, and isolated lexical scopes.',
    tech: ['Rust', 'Compilers', 'Bytecode VM', 'AST'],
    github: 'https://github.com/sagarparker/rpython',
    image: rpythonImg,
  },
  {
    title: 'x402-ollama',
    description:
      'A pay-per-prompt AI chat app that monetizes an Ollama LLM behind the x402 payment protocol. Users connect a wallet and pay micro-amounts in USDC per request; responses are generated and signed inside an Oyster CVM TEE for end-to-end verifiability.',
    tech: ['Rust', 'React', 'TypeScript', 'x402', 'Ollama', 'TEE'],
    github: 'https://github.com/marlinprotocol/x402-ollama',
    image: x402ChatImg,
  },
  {
    title: 'TrustTag',
    description:
      'A smart tag system where a mobile app scans QR codes to fetch product history stored on Hedera DLT, using the Hedera Consensus Service for verifiable timestamping and event ordering.',
    tech: ['Flutter', 'Node.js', 'AWS', 'Hedera Hashgraph'],
    github: 'https://github.com/sagarparker/TrustTag',
    image: trusttagImg,
    award: 'Top 3: Hedera India Hackathon (₹16,000)',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <article className="project-card">
    {project.image && (
      <div className="project-media">
        <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
        <div className="project-media-actions">
          <a
            className="chip"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
            Source
          </a>
        </div>
      </div>
    )}

    <div className="project-body">
      <div className="project-head">
        <div>
          <h3 className="project-title">{project.title}</h3>
        </div>
        <a
          className="icon-link"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} on GitHub`}
        >
          <ArrowUpRight />
        </a>
      </div>

      {project.award && (
        <span className="project-award">
          <Trophy style={{ width: '0.875rem', height: '0.875rem' }} />
          {project.award}
        </span>
      )}

      <p className="project-desc">{project.description}</p>

      <div className="tag-grid">
        {project.tech.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </article>
);

const Projects: React.FC = () => (
  <section id="projects" className="section section--roomy">
    <FeatureHeader
      label="My Projects"
      title="Check out my latest work"
      lede="A mix of shipped infrastructure and hackathon builds, mostly around verifiable compute, payments, and blockchain systems."
    />
    <div className="project-grid">
      {projects.map((project, i) => (
        <Fade key={project.title} delay={0.04 + i * 0.05}>
          <ProjectCard project={project} />
        </Fade>
      ))}
    </div>
  </section>
);

export default Projects;
