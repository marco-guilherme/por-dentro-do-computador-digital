import Table, { ColumnsType } from 'antd/lib/table';
import { TwoInputGate } from '../../../store/application/types';
import norGateAnsi from '../../../images/nor-gate-ansi.png';
import norGateIec from '../../../images/nor-gate-iec.png';
import norGateDin from '../../../images/nor-gate-din.png';
import Latex from 'react-latex';
import { PageInformation } from '../../../components/PageInformation';
import { NavigationButtons } from '../../../components/NavigationButtons';
import { useThirdPartyCookieCheck } from '../../../hooks/useThirdPartyCookieCheck ';

export const NorGate = (): JSX.Element => {
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
    { key: 2, inputA: 0, inputB: 1, outputQ: 0 },
    { key: 3, inputA: 1, inputB: 0, outputQ: 0 },
    { key: 4, inputA: 1, inputB: 1, outputQ: 0 },
  ];

  useThirdPartyCookieCheck();

  return (
    <div className="site-content-wrapper">
      <h1>Porta Lógica NOR</h1>

      <div className="site-content">
        <p>
          Uma porta NOR é na verdade, uma porta OR com sua saída sempre
          invertida. Com isso, temos que, em uma porta NOR,{' '}
          <span className="underline-text">
            a saída um se todas as suas entradas forem iguais a zero
          </span>
          .
        </p>

        <p>Simbologia no padrão ANSI:</p>

        <div className="site-image">
          <img
            src={norGateAnsi}
            className="logic-gate-symbol-image"
            alt="Simbologia da porta lógica NOR no padrão ANSI"
          />
        </div>

        <p>Simbologia no padrão IEC:</p>

        <div className="site-image">
          <img
            src={norGateIec}
            className="logic-gate-symbol-image"
            alt="Simbologia da porta lógica NOR no padrão IEC"
          />
        </div>

        <p>Simbologia no padrão DIN:</p>

        <div className="site-image">
          <img
            src={norGateDin}
            className="logic-gate-symbol-image"
            alt="Simbologia da porta lógica NOR no padrão DIN"
          />
        </div>

        <p>Tabela verdade para uma porta NOR de duas entradas:</p>

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
            {'$Q \\space = \\space \\overline{A \\space + \\space B}$'}
          </Latex>
        </div>

        <p>Lê-se: a saída Q é igual a A não-ou B.</p>

        <p>Porta lógica OR interativa:</p>

        <div className="flex-center-column">
          <iframe
            title="two-input-nor-gate"
            src="https://circuitverse.org/simulator/embed/nor-gate-7e5d2b61-74dc-4496-a8f1-02a1fe8a9129"
            className="circuit-frame"
          />
        </div>

        <div className="space-around flex-center-column">
          <iframe
            title="tinkercad-two-input-nor-gate"
            src="https://www.tinkercad.com/embed/cRgJkIV4g8O?editbtn=1"
            className="circuit-frame"
          />
        </div>

        <br />

        <NavigationButtons
          previousPageUrl="/aulas/eletronica-digital/portas-logicas/porta-nand"
          nextPageUrl="/aulas/eletronica-digital/clock"
        />

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
