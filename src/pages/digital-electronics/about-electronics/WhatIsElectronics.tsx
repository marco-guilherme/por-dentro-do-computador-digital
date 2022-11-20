import { PageInformation } from '../../../components/PageInformation';
import appleOneComputer from '../../../images/apple-one-computer.jpg';

export const WhatIsElectronics = (): JSX.Element => {
  return (
    <div className="site-content-wrapper">
      <h1>O Que é Eletrônica?</h1>

      <div className="site-content">
        <p>
          A <span className="bold-text">eletrônica</span> é um campo derivado da
          física e da engenharia elétrica responsável pelo{' '}
          <span className="underline-text">
            estudo e manipulação dos elétrons
          </span>
          . Um dispositivo eletrônico é um equipamento ou aparelho que possui um{' '}
          <span className="bold-text">circuito eletrônico</span> como parte de
          sua construção física. Um circuito eletrônico é composto por diversos{' '}
          <span className="bold-text">componentes eletrônicos</span> e diversas{' '}
          <span className="bold-text">ligações</span> entre esses componentes.
          Conforme a corrente flui pelo circuito eletrônico, os componentes
          respondem de uma determinada forma e diversos efeitos podem acontecer.
        </p>

        <div className="site-image">
          <img
            src={appleOneComputer}
            className="large-image"
            alt="PCB do Apple 1"
          />
        </div>

        <p>Alguns dos subcampos da eletrônica:</p>

        <ul>
          <li>Eletrônica analógica;</li>
          <li>Eletrônica digital;</li>
          <li>Eletrônica de potência;</li>
          <li>Eletrônica de áudio.</li>
        </ul>

        <br />

        <hr />

        <br />

        <PageInformation
          lastUpdateDate="18/11/2022"
          originalPublicationDate="18/11/2022"
        />
      </div>
    </div>
  );
};
