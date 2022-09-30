import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { ASCIITable } from './components/ASCIITable';
import { Content } from './components/Content';
import { Home } from './components/Home';
import { DefaultLayout } from './layouts/DefaultLayout';
import './styles/App.scss';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          {/* Renderiza os elementos filhos dentro do Outlet */}
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/aulas" element={<Content />} />
          <Route path="/ascii" element={<ASCIITable />} />
          <Route path="/sobre" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
