import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Main from './pages/Main/index.jsx';
import Repositorio from './pages/Repositorio/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />
          <Route path="/repositorio/:repositorio" element={<Repositorio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
