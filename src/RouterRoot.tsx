import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Projects from './Projects';
import Blog from './Blog';
import Contact from './Contact';
import NotFound from './NotFound';

export default function RouterRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
