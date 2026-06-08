import React from 'react';

interface BlogPost {
  title: string;
  description: string;
  url: string;
  platform: string;
  tags: string[];
}

const Blogs: React.FC = () => {
  const blogs: BlogPost[] = [
    {
      title: 'Verifiable Frontend with 3DNS, Oyster CVM & KMS',
      description: 'A deep dive into deploying a verifiable frontend using 3DNS for on-chain DNS, Oyster CVM for TEE-backed hosting, and Nautilus KMS for enclave-bound key management.',
      url: 'https://research.marlin.org/t/deep-dive-how-we-deployed-a-verifiable-frontend-using-3dns-marlin-oyster-cvm-and-kms/122',
      platform: 'Marlin Research',
      tags: ['TEE', '3DNS', 'Oyster CVM'],
    },
    {
      title: 'ENVIO HyperIndex with Oyster CVM',
      description: 'Running Envio\'s HyperIndex blockchain indexer inside Oyster CVM for verifiable and confidential on-chain data indexing with attestation-backed integrity.',
      url: 'https://research.marlin.org/t/envio-hyperindex-with-oyster-cvm/127',
      platform: 'Marlin Research',
      tags: ['Indexing', 'TEE', 'GraphQL'],
    },
    {
      title: 'Oyster Persistent Storage Design',
      description: 'Exploring solutions for persistent storage in AWS Nitro Enclaves — comparing NFS, redundant storage, and object storage approaches with encryption strategies.',
      url: 'https://hackmd.io/@sagarmarlin/Hkv1Qgehgg',
      platform: 'HackMD',
      tags: ['Storage', 'Nitro Enclaves', 'NFS'],
    },
    {
      title: 'zkPDF — Zero-Knowledge Proofs for PDFs',
      description: 'SP1 circuits for proving facts from digitally signed PDFs without revealing the full document, enabling privacy-preserving claims from PDF documents.',
      url: 'https://hackmd.io/@sagarmarlin/BJKs_7Ojle',
      platform: 'HackMD',
      tags: ['ZK Proofs', 'SP1', 'Privacy'],
    },
    {
      title: 'Oyster CVM + ERC-8004 Validation Registry',
      description: 'An integration design where TEE agents publish verifiable computation artifacts to an ERC-8004 registry so downstream agents can trust results without re-execution.',
      url: 'https://hackmd.io/@sagarmarlin/BkwFvq3DWx',
      platform: 'HackMD',
      tags: ['ERC-8004', 'TEE', 'Validation'],
    },
    {
      title: 'Modular Generator Design',
      description: 'A modular generator architecture for the Kalypso prover network, enabling multiple ZK proof generators to run within a single Oyster enclave.',
      url: 'https://hackmd.io/@bQuZLii7S1KhYnSq4NHTqg/Hkt5Qzt9p',
      platform: 'HackMD',
      tags: ['Kalypso', 'ZK Proofs', 'Architecture'],
    },
  ];

  return (
    <section id="blogs" className="reveal">
      <div className="section-header">
        <h2 className="section-title">Blogs & Writing</h2>
        <div className="section-line"></div>
      </div>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <a
            key={index}
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card reveal-child"
          >
            <div className="blog-card-inner">
              <div className="blog-card-header">
                <span className="blog-platform">{blog.platform}</span>
                <svg className="blog-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <div className="blog-tags">
                {blog.tags.map((tag, i) => (
                  <span key={i} className="blog-tag">{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
