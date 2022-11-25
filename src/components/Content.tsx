import { List, Input, ConfigProvider, Empty } from 'antd';
import { GiNotebook } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { RelativeUrlAndPageName } from '../store/application/types';
import { RootApplicationState } from '../store/rootReducer';
import learnElectronics from '../images/learn-electronics.jpg';
import { useEffect, useState } from 'react';

const { Search } = Input;

export const Content = (): JSX.Element => {
  const {
    application: { relativeUrlAndPageName },
  } = useSelector((state: RootApplicationState) => state);

  const navigate: NavigateFunction = useNavigate();

  const [currentDataSource, setCurrentDataSource] = useState<
    RelativeUrlAndPageName[]
  >([]);

  useEffect(() => {
    setCurrentDataSource(getDataSource());
  }, []);

  const getDataSource = (search: string = ''): RelativeUrlAndPageName[] => {
    const dataSource: RelativeUrlAndPageName[] = [];

    for (const [key, value] of Object.entries(relativeUrlAndPageName)) {
      if (search && !value.toLowerCase().includes(search)) {
        continue;
      }

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

        <div className="flex-center-column">
          <img
            src={learnElectronics}
            alt="Estudando e testando um circuito eletrônico"
            style={{ width: '60vw' }}
          />
        </div>

        <div className="horizontal-space-2" />

        <div className="content-search">
          <Search
            placeholder="Procurar por uma aula"
            onInput={(event: React.FormEvent<HTMLInputElement>) =>
              setCurrentDataSource(
                getDataSource(event.currentTarget.value.toLocaleLowerCase())
              )
            }
            onSearch={(value: string) => {
              if (!value) {
                setCurrentDataSource(getDataSource());
              }
            }}
            enterButton
            allowClear
            showCount
            maxLength={200}
            size={'large'}
          />
        </div>

        <ConfigProvider
          renderEmpty={() => <Empty description="Nenhuma aula encontrada" />}
        >
          <List
            bordered
            itemLayout="horizontal"
            dataSource={currentDataSource}
            renderItem={(item: RelativeUrlAndPageName) => (
              <List.Item>
                <span
                  className="page-list"
                  onClick={() => {
                    navigate(item.url);
                    window.scrollTo(0, 0);
                  }}
                >
                  {item.title}
                </span>
              </List.Item>
            )}
          />
        </ConfigProvider>
      </div>
    </div>
  );
};
