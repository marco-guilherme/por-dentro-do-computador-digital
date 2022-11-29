import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import Latex from 'react-latex';
import { NavigationButtons } from '../../components/NavigationButtons';
import { PageInformation } from '../../components/PageInformation';
import { BsArrowDown } from 'react-icons/bs';
import leftBitToggle from '../../images/left-bit-toggle.png';
import stateToggle from '../../images/state-toggle.png';
import qbToggle from '../../images/qb-toggle.png';
import counter from '../../images/counter.png';
import fourStageCounter from '../../images/four-stage-counter.png';
import { useThirdPartyCookieCheck } from '../../hooks/useThirdPartyCookieCheck ';
import signalDivision from '../../images/signal-division.png';
import signalDivision2 from '../../images/signal-division-2.jpg';
import signalDivision3 from '../../images/signal-division-3.jpg';
import synchronousCounter from '../../images/synchronous-counter.png';
import synchronousCounterControlled from '../../images/synchronous-counter-controlled.png';

export const Counters = (): JSX.Element => {
  useThirdPartyCookieCheck();

  return (
    <div className="site-content-wrapper">
      <h1>Contadores</h1>

      <div className="site-content">
        <p>
          Um <span className="bold-text">contador</span> é um tipo especial de
          registrador, projetado para contar o número de pulsos de clock que
          chegam em sua entrada. Os contadores podem ser{' '}
          <span className="bold-text">crescentes</span> ou{' '}
          <span className="bold-text">decrescentes</span>. A contagem é feita em
          binário.
        </p>

        <p>
          A quantidade de bits de um contador é igual a quantidade de saídas que
          esse contador possui.
        </p>

        <p>
          O <span className="bold-text">módulo</span> (ou{' '}
          <span className="italic-text">modulus</span> em inglês) é o número de
          estados estáveis que o contador possui, ou seja, é a quantidade total
          de números que ele pode contar. O módulo de um contador é dado por{' '}
          {<Latex>{'$2^n$'}</Latex>}, onde:
        </p>

        <p>
          O {<Latex>{'$2$'}</Latex>} é a quantidade de estados que a saída
          possui (0 ou 1) e o {<Latex>{'$n$'}</Latex>} é o número de bits do
          contador.
        </p>

        <p>Para determinar qual é o último número que um contador conta:</p>

        <div className="flex-center-column logic-expression">
          <Latex>{'$2^n \\space - \\space 1$'}</Latex>
        </div>

        <p>O primeiro número é o 0.</p>

        <p>Por exemplo, o módulo de um contador de 1 bit é:</p>

        <div className="flex-center-column logic-expression">
          <Latex>{'$2^1 = \\space 2$'}</Latex>
        </div>

        <p>
          Ou seja, podemos contar de 0 até 1 (2 números ao todo, ou, módulo 2).
        </p>

        <p>Com 2 bits, podemos contar de 0 até:</p>

        <div className="flex-center-column logic-expression">
          <Latex>
            {
              '$2^2 \\space - \\space 1 \\space = \\space 4 \\space - \\space 1 = \\space 3$'
            }
          </Latex>
        </div>

        <p>
          Ou seja, podemos contar de 0 até 3. Então, um contador de 2 bits
          possui módulo 4, pois:
        </p>

        <div className="flex-center-column logic-expression">
          <Latex>{'$2^2 \\space = \\space 4$'}</Latex>
        </div>

        <p>Ao listar as possibilidades, obtemos:</p>

        <div className="flex-center-column table-wrapper">
          <Table
            rowClassName={'truth-table-row'}
            columns={[
              {
                title: 'Número',
                dataIndex: 'number',
                children: [],
                align: 'center',
              },
              {
                title: 'A (MSB)',
                dataIndex: 'inputA',
                children: [],
                align: 'center',
              },
              {
                title: 'B (LSB)',
                dataIndex: 'inputB',
                children: [],
                align: 'center',
              },
            ]}
            bordered
            size="middle"
            dataSource={[
              { key: 1, number: 0, inputA: 0, inputB: 0 },
              { key: 2, number: 1, inputA: 0, inputB: 1 },
              { key: 3, number: 2, inputA: 1, inputB: 0 },
              { key: 4, number: 3, inputA: 1, inputB: 1 },
            ]}
            pagination={false}
          />
        </div>

        <p>Para um contador de 3 bits, o módulo é:</p>

        <div className="flex-center-column logic-expression">
          <Latex>{'$2^3 \\space = \\space 8$'}</Latex>
        </div>

        <p>Com esse contador, podemos contar de 0 até 7.</p>

        <p>
          É possível, por exemplo, fazer com que o contador não conte até o seu
          limite, mas reinicie a contagem antes.
        </p>

        <p>
          O contador de 0 até 9 é chamado de{' '}
          <span className="bold-text">contador de década</span> (
          <span className="italic-text">decade counter</span>).
        </p>

        <p>
          Na eletrônica digital, os contadores são feitos com flip-flops JK e
          seus derivados (tipo D ou tipo T).
        </p>

        <p>
          Os contadores são classificados em{' '}
          <span className="bold-text">síncronos</span> ou{' '}
          <span className="bold-text">assíncronos</span>.
        </p>

        <p>
          Nos contadores assíncronos, o pino de clock dos flip-flops são
          separados. Ou seja, cada flip-flop possui o seu próprio clock. Em
          outras palavras, os flip-flops não estão em sincronia. Os contadores
          assíncronos são mais simples de se projetar, porém são mais lentos
          (quanto mais bits, mais lentos).
        </p>

        <p>
          Nos contadores síncronos, temos apenas um sinal de clock que será
          aplicado em todos os flip-flops. Ou seja, os flip-flops estarão em
          sincronia. Os contadores síncronos permitem qualquer sequência de
          contagem (por exemplo, a contagem começa em 5, depois vai para 12,
          depois 28 etc.) e são mais rápidos.
        </p>

        <p>Contador de 1 bit feito com flip-flop JK:</p>

        <div className="flex-center-column circuit-frame-wrapper">
          <iframe
            title="1-bit-counter"
            src="https://circuitverse.org/simulator/embed/1-bit-counter-638b3aee-ec1b-44e8-b365-aacfcf2a2f2c"
            className="circuit-frame"
          />
        </div>

        <p>
          Podemos implementar esse contador utilizando o CI 74HC73 e com um
          sinal de clock gerado por um 555:
        </p>

        <div className="flex-center-column circuit-frame-wrapper">
          <iframe
            title="tinkercad-1-bit-counter"
            src="https://www.tinkercad.com/embed/hWbUJc5ZyDb?editbtn=1"
            className="circuit-frame"
          />
        </div>

        <p>
          Perceba que ele só possui uma saída. O estado lógico dessa saída pode
          ser 0 ou 1; basta manter a entrada T (J/K) sempre em 1.
        </p>

        <p>
          Vejamos abaixo o que acontece com a saída Q na borda de descida do
          clock (<BsArrowDown />) e com T = 1:
        </p>

        <div className="flex-center-column table-wrapper">
          <Table
            rowClassName={'truth-table-row'}
            columns={[
              {
                title: 'T',
                dataIndex: 'inputT',
                children: [],
                align: 'center',
              },
              {
                title: 'CLK',
                dataIndex: 'clk',
                children: [],
                align: 'center',
              },
              {
                title: 'Q',
                dataIndex: 'outputQ',
                children: [],
                align: 'center',
              },
            ]}
            bordered
            size="middle"
            dataSource={[
              {
                key: 5,
                inputT: 1,
                clk: (
                  <div className="flex-center-column">
                    <BsArrowDown />
                  </div>
                ),
                outputQ: 0,
              },
              {
                key: 6,
                inputT: 1,
                clk: (
                  <div className="flex-center-column">
                    <BsArrowDown />
                  </div>
                ),
                outputQ: 1,
              },
              {
                key: 7,
                inputT: 1,
                clk: (
                  <div className="flex-center-column">
                    <BsArrowDown />
                  </div>
                ),
                outputQ: 0,
              },
              {
                key: 8,
                inputT: 1,
                clk: (
                  <div className="flex-center-column">
                    <BsArrowDown />
                  </div>
                ),
                outputQ: 1,
              },
              {
                key: 9,
                inputT: 1,
                clk: (
                  <div className="flex-center-column">
                    <BsArrowDown />
                  </div>
                ),
                outputQ: 0,
              },
            ]}
            pagination={false}
          />
        </div>

        <p>
          Conseguiu perceber o padrão? Quanto T = 1, a saída comuta de estado na
          borda de descida do clock.
        </p>

        <p>
          Seja a tabela-verdade para um contador de 3 bits com borda de descida:
        </p>

        <div className="flex-center-column table-wrapper">
          <Table
            rowClassName={'truth-table-row'}
            columns={[
              {
                title: 'Número',
                dataIndex: 'number',
                children: [],
                align: 'center',
                width: '20%',
              },
              {
                title: 'A (MSB)',
                dataIndex: 'inputA',
                children: [],
                align: 'center',
                width: '20%',
              },
              {
                title: 'B',
                dataIndex: 'inputB',
                children: [],
                align: 'center',
                width: '20%',
              },
              {
                title: 'C (LSB)',
                dataIndex: 'inputC',
                children: [],
                align: 'center',
                width: '20%',
              },
            ]}
            bordered
            size="middle"
            dataSource={[
              {
                key: 10,
                number: 0,
                inputA: 0,
                inputB: 0,
                inputC: 0,
              },
              {
                key: 11,
                number: 1,
                inputA: 0,
                inputB: 0,
                inputC: 1,
              },
              {
                key: 12,
                number: 2,
                inputA: 0,
                inputB: 1,
                inputC: 0,
              },
              {
                key: 13,
                number: 3,
                inputA: 0,
                inputB: 1,
                inputC: 1,
              },
              {
                key: 14,
                number: 4,
                inputA: 1,
                inputB: 0,
                inputC: 0,
              },
              {
                key: 15,
                number: 5,
                inputA: 1,
                inputB: 0,
                inputC: 1,
              },
              {
                key: 16,
                number: 6,
                inputA: 1,
                inputB: 1,
                inputC: 0,
              },
              {
                key: 17,
                number: 7,
                inputA: 1,
                inputB: 1,
                inputC: 1,
              },
            ]}
            pagination={false}
          />
        </div>

        <p>
          Perceba que sempre que o LSB vai de 1 para 0 (borda de descida), o bit
          à esquerda troca de estado:
        </p>

        <div className="site-image">
          <img
            src={leftBitToggle}
            className="large-image"
            alt="Toggle do bit à esquerda"
          />
        </div>

        <p>Isso acontece em contagens de {<Latex>{'$n$'}</Latex>} bits.</p>

        <p>
          Para um contador de 2 bits, vamos utilizar outro flip-flop do tipo T.
          A entrada T sempre ficará em 1, apenas o clock trocará de estado.
        </p>

        <div className="flex-center-column circuit-frame-wrapper">
          <iframe
            title="2-bit-counter"
            src="https://circuitverse.org/simulator/embed/2-bit-counter-001c3428-b5d3-43e5-a548-9e2d0860595c"
            className="circuit-frame"
          />
        </div>

        <p>
          Dessa vez, o clock do segundo flip-flop virá a partir da saída do
          primeiro flip-flop.
        </p>

        <p>
          Como o 74HC73 possui dois flip-flops JK em um único encapsulamento,
          podemos aproveitar e montar nosso contador de 2 bits:
        </p>

        <div className="flex-center-column circuit-frame-wrapper">
          <iframe
            title="tinkercad-2-bit-counter"
            src="https://www.tinkercad.com/embed/hiiJ7i6DBYw?editbtn=1"
            className="circuit-frame"
          />
        </div>

        <div className="flex-center-column table-wrapper">
          <Table
            rowClassName={'truth-table-row'}
            columns={[
              {
                title: 'Número',
                dataIndex: 'number',
                children: [],
                align: 'center',
              },
              {
                title: 'T',
                dataIndex: 't',
                children: [],
                align: 'center',
              },
              {
                title: 'CLK',
                dataIndex: 'clk',
                children: [],
                align: 'center',
              },
              {
                title: 'QA',
                dataIndex: 'qa',
                children: [],
                align: 'center',
              },
              {
                title: 'QB',
                dataIndex: 'qb',
                children: [],
                align: 'center',
              },
            ]}
            bordered
            size="middle"
            dataSource={[
              {
                key: 18,
                number: 0,
                t: 1,
                clk: (
                  <div className="flex-center-column">
                    <BsArrowDown />
                  </div>
                ),
                qa: 0,
                qb: 0,
              },
              {
                key: 19,
                number: 1,
                t: 1,
                clk: (
                  <div className="flex-center-column">
                    <BsArrowDown />
                  </div>
                ),
                qa: 1,
                qb: 0,
              },
              {
                key: 20,
                number: 2,
                t: 1,
                clk: (
                  <div className="flex-center-column">
                    <BsArrowDown />
                  </div>
                ),
                qa: 0,
                qb: 1,
              },
              {
                key: 21,
                number: 3,
                t: 1,
                clk: (
                  <div className="flex-center-column">
                    <BsArrowDown />
                  </div>
                ),
                qa: 1,
                qb: 1,
              },
            ]}
            pagination={false}
          />
        </div>

        <p>
          Leitura: da direita para a esquerda, i.e., primeiro QB, depois QA.
          Isso acontece pois, naturalmente, acabamos construindo o contador com
          os bits "ao contrário".
        </p>

        <p>
          O estado da saída QB (segundo flip-flop) só comutará na borda de
          descida do clock (QA/saída do segundo flip-flop).
        </p>

        <div className="site-image">
          <img
            src={stateToggle}
            className="large-image"
            alt="Toggle do estado"
          />
        </div>

        <p>
          Ou seja, quando QA for de 1 para 0, QB comutará. Caso contrário, o
          estado será mantido.
        </p>

        <div className="site-image">
          <img src={qbToggle} className="large-image" alt="Troca de QB" />
        </div>

        <p>
          Perceba que temos um contador de 2 bits, onde QA é o LSB e QB é o MSB.
          Assim que a contagem chega no limite, ela recomeça:
        </p>

        <div className="flex-center-column table-wrapper">
          <Table
            className="count-restarts"
            onRow={(data, index) =>
              [3, 4, 7, 8].includes(index ? index : -1)
                ? {
                    style: { backgroundColor: 'yellow' },
                  }
                : {}
            }
            rowClassName={'truth-table-row'}
            columns={[
              {
                title: 'Número',
                dataIndex: 'number',
                children: [],
                align: 'center',
              },
              {
                title: 'T',
                dataIndex: 't',
                children: [],
                align: 'center',
              },
              {
                title: 'CLK',
                dataIndex: 'clk',
                children: [],
                align: 'center',
              },
              {
                title: 'QA',
                dataIndex: 'qa',
                children: [],
                align: 'center',
              },
              {
                title: 'QB',
                dataIndex: 'qb',
                children: [],
                align: 'center',
              },
            ]}
            bordered
            size="middle"
            dataSource={[
              {
                key: 22,
                number: 0,
                t: 1,
                clk: (
                  <div className="flex-center-column">
                    <BsArrowDown />
                  </div>
                ),
                qa: 0,
                qb: 0,
              },
              {
                key: 23,
                number: 1,
                t: 1,
                clk: (
                  <div className="flex-center-column">
                    <BsArrowDown />
                  </div>
                ),
                qa: 1,
                qb: 0,
              },
              {
                key: 24,
                number: 2,
                t: 1,
                clk: (
                  <div className="flex-center-column">
                    <BsArrowDown />
                  </div>
                ),
                qa: 0,
                qb: 1,
              },
              {
                key: 25,
                color: 'yellow',
                number: 3,
                t: 1,
                clk: (
                  <div className="flex-center-column">
                    <BsArrowDown />
                  </div>
                ),
                qa: 1,
                qb: 1,
              },
              {
                key: 26,
                color: 'yellow',
                number: 0,
                t: 1,
                clk: (
                  <div className="flex-center-column">
                    <BsArrowDown />
                  </div>
                ),
                qa: 0,
                qb: 0,
              },
              {
                key: 27,
                number: 1,
                t: 1,
                clk: (
                  <div className="flex-center-column">
                    <BsArrowDown />
                  </div>
                ),
                qa: 1,
                qb: 0,
              },
              {
                key: 28,
                number: 2,
                t: 1,
                clk: (
                  <div className="flex-center-column">
                    <BsArrowDown />
                  </div>
                ),
                qa: 0,
                qb: 1,
              },
              {
                key: 29,
                color: 'yellow',
                number: 3,
                t: 1,
                clk: (
                  <div className="flex-center-column">
                    <BsArrowDown />
                  </div>
                ),
                qa: 1,
                qb: 1,
              },
              {
                key: 30,
                color: 'yellow',
                number: 0,
                t: 1,
                clk: (
                  <div className="flex-center-column">
                    <BsArrowDown />
                  </div>
                ),
                qa: 0,
                qb: 0,
              },
              {
                key: 31,
                number: 1,
                t: 1,
                clk: (
                  <div className="flex-center-column">
                    <BsArrowDown />
                  </div>
                ),
                qa: 1,
                qb: 0,
              },
            ]}
            pagination={false}
          />
        </div>

        <p>
          Para um contador de 3 bits, basta ligar a saída do segundo flip-flop
          na entrada de clock do terceiro. Veja:
        </p>

        <div className="flex-center-column circuit-frame-wrapper">
          <iframe
            title="3-bit-counter"
            src="https://circuitverse.org/simulator/embed/3-bit-counter-f65613e2-c0de-4c08-9aba-f0808ea0309d"
            className="circuit-frame"
          />
        </div>

        <div className="flex-center-column table-wrapper">
          <Table
            rowClassName={'truth-table-row'}
            columns={[
              {
                title: 'Número',
                dataIndex: 'number',
                children: [],
                align: 'center',
              },
              {
                title: 'QA',
                dataIndex: 'qa',
                children: [],
                align: 'center',
              },
              {
                title: 'QB',
                dataIndex: 'qb',
                children: [],
                align: 'center',
              },
              {
                title: 'QC',
                dataIndex: 'qc',
                children: [],
                align: 'center',
              },
            ]}
            bordered
            size="middle"
            dataSource={[
              {
                key: 32,
                number: 0,
                qa: 0,
                qb: 0,
                qc: 0,
              },
              {
                key: 33,
                number: 1,
                qa: 1,
                qb: 0,
                qc: 0,
              },
              {
                key: 34,
                number: 2,
                qa: 0,
                qb: 1,
                qc: 0,
              },
              {
                key: 35,
                number: 3,
                qa: 1,
                qb: 1,
                qc: 0,
              },
              {
                key: 36,
                number: 4,
                qa: 0,
                qb: 0,
                qc: 1,
              },
              {
                key: 37,
                number: 5,
                qa: 1,
                qb: 0,
                qc: 1,
              },
              {
                key: 38,
                number: 6,
                qa: 0,
                qb: 1,
                qc: 1,
              },
              {
                key: 39,
                number: 7,
                qa: 1,
                qb: 1,
                qc: 1,
              },
            ]}
            pagination={false}
          />
        </div>

        <p>Veja que quando QB vai de 1 para 0, o estado da saída QC comuta.</p>

        <p>
          Assim como no flip-flop de 2 bits, quando a contagem chega no limite,
          ela recomeça.
        </p>

        <p>Para demonstrar um contador de 4 bits, vamos utilizar o 74HC93:</p>

        <div className="flex-center-column circuit-frame-wrapper">
          <iframe
            title="4-bit-counter"
            src="https://www.tinkercad.com/embed/0NjRSacL7KU?editbtn=1"
            className="circuit-frame"
          />
        </div>

        <p>
          Cada flip-flop da figura abaixo divide a frequência do clock por 2. É
          por isso que às vezes ele é chamado de{' '}
          <span className="italic-text">divide-by-2 circuit</span>. Como cada
          flip-flop divide a frequência por 2, {<Latex>{'$n$'}</Latex>}{' '}
          flip-flops dividem a frequência por {<Latex>{'$2^n$'}</Latex>}.
        </p>

        <div className="site-image">
          <img
            src={counter}
            className="large-image"
            alt="Contador feito com flip-flops"
          />
        </div>

        <p>
          Cada flip-flop é chamado de <span className="bold-text">estágio</span>{' '}
          (ou <span className="italic-text">stage</span> em inglês).
        </p>

        <div className="site-image">
          <img
            src={fourStageCounter}
            className="medium-image"
            alt="Contador de quatro estágios"
          />
        </div>

        <p>Como temos 4 flip-flops:</p>

        <div className="flex-center-column logic-expression">
          <Latex>{'$2^4 \\space = \\space 16$'}</Latex>
        </div>

        <p>
          {<Latex>{'$Q_0$'}</Latex>} divide por 2, {<Latex>{'$Q_1$'}</Latex>}{' '}
          por 4, {<Latex>{'$Q_2$'}</Latex>} por 8, e {<Latex>{'$Q_3$'}</Latex>},
          por 16.
        </p>

        <div className="site-image">
          <img
            src={signalDivision}
            className="large-image"
            alt="Divisão do sinal"
          />
        </div>

        <p>
          Note que, a cada 2 pulsos do clock, temos 1 pulso em{' '}
          {<Latex>{'$Q_0$'}</Latex>}, pois ele divide a frequência por 2. A cada
          4 pulsos do clock temos 1 pulso em {<Latex>{'$Q_1$'}</Latex>}, pois
          ele divide a frequência por 4, e assim por diante.
        </p>

        <div className="site-image">
          <img
            src={signalDivision2}
            className="small-image"
            alt="Divisão do sinal 2"
          />
        </div>

        <p>
          Note que ao juntar o nível do clock com o nível da saída Q, temos um
          contador de 0 até 3:
        </p>

        <div className="site-image">
          <img
            src={signalDivision3}
            className="small-image"
            alt="Divisão do sinal 3"
          />
        </div>

        <p>
          Um <span className="bold-text">contador controlado</span> conta os
          pulsos do clock apenas quando é comandado. O contador da figura acima
          é um exemplo de contador controlado por conta da entrada "High".
        </p>

        <p>
          O contador da figura acima é chamado de{' '}
          <span className="bold-text">ripple counter</span>, pois o carry se
          move através dos flip-flops como uma ondulação na água.
        </p>

        <p>
          Quando o carry deve se propagar através de uma cadeia de{' '}
          {<Latex>{'$n$'}</Latex>} flip-flops, o tempo de retardo de propagação
          no geral é {<Latex>{'$n \\space . \\space t_p$'}</Latex>}. Por conta
          disso, o ripple counter é muito lento para algumas aplicações. Para
          melhorar essa questão, podemos utilizar um contador síncrono. A
          vantagem do contador síncrono é sua velocidade; ele leva apenas um
          tempo de atraso de propagação para a contagem binária correta aparecer
          após a borda do clock ser atingida.
        </p>

        <p>Exemplo de contador síncrono:</p>

        <div className="site-image">
          <img
            src={synchronousCounter}
            className="large-image"
            alt="Contador síncrono"
          />
        </div>

        <p>
          Cada flip-flop comuta se todos os bits (Q) antes dele são 1. Por
          exemplo, o flip-flop {<Latex>{'$Q_2$'}</Latex>} só comuta se{' '}
          {<Latex>{'$Q_1 \\space = \\space Q_0 \\space = \\space 1$'}</Latex>}.
        </p>

        <p>
          O flip-flop {<Latex>{'$Q_3$'}</Latex>} só comuta se{' '}
          {
            <Latex>
              {
                '$Q_2 \\space = \\space Q_1 \\space = \\space Q_0 \\space = \\space 1$'
              }
            </Latex>
          }
          .
        </p>

        <p>O circuito abaixo é um contador síncrono controlado:</p>

        <div className="site-image">
          <img
            src={synchronousCounterControlled}
            className="large-image"
            alt="Contador síncrono controlado"
          />
        </div>

        <p>
          Quando COUNT = 0, todos os flip-flops estão desabilitados. Quando
          COUNT = 1, o circuito está pronto para contar.
        </p>

        <br />

        <NavigationButtons
          previousPageUrl="/aulas/eletronica-digital/multiplexadores-e-demultiplexadores"
          nextPageUrl="/aulas/eletronica-digital/registradores"
        />

        <hr />

        <br />

        <PageInformation
          lastUpdateDate="27/11/2022"
          originalPublicationDate="26/11/2022"
        />
      </div>
    </div>
  );
};
