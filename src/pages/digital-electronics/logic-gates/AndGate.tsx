import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import Latex from 'react-latex';
import andGateAnsi from '../../../images/and-gate-ansi.png';
import andGateIec from '../../../images/and-gate-iec.png';
import andGateDin from '../../../images/and-gate-din.png';
import { TwoInputGate } from '../../../store/application/types';

export const AndGate = (): JSX.Element => {
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
      children: [{ title: 'Q', dataIndex: 'outputQ', align: 'center' }],
      align: 'center',
    },
  ];

  const dataSource: TwoInputGate[] = [
    { key: 1, inputA: 0, inputB: 0, outputQ: 0 },
    { key: 2, inputA: 0, inputB: 1, outputQ: 0 },
    { key: 3, inputA: 1, inputB: 0, outputQ: 0 },
    { key: 4, inputA: 1, inputB: 1, outputQ: 1 },
  ];

  return (
    <div className="site-content-wrapper">
      <h1>Porta Lógica AND</h1>
      <div className="site-content">
        <p>
          Na porta AND,{' '}
          <span className="underline-text">
            a saída só será um <span className="bold-text">se todas</span> as
            suas entradas forem iguais a um
          </span>
          . Caso contrário, teremos <span className="bold-text">zero</span> na
          saída.
        </p>
        <p>Simbologia no padrão ANSI:</p>
        <div className="site-image">
          <img
            src={andGateAnsi}
            className="logic-gate-symbol-image"
            alt="Simbologia da porta lógica AND no padrão ANSI"
          />
        </div>
        <p>Simbologia no padrão IEC:</p>
        <div className="site-image">
          <img
            src={andGateIec}
            className="logic-gate-symbol-image"
            alt="Simbologia da porta lógica AND no padrão IEC"
          />
        </div>
        <p>Simbologia no padrão DIN:</p>
        <div className="site-image">
          <img
            src={andGateDin}
            className="logic-gate-symbol-image"
            alt="Simbologia da porta lógica AND no padrão DIN"
          />
        </div>
        <p>Tabela verdade para uma porta AND de duas entradas:</p>
        <div className="flex-center-column">
          <Table
            rowClassName={'truth-table-row'}
            columns={columns}
            bordered
            size="middle"
            dataSource={dataSource}
            pagination={false}
          />
        </div>
        <p>Expressão lógica:</p>
        <div className="flex-center-column logic-expression">
          <Latex>{'$Q \\space = \\space A \\space . \\space B$'}</Latex>
        </div>
        <p>Lê-se: a saída Q é igual a A e B.</p>
        <p>
          Note que: é incorreto ler como "A saída Q é igual a A vezes B". Apesar
          disso, a porta AND faz uma operação de multiplicação com suas entradas
          e envia o resultado para a saída. Em uma multiplicação, o zero é o{' '}
          <span className="bold-text">elemento absorvente</span>, isto é,{' '}
          <span className="underline-text">
            se o zero aparecer em algum momento da multiplicação, o resultado
            com certeza será zero
          </span>
          . Em uma porta AND,{' '}
          <span className="underline-text">
            se uma das entradas for igual a zero, a saída com certeza será zero
          </span>
          .
        </p>
        <p>Porta lógica AND interativa:</p>
        <div className="flex-center-column">
          <iframe
            title="two-input-and-gate"
            src="https://circuitverse.org/simulator/embed/and-gate-f1fed013-736b-4eb7-b0bc-27b481bbd0fa?theme=default&display_title=false&clock_time=true&fullscreen=true&zoom_in_out=true"
            className="circuit-frame"
          />
        </div>
        <div className="space-around flex-center-column">
          <iframe
            title="tinkercad-two-input-and-gate"
            src="https://www.tinkercad.com/embed/eO7ZXmNGCt1"
            className="circuit-frame"
          />
        </div>
      </div>
    </div>
  );
};
