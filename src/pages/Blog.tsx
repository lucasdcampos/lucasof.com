import PostList from '../components/PostList';
import Layout from '../layouts/Layout';

const postFiles = import.meta.glob('../assets/posts/*.md', { eager: true, query: '?raw', import: 'default' });

export default function Blog() {
  return (
    <Layout>
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <div className="h-1 w-12 bg-[var(--accent-color)] rounded-full mb-4" />
        <p className='text-gray-600 dark:text-gray-400'>
          Thoughts on software, technology and other stuff.
        </p>
      </header>

      <PostList postFiles={postFiles}/>

    </Layout>
  );
}