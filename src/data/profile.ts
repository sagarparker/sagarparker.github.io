import marlinLogo from '../assets/images/marlin_logo.png';
import turingLogo from '../assets/images/turing_logo.png';

export const LINKS = {
  github: 'https://github.com/sagarparker',
  linkedin: 'https://www.linkedin.com/in/sagar-parker-07561b1a3/',
  leetcode: 'https://leetcode.com/u/sagar8parker/',
};

export interface Role {
  title: string;
  period: string;
  bullets: string[];
}

export interface Job {
  company: string;
  monogram: string;
  logo?: string;
  href: string;
  period: string;
  span: string;
  headline: string;
  roles: Role[];
  skills: string[];
}

export const EXPERIENCE: Job[] = [
  {
    company: 'Marlin Protocol',
    monogram: 'M',
    logo: marlinLogo,
    href: 'https://www.marlin.org/',
    period: 'December 2021 - May 2026',
    span: '4 yr 6 mos',
    headline: 'Backend & Full-Stack Software Engineer',
    roles: [
      {
        title: 'Backend Software Engineer',
        period: 'December 2024 - May 2026',
        bullets: [
          'Engineered the Oyster Serverless CLI, an interactive command line tool built in Rust, automating cloud runtime pipelines and cutting serverless deployment cycle times by 65%.',
          'Spearheaded the Twitter Agent Service, an AI-powered automation workflow built in Python and BrowserUse that securely manages credentials within a TEE, executing verifiable agent actions with zero leaks.',
          'Built a pay-per-prompt AI platform and payment gateway in Rust, React.js and x402, deploying Ollama in AWS Nitro TEEs for local LLM inference via x402 with sub-second latency.',
          'Architected Oyster Persistent Storage using NFS, GoCryptfs, Linux, Docker, and Nix, designing file system persistence across system reboots with 100% data integrity.',
          'Automated distributed systems telemetry and log analysis using Prometheus, PostgreSQL, and Grafana dashboards, integrating real-time alerting pipelines to reduce resolution MTTR by 80%.',
        ],
      },
      {
        title: 'Full-Stack Software Engineer',
        period: 'December 2021 - June 2024',
        bullets: [
          'Designed system architecture for Oyster Serverless, running workloads inside TEEs via AWS Nitro Enclaves, Linux cgroups, and Docker, achieving sub-100ms cold boot latency.',
          'Hardened Marlin Oyster, a TEE system based on AWS Nitro Enclaves, enabling low-level compute workloads to execute verifiably and securely with 100% cryptographic hardware isolation.',
          'Benchmarked and deployed the client-side SDK in TypeScript and a multi-threaded proof generator in Rust for Kalypso, achieving 7.95s proof latency serving 50+ organizations requesting proofs daily.',
          'Developed over 5 production web applications using React, TypeScript, and REST APIs, integrating distributed services to securely support 50K+ active users and $200M+ in Total Value Locked (TVL).',
        ],
      },
    ],
    skills: [
      'Rust',
      'TypeScript',
      'Python',
      'React',
      'AWS Nitro Enclaves',
      'Docker',
      'Solidity',
      'Prometheus',
      'Grafana',
      'TEE',
      'ZK',
    ],
  },
  {
    company: 'Turing',
    monogram: 'T',
    logo: turingLogo,
    href: 'https://www.turing.com/',
    period: 'August 2024 - October 2024',
    span: '3 mos',
    headline: 'Delivery Software Engineer 3',
    roles: [
      {
        title: 'Delivery Software Engineer 3',
        period: 'August 2024 - October 2024',
        bullets: [
          'Scaled backend analytics for the PepsiCo USA team, processing 5M+ transaction records via high-performance Java Spring Boot microservices, REST APIs, and PostgreSQL in a Scrum Agile environment.',
          'Optimized enterprise analytics UI using React, TypeScript, and Redux caching, integrating REST APIs to reduce redundant backend queries by 30% and speed up page load times for 200+ users.',
          'Developed reusable React components, managed complex state with Redux and hooks, integrated APIs, and implemented caching to process and display large data volumes efficiently.',
        ],
      },
    ],
    skills: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'React',
      'Redux',
      'TypeScript',
    ],
  },
];

export const SKILLS: string[] = [
  'Python',
  'Rust',
  'TypeScript',
  'JavaScript',
  'Java',
  'React',
  'Node.js',
  'Solidity',
  'SQL',
  'PostgreSQL',
  'Redis',
  'Bash',
  'Linux',
  'Docker',
];

export const TOOLS: string[] = [
  'GCP',
  'AWS (EC2, Nitro)',
  'AWS Nitro Enclaves',
  'Nix',
  'Prometheus',
  'Grafana',
  'Spring Boot',
  'Ethers.js',
  'CI/CD Pipelines',
  'Ollama',
  'RAG',
  'Prompt Engineering',
  'Git',
];

export interface Post {
  title: string;
  description: string;
  url: string;
  platform: string;
  tags: string[];
}

export const WRITING: Post[] = [
  {
    title: 'Verifiable Frontend with 3DNS, Oyster CVM & KMS',
    description:
      'A deep dive into deploying a verifiable frontend using 3DNS for on-chain DNS, Oyster CVM for TEE-backed hosting, and Nautilus KMS for enclave-bound key management.',
    url: 'https://research.marlin.org/t/deep-dive-how-we-deployed-a-verifiable-frontend-using-3dns-marlin-oyster-cvm-and-kms/122',
    platform: 'Marlin Research',
    tags: ['TEE', '3DNS', 'Oyster CVM'],
  },
  {
    title: 'ENVIO HyperIndex with Oyster CVM',
    description:
      "Running Envio's HyperIndex blockchain indexer inside Oyster CVM for verifiable and confidential on-chain data indexing with attestation-backed integrity.",
    url: 'https://research.marlin.org/t/envio-hyperindex-with-oyster-cvm/127',
    platform: 'Marlin Research',
    tags: ['Indexing', 'TEE', 'GraphQL'],
  },
  {
    title: 'Oyster Persistent Storage Design',
    description:
      'Exploring solutions for persistent storage in AWS Nitro Enclaves, comparing NFS, redundant storage, and object storage approaches with encryption strategies.',
    url: 'https://hackmd.io/@sagarmarlin/Hkv1Qgehgg',
    platform: 'HackMD',
    tags: ['Storage', 'Nitro Enclaves', 'NFS'],
  },
  {
    title: 'zkPDF: Zero-Knowledge Proofs for PDFs',
    description:
      'SP1 circuits for proving facts from digitally signed PDFs without revealing the full document, enabling privacy-preserving claims from PDF documents.',
    url: 'https://hackmd.io/@sagarmarlin/BJKs_7Ojle',
    platform: 'HackMD',
    tags: ['ZK Proofs', 'SP1', 'Privacy'],
  },
  {
    title: 'Oyster CVM + ERC-8004 Validation Registry',
    description:
      'An integration design where TEE agents publish verifiable computation artifacts to an ERC-8004 registry so downstream agents can trust results without re-execution.',
    url: 'https://hackmd.io/@sagarmarlin/BkwFvq3DWx',
    platform: 'HackMD',
    tags: ['ERC-8004', 'TEE', 'Validation'],
  },
  {
    title: 'Modular Generator Design',
    description:
      'A modular generator architecture for the Kalypso prover network, enabling multiple ZK proof generators to run within a single Oyster enclave.',
    url: 'https://hackmd.io/@bQuZLii7S1KhYnSq4NHTqg/Hkt5Qzt9p',
    platform: 'HackMD',
    tags: ['Kalypso', 'ZK Proofs', 'Architecture'],
  },
];
