import { Outlet } from 'react-router-dom';
import { ContentDrawer } from '../components/ContentDrawer';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const DefaultLayout = (): JSX.Element => {
  return (
    <div id="wrapper">
      <Header />

      <div className="container body-content">
        <Outlet />
      </div>

      <ContentDrawer />

      <Footer />
    </div>
  );
};
