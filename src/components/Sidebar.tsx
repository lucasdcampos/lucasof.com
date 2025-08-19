
import { FaHome, FaFolderOpen, FaBlog, FaEnvelope } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export const SIDEBAR_WIDTH = 240;

const links = [
  { name: 'Home', href: '/', icon: <FaHome className="inline mr-2" /> },
  { name: 'Projects', href: '/projects', icon: <FaFolderOpen className="inline mr-2" /> },
  { name: 'Blog', href: '/blog', icon: <FaBlog className="inline mr-2" /> },
  { name: 'Contact', href: '/contact', icon: <FaEnvelope className="inline mr-2" /> },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded bg-black border border-gray-800 text-white"
        aria-label="Abrir menu"
        onClick={() => setOpen(true)}
      >
        <FiMenu size={28} />
      </button>

      <aside
  className="bg-black border-r border-gray-800 min-h-screen flex flex-col items-center py-8 justify-center gap-10 fixed left-0 top-0 h-screen z-20 hidden md:flex"
  style={{ width: SIDEBAR_WIDTH }}
      >
        <div>
          <img
            src="/lucas.png"
            alt="Logo"
            className="w-24 h-24 rounded-full border border-white object-cover"
          />
        </div>
        <nav>
          <ul className="flex flex-col gap-4 items-center w-full">
            {links.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="flex items-center justify-center text-white text-base font-medium px-3 py-1 rounded transition-colors hover:bg-white/10 text-center gap-2"
                >
                  {link.icon}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <footer className="text-white text-sm mt-auto">
          &copy; {new Date().getFullYear()} Lucasof
        </footer>
      </aside>

      {open && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setOpen(false)}
          />
          <aside
            className="bg-black border-r border-gray-800 min-h-screen flex flex-col items-center py-8 justify-center gap-10 fixed left-0 top-0 h-screen z-50 shadow-lg"
            style={{ width: SIDEBAR_WIDTH }}
          >
            <button
              className="self-end mb-4 p-2 rounded bg-gray-800 text-white"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
            >
              <FiX size={28} />
            </button>
            <div>
              <img
                src="/lucas.png"
                alt="Logo"
                className="w-24 h-24 rounded-full border border-white object-cover"
              />
            </div>
            <nav>
              <ul className="flex flex-col gap-4 items-center w-full">
                {links.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center justify-center text-white text-base font-medium px-3 py-1 rounded transition-colors hover:bg-white/10 text-center gap-2"
                    >
                      {link.icon}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <footer className="text-white text-sm mt-auto">
              &copy; {new Date().getFullYear()} Lucasof
            </footer>
          </aside>
        </>
      )}
    </>
  );
}
