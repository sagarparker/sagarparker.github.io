import React from 'react';
import javaCertificate from '../assets/images/java.jpg';

interface Certification {
  title: string;
  provider: string;
  link: string;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: 'Mastering Data Structures and Algorithms',
      provider: 'Udemy',
      link: 'https://www.udemy.com/certificate/UC-489527ea-3e9f-4a81-9d72-7ecbedbb5e56/'
    },
    {
      title: 'Python Bootcamp',
      provider: 'Udemy',
      link: 'https://www.udemy.com/certificate/UC-2ed85995-afea-4e99-96c8-c218e58acbc5/'
    },
    {
      title: 'Java Spring Framework with Spring Boot',
      provider: 'Udemy',
      link: 'https://www.udemy.com/certificate/UC-778ab2c9-0d73-43b2-8053-9d9f0c5d673f/'
    },
    {
      title: 'Developing Web Applications using Servlets and JSP in Java',
      provider: 'NIIT',
      link: javaCertificate
    },
    {
      title: 'Web Development Bootcamp (Node.js)',
      provider: 'Udemy',
      link: 'https://www.udemy.com/certificate/UC-JUILC0PG/'
    },
    {
      title: 'Flutter & Dart - The Complete Guide',
      provider: 'Udemy',
      link: 'https://www.udemy.com/certificate/UC-a39a7924-0c41-49d7-8ab3-ce90d3f8c5c8/'
    }
  ];

  return (
    <section id="certifications" className="reveal">
      <div className="section-header">
        <h2 className="section-title">Certifications</h2>
        <div className="section-line"></div>
      </div>
      <div className="cert-container">
        <div className="cert-list">
          {certifications.map((cert, index) => (
            <a 
              key={index} 
              href={cert.link} 
              className="cert-item reveal-child"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="cert-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
              </div>
              <div className="cert-info">
                <span className="cert-title">{cert.title}</span>
                <span className="cert-provider">{cert.provider}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
