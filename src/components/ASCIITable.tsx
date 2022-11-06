import Table, { ColumnsType } from 'antd/lib/table';
import { ASCIICharacter } from '../store/application/types';

export const ASCIITable = (): JSX.Element => {
  const columns: ColumnsType<Object> = [
    {
      title: 'Decimal',
      align: 'center',
      dataIndex: 'decimal',
      className: 'ascii-table-decimal-column',
    },
    {
      title: 'Hexadecimal',
      align: 'center',
      dataIndex: 'hexadecimal',
      className: 'ascii-table-hexadecimal-column',
    },
    {
      title: 'Binário',
      align: 'center',
      dataIndex: 'binary',
      className: 'ascii-table-binary-column',
    },
    {
      title: 'Octal',
      align: 'center',
      dataIndex: 'octal',
      className: 'ascii-table-octal-column',
    },
    {
      title: 'Caractere',
      align: 'center',
      dataIndex: 'character',
      className: 'ascii-table-character-column',
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
      '[DEVICE CONTROL 1]',
      '[DEVICE CONTROL 2]',
      '[DEVICE CONTROL 3]',
      '[DEVICE CONTROL 4]',
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
        <p>Segue abaixo -a tabela ASCII:</p>
        <div className="flex-center-column">
          <Table
            rowClassName={'ascii-table-row'}
            columns={columns}
            bordered
            size="middle"
            dataSource={generateAsciiTable()}
            pagination={false}
          />
        </div>
        <br />
        <p>
          Por exemplo, a letra <span className="monospaced-snippet">C</span>{' '}
          maiúscula é representada por{' '}
          <span className="monospaced-snippet">1000011</span> (7 bits) em
          binário, <span className="monospaced-snippet">67</span> em decimal,{' '}
          <span className="monospaced-snippet">43</span> em hexadecimal e{' '}
          <span className="monospaced-snippet">103</span> em octal. O seu
          computador não faz a mínima ideia do que é a letra{' '}
          <span className="monospaced-snippet">C</span>, mas ele sabe muito bem
          o que é <span className="monospaced-snippet">1000011</span>.
        </p>
        <p>
          Okay, mas qual é a utilidade dessa tabela? Simples! Poder representar
          diversos caracteres em dispositivos eletrônicos utilizando a
          codificação apropriada.
        </p>
        <p>
          Podemos agrupar esses 128 caracteres em dois grupos principais:{' '}
          <span className="underline-text">
            caracteres imprimíveis e caracteres de controle
          </span>
          .
        </p>
        <br />
        <h2>Caracteres Imprimíveis</h2>
        <p>
          A maior parte da tabela ASCII é composta por{' '}
          <span className="bold-text">caracteres imprimíveis</span> (ou{' '}
          <span className="italic-text">printable characters</span> em inglês).
          Os caracteres imprimíveis são visuais, i.e.:{' '}
          <span className="underline-text">letras, números e símbolos</span>.
          Ainda voltando ao exemplo da letra{' '}
          <span className="monospaced-snippet">C</span>, ela é considerada um
          caractere imprimível. Já o caractere{' '}
          <span className="monospaced-snippet">0A</span> é considerado um
          caractere de controle. Veremos a seguir o porquê.
        </p>
        <br />
        <h2>Caracteres de Controle</h2>
        <p>
          Os 32 primeiros códigos ASCII (números de 0 a 31 em decimal) são
          reservados para os{' '}
          <span className="bold-text">caracteres de controle</span> (ou{' '}
          <span className="italic-text">control characters</span> em inglês),
          assim como o último (número 127 em decimal). Os caracteres de controle
          são códigos que ao contrário dos caracteres imprimíveis, não possuem
          necessariamente uma representação visual, pois{' '}
          <span className="underline-text">
            o intuito é controlar dispositivos
          </span>{' '}
          (como impressoras) que fazem uso do ASCII ou fornecer meta-informações
          sobre fluxos de dados como aqueles armazenados em fita magnéticas.
        </p>
        <p>
          Por exemplo, o caractre <span className="monospaced-snippet">0A</span>{' '}
          representa a função "line feed", que gera uma quebra de linha. Na
          linguagem C, o caractere{' '}
          <span className="monospaced-snippet">0A</span> é representado pela
          sequência de escape "<span className="monospaced-snippet">\n</span>" e
          ao tentar exibir esse caractere no console (utilizando alguma função
          como o <span className="monospaced-snippet">printf</span>), uma quebra
          de linha entre o texto será gerada.
        </p>
      </div>
    </div>
  );
};
