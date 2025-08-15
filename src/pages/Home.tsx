import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">👋 Hi! I'm <span className='text-blue-400'>Lucas Campos</span></h1>
      <p className="mb-8 text-base text-gray-300">
        Hello! I'm a Brazilian software developer who likes to create random stuff. <br /> <br />

        I created this website to serve as my "home base" on the internet, sometimes I post some interesting things here or just share my projects. <br /> <br />

        I don't post much on my blog, but sometimes it's nice to see old posts.
      </p>
    </Layout>
  );
}
