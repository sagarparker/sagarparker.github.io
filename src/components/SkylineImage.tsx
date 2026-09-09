import React from 'react';

interface Props {
  className?: string;
}

/**
 * The San Francisco skyline line-art. Served from the public/ folder
 * (rather than imported from src/) so CRA's webpack config treats it as a
 * static asset instead of routing it through @svgr/webpack as a component.
 * Theme-tinted via CSS filters in App.css - see .sf-skyline /
 * [data-theme='light'] .sf-skyline.
 */
const SkylineImage: React.FC<Props> = ({ className = '' }) => (
  <div className={`sf-skyline ${className}`.trim()} aria-hidden="true">
    <img src={`${process.env.PUBLIC_URL}/images/hero-bg.svg`} alt="" loading="lazy" />
  </div>
);

export default SkylineImage;
