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
    href: 'https://www.marlin.org/',
    period: 'December 2021 - May 2026',
    span: '4 yr 6 mos',
    headline: 'Backend & Full-Stack Software Engineer',
    roles: [
      {
        title: 'Backend Software Engineer',
        period: 'December 2024 - May 2026',
        bullets: [
          'Engineered the Oyster Serverless CLI, an interactive CLI tool built in Rust, dramatically simplifying serverless deployments and improving developer workflows through automation.',
          'Led R&D for Twitter Agent Service, an AI-powered solution built in Python & BrowserUse that securely manages Twitter API credentials within a Trusted Execution Environment (TEE), enabling verifiable tweets while preserving confidentiality.',
          'Built a pay-per-prompt AI chat platform and high-performance payment gateway using Rust, TypeScript and x402, enabling AI agents to monetize APIs and LLM interactions through stablecoin micropayments without requiring credit cards.',
          'Spearheaded the research and end-to-end development of Oyster Persistent Storage using NFS, GoCryptfs, Docker, and Nix, enabling users to persist data across system reboots.',
          'Implemented company-wide monitoring with a Prometheus backend (TypeScript), Grafana dashboards, and live Telegram alerting — cutting issue resolution response time by 80% while improving system reliability.',
        ],
      },
      {
        title: 'Full-Stack Software Engineer',
        period: 'December 2021 - June 2024',
        bullets: [
          'Spearheaded the research and development of Oyster Serverless, a platform to securely run code inside a Trusted Execution Environment (TEE) using AWS Nitro Enclaves, Docker, iptables, a DNS proxy, and cgroups.',
          'Contributed significantly to Marlin Oyster, a TEE system based on AWS Nitro Enclaves that lets computations happen verifiably and securely.',
          'Played a significant role in developing the client-side SDK (TypeScript) and a multi-threaded server-side zk-proof generator (Rust) for Kalypso, a decentralized system for trustless zk-proof generation.',
          'Integrated APIs and smart contracts (web3.js, ethers.js) and shipped 5+ responsive applications with React, Hooks, Zustand, and CSS — collectively locking over 200 million USD of TVL.',
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
    href: 'https://www.turing.com/',
    period: 'August 2024 - October 2024',
    span: '3 mos',
    headline: 'Delivery Software Engineer 3',
    roles: [
      {
        title: 'Delivery Software Engineer 3',
        period: 'August 2024 - October 2024',
        bullets: [
          'Collaborated with the PepsiCo USA team to build dashboards surfacing insights into Frito-Lay data through interactive charts and high-performance APIs.',
          'Engineered a high-performance backend with Java Spring Boot and PostgreSQL, using an MVC architecture to handle complex workloads and deliver high-throughput REST APIs.',
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
  'Rust',
  'TypeScript',
  'Python',
  'Java',
  'React',
  'Solidity',
  'PostgreSQL',
  'Linux',
  'Docker',
];

export const TOOLS: string[] = [
  'AWS Nitro Enclaves',
  'Nix',
  'Prometheus',
  'Grafana',
  'Spring Boot',
  'Ethers.js',
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
      'Exploring solutions for persistent storage in AWS Nitro Enclaves — comparing NFS, redundant storage, and object storage approaches with encryption strategies.',
    url: 'https://hackmd.io/@sagarmarlin/Hkv1Qgehgg',
    platform: 'HackMD',
    tags: ['Storage', 'Nitro Enclaves', 'NFS'],
  },
  {
    title: 'zkPDF — Zero-Knowledge Proofs for PDFs',
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
