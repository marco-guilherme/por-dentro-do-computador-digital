import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { SingleInputGate } from '../../../store/application/types';
import notGateAnsi from '../../../images/not-gate-ansi.png';
import notGateIec from '../../../images/not-gate-iec.png';
import Latex from 'react-latex';

export const NotGate = (): JSX.Element => {
  const columns: ColumnsType<Object> = [
    {
      title: 'Entrada',
      children: [{ title: 'A', dataIndex: 'inputA', align: 'center' }],
      align: 'center',
    },
    {
      title: 'Saída',
      children: [{ title: 'Q', dataIndex: 'outputQ', align: 'center' }],
      align: 'center',
    },
  ];

  const dataSource: SingleInputGate[] = [
    { inputA: 0, outputQ: 1 },
    { inputA: 1, outputQ: 0 },
  ];

  return (
    <div className="site-content-wrapper">
      <h1>Porta Lógica NOT</h1>
      <div className="site-content">
        <p>
          A porta NOT (também chamada de porta inversora) possui uma entrada e
          uma saída. O nível lógico na saída sempre será igual ao contrário da
          entrada. E.g., se a entrada estiver em nível lógico alto, a saída
          estará em nível lógico baixo, e vice-versa.
        </p>
        <p>Simbologia no padrão ANSI:</p>
        <div className="site-image">
          <img
            src={notGateAnsi}
            className="logic-gate-symbol-image"
            alt="Simbologia da porta lógica AND no padrão ANSI"
          />
        </div>
        <p>Simbologia no padrão IEC:</p>
        <div className="site-image">
          <img
            src={notGateIec}
            className="logic-gate-symbol-image"
            alt="Simbologia da porta lógica AND no padrão IEC"
          />
        </div>
        <p>Tabela verdade da porta lógica NOT:</p>
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
          <Latex>{'$Q \\space = \\space \\overline{A}$'}</Latex>
        </div>
        <p>
          Lê-se: a saída Q é igual a não A. Também podemos ler como: a saída Q é
          igual a A barrado.
        </p>
        <p>Porta lógica NOT interativa:</p>
        <div className="flex-center-column">
          <iframe
            title="two-input-or-gate"
            src="https://circuitverse.org/simulator/embed/not-gate-4790ded4-3bb0-42d1-9120-e3726bb29174"
            className="circuit-frame"
          />
        </div>
      </div>
    </div>
  );
};
