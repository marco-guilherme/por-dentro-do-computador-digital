import { List } from 'antd';
import { GiNotebook } from 'react-icons/gi';
import { NavigateFunction, useNavigate } from 'react-router-dom';

export const Content = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const dataSource = [
    {
      title: 'O Que é Eletrônica?',
      url: '/aulas/eletronica-digital/sobre-eletronica/o-que-e-eletronica',
    },
    {
      title: 'Por Que Aprender Eletrônica?',
      url: '/aulas/eletronica-digital/sobre-eletronica/por-que-aprender-eletronica',
    },
    { title: 'Eletrônica Analógica', url: '' },
    { title: 'Eletrônica Digital', url: '' },
    { title: 'Componentes Eletrônicos', url: '' },
    { title: 'Tensão', url: '' },
    { title: 'Corrente', url: '' },
    { title: 'Resistência', url: '' },
    { title: 'Potência', url: '' },
    { title: 'Circuitos', url: '' },
    { title: 'Resistores', url: '' },
    { title: 'Capacitores', url: '' },
    { title: 'Diodo', url: '' },
    { title: 'Transistores', url: '' },
    { title: 'Primeira e segunda lei de Ohm', url: '' },
    { title: 'Primeira e segunda lei de Kirchhoff', url: '' },
    {
      title: 'Portas Lógicas',
      url: '/aulas/eletronica-digital/portas-logicas',
    },
    {
      title: 'Porta AND',
      url: '/aulas/eletronica-digital/portas-logicas/porta-and',
    },
    {
      title: 'Porta OR',
      url: '/aulas/eletronica-digital/portas-logicas/porta-or',
    },
    {
      title: 'Porta NOT',
      url: '/aulas/eletronica-digital/portas-logicas/porta-not',
    },
    {
      title: 'Porta XOR',
      url: '/aulas/eletronica-digital/portas-logicas/porta-xor',
    },
    {
      title: 'Porta XNOR',
      url: '/aulas/eletronica-digital/portas-logicas/porta-xnor',
    },
    {
      title: 'Porta NAND',
      url: '/aulas/eletronica-digital/portas-logicas/porta-nand',
    },
    {
      title: 'Porta NOR',
      url: '/aulas/eletronica-digital/portas-logicas/porta-nor',
    },
  ];

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
          dataSource={dataSource}
          renderItem={item => (
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
