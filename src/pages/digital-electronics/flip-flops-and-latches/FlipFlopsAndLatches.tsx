import { NavigationButtons } from '../../../components/NavigationButtons';
import { PageInformation } from '../../../components/PageInformation';

export const FlipFlopsAndLatches = (): JSX.Element => {
  return (
    <div className="site-content-wrapper">
      <h1>Flip-Flops e Latches</h1>

      <div className="site-content">
        <p>
          O <span className="bold-text">flip-flop</span> é uma célula de memória
          capaz de manter um estado após mudanças na entrada. Um flip-flop é um
          dispositivo com dois estados estáveis.
        </p>

        <p>
          Um flip-flop é um circuito digital com pelo menos duas entradas: uma
          responsável por habilitar uma saída e outra por desabilitar essa
          saída.
        </p>

        <p>
          O flip-flop também possui um estado de memorização, cuja saída
          dependerá do estado anterior dela mesma.
        </p>

        <p>
          O flip-flop sempre trabalhará com níveis lógicos de tensão, em que o
          nível lógico alto, representado pelo número 1, indica a presença de
          uma tensão elétrica e o nível lógico baixo, representado pelo número
          0, indica a ausência (ou um nível muito baixo) de uma tensão elétrica.
        </p>

        <p>
          O circuito do flip-flop pode ser feito para mudar de estado por meio
          de sinais aplicados a uma ou mais entradas de controle e terá uma ou
          duas saídas. É o elemento de armazenamento básico na lógica
          sequencial. Flip-flops e latches são blocos de construção fundamentais
          em sistemas eletrônicos digitais usados em computadores, comunicações
          e muitos outros tipos de sistemas.
        </p>

        <p>
          Flip-flops e latches são usados como elementos de armazenamento de
          dados. Um flip-flop é um dispositivo que armazena um único bit; um de
          seus dois estados representa um "um" e o outro representa um "zero".
          Tal armazenamento de dados pode ser usado para armazenamento de
          estado, e tal circuito é descrito como lógica sequencial na
          eletrônica. Quando usado em uma{' '}
          <span className="bold-text">máquina de estados finita</span>, a saída
          e o próximo estado dependem não apenas de sua entrada atual, mas
          também de seu estado atual (e, portanto, das entradas anteriores).
          Também pode ser usado para contagem de pulsos e para sincronizar
          sinais de entrada de tempo variável para algum outro sinal de
          temporização de referência.
        </p>

        <p>
          Os flip-flops podem ser{' '}
          <span className="bold-text">
            ativos por nível alto/baixo do sinal de clock
          </span>{' '}
          (assíncronos, transparentes ou opacos) ou{' '}
          <span className="bold-text">
            ativos na borda de subida/descida do sinal de clock
          </span>{' '}
          (síncronos ou sincronizados).
        </p>

        <p>Tipos de flip-flop: RS, JK (JK Mestre-Escravo), D e T.</p>

        <p>Exemplo de latch primitivo:</p>

        <div className="space-around flex-center-column">
          <iframe
            title="latch"
            src="https://circuitverse.org/simulator/embed/latch-e35056e3-6757-4d7b-9642-aeb679574b56"
            className="circuit-frame"
          />
        </div>

        <p>
          Ao analisar a simulação acima, perceba que independentemente de qual
          seja o nível lógico na segunda entrada da porta OR, a saída será 1
          pois a entrada A está em 1.
        </p>

        <p>
          <span className="underline-text">
            Nos flip-flops, as saídas são atualizadas somente na borda de
            subida/descida do clock. Nos latches, as saídas são atualizadas
            somente no nível alto ou baixo do clock
          </span>
          .
        </p>

        <br />

        <NavigationButtons
          previousPageUrl="/aulas/eletronica-digital/circuitos-aritmeticos/comparador-de-magnitude"
          nextPageUrl="/aulas/eletronica-digital/flip-flops-e-latches/d"
        />

        <hr />

        <br />

        <PageInformation
          lastUpdateDate="26/11/2022"
          originalPublicationDate="25/11/2022"
        />
      </div>
    </div>
  );
};
