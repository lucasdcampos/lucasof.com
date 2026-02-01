import Sidebar, { SIDEBAR_WIDTH } from './Sidebar';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import PageTransition from './PageTransition';

interface LayoutProps {
  children: React.ReactNode;
  layoutType?: 'sidebar' | 'navbar';
}

export default function Layout({ children, layoutType = 'navbar' }: LayoutProps) {
  const isSidebar = layoutType === 'sidebar';
  const minWidth = 768;
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= minWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mainPadding = isSidebar && isDesktop ? { marginLeft: SIDEBAR_WIDTH } : {};

  return (
    <div className="min-h-screen flex flex-col">
      {isSidebar ? <Sidebar /> : <Navbar />}

      <main
        className={`px-8 flex flex-col gap-4 items-center flex-1 ${!isSidebar ? 'pt-24' : 'py-12'}`}
        style={mainPadding}
      >
        <div className="w-full max-w-3xl">
          <PageTransition>
            {children}
          </PageTransition>
        </div>
      </main>

      <footer 
        className="py-12 w-full text-center text-gray-500 text-sm"
        style={mainPadding}
      >
        <div className="max-w-3xl mx-auto pt-8 border-t border-gray-200 dark:border-gray-800/20">
          © {new Date().getFullYear()} lucasof. All rights reserved.
        </div>
      </footer>
    </div>
  );
}