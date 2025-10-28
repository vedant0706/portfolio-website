import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-all duration-300 ${
        isDark 
          ? 'bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30' 
          : 'bg-gray-900 text-gray-300 hover:bg-gray-700/30'
      } backdrop-blur-sm`}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;