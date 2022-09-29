import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { Content } from './components/Content';
import { DefaultLayout } from './layouts/DefaultLayout';
import './styles/App.scss';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          {/* Renderiza os elementos filhos dentro do Outlet */}
          <Route path="/aulas" element={<Content />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
