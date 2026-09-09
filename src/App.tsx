import React from 'react';
import './App.css';
import SkylineImage from './components/SkylineImage';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Writing from './components/Writing';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Dock from './components/Dock';

const App: React.FC = () => (
  <div className="page">
    <SkylineImage className="page-backdrop" />

    <div className="container">
      <Hero />

      <main className="sections">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Writing />
        <Certifications />
      </main>

      <Contact />
    </div>

    <Dock />
  </div>
);

export default App;
