import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import unipAraraquara from '../images/unip-araraquara.jpg';
import gitHubLogo from '../images/github-logo.svg';
import { VersionControl } from '../store/application/types';
import windows95Letter from '../images/windows-95-letter.png';
import release100 from '../pdfs/1.0.0.pdf';
import release101 from '../pdfs/1.0.1.pdf';
import release102 from '../pdfs/1.0.2.pdf';
import pdfIcon from '../images/pdf-icon.png';

export const About = (): JSX.Element => {
  const columns: ColumnsType<Object> = [
    {
      title: 'Lançamento',
      dataIndex: 'releaseDate',
      align: 'center',
    },
    {
      title: 'Versão',
      dataIndex: 'version',
      align: 'center',
    },
    {
      title: 'Alterações',
      dataIndex: 'changes',
      align: 'center',
    },
    {
      title: 'Requisitos',
      dataIndex: 'requirements',
      align: 'center',
    },
  ];

  const dataSource: VersionControl[] = [
    {
      key: 4,
      releaseDate: <span className="monospaced-snippet">29/11/2022</span>,
      version: <span className="monospaced-snippet">1.0.3</span>,
      changes: (
        <span>
          Desenvolvimento das últimas páginas antes da apresentação do TCC e
          adição da página do computador de 8 bits interativo.
        </span>
      ),
      requirements: (
        <a href={'/'} target="_blank" rel="noreferrer">
          <img src={pdfIcon} alt="Ícone de PDF" width={'40rem'} />
        </a>
      ),
    },
    {
      key: 3,
      releaseDate: <span className="monospaced-snippet">26/11/2022</span>,
      version: <span className="monospaced-snippet">1.0.2</span>,
      changes: (
        <span>
          Desenvolvimento de algumas das páginas sobre os conceitos básicos da
          eletrônica, botões de navegação, assembler embarcado e campo de busca.
        </span>
      ),
      requirements: (
        <a href={release102} target="_blank" rel="noreferrer">
          <img src={pdfIcon} alt="Ícone de PDF" width={'40rem'} />
        </a>
      ),
    },
    {
      key: 2,
      releaseDate: <span className="monospaced-snippet">23/11/2022</span>,
      version: <span className="monospaced-snippet">1.0.1</span>,
      changes: (
        <span>
          Desenvolvimento de novas páginas sobre eletrônica digital e linguagem
          asembly.
        </span>
      ),
      requirements: (
        <a href={release101} target="_blank" rel="noreferrer">
          <img src={pdfIcon} alt="Ícone de PDF" width={'40rem'} />
        </a>
      ),
    },
    {
      key: 1,
      releaseDate: <span className="monospaced-snippet">13/11/2022</span>,
      version: <span className="monospaced-snippet">1.0.0</span>,
      changes: (
        <span>
          Adição do cabeçalho, rodapé, páginas para cada item do cabeçalho,
          drawer de conteúdo e páginas para as portas lógicas.
        </span>
      ),
      requirements: (
        <a href={release100} target="_blank" rel="noreferrer">
          <img src={pdfIcon} alt="Ícone de PDF" width={'40rem'} />
        </a>
      ),
    },
  ];

  return (
    <div className="site-content-wrapper">
      <h1>Sobre Este Site</h1>

      <div className="site-content">
        <p>
          Este site foi desenvolvido por Marco Guilherme como Trabalho de
          Conclusão de Curso (TCC) para obtenção do título de graduação em
          Ciência da Computação (bacharelado). Ele será apresentado à
          Universidade Paulista (UNIP) do{' '}
          <span className="italic-text">campus</span> de Araraquara em
          29/11/2022.
        </p>

        <p>
          A maior parte do conteúdo deste site surgiu a partir dos seguintes
          livros:
        </p>

        <ul>
          <li>
            MALVINO, Albert P.; BROWN, Jerald A.{' '}
            <span className="bold-text">Digital Computer Electronics</span>. 3.
            ed. [<span className="italic-text">S. l.</span>]: Career Education,
            1992. 528 p. ISBN 0-02-800594-5;
          </li>
          <li>
            IRVINE, Kip R.{' '}
            <span className="bold-text">
              Assembly Language For x86 Processors
            </span>
            . 6. ed. [<span className="italic-text">S. l.</span>]: Pearson,
            2010. 747 p. ISBN 978-0-13-602212-1.
          </li>
        </ul>

        <p>
          Gostaria de agradecer imensamente ao meu orientador, Prof. Me. Noel
          Araujo Moreira, por suas orientações valiosas na contribuição deste
          trabalho, pelo interesse em me ajudar, pela compreensão das
          dificuldades da turma e pelo excelente humor.
        </p>

        <br />

        <p style={{ textAlign: 'right' }}>São Carlos, 2022</p>

        <div className="site-image site-figure">
          <figure>
            <img
              src={unipAraraquara}
              alt="Universidade Paulista - UNIP, campus Araraquara"
              style={{ width: '60vw' }}
            />
            <figcaption>UNIP, Araraquara</figcaption>
          </figure>
        </div>

        <p style={{ fontSize: '1.8rem' }}>
          <span className="bold-text">Versão do website</span>:
          <span className="monospaced-snippet">
            {' '}
            {process.env.REACT_APP_WEBSITE_APP}
          </span>
        </p>

        <br />

        <h2>Release Notes</h2>

        <p>
          A tabela a seguir é atualizada sempre que ocorre uma atualização neste
          site. A tabela contém a data, versão e as principais alterações de
          cada release. Cada release está vinculada a um conjunto de requisitos
          na board do Jira.
        </p>

        <div className="flex-center-column">
          <Table
            className="versioning-table"
            columns={columns}
            bordered
            size="middle"
            dataSource={dataSource}
            pagination={false}
          />
        </div>

        <div className="horizontal-space-2" />

        <h2>Contribuição</h2>

        <p>
          Para contribuir com as páginas deste site, seja adicionando,
          removendo, corrigindo ou atualizando conteúdo, leia nosso{' '}
          <span className="monospaced-snippet">README.md</span> no GitHub para
          verificar todos os detalhes.
        </p>

        <div className="flex-center-column">
          <a href="https://github.com/marco-guilherme/por-dentro-do-computador-digital">
            <img
              src={gitHubLogo}
              alt="Logotipo do GitHub"
              className="github-logo"
            />
          </a>
        </div>

        <div className="horizontal-space-2" />

        <div className="card-rounded-border icon-and-text" id="contact-card">
          <img src={windows95Letter} alt="Ícone de carta do Windows 95" />

          <address>
            <a href="mailto:marcoilhermepereira@outlook.com">
              Dúvidas, críticas, sugestões e contribuições
            </a>
          </address>
        </div>
      </div>
    </div>
  );
};
