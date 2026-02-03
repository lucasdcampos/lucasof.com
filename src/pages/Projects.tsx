import Layout from '../layouts/Layout';
import ProjectCard from '../components/ProjectCard';
import { FaReact, FaPython } from 'react-icons/fa';
import { SiTypescript, SiDotnet, SiExpress, SiPostgresql } from 'react-icons/si';

export default function Projects() {
  return (
    <Layout>
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        
        <div className="h-1 w-12 bg-[var(--accent-color)] rounded-full mb-4" />
        
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          A collection of tools, experiments, and full-stack applications I've built.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          title="lucasof.com"
          description="Personal portfolio built with React and Tailwind. Focused on clean code and performance."
          stack={
            <>
              <SiTypescript title="TypeScript" />
              <FaReact title="React" />
            </>
          }
          link="#"
        />
        <ProjectCard
          title="Libra"
          description="A compiled programming language featuring Portuguese syntax, built with .NET."
          stack={<SiDotnet title="C#" />}
          link="#"
        />
        <ProjectCard
          title="Silex Chat"
          description="Real-time messaging platform with E2EE (End-to-End Encryption) for maximum privacy."
          stack={
            <>
              <SiTypescript title="TypeScript" />
              <SiExpress title="Express" />
              <SiPostgresql title="Postgres" />
              <FaReact title="React" />
            </>
          }
          link="#"
        />
        <ProjectCard
          title="L.E.N.A"
          description="Voice-activated AI Assistant integrated with custom LLMs for automation."
          stack={<FaPython title="Python" />}
          link=""
        />
      </div>
    </Layout>
  );
}