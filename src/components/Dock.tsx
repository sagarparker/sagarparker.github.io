import React, { useCallback, useEffect, useState } from 'react';
import {
  Award,
  Briefcase,
  GitHub,
  House,
  Layers,
  LinkedIn,
  Moon,
  Notebook,
  Sun,
} from './Icons';
import { LINKS } from '../data/profile';

type Theme = 'dark' | 'light';

const NAV = [
  { id: 'hero', label: 'Home', Icon: House },
  { id: 'work', label: 'Work', Icon: Briefcase },
  { id: 'projects', label: 'Projects', Icon: Layers },
  { id: 'writing', label: 'Writing', Icon: Notebook },
  { id: 'certifications', label: 'Certifications', Icon: Award },
];

const readTheme = (): Theme =>
  (document.documentElement.getAttribute('data-theme') as Theme) || 'dark';

const Dock: React.FC = () => {
  const [active, setActive] = useState<string>('hero');
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    setTheme(readTheme());
  }, []);

  const toggleTheme = useCallback(() => {
    const next: Theme = readTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      window.localStorage.setItem('theme', next);
    } catch {
      /* storage unavailable — theme just won't persist */
    }
    setTheme(next);
  }, []);

  // Highlight whichever section currently owns the upper third of the viewport.
  useEffect(() => {
    const onScroll = () => {
      const probe = window.scrollY + window.innerHeight / 3;
      let current = 'hero';
      NAV.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probe) current = id;
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const jumpTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="dock-wrap" aria-label="Section navigation">
      <div className="dock">
        {NAV.map(({ id, label, Icon }) => (
          <a
            key={id}
            className={`dock-item ${active === id ? 'is-active' : ''}`}
            href={`#${id}`}
            data-label={label}
            aria-label={label}
            aria-current={active === id ? 'true' : undefined}
            onClick={(e) => jumpTo(e, id)}
          >
            <Icon />
          </a>
        ))}

        <span className="dock-divider" aria-hidden="true" />

        <a
          className="dock-item"
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          data-label="GitHub"
          aria-label="GitHub"
        >
          <GitHub />
        </a>
        <a
          className="dock-item"
          href={LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          data-label="LinkedIn"
          aria-label="LinkedIn"
        >
          <LinkedIn />
        </a>

        <span className="dock-divider" aria-hidden="true" />

        <button
          type="button"
          className="dock-item"
          onClick={toggleTheme}
          data-label={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          aria-label="Toggle colour theme"
        >
          {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
      </div>
    </nav>
  );
};

export default Dock;
