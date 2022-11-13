import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { TwoInputGate } from '../../../store/application/types';
import orGateAnsi from '../../../images/or-gate-ansi.png';
import orGateIec from '../../../images/or-gate-iec.png';
import orGateDin from '../../../images/or-gate-din.png';
import Latex from 'react-latex';
import { PageInformation } from '../../../components/PageInformation';

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
    { key: 1, inputA: 0, inputB: 0, outputQ: 0 },
    { key: 2, inputA: 0, inputB: 1, outputQ: 1 },
    { key: 3, inputA: 1, inputB: 0, outputQ: 1 },
    { key: 4, inputA: 1, inputB: 1, outputQ: 1 },
  ];

  return (
    <div className="site-content-wrapper">
      <h1>Porta Lógica OR</h1>
      <div className="site-content">
        <p>
          Na porta OR,{' '}
          <span className="underline-text">
            a saída será verdadeira se{' '}
            <span className="bold-text">pelo menos uma</span> das entradas for
            verdadeira
          </span>
          .
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
        <p>Simbologia no padrão DIN:</p>
        <div className="site-image">
          <img
            src={orGateDin}
            className="logic-gate-symbol-image"
            alt="Simbologia da porta lógica OR no padrão DIN"
          />
        </div>
        <p>Tabela verdade para uma porta OR de duas entradas:</p>
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
        <div className="space-around flex-center-column">
          <iframe
            title="tinkercad-two-input-or-gate"
            src="https://www.tinkercad.com/embed/9Xq4DPq1vLp?editbtn=1"
            className="circuit-frame"
          />
        </div>

        <br />

        <hr />

        <br />

        <PageInformation
          lastUpdateDate="13/11/2022"
          originalPublicationDate="29/10/2022"
        />
      </div>
    </div>
  );
};
