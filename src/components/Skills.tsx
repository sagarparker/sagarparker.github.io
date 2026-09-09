import React from 'react';
import Fade from './Fade';
import { SKILLS, TOOLS } from '../data/profile';

const PillSection: React.FC<{ id: string; title: string; items: string[] }> = ({
  id,
  title,
  items,
}) => (
  <section id={id} className="section">
    <Fade>
      <h2 className="section-title">{title}</h2>
    </Fade>
    <div className="pill-grid">
      {items.map((item, i) => (
        <Fade key={item} delay={0.04 + i * 0.03}>
          <span className="pill">{item}</span>
        </Fade>
      ))}
    </div>
  </section>
);

const Skills: React.FC = () => (
  <>
    <PillSection id="skills" title="Skills" items={SKILLS} />
    <PillSection id="tools" title="Tools & Platforms" items={TOOLS} />
  </>
);

export default Skills;
