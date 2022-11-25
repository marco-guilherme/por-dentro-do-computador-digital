import { PageInformation } from '../../../components/PageInformation';
import benEaterComputer from '../../../images/ben-eater-computer.webp';
import breadboard from '../../../images/breadboard.jpg';
import circuitMesh from '../../../images/circuit-mesh.jpg';
import circuitNode from '../../../images/circuit-node.jpg';
import circuitBranch from '../../../images/circuit-branch.png';
import circuitTerminals from '../../../images/circuit-terminals.png';
import seriesCircuit from '../../../images/series-circuit.webp';
import parallelCircuit from '../../../images/parallel-circuit.png';
import seriesParallelCircuit from '../../../images/series-parallel-circuit.png';

export const Circuits = (): JSX.Element => {
  return (
    <div className="site-content-wrapper">
      <h1>Circuitos</h1>

      <div className="site-content">
        <p>
          Um <span className="bold-text">circuito eletrônico</span> é composto
          por componentes eletrônicos individuais, como resistores,
          transistores, capacitores, indutores e diodos, conectados por fios
          condutores ou trilhas através dos quais a corrente elétrica pode
          fluir.
        </p>

        <div className="site-image site-figure">
          <figure>
            <img
              src={benEaterComputer}
              alt="Computador de 8 bits do Ben Eater"
              className="large-image"
            />
            <figcaption>Computador de 8 bits do Ben Eater</figcaption>
          </figure>
        </div>

        <p>
          Para que o circuito seja considerado eletrônico, e não elétrico,
          geralmente pelo menos um{' '}
          <span className="bold-text">componente ativo</span> deve estar
          presente.
        </p>

        <p>
          A combinação de componentes e fios permite que várias operações
          simples e complexas sejam executadas: sinais podem ser amplificados,
          cálculos podem ser executados e dados podem ser movidos de um lugar
          para outro.
        </p>

        <p>
          Um circuito eletrônico geralmente pode ser classificado como um{' '}
          <span className="bold-text">circuito analógico</span>, um{' '}
          <span className="bold-text">circuito digital</span> ou um{' '}
          <span className="bold-text">circuito de sinal misto</span> (uma
          combinação de circuitos analógicos e circuitos digitais).
        </p>

        <p>
          É bem comum utilizar{' '}
          <span className="bold-text">matriz de contatos</span> para realizar
          prototipação e testes.
        </p>

        <div className="site-image site-figure">
          <figure>
            <img
              src={breadboard}
              alt="Matriz de contatos"
              className="medium-image"
            />
            <figcaption>Matriz de contatos</figcaption>
          </figure>
        </div>

        <div className="horizontal-space-2" />

        <h2>Terminologia</h2>

        <p>
          <span className="bold-text">Terminais</span>: pontos da associação
          conectados à fonte geradora. No exemplo abaixo, a e b são terminais do
          circuito.
        </p>

        <div className="site-image">
          <img
            src={circuitTerminals}
            className="medium-image"
            alt="Terminais de um circuito"
          />
        </div>

        <p>
          <span className="bold-text">Nós</span>: são os pontos em que ocorre a
          interligação de três ou mais condutores. Um circuito série não possui
          nenhum nó. A corrente elétrica se divide quando encontra um nó.
        </p>

        <div className="site-image">
          <img
            src={circuitNode}
            className="medium-image"
            alt="Nós de um circuito"
          />
        </div>

        <p>
          <span className="bold-text">Ramo/braço</span>: porção do circuito que
          liga dois nós consecutivos. O ramo é o caminho entre dois nós, sendo
          que, ao ao longo do ramo, a intensidade da corrente elétrica não muda.
        </p>

        <div className="site-image">
          <img
            src={circuitBranch}
            className="medium-image"
            alt="Ramos de um circuito"
          />
        </div>

        <p>
          <span className="bold-text">Malha</span>: caminhos fechados de
          condutores elétricos, que ao contrário do nó, temos em todos os
          circuitos, pois é um caminho fechado para a circulação da corrente
          elétrica.
        </p>

        <div className="site-image">
          <img
            src={circuitMesh}
            className="medium-image"
            alt="Malhas de um circuito"
          />
        </div>

        <div className="horizontal-space-2" />

        <h3>Associações</h3>

        <p>
          O <span className="bold-text">circuito série</span> é aquele cujos
          componentes (cargas) são ligados um após o outro. Desse modo, existe
          um ÚNICO CAMINHO para a corrente elétrica circular, que sai do polo
          positivo da fonte, passa através do primeiro componente, passa pelo
          seguinte e assim por diante até chegar ao polo negativo da fonte
          (sentido convencional da corrente elétrica).
        </p>

        <div className="site-image">
          <img
            src={seriesCircuit}
            className="medium-image"
            alt="Circuito série"
          />
        </div>

        <p>
          No circuito em série, o valor da corrente elétrica é sempre o mesmo em
          qualquer ponto do circuito. Isso acontece porque a corrente elétrica
          tem apenas um único caminho para percorrer. No circuito em série, o
          valor da tensão é diferente em cada ponto do circuito dependendo da
          resistência.
        </p>

        <p>
          O circuito série também é chamado de{' '}
          <span className="bold-text">dependente</span> porque, se houver falha
          ou se qualquer um dos componentes for retirado do circuito, cessa a
          circulação da corrente elétrica.
        </p>

        <p>
          O <span className="bold-text">circuito paralelo</span> é aqueles cujos
          componentes estão ligados em paralelo entre si.
        </p>

        <div className="site-image">
          <img
            src={parallelCircuit}
            className="medium-image"
            alt="Circuito paralelo"
          />
        </div>

        <p>
          No circuito paralelo, a corrente é diferente em cada ponto do circuito
          porque ela depende da resistência de cada componente à passagem da
          corrente elétrica e da tensão aplicada sobre ele. Todos os componentes
          ligados em paralelo recebem a mesma tensão.
        </p>

        <p>
          No circuito paralelo, a corrente elétrica se divide proporcionalmente
          para cada carga, de acordo com o valor de sua resistência.
        </p>

        <p>
          No <span className="bold-text">circuito misto</span>, os componentes
          são ligados em série e em paralelo.
        </p>

        <div className="site-image">
          <img
            src={seriesParallelCircuit}
            className="medium-image"
            alt="Circuito misto"
          />
        </div>

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
