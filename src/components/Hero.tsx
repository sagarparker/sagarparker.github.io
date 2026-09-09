import React from 'react';
import Fade from './Fade';
import { GitHub, LeetCode, LinkedIn } from './Icons';
import { LINKS } from '../data/profile';
import profilePic from '../assets/images/profile_pic.jpeg';

const Hero: React.FC = () => (
  <header className="hero" id="hero">
    <div className="hero-inner">
      <Fade className="hero-text" delay={0.04}>
        <h1 className="hero-title">
          Hi, I'm Sagar <span className="hero-wave">👋</span>
        </h1>
        <p className="hero-tagline">
          Software engineer building distributed systems, confidential compute,
          and the infrastructure that powers modern AI applications.
        </p>
        <div className="hero-actions">
          <a
            className="btn btn--primary"
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
            Connect on LinkedIn
          </a>
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
            href={LINKS.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
          >
            <LeetCode />
          </a>
        </div>
      </Fade>

      <Fade className="hero-avatar-wrap">
        <div className="hero-avatar-frame">
          <img
            className="hero-avatar"
            src={profilePic}
            alt="Sagar Parker"
          />
        </div>
      </Fade>
    </div>
  </header>
);

export default Hero;
