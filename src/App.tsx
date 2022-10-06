import { Provider } from 'react-redux';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { ASCIITable } from './components/ASCIITable';
import { Content } from './pages/Content';
import { Home } from './components/Home';
import { DefaultLayout } from './layouts/DefaultLayout';
import './styles/App.scss';
import { store } from './store';
import { WhatIsElectronics } from './pages/WhatIsElectronics';
import { WhyLearnElectronics } from './pages/WhyLearnElectronics';
import { AndGate } from './pages/AndGate';
import { PageNotFound } from './pages/PageNotFound';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />

            <Route path="/inicio" element={<Home />} />

            <Route path="/aulas" element={<Outlet />}>
              <Route index element={<Content />} />

              <Route
                path="eletronica-digital/sobre-eletronica/o-que-e-eletronica"
                element={<WhatIsElectronics />}
              />

              <Route
                path="eletronica-digital/sobre-eletronica/por-que-aprender-eletronica"
                element={<WhyLearnElectronics />}
              />

              <Route
                path="eletronica-digital/portas-logicas/porta-and"
                element={<AndGate />}
              />
            </Route>

            <Route path="/ascii" element={<ASCIITable />} />

            <Route path="/sobre" element={<About />} />

            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
