import React, { useState, useEffect } from 'react';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

interface HeaderProps {
  onNavigateHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateHome }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Ensure we are on the main portfolio view before trying to scroll.
    onNavigateHome();

    // The DOM needs a moment to update after the state change.
    // A timeout of 0ms defers the execution until the call stack is clear,
    // which is after the render has been scheduled.
    setTimeout(() => {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      } else if (href === '#home') {
        // Fallback for home, just scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 0);


    if (isOpen) {
      setIsOpen(false);
    }
  };

  const NavLink: React.FC<{ href: string; children: React.ReactNode; }> = ({ href, children }) => (
    <a
      href={href}
      onClick={(e) => handleNavLinkClick(e, href)}
      className="text-secondary hover:text-accent transition-colors duration-300 font-medium text-lg md:text-base cursor-pointer"
    >
      {children}
    </a>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" onClick={(e) => handleNavLinkClick(e, '#home')} className="text-2xl font-display font-bold cursor-pointer">
            Isharab Ahmed<span className="text-accent">.</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary hover:text-accent focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm pb-4">
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;