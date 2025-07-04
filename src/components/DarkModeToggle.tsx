import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem('darkMode');
    return stored ? JSON.parse(stored) : false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode((prev) => !prev)}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 shadow transition hover:scale-110"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        // Sun icon for light mode
        <svg
          className="w-6 h-6 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15a5 5 0 100-10 5 5 0 000 10zm0 3a1 1 0 011-1h.01a1 1 0 110 2h-.01a1 1 0 01-1-1zm0-16a1 1 0 011 1v.01a1 1 0 11-2 0V3a1 1 0 011-1zm8 8a1 1 0 01-1 1h-.01a1 1 0 110-2H17a1 1 0 011 1zM3 10a1 1 0 011 1H3.99a1 1 0 110-2H4a1 1 0 01-1 1zm13.071 4.071a1 1 0 010 1.414l-.007.007a1 1 0 01-1.414-1.414l.007-.007a1 1 0 011.414 0zM4.929 4.929a1 1 0 011.414-1.414l.007.007a1 1 0 01-1.414 1.414l-.007-.007zM4.929 15.071a1 1 0 011.414 1.414l-.007.007a1 1 0 11-1.414-1.414l.007-.007zM15.071 4.929a1 1 0 01-1.414 1.414l-.007-.007a1 1 0 011.414-1.414l.007.007z" />
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg
          className="w-6 h-6 text-gray-700 dark:text-gray-200"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M17.293 13.293a8 8 0 01-11.586-11.586 8 8 0 1011.586 11.586z"
          />
        </svg>
      )}
    </button>
  );
}
