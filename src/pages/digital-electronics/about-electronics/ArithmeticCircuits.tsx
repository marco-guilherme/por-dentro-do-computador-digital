import { PageInformation } from '../../../components/PageInformation';

export const ArithmeticCircuits = (): JSX.Element => {
  return (
    <div className="site-content-wrapper">
      <h1>Circuitos Aritméticos</h1>

      <div className="site-content">
        <p>
          Um <span className="bold-text">circuito aritmético</span> é um tipo de
          circuito combinacional que executa operações de adição, subtração,
          multiplicação, divisão, operações lógicas ou qualquer outra função que
          possa ser implementada em um circuito combinacional. Os circuitos
          aritméticos são chamados de <span className="bold-text">ALU</span> (
          <span className="italic-text">Arithmetic Logic Unit</span> ou Unidade
          Lógica e Aritmética em português).
        </p>

        <p>
          A quantidade de bits de um circuito aritmético é igual a quantidade de
          saídas que esse circuito possui.
        </p>

        <p>
          Para realizar operações de adição, utilizamos os{' '}
          <span className="bold-text">circuitos somadores</span>. Para operações
          de subtração, os <span className="bold-text">ssubtratores</span>.
        </p>

        <br />

        <hr />

        <br />

        <PageInformation
          lastUpdateDate="25/11/2022"
          originalPublicationDate="25/11/2022"
        />
      </div>
    </div>
  );
};
