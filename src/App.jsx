import { Outlet } from 'react-router-dom';
import GlobalStyle from './styles/global.js';

function App() {
  return (
    <>
      <GlobalStyle />
      <header>
        <h1>Meu Projeto</h1>
        {/* Aqui pode entrar um Navbar futuramente */}
      </header>

      <main>
        <Outlet /> {/* Esse Outlet será substituído pela página ativa */}
      </main>

      <footer>
        <p>© 2025 Meu Projeto</p>
      </footer>
    </>
  );
}

export default App;
