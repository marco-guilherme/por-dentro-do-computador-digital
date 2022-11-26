import Table, { ColumnsType } from 'antd/lib/table';
import { PageInformation } from '../../../components/PageInformation';
import Latex from 'react-latex';
import carry from '../../../images/carry.png';
import halfAdderSum from '../../../images/half-adder-sum.png';
import halfAdderinput from '../../../images/half-adder-input.jpg';
import halfAdderSymbol from '../../../images/half-adder-symbol.png';
import { NavigationButtons } from '../../../components/NavigationButtons';
import { useThirdPartyCookieCheck } from '../../../hooks/useThirdPartyCookieCheck ';

export const HalfAdder = (): JSX.Element => {
  const columns: ColumnsType<Object> = [
    {
      title: 'Entradas',
      children: [
        { title: 'A', dataIndex: 'inputA', align: 'center' },
        { title: 'B', dataIndex: 'inputB', align: 'center' },
      ],
      align: 'center',
    },
    {
      title: 'Saída',
      children: [
        { title: 'C', dataIndex: 'outputC', align: 'center' },
        { title: 'S', dataIndex: 'outputS', align: 'center' },
      ],
      align: 'center',
    },
  ];

  const dataSource = [
    { key: 1, inputA: 0, inputB: 0, outputC: 0, outputS: 0 },
    { key: 2, inputA: 0, inputB: 1, outputC: 0, outputS: 1 },
    { key: 3, inputA: 1, inputB: 0, outputC: 0, outputS: 1 },
    { key: 4, inputA: 1, inputB: 1, outputC: 1, outputS: 0 },
  ];

  useThirdPartyCookieCheck();

  return (
    <div className="site-content-wrapper">
      <h1>Meio Somador</h1>

      <div className="site-content">
        <p>
          O circuito <span className="bold-text">meio somador</span> (ou{' '}
          <span className="italic-text">half adder</span>, em inglês) soma dois
          bits: A e B. Ele possui duas saídas: soma (S) e carry (C). Esses dois
          bits formam o resultado da soma. O bit C é o mais significativo e o S
          é o menos significativo.
        </p>

        <p>Símbolo do meio somador:</p>

        <div className="site-image">
          <img
            src={halfAdderSymbol}
            className="medium-image"
            alt="Símbolo do meio somador"
          />
        </div>

        <p>
          O meio somador possui esse nome pois não possui uma entrada para o
          carry do estágio anterior, isto é, ele só pode somar dois bits.
        </p>

        <p>
          A saída S é o resultado da soma, e só possui 1 bit. Quando o resultado
          da soma possui mais de 1 bit, a saída de carry comuta para nível
          lógico alto. Ou seja, o bit de carry ajuda a formar o resultado da
          soma e ao mesmo tempo, é uma flag para indicar estouro (ou{' '}
          <span className="italic-text">overflow</span>, em inglês).
        </p>

        <div className="site-image">
          <img src={halfAdderSum} className="small-image" alt="Meio somador" />
        </div>

        <p>
          O carry pode ser traduzido como "transporte" e está atrelado com a
          ideia de "vai 1" da soma binária.
        </p>

        <div className="site-image">
          <img src={carry} className="small-image" alt="Bit de carry" />
        </div>

        <p>
          As variáveis de entrada de um meio somador são chamadas de bits{' '}
          <span className="italic-text">augend</span> e{' '}
          <span className="italic-text">addend</span>.
        </p>

        <div className="site-image">
          <img
            src={halfAdderinput}
            className="medium-image"
            alt="Entradas do meio somador"
          />
        </div>

        <p>Tabela-verdade para um circuito aritmético meio somador:</p>

        <div className="flex-center-column table-wrapper">
          <Table
            columns={columns}
            bordered
            size="middle"
            dataSource={dataSource}
            pagination={false}
          />
        </div>

        <p>
          Note que só temos o bit de carry em {<Latex>{'$1 + 1$'}</Latex>}, pois
          essa soma resulta em {<Latex>{'$10_{(2)}$'}</Latex>}, ou seja, 0 "e
          vai 1".
        </p>

        <p>
          O valor da soma é sempre{' '}
          {<Latex>{'$2 \\space . \\space C \\space + \\space S$'}</Latex>}.
        </p>

        <p>
          Vamos extrair uma expressão booleana da tabela para cada saída. Será
          utilizado o método da soma dos produtos.
        </p>

        <div className="flex-center-column logic-expression">
          <Latex>
            {
              '$S \\space = \\space \\overline{A} \\space . \\space B \\space + \\space A \\space . \\space \\overline{B} \\space = \\space A \\space \\oplus \\space B$'
            }
          </Latex>
        </div>

        <p>
          Repare que obtemos o circuito que implementa a função XOR. Para o
          carry, temos:
        </p>

        <div className="flex-center-column logic-expression">
          <Latex>{'$C \\space = \\space A \\space . \\space B$'}</Latex>
        </div>

        <p>Abaixo, temos a implementação de um meio somador:</p>

        <div className="flex-center-column circuit-frame-wrapper">
          <iframe
            title="half-adder"
            src="https://www.tinkercad.com/embed/ifQwZ0GaPHL?editbtn=1"
            className="circuit-frame"
          />
        </div>

        <p>
          A ordem dos bits nas entradas é comutativa, portanto, não faz
          diferença.
        </p>

        <br />

        <NavigationButtons
          previousPageUrl="/aulas/eletronica-digital/circuitos-aritmeticos"
          nextPageUrl="/aulas/eletronica-digital/circuitos-aritmeticos/somador-completo"
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
