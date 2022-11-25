import { PageInformation } from '../../../components/PageInformation';
import Latex from 'react-latex';

export const NumeralSystem = (): JSX.Element => {
  return (
    <div className="site-content-wrapper">
      <h1>Sistemas de Numeração</h1>

      <div className="site-content">
        <p>
          Um <span className="bold-text">sistema de numeração</span> é um
          sistema de escrita para expressar números; isto é, uma notação
          matemática para representar números de um determinado conjunto, usando
          dígitos ou outros símbolos de maneira consistente. Pode ser visto como
          o <span className="bold-text">contexto</span> que permite ao numeral
          "11" ser interpretado como o numeral romano para dois, o numeral
          binário para três ou o numeral decimal para onze.
        </p>

        <p>
          A <span className="bold-text">base</span> de um sistema é a quantidade
          de dígitos que aquele sistema possui.
        </p>

        <p>
          Para indicar a base de um número (em qual sistema o número está),
          deve-se utilizar um valor <span className="bold-text">subscrito</span>
          :
        </p>

        <div className="flex-center-column logic-expression">
          <Latex>{'$n_{(b)}$'}</Latex>
        </div>

        <p>
          Onde {<Latex>{'$n$'}</Latex>} é um número qualquer e{' '}
          {<Latex>{'$b$'}</Latex>} é a base.
        </p>

        <p>
          Em nossos estudos sobre eletrônica digital, o {<Latex>{'$b$'}</Latex>}{' '}
          poderá assumir os seguintes valores:
        </p>

        <div className="flex-center-column">
          <p>2 → binário</p>
          <p>8 → octal</p>
          <p>10 → decimal</p>
          <p>16 → hexadecimal</p>
        </div>

        <p>
          Por exemplo, seja o número 1011. Temos mil e onze (decimal base 10) ou
          um-zero-um-um (binário base 2)? Para que não exista confusão, vamos
          utilizar o subscrito:
        </p>

        <div className="flex-center-column logic-expression">
          <Latex>{'$1011_{(2)}$'}</Latex>
        </div>

        <p>Assim, sabemos que 1011 é um número binário, e não decimal.</p>

        <br />

        <hr />

        <br />

        <PageInformation
          lastUpdateDate="25/11/2022"
          originalPublicationDate="25/11/2022"
        />
      </div>
    </div>
  );
};
