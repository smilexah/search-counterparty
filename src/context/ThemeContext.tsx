'use client';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';

type Theme = 'light' | 'dark';
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
    isSystemTheme: boolean;
    resetToSystemTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [storedTheme, setStoredTheme] = useLocalStorage<Theme | null>('theme', null);
    const [isSystemTheme, setIsSystemTheme] = useState(storedTheme === null);
    const [theme, setTheme] = useState<Theme>('light');
    const [isMounted, setIsMounted] = useState(false);

    const getSystemTheme = (): Theme => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    useEffect(() => {
        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            setTheme(getSystemTheme());
        }

        setIsMounted(true);
    }, [storedTheme]);

    useEffect(() => {
        if (!isSystemTheme) return;

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e: MediaQueryListEvent) => {
            if (isSystemTheme) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, [isSystemTheme]);

    useEffect(() => {
        if (!isMounted) return;

        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme, isMounted]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setStoredTheme(newTheme);
        setIsSystemTheme(false);
    };

    const resetToSystemTheme = () => {
        setStoredTheme(null);
        setIsSystemTheme(true);
        setTheme(getSystemTheme());
    };

    const contextValue = {
        theme,
        toggleTheme,
        isSystemTheme,
        resetToSystemTheme
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};