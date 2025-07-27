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

  const footerText = `© ${year} Alain Bruno • ${formattedTime} • alainbrunoofficial@gmail.com • Portfolio: brunocode-s • GitHub: brunocode-s • LinkedIn: in/alainbruno`;

  return (
    <footer className="w-full h-6 bg-gray-900 overflow-hidden relative">
      <div className="absolute whitespace-nowrap animate-marquee text-gray-300 text-[15px]">
        {footerText}
      </div>
    </footer>
  );
};

export default Footer;
