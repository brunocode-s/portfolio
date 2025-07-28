'use client'

import { useEffect, useState } from 'react';

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = dateTime.toLocaleTimeString();
  const year = dateTime.getFullYear();

  const footerText = `© ${year} Alain Bruno • ${formattedTime} • alainbrunoofficial@gmail.com • Portfolio: alain-bruno-portfolio.vercel.app • GitHub: brunocode-s • linkedin.com/in/bruno-alain-269143266`;

  return (
    <footer className="w-full h-6 adaptive-text overflow-hidden relative">
      <div className="absolute whitespace-nowrap animate-marquee text-gray-300 text-[15px]">
        {footerText}
      </div>
    </footer>
  );
};

export default Footer;
