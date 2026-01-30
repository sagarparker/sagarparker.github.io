import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-content">
        <a href="/portfolio" className="navbar-logo">
          <img src={logo} alt="logo" width={35} height={35}/>
        </a>
        <div className="navbar-links">
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
