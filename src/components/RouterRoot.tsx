import { Routes, Route, useLocation } from 'react-router-dom';
import Projects from '../pages/Projects';
import Blog from '../pages/Blog';
import Post from '../pages/Post';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import { AnimatePresence } from 'framer-motion';

export default function RouterRoot() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}