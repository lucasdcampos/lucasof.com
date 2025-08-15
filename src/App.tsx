import Sidebar from './Sidebar';
import MainContent from './MainContent';

export default function App() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <MainContent />
    </div>
  );
}
