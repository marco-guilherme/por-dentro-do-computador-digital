import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export const DefaultLayout = (): JSX.Element => {
  return (
    <div className="default-layout-container">
      <Header />
      <Outlet />
    </div>
  );
};
