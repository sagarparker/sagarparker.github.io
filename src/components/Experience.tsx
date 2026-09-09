import React from 'react';
import Fade from './Fade';
import { ChevronDown } from './Icons';
import { EXPERIENCE, Job } from '../data/profile';

const JobEntry: React.FC<{ job: Job }> = ({ job }) => {
  const multiRole = job.roles.length > 1;

  return (
    <details className="row-details" open>
      <summary>
        <div className="row">
          <span className="row-logo" aria-hidden="true">
            {job.logo ? (
              <img
                className="row-logo-img"
                src={job.logo}
                alt={`${job.company} logo`}
              />
            ) : (
              job.monogram
            )}
          </span>
          <div className="row-body">
            <div className="row-head">
              <div className="row-name">
                {job.company}
                <ChevronDown className="chevron" />
              </div>
              <div className="row-meta">
                <span>{job.period}</span>
                <span className="dash">·</span>
                <span>{job.span}</span>
              </div>
            </div>
            <div className="row-subtitle">{job.headline}</div>
          </div>
        </div>
      </summary>

      <div className="row-detail">
        {multiRole ? (
          <div className="roles">
            {job.roles.map((role) => (
              <div key={role.title}>
                <div className="role-head">
                  <span className="role-title">{role.title}</span>
                  <div className="row-meta">
                    <span>{role.period}</span>
                  </div>
                </div>
                <ul className="bullets">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <ul className="bullets" style={{ marginTop: '0.5rem' }}>
            {job.roles[0].bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}

        <div className="tag-grid" style={{ marginTop: '0.75rem' }}>
          {job.skills.map((skill) => (
            <span key={skill} className="tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </details>
  );
};

const Experience: React.FC = () => (
  <section id="work" className="section section--roomy">
    <Fade>
      <h2 className="section-title">Work Experience</h2>
    </Fade>
    <div className="rows">
      {EXPERIENCE.map((job, i) => (
        <Fade key={job.company} delay={0.04 + i * 0.05}>
          <JobEntry job={job} />
        </Fade>
      ))}
    </div>
  </section>
);

export default Experience;
