const links = [
  { name: 'Home', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function Sidebar() {
  return (
    <aside className="w-60 bg-black border-r-2 border-white min-h-screen flex flex-col items-center py-8 justify-center gap-10">
      <div>
        <img
          src="/vite.svg"
          alt="Logo"
          className="w-24 h-24 rounded-full border-4 border-white object-cover"
        />
      </div>

      <nav>
        <ul className="flex flex-col gap-4 items-center w-full">
          {links.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block text-white text-base font-medium px-3 py-1 rounded transition-colors hover:bg-white/10 text-center"
              >
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
