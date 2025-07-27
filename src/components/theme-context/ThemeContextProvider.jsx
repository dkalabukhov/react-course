import { useState } from 'react';

import { ThemeContext } from './ThemeContext';

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};
