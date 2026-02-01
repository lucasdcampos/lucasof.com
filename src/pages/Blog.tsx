import Layout from '../components/Layout';
import fm from 'front-matter';
import { Link } from 'react-router-dom';

const postFiles = import.meta.glob('../posts/*.md', { eager: true, query: '?raw', import: 'default' });

interface PostEntry {
  title: string;
  date: string;
  slug: string;
  year: number;
}

export default function Blog() {
  const posts: PostEntry[] = Object.entries(postFiles).map(([path, content]) => {
    const { attributes } = fm(content as string);
    const data = attributes as { title: string; date: string | Date };
    
    const dateStr = data.date instanceof Date 
      ? data.date.toISOString().split('T')[0] 
      : String(data.date);

    const [y, m, d] = dateStr.split('-').map(Number);
    const dateObj = new Date(y, m - 1, d);

    return {
      title: data.title,
      date: dateStr,
      slug: path.split('/').pop()?.replace('.md', '') || '',
      year: dateObj.getFullYear(),
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const years = Array.from(new Set(posts.map(p => p.year)));

  return (
    <Layout>
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <div className="h-1 w-12 bg-[var(--accent-color)] rounded-full mb-4" />
        <p className='text-gray-600 dark:text-gray-400'>
          Thoughts on software, technology and other stuff.
        </p>
      </header>

      <div className="space-y-12">
        {years.map(year => (
          <section key={year} className="relative">
            <h2 className="text-xl font-bold text-gray-400 dark:text-gray-600 mb-6 uppercase tracking-widest">
              {year}
            </h2>
            <div className="flex flex-col gap-6">
              {posts.filter(p => p.year === year).map(post => {
                const [y, m, d] = post.date.split('-').map(Number);
                const localDate = new Date(y, m - 1, d);

                return (
                  <Link 
                    key={post.slug} 
                    to={`/blog/${post.slug}`} 
                    className="group flex flex-col md:flex-row md:items-baseline gap-4"
                  >
                    <time className="text-sm font-mono text-gray-500 w-24 tabular-nums">
                      {localDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit' })}
                    </time>
                    <span className="text-lg font-medium text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors duration-300">
                      {post.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </Layout>
  );
}