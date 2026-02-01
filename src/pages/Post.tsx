import { useParams, Navigate, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import fm from 'front-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FaArrowLeft } from 'react-icons/fa';

const posts = import.meta.glob('../posts/*.md', { eager: true, query: '?raw', import: 'default' });

export default function Post() {
  const { slug } = useParams();
  const entry = Object.entries(posts).find(([path]) => {
    const fileSlug = path.split('/').pop()?.replace('.md', '');
    return fileSlug === slug;
  });

  if (!entry) return <Navigate to="/404" />;

  const [, raw] = entry;
  const { attributes, body } = fm(raw as string);
  const data = attributes as { title: string; date: string | Date };

  const dateStr = data.date instanceof Date 
    ? data.date.toISOString().split('T')[0] 
    : String(data.date);

  const [y, m, d] = dateStr.split('-').map(Number);
  const localDate = new Date(y, m - 1, d);

  const formattedDate = localDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <Layout>
      <div className="mb-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-500 transition-colors group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to all posts
        </Link>
      </div>

      <header className="mb-12">
        <time className="text-sm font-mono text-blue-500/80 mb-2 block uppercase tracking-widest">
          {formattedDate}
        </time>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {data.title}
        </h1>
        <div className="h-1 w-20 bg-blue-600 rounded-full mt-6" />
      </header>

      <article className="prose dark:prose-invert prose-blue max-w-none transition-colors duration-300">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ ...props }) => <h2 className="text-3xl font-bold mt-12 mb-6" {...props} />,
            h2: ({ ...props }) => <h3 className="text-2xl font-bold mt-10 mb-4" {...props} />,
            p: ({ ...props }) => <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6" {...props} />,
            ul: ({ ...props }) => <ul className="list-disc ml-6 space-y-2 mb-6" {...props} />,
            li: ({ ...props }) => <li className="text-gray-700 dark:text-gray-300" {...props} />,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            code: ({ inline, children, ...props }: any) => {
              return inline ? (
                <code className="bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-300 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                  {children}
                </code>
              ) : (
                <pre className="bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-4 rounded-xl overflow-x-auto my-8 shadow-sm dark:shadow-none">
                  <code className="text-sm text-gray-800 dark:text-gray-200 font-mono leading-relaxed" {...props}>
                    {children}
                  </code>
                </pre>
              );
            },
            blockquote: ({ ...props }) => (
              <blockquote className="border-l-4 border-blue-500 bg-blue-500/5 p-6 rounded-r-lg italic my-8 text-gray-700 dark:text-gray-300" {...props} />
            ),
            img: ({ ...props }) => (
              <span className="block my-10 text-center">
                <img className="rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg mx-auto" {...props} />
                {props.alt && <span className="block text-sm text-gray-500 mt-3 font-medium">{props.alt}</span>}
              </span>
            ),
          }}
        >
          {body as string}
        </ReactMarkdown>
      </article>

      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-gray-500 text-sm mb-12">
        Thanks for reading! If you found this interesting, feel free to reach out.
      </footer>
    </Layout>
  );
}