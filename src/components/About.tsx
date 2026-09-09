import React from 'react';
import Fade from './Fade';

const About: React.FC = () => (
  <section id="about" className="section">
    <Fade>
      <h2 className="section-title">About</h2>
    </Fade>
    <Fade delay={0.04}>
      <p className="prose">
        I'm a software engineer based in San Jose, California, with a strong
        interest in distributed systems and confidential computing. Most recently
        I spent four and a half years at{' '}
        <a
          href="https://www.marlin.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Marlin Protocol
        </a>{' '}
        building Oyster, a Trusted Execution Environment platform on AWS Nitro
        Enclaves, along with its serverless runtime, persistent storage layer,
        and the Kalypso zk-proof network. In between I worked with{' '}
        <a
          href="https://www.turing.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Turing
        </a>{' '}
        on data platforms for PepsiCo. I hold a Master's in Computer Science from
        the University of Mumbai and am pursuing a Master's in Computer Software
        Engineering at San Jose State University. I write mostly Python, Rust,
        and TypeScript, and I like problems where verifiability, performance, and
        developer ergonomics all have to hold at once.
      </p>
    </Fade>
  </section>
);

export default About;
