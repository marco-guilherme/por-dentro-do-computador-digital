import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Dispatch } from 'redux';
import { setCurrentPage } from '../store/application/actions';
import { ApplicationActionType } from '../store/application/types';

type Props = {
  previousPageUrl?: string;
  nextPageUrl?: string;
};

export const NavigationButtons = ({
  previousPageUrl = '',
  nextPageUrl = '',
}: Props): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const dispatch: Dispatch<ApplicationActionType> = useDispatch();

  const handleNavigate = (destinationPage: string): void => {
    if (!destinationPage) {
      return;
    }

    navigate(destinationPage);
    dispatch(setCurrentPage(destinationPage));
    window.scrollTo(0, 0);
  };

  return (
    <div className="navigation-buttons">
      <div
        style={{
          cursor: previousPageUrl ? 'pointer' : '',
          color: previousPageUrl ? 'black' : '#c3c3c3',
        }}
        onClick={() => handleNavigate(previousPageUrl)}
      >
        <BsArrowLeftCircle />
        <p>Anterior</p>
      </div>

      <div
        style={{
          cursor: nextPageUrl ? 'pointer' : '',
          color: nextPageUrl ? 'black' : '#c3c3c3',
        }}
        onClick={() => handleNavigate(nextPageUrl)}
      >
        <BsArrowRightCircle />
        <p>Próximo</p>
      </div>
    </div>
  );
};
