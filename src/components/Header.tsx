import { NavLink } from 'react-router-dom';
import unipLogo from '../images/unip-logo.png';

export const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header-logo-wrapper">
        <img src={unipLogo} alt="logo" />
      </div>

      <nav>
        <NavLink to="/aulas">
          <span>Aulas</span>
        </NavLink>
        <NavLink to="/ascii">
          <span>ASCII</span>
        </NavLink>
        <NavLink to="/sobre">
          <span>Sobre</span>
        </NavLink>
      </nav>
    </header>
  );
};
