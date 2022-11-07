import { NavLink } from 'react-router-dom';
import unipLogo from '../images/unip-logo.png';
import { GiNotebook } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationActionType } from '../store/application/types';
import { setDrawerVisibility } from '../store/application/actions';

export const Header = (): JSX.Element => {
  const dispatch: Dispatch<ApplicationActionType> = useDispatch();

  return (
    <header className="header">
      <div className="header-logo-wrapper">
        <img src={unipLogo} alt="Logotipo da Universidade Paulista" />
      </div>

      <nav>
        <NavLink className="header-item" to="/inicio">
          <span>Início</span>
        </NavLink>
        <NavLink className="header-item" to="/aulas">
          <span>Aulas</span>
        </NavLink>
        <NavLink className="header-item" to="/ascii">
          <span>ASCII</span>
        </NavLink>
        <NavLink className="header-item" to="/sobre">
          <span>Sobre</span>
        </NavLink>
      </nav>
      <span id="open-drawer-icon" className="flex-center-column">
        <GiNotebook onClick={() => dispatch(setDrawerVisibility(true))} />
      </span>
    </header>
  );
};
