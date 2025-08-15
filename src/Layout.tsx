import Sidebar from './Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Sidebar />
      <main
        className="px-8 py-12 flex flex-col gap-4"
        style={{ marginLeft: 'var(--sidebar-width, 240px)' }}
      >
        {children}
      </main>
    </div>
  );
}
