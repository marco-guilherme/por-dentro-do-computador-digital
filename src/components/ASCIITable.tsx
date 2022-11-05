import Table, { ColumnsType } from 'antd/lib/table';
import { ASCIICharacter } from '../store/application/types';

export const ASCIITable = (): JSX.Element => {
  const columns: ColumnsType<Object> = [
    {
      title: 'Decimal',
      align: 'center',
      dataIndex: 'decimal',
    },
    {
      title: 'Hexadecimal',
      align: 'center',
      dataIndex: 'hexadecimal',
    },
    {
      title: 'Binário',
      align: 'center',
      dataIndex: 'binary',
    },
    {
      title: 'Octal',
      align: 'center',
      dataIndex: 'octal',
    },
    {
      title: 'Caractere',
      align: 'center',
      dataIndex: 'character',
    },
  ];

  const generateAsciiTable = (): ASCIICharacter[] => {
    const numberOfTableRows = 128;
    let tableRows: ASCIICharacter[] = [];
    const controlCharactersRepresentation: string[] = [
      '[NULL]',
      '[START OF HEADING]',
      '[START OF TEXT]',
      '[END OF TEXT]',
      '[END OF TRANSMISSION]',
      '[ENQUIRY]',
      '[ACKNOWLEDGE]',
      '[BELL]',
      '[BACKSPACE]',
      '[HORIZONTAL TAB]',
      '[LINE FEED]',
      '[VERTICAL TAB]',
      '[FORM FEED]',
      '[CARRIAGE RETURN]',
      '[SHIFT OUT]',
      '[SHIFT IN]',
      '[DATA LINK ESCAPE]',
      '[DEVIE CONTROL 1]',
      '[DEVIE CONTROL 2]',
      '[DEVIE CONTROL 3]',
      '[DEVIE CONTROL 4]',
      '[NEGATIVE ACKNOWLEDGE]',
      '[SYNCHRONOUS IDLE]',
      '[END OF TRANSMISSION BLOCK]',
      '[CANCEL]',
      '[END OF MEDIUM]',
      '[SUBSTITUTE]',
      '[ESCAPE]',
      '[FILE SEPARATOR]',
      '[GROUP SEPARATOR]',
      '[RECORD SEPARATOR]',
      '[UNIT SEPARATOR]',
      '[SPACE]',
      '[DEL]',
    ];

    for (let i: number = 0; i < numberOfTableRows; i++) {
      let characterRepresentation: string = '';

      if (i >= 0 && i <= 32) {
        characterRepresentation = controlCharactersRepresentation[i];
      } else if (i === 127) {
        characterRepresentation =
          controlCharactersRepresentation[
            controlCharactersRepresentation.length - 1
          ];
      } else {
        characterRepresentation = String.fromCharCode(i);
      }

      tableRows.push({
        key: i,
        decimal: i,
        hexadecimal: Number(i).toString(16).toUpperCase().padStart(2, '0'),
        binary: Number(i).toString(2).padStart(7, '0'),
        octal: Number(i).toString(8),
        character: characterRepresentation,
      });
    }

    return tableRows;
  };

  return (
    <div className="site-content-wrapper">
      <h1>Tabela ASCII</h1>
      <div className="site-content">
        <p>
          ASCII (pronuncia-se "áski") é uma sigla para{' '}
          <span className="italic-text">
            American Standard Code For Information Interchange
          </span>{' '}
          ou{' '}
          <span className="underline-text">
            Código Padrão Americano Para o Intercâmbio de Informação
          </span>{' '}
          em português.
        </p>
        <p>
          O ASCII é uma <span className="underline-text">codificação</span>{' '}
          padrão de caracteres para a comunicação eletrônica. Os códigos ASCII
          representam letras, números e símbolos em computadores, equipamentos
          de telecomunicações e outros dispositivos.
        </p>
        <p>
          Um <span className="underline-text">caractere</span> pode ser um
          símbolo, uma letra, ou um número. Dois ou mais caracteres formam uma{' '}
          <span className="bold-text">string</span> (conjunto de caracteres).
        </p>
        <p>
          A tabela ASCII é assim como o próprio nome sugere, uma tabela. Ela é
          composta por <span className="underline-text">128 caracteres</span> e
          tem como objetivo,{' '}
          <span className="underline-text">mapear/associar</span> cada caractere
          à sua codificação correspondente em outros sistemas de numeração, como
          o decimal, binário, hexadecimal, octal etc. Essa codificação possui{' '}
          <span className="underline-text">sete</span> bits de larguras.
        </p>
        <p>Segue a tabela ASCII abaixo:</p>
        <div className="flex-center-column">
          <Table
            rowClassName={'ascii-table-row'}
            columns={columns}
            bordered
            size="middle"
            dataSource={generateAsciiTable()}
            pagination={false}
            onRow={(record, rowIndex) => {
              return {
                onClick: event => {
                  console.log(event);
                },
              };
            }}
          />
        </div>
        <br />
        <p>
          Por exemplo, a letra C maiúscula é representada por 1000011 (7 bits)
          em binário, 67 em decimal, 43 em hexadecimal e 103 em octal. O seu
          computador não faz a mínima ideia do que é a letra C, mas ele sabe
          muito bem o que é 1000011.
        </p>
        <p>
          Okay, mas qual é a utilidade dessa tabela? Simples! Poder representar
          diversos caracteres em dispositivos eletrônicos utilizando a
          codificação apropriada.
        </p>
        <br />
        <h2>Caracteres Imprimíveis</h2>
        <p>
          A maior parte da tabela ASCII é composta por{' '}
          <span className="bold-text">caracteres imprimíveis</span> (ou{' '}
          <span className="italic-text">printable characters</span> em inglês).
          Os caracteres imprimíveis são visuais (letras, números e símbolos).
        </p>
        <br />
        <h2>Caracteres de Controle</h2>
        <p>
          Os 32 primeiros códigos ASCII (números de 0 a 31 em decimal) são
          reservados para os caracteres de controle, assim como o último (número
          127 em decimal). Os caracteres de controle são códigos que ao
          contrário dos caracteres imprimíveis, não possuem uma representação
          visual, pois o intuito é controlar dispositivos (como impressoras) que
          fazem uso do ASCII ou fornecer meta-informações sobre fluxos de dados
          como aqueles armazenados em fita magnéticas.
        </p>
      </div>
    </div>
  );
};
