import { List } from 'antd';
import { GiNotebook } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { RelativeUrlAndPageName } from '../store/application/types';
import { RootApplicationState } from '../store/rootReducer';

export const Content = (): JSX.Element => {
  const {
    application: { relativeUrlAndPageName },
  } = useSelector((state: RootApplicationState) => state);

  const navigate: NavigateFunction = useNavigate();

  const getDataSource = (): RelativeUrlAndPageName[] => {
    const dataSource: RelativeUrlAndPageName[] = [];

    for (const [key, value] of Object.entries(relativeUrlAndPageName)) {
      dataSource.push({
        title: value,
        url: key,
      });
    }

    return dataSource;
  };

  return (
    <div className="site-content-wrapper">
      <h1>Eletrônica Digital e Linguagem Assembly</h1>
      <div className="site-content">
        <p>
          Nesta seção, você encontrará um compilado de todas as páginas do site,
          isto é, os conteúdos sobre eletrônica digital e linguagem assembly.
          Você também poderá navegar entre as páginas do site clicando no ícone{' '}
          <GiNotebook className="book-icon" /> localizado no canto superior
          direito do cabeçalho.
        </p>
        <p>
          Para visualizar os circuitos digitais interativos, por favor,{' '}
          <span className="bold-text">
            habilite os cookies de terceiros para este site
          </span>
          . Caso contrário, pode ser que os circuitos não sejam exibidos
          corretamente.
        </p>
        <br />
        <List
          bordered
          itemLayout="horizontal"
          dataSource={getDataSource()}
          renderItem={(item: RelativeUrlAndPageName) => (
            <List.Item>
              <span className="page-list" onClick={() => navigate(item.url)}>
                {item.title}
              </span>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
