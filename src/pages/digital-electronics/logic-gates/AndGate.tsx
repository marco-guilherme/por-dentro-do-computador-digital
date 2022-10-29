import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import andGateAnsi from '../../../images/and-gate-ansi.png';
import andGateIec from '../../../images/and-gate-iec.png';
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
    { inputA: 0, inputB: 0, outputQ: 0 },
    { inputA: 0, inputB: 1, outputQ: 0 },
    { inputA: 1, inputB: 0, outputQ: 0 },
    { inputA: 1, inputB: 1, outputQ: 1 },
  ];

  return (
    <div className="site-content-wrapper">
      <h1>Porta Lógica AND</h1>
      <div className="site-content">
        <p>
          Na porta AND, a saída só será um (nível lógico alto) se todas as suas
          entradas forem iguais a um. Caso contrário, teremos zero na saída.
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
        <p>Tabela verdade para uma porta AND de duas entradas:</p>
        <div className="flex-center-column">
          <Table
            columns={columns}
            bordered
            size="middle"
            dataSource={dataSource}
            pagination={false}
          />
        </div>
        <p>Expressão lógica:</p>
        <div className="flex-center-column">
          <span className="logic-expression">Q = A . B</span>
        </div>
        <p>Lê-se: a saída Q é igual a A e B.</p>
        <p>
          Note que: é incorreto ler como "A saída Q é igual a A vezes B". Apesar
          disso, a porta AND faz uma operação de multiplicação com suas entradas
          e envia o resultado para a saída. Em uma multiplicação, o zero é o
          elemento absorvente, isto é, se o zero aparecer em algum momento da
          multiplicação, o resultado com certeza será zero. Em uma porta AND, se
          uma das entradas for igual a zero, a saída com certeza será zero.
        </p>
        <p>Porta lógica AND interativa:</p>
        <div className="flex-center-column">
          <iframe
            title="two-input-and-gate"
            src="https://circuitverse.org/simulator/embed/and-gate-f1fed013-736b-4eb7-b0bc-27b481bbd0fa?theme=default&display_title=false&clock_time=true&fullscreen=true&zoom_in_out=true"
            className="circuit-frame"
          />
        </div>
      </div>
    </div>
  );
};
