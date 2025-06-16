'use client';

import { FC } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

type ThemeToggleProps = {
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const ThemeToggle: FC<ThemeToggleProps> = ({
  showLabel = false,
  size = 'md',
  className = ''
}) => {
  const { theme, toggleTheme } = useTheme();

  const togglerSizes = {
    sm: {
      container: 'w-9 h-5',
      circle: 'w-3 h-3',
      translate: 'translate-x-4',
      icon: 'text-[8px]',
      text: 'text-xs'
    },
    md: {
      container: 'w-11 h-6',
      circle: 'w-4 h-4',
      translate: 'translate-x-5',
      icon: 'text-xs',
      text: 'text-sm'
    },
    lg: {
      container: 'w-14 h-7',
      circle: 'w-5 h-5',
      translate: 'translate-x-7',
      icon: 'text-sm',
      text: 'text-base'
    }
  };

  const sizeClass = togglerSizes[size];

  return (
    <div className={`relative flex items-center ${className}`}>
      <div
        className={`${sizeClass.container} flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out ${
          theme === 'dark' ? 'bg-blue-500' : 'bg-gray-300'
        }`}
        onClick={toggleTheme}
        role="switch"
        aria-checked={theme === 'dark'}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTheme();
          }
        }}
      >
        <div
          className={`bg-white ${sizeClass.circle} rounded-full shadow-md transform transition-transform duration-300 ease-in-out flex justify-center items-center ${
            theme === 'dark' ? sizeClass.translate : 'translate-x-0'
          }`}
        >
          {theme === 'dark' ? (
            <FaMoon className={`${sizeClass.icon} text-blue-500`} />
          ) : (
            <FaSun className={`${sizeClass.icon} text-yellow-500`} />
          )}
        </div>
      </div>
      {showLabel && (
        <span className={`ml-2 ${sizeClass.text} font-medium text-gray-700 dark:text-gray-300`}>
          {theme === 'dark' ? 'Темная' : 'Светлая'}
        </span>
      )}
    </div>
  );
};

export default ThemeToggle;
