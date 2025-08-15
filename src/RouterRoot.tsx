import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';

export default function RouterRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Adicione outras rotas aqui, ex: <Route path="/blog" element={<Blog />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
