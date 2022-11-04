import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { TwoInputGate } from '../../../store/application/types';
import orGateAnsi from '../../../images/or-gate-ansi.png';
import orGateIec from '../../../images/or-gate-iec.png';
import Latex from 'react-latex';

export const OrGate = (): JSX.Element => {
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
    { inputA: 0, inputB: 1, outputQ: 1 },
    { inputA: 1, inputB: 0, outputQ: 1 },
    { inputA: 1, inputB: 1, outputQ: 1 },
  ];

  return (
    <div className="site-content-wrapper">
      <h1>Porta Lógica OR</h1>
      <div className="site-content">
        <p>
          Na porta OR, a saída será verdadeira se pelo menos uma das entradas
          for verdadeira.
        </p>
        <p>Simbologia no padrão ANSI:</p>
        <div className="site-image">
          <img
            src={orGateAnsi}
            className="logic-gate-symbol-image"
            alt="Simbologia da porta lógica AND no padrão ANSI"
          />
        </div>
        <p>Simbologia no padrão IEC:</p>
        <div className="site-image">
          <img
            src={orGateIec}
            className="logic-gate-symbol-image"
            alt="Simbologia da porta lógica AND no padrão IEC"
          />
        </div>
        <p>Tabela verdade para uma porta OR de duas entradas:</p>
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
        <div className="flex-center-column logic-expression">
          <Latex>{'$Q \\space = \\space A \\space + \\space B$'}</Latex>
        </div>
        <p>Lê-se: a saída Q é igual a A ou B.</p>
        <p>
          Repare que a porta OR realiza uma operação de adição binária com o
          valor de suas entradas. Em uma soma de zeros e uns, se o número um
          aparecer na expressão, o resultado com certeza será diferente de zero.
          Ainda assim, evite ler "a saída Q é igual a A mais B".
        </p>
        <p>Porta lógica OR interativa:</p>
        <div className="flex-center-column">
          <iframe
            title="two-input-or-gate"
            src="https://circuitverse.org/simulator/embed/or-gate-478e4150-bd2b-46eb-babb-b027250ef4fd"
            className="circuit-frame"
          />
        </div>
      </div>
    </div>
  );
};
