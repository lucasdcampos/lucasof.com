import Layout from '../components/Layout';

export default function Projects() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p className="mb-8 text-base text-gray-300">Here are some of my projects:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h2 className="text-2xl font-semibold mb-2">lucasof.com</h2>
          <p className="text-gray-400 mb-2">This website...</p>
          <a href="/" className="text-indigo-400 underline">View Details</a>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h2 className="text-2xl font-semibold mb-2">Libra</h2>
          <p className="text-gray-400 mb-2">Libra is a programming language with Portuguese syntax</p>
          <a href="https://github.com/lucasdcampos/libra" className="text-indigo-400 underline">View Details</a>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h2 className="text-2xl font-semibold mb-2">Silex Chat</h2>
          <p className="text-gray-400 mb-2">Chat App with End-to-End Encryption</p>
          <a href="https://github.com/lucasdcampos/silexchat" className="text-indigo-400 underline">View Details</a>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h2 className="text-2xl font-semibold mb-2">L.E.N.A</h2>
          <p className="text-gray-400 mb-2">My personal AI Agent. This one doesn't have a public repository yet.</p>
        </div>
      </div>
    </Layout>
  );
}
