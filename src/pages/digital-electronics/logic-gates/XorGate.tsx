import Table, { ColumnsType } from 'antd/lib/table';
import Latex from 'react-latex';
import xorGateAnsi from '../../../images/xor-gate-ansi.png';
import xorGateIec from '../../../images/xor-gate-iec.png';
import { TwoInputGate } from '../../../store/application/types';

export const XorGate = (): JSX.Element => {
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
    { key: 2, inputA: 0, inputB: 1, outputQ: 1 },
    { key: 3, inputA: 1, inputB: 0, outputQ: 1 },
    { key: 4, inputA: 1, inputB: 1, outputQ: 0 },
  ];

  return (
    <div className="site-content-wrapper">
      <h1>Porta Lógica XOR</h1>
      <div className="site-content">
        <p>
          Em uma porta XOR com duas ou mais entradas, a saída só será 1 se
          houver uma quantidade ímpar de 1's nas entradas.
        </p>
        <p>Simbologia no padrão ANSI:</p>
        <div className="site-image">
          <img
            src={xorGateAnsi}
            className="logic-gate-symbol-image"
            alt="Simbologia da porta lógica XOR no padrão ANSI"
          />
        </div>
        <p>Simbologia no padrão IEC:</p>
        <div className="site-image">
          <img
            src={xorGateIec}
            className="logic-gate-symbol-image"
            alt="Simbologia da porta lógica XOR no padrão IEC"
          />
        </div>
        <p>Tabela verdade para uma porta XOR de duas entradas:</p>
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
          <Latex>{'$Q \\space = \\space A \\space \\oplus \\space B$'}</Latex>
        </div>
        <p>Lê-se: a saída Q é igual a A ou-exclusivo B.</p>
        <p>Porta lógica XOR interativa:</p>
        <div className="flex-center-column">
          <iframe
            title="two-input-xor-gate"
            src="https://circuitverse.org/simulator/embed/xor-gate-3ed6be09-0bd5-4eec-8135-fdf33d6df9c8"
            className="circuit-frame"
          />
        </div>
      </div>
    </div>
  );
};
