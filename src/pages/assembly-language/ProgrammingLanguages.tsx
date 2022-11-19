import { PageInformation } from '../../components/PageInformation';
import oldComputer from '../../images/old-computer.jpg';
import programmingLanguage from '../../images/programming-language.jpg';
import programmingLanguages from '../../images/programming-languages.jpg';

export const ProgrammingLanguages = (): JSX.Element => {
  return (
    <div className="site-content-wrapper">
      <h1>Linguagens de Programação</h1>
      <div className="site-content">
        <p>
          Um <span className="bold-text">computador</span> é um dispositivo
          programável construído a partir da{' '}
          <span className="underline-text">eletrônica digital</span>. Um
          computador é capaz de realizar as instruções solicitadas visando
          produzir resultados úteis, automatizar tarefas, tomar decisões etc. Um
          sistema computacional normalmente é composto pelo{' '}
          <span className="bold-text">hardware</span> (parte física),{' '}
          <span className="bold-text">software</span> (sistema operacional e
          outras aplicações) e{' '}
          <span className="bold-text">dispositivos periféricos de E/S</span>{' '}
          (mouse, teclado, monitor, impressora etc.) Os computadores realizam
          operações lógicas (operações bit a bit) e aritméticas (adição,
          subtração, multiplicação, divisão etc.).
        </p>

        <p>
          Por exemplo, podemos solicitar ao computador que realize a soma de
          dois números inteiros e nos retorne o resultado. Isso é perfeitamente
          normal e comum; mas{' '}
          <span className="underline-text">
            você parou pra pensar em como podemos solicitar ao computador que
            faça determinadas tarefas?
          </span>{' '}
          Prontamente você pode pensar "ora, basta utilizar o teclado e mouse".
          Na verdade, esses dispositivos de entrada são apenas ferramentas
          intermediárias que utilizamos para controlar o computador. Por baixo
          dos panos, todos os computadores realizam as tarefas determinadas por
          uma linguagem de programação.
        </p>

        <div className="site-image">
          <img
            src={oldComputer}
            className="large-image"
            alt="Computador antigo"
          />
        </div>

        <p>
          Uma <span className="bold-text">linguagem de programação</span> é uma
          forma padronizada de fornecer instruções para um computador. As
          linguagens de programação são baseadas em texto e compreensíveis por
          humanos. Um <span className="bold-text">programa de computador</span>{' '}
          é um <span className="underline-text">conjunto de instruções</span>{' '}
          que é escrito a partir de uma linguagem de programação. Ou seja,
          utilizando uma linguagem de programação, você consegue controlar o seu
          computador e solicitar a ele que faça determinadas tarefas.
        </p>

        <div className="site-image">
          <img
            src={programmingLanguage}
            className="large-image"
            alt="Tela de notebok com linguagem de programação"
          />
        </div>

        <p>
          As linguagens de programação são padronizadas pois existem regras e
          formas corretas de se fazer as coisas. Sendo assim, faz sentido
          pensarmos em <span className="bold-text">sintaxe</span> e{' '}
          <span className="bold-text">semântica</span>. Ao passo que a sintaxe
          determina quais combinações de palavras formam um programa válido
          (programa sintaticamente correto), a semântica se refere ao
          significado dessas combinações de palavras. É possível ter progamas
          que estejam que sejam sintaticamente válidos (combinações válidas e
          sem erros na escrita) mas que sejam semânticamente incorretos (não
          fazem sentido). Por exemplo, considere a seguinte frase do linguista
          americano Noam Chomsky:
        </p>

        <div className="center-text italic-text">
          <p>Colorless green ideas sleep furiously.</p>
          <p>Ideias verdes incolores dormem furiosamente.</p>
        </div>

        <p>
          Essa uma frase foi composta em 1957 como um exemplo cuja gramática
          está correta, mas o significado é sem sentido. Tenha em mente que
          sintaticamente incorreto não se restringe apenas a erros ortográficos!
        </p>

        <p>
          Além das linguagens de programação, alguns outros tipos existentes
          são:
        </p>

        <ul>
          <li>Linguagem de marcação de hipertexto;</li>
          <li>Linguagem de folhas de estilo;</li>
          <li>Linguagem de script;</li>
          <li>Linguagem de consulta.</li>
        </ul>

        <p>
          Existem várias linguagens de programação, e cada uma tem seu
          paradigma, estilo de tipagem, extensão de nome de arquivo própria,
          verbosidade etc. Não existe uma melhor ou pior, existe apenas aquela
          que se adequa melhor às suas necessidades. A figura a seguir demonstra
          algumas das linguagens utilizadas na computação:
        </p>

        <div className="site-image">
          <img
            src={programmingLanguages}
            className="large-image"
            alt="Diferentes linguagens usadas na computação"
          />
        </div>

        <br />

        <hr />

        <br />

        <PageInformation
          lastUpdateDate="18/11/2022"
          originalPublicationDate="18/11/2022"
        />
      </div>
    </div>
  );
};
