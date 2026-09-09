import React from 'react';
import Fade from './Fade';
import FeatureHeader from './FeatureHeader';
import { ArrowUpRight, Notebook } from './Icons';
import { WRITING } from '../data/profile';

const Writing: React.FC = () => (
  <section id="writing" className="section section--roomy">
    <FeatureHeader
      label="Writing"
      title="I like sharing what I learn"
      lede="Design docs and deep dives from building TEE infrastructure, zero-knowledge tooling, and verifiable systems."
    />

    <div className="timeline">
      {WRITING.map((post, i) => (
        <Fade key={post.url} className="timeline-item" delay={0.04 + i * 0.04}>
          <div className="timeline-rail">
            <span className="timeline-node" aria-hidden="true">
              <Notebook />
            </span>
          </div>
          <div className="timeline-body">
            <h3 className="timeline-title">{post.title}</h3>
            <p className="timeline-source">{post.platform}</p>
            <p className="timeline-desc">{post.description}</p>
            <div className="timeline-actions">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
              <a
                className="chip"
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </Fade>
      ))}
    </div>
  </section>
);

export default Writing;
