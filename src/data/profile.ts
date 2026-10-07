import marlinLogo from '../assets/images/marlin_logo.png';

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
    headline: 'Software Engineer',
    roles: [
      {
        title: 'Software Engineer',
        period: 'March 2022 - May 2026',
        bullets: [
          'Engineered the Oyster Serverless CLI in Rust, enabling developers to test code locally and deploy to the Oyster Serverless platform built on AWS Nitro Enclaves and the workerd runtime, cutting deployment cycles by 65%.',
          'Led R&D for the Twitter Agent Service, an AI agent built with Python and BrowserUse to automate browser workflows inside AWS Nitro TEEs, managing API keys to post verifiable tweets with zero credential leaks.',
          'Architected Oyster Persistent Storage using NFS, GoCryptfs, Linux, Docker, and Nix, enabling robust data persistence across system reboots with 100% state integrity.',
          'Spearheaded R&D for Oyster Serverless, deploying the Cloudflare workerd runtime inside AWS Nitro Enclaves via Docker and cgroups to execute JS and Wasm code with sub-100ms cold boot latency.',
          'Engineered the client SDK in TypeScript and multi-threaded zk-proof generator in Rust for Kalypso, achieving 7.95s proof latency across 50+ organizations requesting proofs daily.',
        ],
      },
      {
        title: 'Software Engineering Intern',
        period: 'December 2021 - March 2022',
        bullets: [
          'Built 5+ frontend web applications using React and TypeScript, integrating APIs and smart contracts to enable the protocol to gain over $200M in Total Value Locked (TVL).',
          'Played a key role in building Marlin Oyster, a TEE system based on AWS Nitro Enclaves, enabling isolated backend workloads to execute verifiably and securely with 100% attestation integrity.',
          'Implemented distributed telemetry and monitoring pipelines across backend services using Prometheus, PostgreSQL, and Grafana, tracking system health to reduce incident MTTR by 80%.',
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
      'Nix',
      'workerd',
      'Solidity',
      'Prometheus',
      'Grafana',
      'TEE',
      'ZK',
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
