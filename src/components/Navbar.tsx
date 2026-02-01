import { FaHome, FaFolderOpen, FaBlog, FaEnvelope } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const links = [
  { name: 'Home', href: '/', icon: <FaHome /> },
  { name: 'Projects', href: '/projects', icon: <FaFolderOpen /> },
  { name: 'Blog', href: '/blog', icon: <FaBlog /> },
  { name: 'Contact', href: '/contact', icon: <FaEnvelope /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-center relative">
        
        {/* Desktop Links - Centralizados */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                {link.icon}
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle - Posicionado à direita na ausência de logo */}
        <button 
          className="md:hidden text-white absolute right-4" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-black z-40 px-6 py-8">
          <ul className="flex flex-col gap-6 items-center">
            {links.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-2xl text-white flex items-center gap-4"
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}