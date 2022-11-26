import error from '../images/error.gif';

export const PageNotFound = (): JSX.Element => {
  return (
    <div className="page-not-found flex-center-column">
      <img src={error} className="medium-image" alt="Erro" />
    </div>
  );
};
