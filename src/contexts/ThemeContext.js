import { createContext, useState } from 'react';
export const ThemeContext = createContext();

const ThemeWrapper = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{ setTheme }}>
      <div
        className={`${
          theme === 'dark'
            ? 'bg-customBg'
            : theme === 'red'
            ? 'bg-customRed'
            : theme === 'green' && 'bg-customGreen'
        } w-screen min-h-screen text-white font-handlee`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeWrapper;
