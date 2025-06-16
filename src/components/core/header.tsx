'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggle from './themeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: 'Избранное', href: '/favorites' },
  { name: 'Тарифы', href: '#' },
  { name: 'Поддержка', href: '#' },
];

const Header: FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-10">
            <Link href="/" className="flex items-center text-2xl font-bold text-blue-600 dark:text-blue-400">
              <Image
                src="/icons/logo.svg"
                alt="DataFy Logo"
                width={100}
                height={100}
                priority
              />
            </Link>

            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                    pathname === item.href
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            <ThemeToggle />
            <button
              className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Меню навигации"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium text-lg py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                    pathname === item.href
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;