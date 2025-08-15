import Sidebar from './Sidebar';

export default function Projects() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <div className="flex-1 px-4 py-12 flex flex-col items-start justify-start">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="mb-8 text-base text-gray-300">Work in progress</p>

      </div>
    </div>
  );
}
