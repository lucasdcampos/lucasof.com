import { FaHome, FaFolderOpen, FaBlog, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const links = [
  { name: 'Home', href: '/', icon: <FaHome /> },
  { name: 'Projects', href: '/projects', icon: <FaFolderOpen /> },
  { name: 'Blog', href: '/blog', icon: <FaBlog /> },
  { name: 'Contact', href: '/contact', icon: <FaEnvelope /> },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-gray-200/10 dark:border-white/5 
                    bg-[var(--bg-color)]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-center relative">
        
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.href} 
                className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleTheme}
          className="hidden md:flex absolute right-8 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-[var(--text-color)]"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <FaSun size={18} className="text-yellow-400" /> : <FaMoon size={18} className="text-gray-600" />}
        </button>

        <div className="md:hidden absolute right-4 flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-[var(--text-color)]"
          >
            {theme === 'dark' ? <FaSun size={20} className="text-yellow-400" /> : <FaMoon size={20} />}
          </button>
          
          <button 
            className="p-2 text-[var(--text-color)]" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-[var(--bg-color)] z-40 px-6 py-8 animate-in fade-in slide-in-from-top-4 duration-300">
          <ul className="flex flex-col gap-8 items-center mt-12">
            {links.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.href} 
                  className="text-3xl font-bold text-[var(--text-color)] flex items-center gap-4"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-blue-500">{link.icon}</span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}