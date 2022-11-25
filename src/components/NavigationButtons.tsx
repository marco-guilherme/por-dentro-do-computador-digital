import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { NavigateFunction, useNavigate } from 'react-router-dom';

type Props = {
  previousPageUrl?: string;
  nextPageUrl?: string;
};

export const NavigationButtons = ({
  previousPageUrl = '',
  nextPageUrl = '',
}: Props): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className="navigation-buttons">
      <div
        style={{
          cursor: previousPageUrl ? 'pointer' : '',
          color: previousPageUrl ? 'black' : '#c3c3c3',
        }}
        onClick={() => {
          if (!previousPageUrl) {
            return;
          }

          navigate(previousPageUrl);

          window.scrollTo(0, 0);
        }}
      >
        <BsArrowLeftCircle />
        <p>Anterior</p>
      </div>

      <div
        style={{
          cursor: nextPageUrl ? 'pointer' : '',
          color: nextPageUrl ? 'black' : '#c3c3c3',
        }}
        onClick={() => {
          if (!nextPageUrl) {
            return;
          }

          navigate(nextPageUrl);

          window.scrollTo(0, 0);
        }}
      >
        <BsArrowRightCircle />
        <p>Próximo</p>
      </div>
    </div>
  );
};
