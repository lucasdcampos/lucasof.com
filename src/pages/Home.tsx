import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 mt-12 w-full mx-auto">
        <div className="max-w-md text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Lucas Maciel de Campos
          </h1>
          
          <h2 className="text-xl font-medium mb-6 text-[var(--accent-color)]">
            Fullstack Developer
          </h2>

          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
            Hello! I'm a Brazilian software developer who likes to create random stuff. <br /><br />
            I created this website to serve as my "home base" on the internet, 
            sometimes I post some interesting things here or just share my projects. <br /><br />
            I don't post much on my blog, but sometimes it's nice to see old posts.
          </p>
        </div>

        <div className="relative flex-shrink-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-[var(--accent-color)]/20 shadow-2xl shadow-[var(--accent-color)]/10">
            <img 
              src="/lucas2.png" 
              alt="Lucas Maciel de Campos" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gray-300 dark:border-gray-800 rounded-2xl -z-10 transition-colors duration-300" />
        </div>
      </section>
    </Layout>
  );
}