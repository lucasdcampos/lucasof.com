import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 mt-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
            Lucas Maciel de Campos
          </h1>
          <h2 className="text-xl text-blue-400 font-medium mb-6">
            Fullstack Developer
          </h2>

          <p className="text-base text-gray-300 leading-relaxed">
            Hello! I'm a Brazilian software developer who likes to create random stuff. <br /><br />
            I created this website to serve as my "home base" on the internet,
            sometimes I post some interesting things here or just share my projects. <br /><br />
            I don't post much on my blog, but sometimes it's nice to see old posts.
          </p>
        </div>

        <div className="relative">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-blue-400/20 shadow-2xl shadow-blue-500/10">
            <img
              src="/lucas2.png"
              alt="Lucas Maciel de Campos"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gray-800 rounded-2xl -z-10" />
        </div>
      </section>
    </Layout>

  );
}