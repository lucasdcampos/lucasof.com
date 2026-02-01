import { useState } from 'react';
import ChromeDinoGame from 'react-chrome-dino';
import { GiDinosaurRex } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { FaGhost } from 'react-icons/fa';

export default function NotFound() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-4">
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
              FECHAR
            </button>
          </div>

          <div className="w-full bg-white/5 rounded-2xl p-6 border border-white/5 shadow-2xl invert grayscale">
            <ChromeDinoGame />
          </div>

          <p className="mt-6 text-gray-500 text-sm font-mono animate-pulse">
            PRESS SPACE TO JUMP
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center text-center animate-in fade-in duration-300">
          <FaGhost className="text-7xl text-gray-800 mb-6 animate-bounce" />
          
          <h1 className="text-6xl font-bold mb-2">404</h1>
          <p className="text-xl mb-8 text-gray-400">Page went to the void.</p>
          
          <div className="flex flex-col items-center gap-8">
            <a 
              href="/" 
              className="px-8 py-2 bg-blue-600 hover:bg-blue-500 rounded-full font-medium transition-all shadow-lg shadow-blue-500/20"
            >
              Back to Home
            </a>

            <button
              onClick={() => setIsPlaying(true)}
              className="text-gray-800 hover:text-gray-600 transition-colors duration-500"
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