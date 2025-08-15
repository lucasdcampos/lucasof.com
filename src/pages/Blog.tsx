// src/pages/Blog.tsx
import Layout from '../components/Layout';
import fm from 'front-matter';

const posts = import.meta.glob('../posts/*.md', { eager: true, query: '?raw', import: 'default' });

export default function Blog() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="flex flex-col gap-4">
        {Object.entries(posts).map(([path, raw]) => {
          const { attributes } = fm(raw as string);
          const data = attributes as { title: string; date?: string };
          // mm/dd/yyyy
          let formattedDate = String(data.date);
          if (formattedDate && !isNaN(Date.parse(formattedDate))) {
            const d = new Date(formattedDate);
            formattedDate = `${(d.getMonth()+1).toString().padStart(2,'0')}/${d.getDate().toString().padStart(2,'0')}/${d.getFullYear()}`;
          }
          // Generate slug from file path
          const slug = path.split('/').pop()?.replace('.md', '');
          return (
            <div key={path} className="flex items-center gap-4">
              <span className="text-gray-500 text-sm w-24">{formattedDate}</span>
              <a
                href={`/blog/${slug}`}
                className="font-semibold text-lg hover:underline"
              >
                {data.title}
              </a>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}