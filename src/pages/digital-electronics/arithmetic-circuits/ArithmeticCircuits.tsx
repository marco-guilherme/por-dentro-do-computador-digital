import { NavigationButtons } from '../../../components/NavigationButtons';
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
          de subtração, os <span className="bold-text">subtratores</span>.
        </p>

        <div className="horizontal-space-2" />

        <h2>Somadores</h2>

        <p>
          Um <span className="bold-text">somador</span> (ou{' '}
          <span className="italic-text">adder</span>, em inglês) é um circuito
          digital que realiza a soma de números. Em muitos computadores e outros
          tipos de processadores, os somadores são usados nas unidades lógicas e
          aritméticas. Eles também são usados em outras partes do processador,
          onde são usados para calcular endereços, índices de tabela, operadores
          de incremento e decremento e operações semelhantes.
        </p>

        <p>
          Embora os somadores possam ser construídos para muitas representações
          de números, como BCD ou excesso-3, os somadores mais comuns operam em
          números binários. Nos casos em que o complemento de dois ou o
          complemento de um estão sendo usados para representar números
          negativos, é trivial transformar um somador em um somador-subtrator.
          Outras representações de números com sinal requerem mais lógica em
          torno do somador básico.
        </p>

        <p>
          Os circuitos somadores podem ser divididos em:{' '}
          <span className="bold-text">meio somador</span> e{' '}
          <span className="bold-text">somador completo</span>.
        </p>

        <br />

        <NavigationButtons
          previousPageUrl="/aulas/eletronica-digital/circuitos-sequenciais"
          nextPageUrl="/aulas/eletronica-digital/circuitos-aritmeticos/meio-somador"
        />

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
