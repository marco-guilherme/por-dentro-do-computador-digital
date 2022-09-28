import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { DefaultLayout } from './layouts/DefaultLayout';
import './styles/App.css';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
