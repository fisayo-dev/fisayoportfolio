'use client';

import { useState } from 'react';
import { MenuIcon, X } from 'lucide-react';
import { Link } from 'react-scroll';

interface NavLink {
  label: string;
  to: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', to: 'home' },
  { label: 'experience', to: 'experience' },
  { label: 'project', to: 'projects' },
  { label: 'Skills', to: 'skills' },
  { label: 'Services', to: 'services' },
  { label: 'Contact', to: 'contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="fixed w-full bg-transparent backdrop-blur z-50">
      <div className="app-container py-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-extrabold text-blue">Fisayo Obadina</h2>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-2">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  className="capitalize cursor-pointer p-2 rounded-full hover:bg-blue-300/30 transition-colors"
                  activeClass="text-blue bg-gray-600/30"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <div
            className="block md:hidden p-3 rounded-full hover:bg-blue-500 cursor-pointer transition-opacity hover:text-black"
            onClick={toggleMenu}
          >
            <MenuIcon className="h-8 w-8" />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-lg z-40 flex flex-col items-center pt-32 space-y-6 text-white transition-all duration-300">
          {/* Close button */}
          <div
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-blue-400 hover:text-black cursor-pointer"
            onClick={closeMenu}
          >
            <X className="w-6 h-6" />
          </div>

          {/* Mobile nav links */}
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              smooth={true}
              duration={500}
              spy={true}
              className="text-lg font-medium cursor-pointer hover:text-blue transition-colors"
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
