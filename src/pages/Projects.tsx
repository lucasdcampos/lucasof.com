import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { FaReact, FaPython } from 'react-icons/fa';
import { SiTypescript, SiDotnet, SiExpress, SiPostgresql } from 'react-icons/si';

export default function Projects() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p className="mb-8 text-base text-gray-300">Here are some of my projects:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="lucasof.com"
          description="This webiste..."
          stack={
            <>
              <SiTypescript className="text-blue-400 text-2xl" title="TypeScript" />
              <FaReact className="text-cyan-400 text-2xl" title="React" />
            </>
          }
          link="#"
        />
        <ProjectCard
          title="Libra"
          description="Libra is a programming language with Portuguese syntax."
          stack={<SiDotnet className="text-purple-400 text-2xl" title="C#" />}
          link="#"
        />
        <ProjectCard
          title="Silex Chat"
          description="A chat app with end to end encryption."
          stack={
            <>
              <SiTypescript className="text-blue-400 text-2xl" title="TypeScript" />
              <SiExpress className="text-gray-400 text-2xl" title="Express" />
              <SiPostgresql className="text-blue-700 text-2xl" title="Postgres" />
              <FaReact className="text-cyan-400 text-2xl" title="React" />
            </>
          }
          link="#"
        />
        <ProjectCard
          title="L.E.N.A"
          description="My personal AI Assistant. This one doesn't have a public version yet."
          stack={<FaPython className="text-yellow-400 text-2xl" title="Python" />}
          link=""
        />
      </div>
    </Layout>
  );
}
