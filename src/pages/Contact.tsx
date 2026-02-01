import Layout from '../components/Layout';
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaChessKnight,
  FaYoutube,
  FaCopy,
  FaKey,
  FaCoffee
} from 'react-icons/fa';

const mainLinks = [
  { name: 'lucasof', href: 'https://discordapp.com/users/319652568160534542', icon: <FaDiscord />, color: 'text-[var(--accent-color)]' },
  { name: 'lucasm.campos@hotmail.com.br', href: 'mailto:lucasm.campos@hotmail.com.br', icon: <FaEnvelope />, color: 'text-red-500' },
  { name: 'lucasdcampos', href: 'https://github.com/lucasdcampos', icon: <FaGithub />, color: 'text-gray-600 dark:text-gray-300' },
  { name: 'lucazof', href: 'https://linkedin.com/in/lucazof', icon: <FaLinkedin />, color: 'text-blue-500' },
];

const otherLinks = [
  { name: 'lucazof', href: 'https://x.com/lucazof', icon: <FaTwitter />, color: 'text-sky-500' },
  { name: 'lucazof (Chess.com)', href: 'https://chess.com/member/lucazof', icon: <FaChessKnight />, color: 'text-green-600' },
  { name: 'lucasof', href: 'https://youtube.com/@lucasof', icon: <FaYoutube />, color: 'text-red-600' },
];

export default function Contact() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Layout>
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">Contact</h1>
        <div className="h-1 w-12 bg-[var(--accent-color)] rounded-full mb-4" />
        <p className="text-lg text-gray-600 dark:text-gray-400">
          If you want to talk about a project or just say hi, feel free to reach out.
          For quick chats, <span className="text-[var(--accent-color)] font-medium">Discord</span> is your best bet.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Main Contacts */}
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-6">Socials & Professional</h2>
          <ul className="space-y-4">
            {mainLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group transition-all"
                >
                  <span className={`text-2xl ${link.color} group-hover:scale-110 transition-transform`}>
                    {link.icon}
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-[var(--text-color)] group-hover:underline decoration-[var(--accent-color)] underline-offset-4 transition-colors font-medium">
                    {link.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-6">Other Platforms</h2>
          <ul className="space-y-4">
            {otherLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <span className={`text-xl ${link.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                    {link.icon}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 group-hover:text-[var(--text-color)] transition-colors">
                    {link.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Security & Support Section */}
      <section className="space-y-6 border-t border-gray-200 dark:border-gray-800 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* GPG Card */}
          <div className="bg-[var(--panel-bg-color)] border border-gray-200 dark:border-gray-800 p-6 rounded-xl transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <FaKey className="text-yellow-600 dark:text-yellow-500/70" />
              <h2 className="font-semibold">GPG Key</h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              For encrypted communication: <a href="/lucasof.gpg" className="text-[var(--accent-color)] hover:underline">lucasof.gpg</a>
            </p>
            <div 
              onClick={() => copyToClipboard('8608 3933 1F97 5E66 0E40 6469 24EE 745B 2F0A 90C4')}
              className="bg-black/5 dark:bg-black/50 rounded-lg p-3 text-[10px] font-mono text-gray-500 break-all cursor-pointer hover:bg-black/10 dark:hover:text-gray-300 border border-gray-200 dark:border-white/5 transition-colors flex justify-between items-center group"
            >
              <span>8608 3933 1F97 5E66 0E40 6469 24EE 745B 2F0A 90C4</span>
              <FaCopy className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Coffee Card */}
          <div className="bg-[var(--panel-bg-color)] border border-gray-200 dark:border-gray-800 p-6 rounded-xl transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <FaCoffee className="text-orange-600 dark:text-orange-400/70" />
              <h2 className="font-semibold">Buy me a coffee</h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Support my random projects via BTC:</p>
            <div 
              onClick={() => copyToClipboard('bc1qrfzjxcf49cnhpcawtqdggds5t39s4ms5xhjfkh')}
              className="bg-black/5 dark:bg-black/50 rounded-lg p-3 text-[11px] font-mono text-gray-500 break-all cursor-pointer hover:bg-black/10 dark:hover:text-gray-300 border border-gray-200 dark:border-white/5 transition-colors flex justify-between items-center group"
            >
              <span>bc1qrfzjxcf49cnhpcawtqdggds5t39s4ms5xhjfkh</span>
              <FaCopy className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}