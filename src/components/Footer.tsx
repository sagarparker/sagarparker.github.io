import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://github.com/sagarparker" target="_blank" rel="noopener noreferrer" className="footer-link">
            GitHub
          </a>
          <a href="https://leetcode.com/u/sagar8parker/" target="_blank" rel="noopener noreferrer" className="footer-link">
            LeetCode
          </a>
          <a href="https://www.linkedin.com/in/sagar-parker-07561b1a3/" target="_blank" rel="noopener noreferrer" className="footer-link">
            LinkedIn
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Sagar Parker. Built with React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
