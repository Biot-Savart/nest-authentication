'use client';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const sharedLinkClasses =
    'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium';
  const sharedMobileLinkClasses =
    'block px-3 py-2 rounded-md text-base font-medium';
  const hoverEffectClasses = 'hover:text-zinc-800 dark:hover:text-white';
  const mobileHoverEffectClasses = 'hover:bg-zinc-700 hover:text-white';

  return (
    <nav className="bg-white dark:bg-zinc-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://placehold.co/64x64"
                alt="Your Logo"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://placehold.co/128x64"
                alt="Your Logo"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#"
                className={`${sharedLinkClasses} border-zinc-900 text-zinc-900 dark:text-white dark:border-white`}
              >
                Home
              </a>
              <a
                href="#"
                className={`${sharedLinkClasses} text-zinc-500 dark:text-zinc-300 ${hoverEffectClasses} border-transparent`}
              >
                Features
              </a>
              <a
                href="#"
                className={`${sharedLinkClasses} text-zinc-500 dark:text-zinc-300 ${hoverEffectClasses} border-transparent`}
              >
                Pricing
              </a>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {!isMenuOpen ? null : (
        <div className="sm:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#"
              className={`bg-zinc-900 text-white ${sharedMobileLinkClasses}`}
            >
              Home
            </a>
            <a
              href="#"
              className={`text-zinc-300 ${sharedMobileLinkClasses} ${mobileHoverEffectClasses}`}
            >
              Features
            </a>
            <a
              href="#"
              className={`text-zinc-300 ${sharedMobileLinkClasses} ${mobileHoverEffectClasses}`}
            >
              Pricing
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
