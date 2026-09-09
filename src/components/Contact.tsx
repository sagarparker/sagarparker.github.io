import React from 'react';
import Fade from './Fade';
import { GitHub, LeetCode, LinkedIn } from './Icons';
import { LINKS } from '../data/profile';

const Contact: React.FC = () => (
  <footer id="contact" className="contact">
    <Fade>
      <div className="contact-card">
        <span className="rule-label contact-badge">Contact</span>

        <div className="contact-inner">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-copy">
            Want to talk about distributed systems, confidential compute, or
            something you're building? Reach out on{' '}
            <a
              className="link link--accent"
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{' '}
            or find my work on{' '}
            <a
              className="link link--accent"
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>

          <div className="contact-socials">
            <a
              className="btn btn--outline btn--icon"
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHub />
            </a>
            <a
              className="btn btn--outline btn--icon"
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </a>
            <a
              className="btn btn--outline btn--icon"
              href={LINKS.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
            >
              <LeetCode />
            </a>
          </div>
        </div>
      </div>
    </Fade>

    <p className="contact-note">© {new Date().getFullYear()} Sagar Parker</p>
  </footer>
);

export default Contact;
