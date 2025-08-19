import Sidebar, { SIDEBAR_WIDTH } from './Sidebar';
import { useEffect, useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const minWidth = 768;
  const [marginLeft, setMarginLeft] = useState(() => (typeof window !== 'undefined' && window.innerWidth >= minWidth ? SIDEBAR_WIDTH : 0));

  useEffect(() => {
    function handleResize() {
      setMarginLeft(window.innerWidth >= minWidth ? SIDEBAR_WIDTH : 0);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Sidebar />
      <main
        className="px-8 py-12 flex flex-col gap-4 items-center min-h-screen"
        style={{ marginLeft }}
      >
        <div className="w-full max-w-3xl">
          {children}
        </div>
      </main>
    </div>
  );
}
