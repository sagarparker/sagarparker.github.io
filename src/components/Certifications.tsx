import React from 'react';
import Fade from './Fade';
import { ArrowUpRight, Award } from './Icons';
import javaCertificate from '../assets/images/java.jpg';

interface Certification {
  title: string;
  provider: string;
  year?: string;
  link: string;
}

const certifications: Certification[] = [
  {
    title: 'Mastering Data Structures and Algorithms',
    provider: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-489527ea-3e9f-4a81-9d72-7ecbedbb5e56/',
  },
  {
    title: 'Java Spring Framework with Spring Boot',
    provider: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-778ab2c9-0d73-43b2-8053-9d9f0c5d673f/',
  },
  {
    title: 'Python Bootcamp',
    provider: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-2ed85995-afea-4e99-96c8-c218e58acbc5/',
  },
  {
    title: 'Web Development Bootcamp (Node.js)',
    provider: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-JUILC0PG/',
  },
  {
    title: 'Flutter & Dart — The Complete Guide',
    provider: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-a39a7924-0c41-49d7-8ab3-ce90d3f8c5c8/',
  },
  {
    title: 'Developing Web Applications using Servlets and JSP in Java',
    provider: 'NIIT',
    link: javaCertificate,
  },
];

const Certifications: React.FC = () => (
  <section id="certifications" className="section section--roomy">
    <Fade>
      <h2 className="section-title">Certifications</h2>
    </Fade>

    <div>
      {certifications.map((cert, i) => (
        <Fade key={cert.title} delay={0.04 + i * 0.03}>
          <a
            className="row-link"
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="row-link-main">
              <span className="row-logo" aria-hidden="true">
                <Award />
              </span>
              <span className="row-body">
                <span className="row-name">
                  {cert.title}
                  <ArrowUpRight className="arrow-out" />
                </span>
                <span className="row-subtitle">{cert.provider}</span>
              </span>
            </span>
          </a>
        </Fade>
      ))}
    </div>
  </section>
);

export default Certifications;
