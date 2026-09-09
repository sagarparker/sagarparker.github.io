import React from 'react';
import Fade from './Fade';

interface FeatureHeaderProps {
  label: string;
  title: string;
  lede: string;
}

/** Gradient hairline with a centered label pill, then a large heading + lede. */
const FeatureHeader: React.FC<FeatureHeaderProps> = ({
  label,
  title,
  lede,
}) => (
  <div className="feature-head">
    <Fade className="rule">
      <span className="rule-label">{label}</span>
    </Fade>
    <Fade className="feature-titles" delay={0.05}>
      <h2 className="feature-title">{title}</h2>
      <p className="feature-lede">{lede}</p>
    </Fade>
  </div>
);

export default FeatureHeader;
