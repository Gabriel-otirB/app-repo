import { Outlet } from 'react-router-dom';
import GlobalStyle from './styles/global.js';

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
