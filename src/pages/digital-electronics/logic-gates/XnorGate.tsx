import Table, { ColumnsType } from 'antd/lib/table';
import { TwoInputGate } from '../../../store/application/types';
import xnorGateAnsi from '../../../images/xnor-gate-ansi.png';
import xnorGateIec from '../../../images/xnor-gate-iec.png';
import xnorGateDin from '../../../images/xnor-gate-din.png';
import xnorGateDin2 from '../../../images/xnor-gate-din-2.png';
import Latex from 'react-latex';
import { PageInformation } from '../../../components/PageInformation';
import { NavigationButtons } from '../../../components/NavigationButtons';
import { useThirdPartyCookieCheck } from '../../../hooks/useThirdPartyCookieCheck ';

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
    { key: 1, inputA: 0, inputB: 0, outputQ: 1 },
    { key: 2, inputA: 0, inputB: 1, outputQ: 0 },
    { key: 3, inputA: 1, inputB: 0, outputQ: 0 },
    { key: 4, inputA: 1, inputB: 1, outputQ: 1 },
  ];

  useThirdPartyCookieCheck();

  return (
    <div className="site-content-wrapper">
      <h1>Porta Lógica XNOR</h1>

      <div className="site-content">
        <p>
          Uma porta XNOR é na verdade, uma porta XOR com sua saída sempre
          invertida. Com isso, temos que, em uma porta XNOR com{' '}
          <span className="underline-text">duas ou mais entradas</span>
          entradas, a saída só será 1 se houver uma{' '}
          <span className="underline-text">
            quantidade par de 1's nas entradas (considere zero como par)
          </span>
          .
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

        <p>Simbologia no padrão DIN:</p>

        <div className="site-image">
          <img
            src={xnorGateDin}
            className="logic-gate-symbol-image"
            alt="Simbologia da porta lógica XNOR no padrão DIN"
          />
        </div>

        <p>Simbologia alternativa no padrão DIN:</p>

        <div className="site-image">
          <img
            src={xnorGateDin2}
            className="logic-gate-symbol-image"
            alt="Simbologia alternativa da porta lógica XNOR no padrão DIN"
          />
        </div>

        <p>Tabela verdade para uma porta XNOR de duas entradas:</p>

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
            {'$Q \\space = \\space \\overline{A \\space \\oplus \\space B}$'}
          </Latex>
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

        <div className="space-around flex-center-column">
          <iframe
            title="tinkercad-two-input-xnor-gate"
            src="https://www.tinkercad.com/embed/7O4UNaIaxRk?editbtn=1"
            className="circuit-frame"
          />
        </div>

        <br />

        <NavigationButtons
          previousPageUrl="/aulas/eletronica-digital/portas-logicas/porta-xor"
          nextPageUrl="/aulas/eletronica-digital/portas-logicas/porta-nand"
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
