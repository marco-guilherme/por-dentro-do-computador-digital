import { Button } from 'antd';
import { useState } from 'react';
import Latex from 'react-latex';
import { NavigationButtons } from '../../../components/NavigationButtons';
import { PageInformation } from '../../../components/PageInformation';

export const BinaryToDecimal = (): JSX.Element => {
  const [bit0, setBit0] = useState<number>(0);
  const [bit1, setBit1] = useState<number>(0);
  const [bit2, setBit2] = useState<number>(0);
  const [bit3, setBit3] = useState<number>(0);
  const [bit4, setBit4] = useState<number>(0);
  const [bit5, setBit5] = useState<number>(0);
  const [bit6, setBit6] = useState<number>(0);
  const [bit7, setBit7] = useState<number>(0);

  return (
    <div className="site-content-wrapper">
      <h1>Binário Para Decimal</h1>

      <div className="site-content">
        <p>
          Para converter um número de{' '}
          <span className="bold-text">binário para decimal</span>, basta{' '}
          <span className="underline-text">
            multiplicar cada bit pelo seu peso e somar todos os produtos
          </span>
          .
        </p>

        <p>
          Clique nos bits abaixo e converta o valor{' '}
          {<Latex>{'$1010_{(2)}$'}</Latex>} para decimal.
        </p>

        <div className="flex-center-column binary-to-decimal-tabble-wrapper card-rounded-border">
          <table>
            <tr>
              <th rowSpan={2}>Bit</th>
              <th
                className="single-bit flex-center-column unselectable"
                onClick={() => setBit7(bit7 ^ 1)}
              >
                <div>{bit7}</div>
              </th>
              <th></th>
              <th
                className="single-bit flex-center-column unselectable"
                onClick={() => setBit6(bit6 ^ 1)}
              >
                <div>{bit6}</div>
              </th>
              <th></th>
              <th
                className="single-bit flex-center-column unselectable"
                onClick={() => setBit5(bit5 ^ 1)}
              >
                <div>{bit5}</div>
              </th>
              <th></th>
              <th
                className="single-bit flex-center-column unselectable"
                onClick={() => setBit4(bit4 ^ 1)}
              >
                <div>{bit4}</div>
              </th>
              <th></th>
              <th
                className="single-bit flex-center-column unselectable"
                onClick={() => setBit3(bit3 ^ 1)}
              >
                <div>{bit3}</div>
              </th>
              <th></th>
              <th
                className="single-bit flex-center-column unselectable"
                onClick={() => setBit2(bit2 ^ 1)}
              >
                <div>{bit2}</div>
              </th>
              <th></th>
              <th
                className="single-bit flex-center-column unselectable"
                onClick={() => setBit1(bit1 ^ 1)}
              >
                <div>{bit1}</div>
              </th>
              <th></th>
              <th
                className="single-bit flex-center-column unselectable"
                onClick={() => setBit0(bit0 ^ 1)}
              >
                <div>{bit0}</div>
              </th>
              <th></th>
              <th className="result"></th>
            </tr>
            <tr>
              <td>↓</td>
              <td></td>
              <td>↓</td>
              <td></td>
              <td>↓</td>
              <td></td>
              <td>↓</td>
              <td></td>
              <td>↓</td>
              <td></td>
              <td>↓</td>
              <td></td>
              <td>↓</td>
              <td></td>
              <td>↓</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td rowSpan={3}>Peso</td>
              <td>{<Latex>{'$2^7$'}</Latex>}</td>
              <td></td>
              <td>{<Latex>{'$2^6$'}</Latex>}</td>
              <td></td>
              <td>{<Latex>{'$2^5$'}</Latex>}</td>
              <td></td>
              <td>{<Latex>{'$2^4$'}</Latex>}</td>
              <td></td>
              <td>{<Latex>{'$2^3$'}</Latex>}</td>
              <td></td>
              <td>{<Latex>{'$2^2$'}</Latex>}</td>
              <td></td>
              <td>{<Latex>{'$2^1$'}</Latex>}</td>
              <td></td>
              <td>{<Latex>{'$2^0$'}</Latex>}</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>↓</td>
              <td></td>
              <td>↓</td>
              <td></td>
              <td>↓</td>
              <td></td>
              <td>↓</td>
              <td></td>
              <td>↓</td>
              <td></td>
              <td>↓</td>
              <td></td>
              <td>↓</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>128</td>
              <td></td>
              <td>64</td>
              <td></td>
              <td>32</td>
              <td></td>
              <td>16</td>
              <td></td>
              <td>8</td>
              <td></td>
              <td>4</td>
              <td></td>
              <td>2</td>
              <td></td>
              <td>1</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>({bit7} . 128)</td>
              <td>+</td>
              <td>({bit6} . 64)</td>
              <td>+</td>
              <td>({bit5} . 32)</td>
              <td>+</td>
              <td>({bit4} . 16)</td>
              <td>+</td>
              <td>({bit3} . 8)</td>
              <td>+</td>
              <td>({bit2} . 4)</td>
              <td>+</td>
              <td>({bit1} . 2)</td>
              <td>+</td>
              <td>({bit0} . 1)</td>
              <td>=</td>
              <td>
                {parseInt(
                  `${bit7}${bit6}${bit5}${bit4}${bit3}${bit2}${bit1}${bit0}`,
                  2
                )}
              </td>
            </tr>
          </table>
        </div>

        <div className="clear-button">
          <Button
            danger
            onClick={() => {
              setBit0(0);
              setBit1(0);
              setBit2(0);
              setBit3(0);
              setBit4(0);
              setBit5(0);
              setBit6(0);
              setBit7(0);
            }}
          >
            Zerar
          </Button>
        </div>

        <p>
          No caso dos zeros à esquerda, não é necessário incluí-los na soma dos
          produtos.
        </p>

        <br />

        <NavigationButtons
          previousPageUrl="/aulas/eletronica-digital/conversao-entre-sistemas-de-numeracao-e-codigos/decimal-para-octal"
          nextPageUrl="/aulas/eletronica-digital/conversao-entre-sistemas-de-numeracao-e-codigos/binario-para-hexadecimal"
        />

        <hr />

        <br />

        <PageInformation
          lastUpdateDate="27/11/2022"
          originalPublicationDate="27/11/2022"
        />
      </div>
    </div>
  );
};
