
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t border-gray-800 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center text-secondary text-sm">
        <p>&copy; {currentYear} Isharab Ahmed. All Rights Reserved.</p>
        <p>Built with ❤️ and React/Tailwind.</p>
      </div>
    </footer>
  );
};

export default Footer;
