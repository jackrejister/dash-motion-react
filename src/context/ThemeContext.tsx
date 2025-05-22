
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type FontSize = 'small' | 'medium' | 'large';
type AccentColor = '#3b82f6' | '#10b981' | '#8b5cf6' | '#ec4899' | '#f97316';

type ThemeContextType = {
  theme: Theme;
  fontSize: FontSize;
  accentColor: AccentColor;
  toggleTheme: () => void;
  setFontSize: (size: FontSize) => void;
  setAccentColor: (color: AccentColor) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [fontSize, setFontSize] = useState<FontSize>('medium');
  const [accentColor, setAccentColor] = useState<AccentColor>('#3b82f6');

  useEffect(() => {
    // Load theme from localStorage
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }

    // Load font size from localStorage
    const storedFontSize = localStorage.getItem('fontSize') as FontSize | null;
    if (storedFontSize) {
      setFontSize(storedFontSize);
      applyFontSize(storedFontSize);
    }

    // Load accent color from localStorage
    const storedAccentColor = localStorage.getItem('accentColor') as AccentColor | null;
    if (storedAccentColor) {
      setAccentColor(storedAccentColor);
      applyAccentColor(storedAccentColor);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      return newTheme;
    });
  };

  const handleSetFontSize = (size: FontSize) => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
    applyFontSize(size);
  };

  const handleSetAccentColor = (color: AccentColor) => {
    setAccentColor(color);
    localStorage.setItem('accentColor', color);
    applyAccentColor(color);
  };

  const applyFontSize = (size: FontSize) => {
    const html = document.documentElement;
    html.classList.remove('text-sm', 'text-base', 'text-lg');
    
    switch (size) {
      case 'small':
        html.classList.add('text-sm');
        break;
      case 'medium':
        html.classList.add('text-base');
        break;
      case 'large':
        html.classList.add('text-lg');
        break;
    }
  };

  const applyAccentColor = (color: AccentColor) => {
    document.documentElement.style.setProperty('--primary', convertHexToHSL(color));
  };

  // Helper function to convert hex to HSL (simplified version)
  const convertHexToHSL = (hex: string): string => {
    // This is a simplified approach - in a real app, you'd want a more accurate conversion
    switch (hex) {
      case '#3b82f6': return '221 83% 53%'; // blue
      case '#10b981': return '160 84% 39%'; // green
      case '#8b5cf6': return '262 83% 58%'; // purple
      case '#ec4899': return '330 90% 61%'; // pink
      case '#f97316': return '24 95% 53%'; // orange
      default: return '221 83% 53%'; // default blue
    }
  };

  return (
    <ThemeContext.Provider 
      value={{ 
        theme, 
        fontSize, 
        accentColor, 
        toggleTheme, 
        setFontSize: handleSetFontSize, 
        setAccentColor: handleSetAccentColor 
      }}
    >
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
