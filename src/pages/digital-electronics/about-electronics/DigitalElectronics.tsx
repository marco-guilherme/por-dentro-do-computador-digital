import { PageInformation } from '../../../components/PageInformation';
import digitalSignal from '../../../images/digital-signal.png';
import electronicCircuit2 from '../../../images/electronic-circuit-2.jpg';

export const DigitalElectronics = (): JSX.Element => {
  return (
    <div className="site-content-wrapper">
      <h1>Eletrônica Digital</h1>

      <div className="site-content">
        <p>
          A <span className="bold-text">eletrônica digital</span> é um subcampo
          da eletrônica responsável pelo{' '}
          <span className="underline-text">
            estudo e manipulação dos sinais, circuitos e dispositivos digitais
          </span>
          . Ao contrário de um sinal analógico, um{' '}
          <span className="bold-text">sinal digital</span> ou{' '}
          <span className="bold-text">discreto</span> (restrito a uma faixa
          finita de valores) é aquele que em um determinado momento, só pode
          assumir um de um número finito de valores. O sinal digital representa
          os dados como uma sequência de valores discretos. Por exemplo, um
          sinal digital pode variar em apenas dois valores distintos (e sem
          valores intermediários): 0 ou 5 V (V representa volts). A seguir,
          temos uma <span className="bold-text">onda quadrada</span> que
          representa um sinal digital:
        </p>

        <div className="site-image">
          <img
            src={digitalSignal}
            className="medium-image"
            alt="Onda quadrada"
          />
        </div>

        <p>
          Na maioria dos circuitos digitais, o sinal digital pode assumir apenas
          dois valores diferentes. Esse tipo de sinal pode ser chamado de{' '}
          <span className="bold-text">sinal binário</span> ou{' '}
          <span className="bold-text">sinal lógico</span>. Sinais digitais com
          mais de dois estados são usados ocasionalmente; os circuitos que usam
          tais sinais são chamados de{' '}
          <span className="bold-text">lógica multivalorada</span>. Por exemplo,
          sinais que podem assumir três estados possíveis são chamados de{' '}
          <span className="bold-text">lógica ternária</span>.
        </p>

        <p>
          Tomando um sinal binário como exemplo, ele pode oscilar entre{' '}
          <span className="bold-text">zero ou um</span>,{' '}
          <span className="bold-text">verdadeiro ou falso</span>,{' '}
          <span className="bold-text">ligado ou desligado</span>,{' '}
          <span className="bold-text">
            nível lógico alto ou nível lógico baixo
          </span>
          . Em um sinal digital, a quantidade física que representa a informação
          pode ser a <span className="bold-text">tensão</span> ou a{' '}
          <span className="bold-text">corrente elétrica</span> variável, por
          exemplo. Sendo assim, um sinal binário pode ser representado por duas
          tensões diferentes para o nível lógico alto e baixo: uma próxima à
          tensão de alimentação e outra próxima a um valor de referência
          (normalmente denominado como terra ou zero volts), respectivamente.
          Com isso, um sinal binário é útil para representar um dígito do
          sistema binário (bit) em qualquer ponto no tempo.
        </p>

        <div className="site-image">
          <img
            src={electronicCircuit2}
            className="large-image"
            alt="Circuito eletrônico digital"
          />
        </div>

        <p>
          Os <span className="bold-text">circuitos eletrônicos digitais</span>,
          também chamados de{' '}
          <span className="bold-text">circuitos chaveadores</span>, são
          construídos principalmente por{' '}
          <span className="bold-text">portas lógicas</span> encapsuladas em{' '}
          <span className="bold-text">circuitos integrados</span>. Os circuitos
          digitais empregam componentes que operam nos estados de corte ou
          saturação. É o caso de um transistor (chave eletrônica) que, conectado
          a um circuito, em um momento está cortado (impedindo a circulação da
          corrente elétrica) e no outro, saturado (permitindo a circulação da
          corrente elétrica).
        </p>

        <p>
          Uma vantagem dos circuitos digitais quando comparados aos circuitos
          analógicos é que os sinais representados digitalmente podem ser
          transmitidos sem degradação causada por ruído eletromagnético. A{' '}
          <span className="bold-text">imunidade a ruído</span> dos sistemas
          digitais permite que os dados sejam armazenados e recuperados sem
          degradação.
        </p>

        <p>
          Sistemas embarcados como microcontroladores e CLPs (Controladores
          Lógicos Programáveis) são frequentemente usados para implementar
          lógica digital.
        </p>

        <p>
          A forma clássica de representar um circuito digital é com um conjunto
          equivalente de portas lógicas. A outra forma é utilizando
          interruptores eletrônicos (geralmente transistores).
        </p>

        <p>
          Os computadores modernos utilizam a eletrônica digital para
          representar e manipular os dados.
        </p>

        <br />

        <hr />

        <br />

        <PageInformation
          lastUpdateDate="20/11/2022"
          originalPublicationDate="19/11/2022"
        />
      </div>
    </div>
  );
};
