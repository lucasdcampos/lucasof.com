
import { FaHome, FaFolderOpen, FaBlog, FaEnvelope } from 'react-icons/fa';

const links = [
  { name: 'Home', href: '/', icon: <FaHome className="inline mr-2" /> },
  { name: 'Projects', href: '/projects', icon: <FaFolderOpen className="inline mr-2" /> },
  { name: 'Blog', href: '/blog', icon: <FaBlog className="inline mr-2" /> },
  { name: 'Contact', href: '/contact', icon: <FaEnvelope className="inline mr-2" /> },
];

export default function Sidebar() {
  return (
    <aside
      className="bg-black border-r border-gray-800 min-h-screen flex flex-col items-center py-8 justify-center gap-10 fixed left-0 top-0 h-screen z-20"
      style={{ width: 'var(--sidebar-width, 240px)' }} // fallback: 240px
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
  );
}
