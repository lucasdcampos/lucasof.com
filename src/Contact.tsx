import Layout from './Layout';
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaChessKnight,
  FaYoutube
} from 'react-icons/fa';

const mainLinks = [
  {
    name: 'lucasof',
    href: 'https://discordapp.com/users/319652568160534542',
    icon: <FaDiscord className="text-indigo-400" />,
  },
  {
    name: 'lucasm.campos@hotmail.com.br',
    href: 'mailto:lucasm.campos@hotmail.com.br',
    icon: <FaEnvelope className="text-red-400" />,
  },
  {
    name: 'lucasdcampos',
    href: 'https://github.com/lucasdcampos',
    icon: <FaGithub className="text-gray-300" />,
  },
  {
    name: 'lucazof',
    href: 'https://linkedin.com/in/lucazof',
    icon: <FaLinkedin className="text-blue-400" />,
  },
];

const otherLinks = [
  {
    name: 'lucazof',
    href: 'https://x.com/lucazof',
    icon: <FaTwitter className="text-blue-400" />,
  },
  {
    name: 'lucazof (Chess.com)',
    href: 'https://chess.com/member/lucazof',
    icon: <FaChessKnight className="text-green-500" />,
  },
  {
    name: 'lucasof',
    href: 'https://youtube.com/@lucasof',
    icon: <FaYoutube className="text-red-500" />,
  },
];

export default function Contact() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="mb-8 text-base text-gray-300">
        Here are my contact details. If you want something quick, use Discord.
      </p>

      <div className="w-full max-w-md mb-10">
        <ul className="flex flex-col gap-6">
          {mainLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg font-medium hover:underline hover:text-indigo-300 transition-colors"
              >
                <span className="text-2xl">{link.icon}</span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full max-w-md mb-10">
        <h2 className="text-xl font-semibold mb-4">Other Links</h2>
        <ul className="flex flex-col gap-4">
          {otherLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-base font-medium hover:underline hover:text-indigo-300 transition-colors"
              >
                <span className="text-xl">{link.icon}</span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full max-w-md mb-10">
        <h2 className="text-xl font-semibold mb-2">GPG Key</h2>
        <p className="mb-2 text-gray-300">
          If you want to send me a secret:{' '}
          <a href="/lucasof.gpg" className="text-indigo-400 hover:underline">
            lucasof.gpg
          </a>
        </p>
        <div className="bg-gray-900 rounded p-4 text-xs font-mono break-all border border-gray-700">
          8608 3933 1F97 5E66 0E40  6469 24EE 745B 2F0A 90C4
        </div>
      </div>

      <div className="w-full max-w-md mb-10">
        <h2 className="text-xl font-semibold mb-2">Crypto</h2>
        <p className="mb-2 text-gray-300">
          If you want to buy me a coffee ☕ in crypto for some reason:
        </p>
        <div className="bg-gray-900 rounded p-4 text-sm font-mono break-all border border-gray-700">
          bc1qrfzjxcf49cnhpcawtqdggds5t39s4ms5xhjfkh
        </div>
      </div>
    </Layout>
  );
}
