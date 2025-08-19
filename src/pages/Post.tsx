import { useParams, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import fm from 'front-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
  const data = attributes as { title: string; date?: string };

  // mm/dd/yyyy
  let formattedDate = String(data.date);
  if (formattedDate && !isNaN(Date.parse(formattedDate))) {
    const d = new Date(formattedDate);
    formattedDate = `${(d.getMonth()+1).toString().padStart(2,'0')}/${d.getDate().toString().padStart(2,'0')}/${d.getFullYear()}`;
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <div className="text-gray-500 text-sm mb-6">{formattedDate}</div>
      <article className="max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({node, ...props}) => <h1 className="text-4xl font-bold text-blue-400 mb-4" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-3xl font-semibold text-blue-300 mb-3" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-2xl font-semibold text-blue-200 mb-2" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc ml-6 mb-2" {...props} />,
            ol: ({node, ...props}) => <ol className="list-decimal ml-6 mb-2" {...props} />,
            li: ({node, ...props}) => <li className="mb-1" {...props} />,
            a: ({node, ...props}) => <a className="text-blue-400 underline hover:text-blue-200 transition-colors" target="_blank" rel="noopener noreferrer" {...props} />,
            img: ({node, ...props}) => <img className="rounded shadow max-w-xs my-4" {...props} />,
            p: ({node, ...props}) => <p className="mb-3 text-gray-200" {...props} />,
            table: ({node, ...props}) => <table className="table-auto border border-gray-700 my-4" {...props} />,
            th: ({node, ...props}) => <th className="border px-2 py-1 bg-gray-800 text-gray-100" {...props} />,
            td: ({node, ...props}) => <td className="border px-2 py-1 text-gray-300" {...props} />,
            code: ({node, ...props}) => <code className="bg-gray-800 text-green-400 px-1 rounded" {...props} />,
          }}
        >
          {body as string}
        </ReactMarkdown>
      </article>
    </Layout>
  );
}
