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

type SidebarContentProps = {
  onClose?: () => void;
  showCloseButton?: boolean;
};

function SidebarContent({ onClose, showCloseButton = false }: SidebarContentProps) {
  return (
    <>
      {showCloseButton && (
        <button
          className="self-end mb-4 p-2 rounded bg-gray-800 text-white"
          aria-label="Close menu"
          onClick={onClose}
        >
          <FiX size={28} />
        </button>
      )}

      <div>
        <img
          src="/lucas.png"
          alt="Logo"
          className="w-24 h-24 rounded-full border border-white object-cover"
        />
      </div>

      <nav>
        <ul className="flex flex-col gap-2 items-start w-full">
          {links.map(link => (
            <li key={link.name} className="w-full">
              <a
                href={link.href}
                className="flex items-center text-white text-base font-medium px-3 py-2 rounded transition-colors hover:bg-white/10 gap-3 w-full justify-start"
              >
                <span className="w-6 flex justify-center">{link.icon}</span>
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="text-white text-sm mt-auto">
        &copy; {new Date().getFullYear()} Lucasof
      </footer>
    </>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768 && open) {
        setOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open]);

  return (
    <>
      {/* Mobile open button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded border border-gray-800 text-white"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <FiMenu size={28} />
      </button>

      {/* Desktop Sidebar */}
      <aside
        className="border-r border-gray-800 min-h-screen flex flex-col items-center py-8 justify-center gap-10 fixed left-0 top-0 h-screen z-20 hidden md:flex"
        style={{ width: SIDEBAR_WIDTH }}
      >
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />

          <aside
            className="border-r border-gray-800 min-h-screen flex flex-col items-center py-8 justify-center gap-10 fixed left-0 top-0 h-screen z-50 shadow-lg"
            style={{ width: SIDEBAR_WIDTH, backgroundColor: 'var(--bg-color)' }}
          >
            <SidebarContent onClose={() => setOpen(false)} showCloseButton />
          </aside>
        </>
      )}
    </>
  );
}
