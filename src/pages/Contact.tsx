import ContactCard from '../components/ContactCard';
import Layout from '../layouts/Layout';
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaChessKnight,
  FaYoutube,
  FaKey,
  FaCoffee
} from 'react-icons/fa';

const mainLinks = [
  { name: 'lucasof', href: 'https://discordapp.com/users/319652568160534542', icon: <FaDiscord />, color: 'text-[var(--accent-color)]' },
  { name: 'hi@lucasof.com', href: 'mailto:hi@lucasof.com', icon: <FaEnvelope />, color: 'text-red-500' },
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
          
          <ContactCard 
            title="GPG Key"
            icon={<FaKey className="text-yellow-600 dark:text-yellow-500/70" />}
            description={
              <>
                For encrypted communication: 
                <a href="/lucasof.gpg" className="ml-1 text-[var(--accent-color)] hover:underline">lucasof.gpg</a>
              </>
            }
            copyValue="B7FC 5DD0 380C 5020 2D27  6F80 D32C D939 878E 94E1"
            onCopy={copyToClipboard}
          />

          <ContactCard 
            title="Buy me a coffee"
            icon={<FaCoffee className="text-orange-600 dark:text-orange-400/70" />}
            description="Support my random projects via BTC:"
            copyValue="bc1qrfzjxcf49cnhpcawtqdggds5t39s4ms5xhjfkh"
            onCopy={copyToClipboard}
          />

        </div>
      </section>
    </Layout>
  );
}