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

  const dataSource: ASCIICharacter[] = [
    {
      decimal: '65',
      hexadecimal: '41',
      binary: '01000001',
      octal: '101',
      character: 'A',
    },
  ];

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
            dataSource={dataSource}
            pagination={false}
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
        <p>
          A maior parte da tabela ASCII é composta por{' '}
          <span className="bold-text">caracteres imprimíveis</span> (ou{' '}
          <span className="italic-text">printable characters</span> em inglês).
          Os caracteres imprimíveis são visuais (letras, números e símbolos),
          diferente dos{' '}
          <span className="bold-text">caracteres de controle</span>.
        </p>
      </div>
    </div>
  );
};
