import { NavLink } from 'react-router-dom';
import unipLogo from '../images/unip-logo.png';

export const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header-logo-wrapper">
        <img src={unipLogo} alt="logo" />
      </div>

      <nav>
        <NavLink to="/content">
          <span>Aulas</span>
        </NavLink>
      </nav>
    </header>
  );
};
