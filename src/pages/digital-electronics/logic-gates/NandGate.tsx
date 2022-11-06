import Table, { ColumnsType } from 'antd/lib/table';
import { TwoInputGate } from '../../../store/application/types';
import nandGateAnsi from '../../../images/nand-gate-ansi.png';
import nandGateIec from '../../../images/nand-gate-iec.png';
import nandGateDin from '../../../images/nand-gate-din.png';
import Latex from 'react-latex';

export const NandGate = (): JSX.Element => {
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
    { key: 1, inputA: 0, inputB: 0, outputQ: 1 },
    { key: 2, inputA: 0, inputB: 1, outputQ: 1 },
    { key: 3, inputA: 1, inputB: 0, outputQ: 1 },
    { key: 4, inputA: 1, inputB: 1, outputQ: 0 },
  ];

  return (
    <div className="site-content-wrapper">
      <h1>Porta Lógica NAND</h1>
      <div className="site-content">
        <p>
          Uma porta NAND é na verdade, uma porta AND com sua saída sempre
          invertida. Com isso, temos que, em uma porta NAND,{' '}
          <span className="underline-text">
            a saída só será zero se todas as suas entradas forem iguais a um
          </span>
          .
        </p>
        <p>Simbologia no padrão ANSI:</p>
        <div className="site-image">
          <img
            src={nandGateAnsi}
            className="logic-gate-symbol-image"
            alt="Simbologia da porta lógica NAND no padrão ANSI"
          />
        </div>
        <p>Simbologia no padrão IEC:</p>
        <div className="site-image">
          <img
            src={nandGateIec}
            className="logic-gate-symbol-image"
            alt="Simbologia da porta lógica NAND no padrão IEC"
          />
        </div>
        <p>Simbologia no padrão DIN:</p>
        <div className="site-image">
          <img
            src={nandGateDin}
            className="logic-gate-symbol-image"
            alt="Simbologia da porta lógica NAND no padrão DIN"
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
          <Latex>
            {'$Q \\space = \\space \\overline{A \\space . \\space B}$'}
          </Latex>
        </div>
        <p>Lê-se: a saída Q é igual a A não-e B.</p>
        <p>Porta lógica NAND interativa:</p>
        <div className="flex-center-column">
          <iframe
            title="two-input-nand-gate"
            src="https://circuitverse.org/simulator/embed/nand-gate-8e13fbb1-6256-4726-aea1-9286f509d9a8"
            className="circuit-frame"
          />
        </div>
        <div className="space-around flex-center-column">
          <iframe
            title="tinkercad-two-input-nand-gate"
            src="https://www.tinkercad.com/embed/2D4nqsdrZfj?editbtn=1"
            className="circuit-frame"
          />
        </div>
      </div>
    </div>
  );
};
