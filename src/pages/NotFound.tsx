import { useState } from 'react';
import ChromeDinoGame from 'react-chrome-dino';
import { GiDinosaurRex } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { FaGhost, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';

export default function NotFound() {
  const { theme, toggleTheme } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[var(--bg-color)] text-[var(--text-color)] p-4 transition-colors duration-300">
      
      <button
        onClick={toggleTheme}
        className="fixed top-8 right-8 p-3 rounded-full z-50 transition-all hover:scale-110 shadow-lg 
                   bg-gray-200 text-gray-800 border border-black/5 
                   dark:bg-gray-800 dark:text-yellow-400 dark:border-white/10"
      >
        {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      {isPlaying ? (
        <div className="flex flex-col items-center w-full max-w-2xl animate-in fade-in zoom-in duration-300">
          <div className="flex justify-between items-center w-full mb-4 px-2">
            <h2 className="text-gray-500 font-mono text-xs uppercase tracking-widest">
              Dino
            </h2>
            <button 
              onClick={() => setIsPlaying(false)}
              className="flex items-center gap-1 text-red-500 hover:text-red-400 transition-colors text-sm font-bold"
            >
              <IoClose size={20} />
              EXIT
            </button>
          </div>

          <div className="w-full bg-[var(--panel-bg-color)] rounded-2xl p-6 border border-gray-200 dark:border-white/5 shadow-2xl invert grayscale">
            <ChromeDinoGame />
          </div>

          <p className="mt-6 text-gray-500 text-sm font-mono animate-pulse">
            PRESS SPACE TO JUMP
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center text-center animate-in fade-in duration-300">
          <FaGhost className="text-7xl text-gray-300 dark:text-gray-800 mb-6 animate-bounce" />
          
          <h1 className="text-6xl font-bold mb-2">404</h1>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-400">Page went to the void.</p>
          
          <div className="flex flex-col items-center gap-8">
            <a 
              href="/" 
              className="px-8 py-2 bg-[var(--accent-color)] hover:bg-[var(--accent-color)] text-white rounded-full font-medium transition-all shadow-lg shadow-[var(--accent-color)]"
            >
              Back to Home
            </a>

            <button
              onClick={() => setIsPlaying(true)}
              className="text-gray-300 dark:text-gray-800 hover:text-[var(--accent-color)] dark:hover:text-gray-600 transition-colors duration-500"
              title="???"
            >
              <GiDinosaurRex size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}