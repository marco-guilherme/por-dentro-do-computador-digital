import Table, { ColumnsType } from 'antd/lib/table';
import { TwoInputGate } from '../../../store/application/types';
import xnorGateAnsi from '../../../images/xnor-gate-ansi.png';
import xnorGateIec from '../../../images/xnor-gate-iec.png';

export const XnorGate = (): JSX.Element => {
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
    { inputA: 0, inputB: 0, outputQ: 1 },
    { inputA: 0, inputB: 1, outputQ: 0 },
    { inputA: 1, inputB: 0, outputQ: 0 },
    { inputA: 1, inputB: 1, outputQ: 1 },
  ];

  return (
    <div className="site-content-wrapper">
      <h1>Porta Lógica XNOR</h1>
      <div className="site-content">
        <p>
          Uma porta XNOR é na verdade, uma porta XOR com sua saída sempre
          invertida. Com isso, temos que, em uma porta XNOR com duas ou mais
          entradas, a saída só será 1 se houver uma quantidade par de 1's nas
          entradas (considere zero como par).
        </p>
        <p>Simbologia no padrão ANSI:</p>
        <div className="site-image">
          <img
            src={xnorGateAnsi}
            className="logic-gate-symbol-image"
            alt="Simbologia da porta lógica XNOR no padrão ANSI"
          />
        </div>
        <p>Simbologia no padrão IEC:</p>
        <div className="site-image">
          <img
            src={xnorGateIec}
            className="logic-gate-symbol-image"
            alt="Simbologia da porta lógica XNOR no padrão IEC"
          />
        </div>
        <p>Tabela verdade para uma porta XNOR de duas entradas:</p>
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
          <span className="logic-expression">???????????????</span>
        </div>
        <p>Lê-se: a saída Q é igual a A não-ou-exclusivo B.</p>
        <p>Porta lógica XNOR interativa:</p>
        <div className="flex-center-column">
          <iframe
            title="two-input-xnor-gate"
            src="https://circuitverse.org/simulator/embed/xnor-gate-84711972-e0ff-4cd6-8e6e-12415f464830"
            className="circuit-frame"
          />
        </div>
      </div>
    </div>
  );
};
