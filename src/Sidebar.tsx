
import { FaHome, FaFolderOpen, FaBlog, FaEnvelope } from 'react-icons/fa';

const links = [
  { name: 'Home', href: '#', icon: <FaHome className="inline mr-2" /> },
  { name: 'Projects', href: '#', icon: <FaFolderOpen className="inline mr-2" /> },
  { name: 'Blog', href: '#', icon: <FaBlog className="inline mr-2" /> },
  { name: 'Contact', href: '#', icon: <FaEnvelope className="inline mr-2" /> },
];

export default function Sidebar() {
  return (
    <aside className="w-60 bg-black border-r-1 border-gray-800 min-h-screen flex flex-col items-center py-8 justify-center gap-10">
      <div>
        <img
          src="/lucas.png"
          alt="Logo"
          className="w-24 h-24 rounded-full border-1 border-white object-cover"
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

      <footer className="text-white text-sm">
        &copy; {new Date().getFullYear()} Lucasof
      </footer>
    </aside>
  );
}
