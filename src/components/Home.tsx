import transistorNpn from '../images/transistor-npn.png';
import srClockedFlipFlop from '../images/sr-clocked-flip-flop2.png';
import circuitBoardTracks from '../images/circuit-board-tracks.png';
import homeAutomation from '../images/home-automation.png';
import wrKits8BitComputer from '../images/wr-kits-8-bit-computer.gif';
import speedometer from '../images/speedometer.png';
import skullAndCrossbones from '../images/skull-and-crossbones.png';
import inteface from '../images/interface.png';
import pgaProcessor from '../images/pga-processor.png';
import asemblyFunny from '../images/asembly-funny.gif';

export const Home = (): JSX.Element => {
  return (
    <div className="homepage">
      <div className="first-fraction flex-center-column">
        <h1>
          <span>Por Dentro do Computador Digital</span>
        </h1>

        <h3>
          <span>
            Website Interativo Para Ensino de Fundamentos da Eletrônica Digital
            e da Linguagem Assembly
          </span>
        </h3>
      </div>

      <br />

      <h2>Por Que Aprender Eletrônica Digital?</h2>

      <div className="homepage-grid-wrapper flex-center-column">
        <div className="grid-container-homepage">
          <div className="grid-container-homepage-item flex-center-column">
            <div className="grid-container-homepage-item-icon-wrapper">
              <img
                src={srClockedFlipFlop}
                alt="Flip-flop SR ativo por clock"
                className="grid-container-homepage-item-icon"
              />
            </div>

            <h4>Análise de circuitos eletrônicos</h4>

            <div className="grid-container-homepage-item-text-wrapper">
              <p>
                Com um diagrama esquemático em mãos, você conseguirá identificar
                cada componente de um circuito eletrônico, conseguirá enxergar
                como o fluxo da corrente elétrica afeta o circuito e como fazer
                reparos e melhorias. Caso você não tenha nenhum diagrama, mas
                tenha uma ideia de circuito em mente, você poderá desenhar seu
                próprio circuito e posteriormente, construí-lo fisicamente.
              </p>
            </div>
          </div>

          <div className="grid-container-homepage-item flex-center-column">
            <div className="grid-container-homepage-item-icon-wrapper">
              <img
                src={transistorNpn}
                alt="Simbologia do transistor NPN"
                className="grid-container-homepage-item-icon"
              />
            </div>

            <h4>Construção de circuitos</h4>

            <div className="grid-container-homepage-item-text-wrapper">
              <p>
                Com o conhecimento em eletrônica digital, você terá a base para
                dar os primeiros passos em direção a montagem de circuitos
                eletrônicos, utilizando matrizes de contato, por exemplo. A
                montagem será muito mais prazerosa e fará muito mais sentido
                quando você souber o que cada componente faz e o porque de cada
                ligação.
              </p>
            </div>
          </div>

          <div className="grid-container-homepage-item flex-center-column">
            <div className="grid-container-homepage-item-icon-wrapper">
              <img
                src={circuitBoardTracks}
                alt="Trilhas de uma PCB"
                className="grid-container-homepage-item-icon"
              />
            </div>

            <h4>Manutenção em PCBs</h4>

            <div className="grid-container-homepage-item-text-wrapper">
              <p>
                As PCBs (sigla para Printed Circuit Board ou Placa de Circuito
                Impresso em português) são aquelas famigeradas plaquinhas verdes
                localizadas dentro dos dispositivos eletrônicos. Uma PCB
                infelizmente não está livre de falhas, assim, você poderá
                realizar a manutenção nessas placas, como a soldagem e
                dessoldagem de SMDs, determinação de componentes equivalentes,
                limpeza com álcool isopropílico, remoção de curtos etc.
              </p>
            </div>
          </div>

          <div className="grid-container-homepage-item flex-center-column">
            <div className="grid-container-homepage-item-icon-wrapper">
              <img
                src={homeAutomation}
                alt="Automaçãp residencial"
                className="grid-container-homepage-item-icon"
              />
            </div>

            <h4>Desenvolvimento de projetos de automação</h4>

            <div className="grid-container-homepage-item-text-wrapper">
              <p>
                Ter os conhecimentos básicos em eletrônica analógia e digital é
                fundamental durante o estudo de sistemas embarcados,
                microcontroladores e microprocessadores. O microcontrolador pode
                ser usado como o cérebro controlador da automação
                residencial/industrial; por isso, saber manipulá-lo é
                extremamente importante.
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="eight-bit-computer-image site-figure">
        <figure>
          <img
            src={wrKits8BitComputer}
            alt="Computador de 8 bits do Ben Eater"
          />
          <figcaption>Computador de 8 bits do WR Kits</figcaption>
        </figure>
      </div>

      <div className="horizontal-space-4" />

      <h2>Por Que Aprender Assembly?</h2>

      <div className="homepage-grid-wrapper flex-center-column">
        <div className="grid-container-homepage">
          <div className="grid-container-homepage-item flex-center-column">
            <div className="grid-container-homepage-item-icon-wrapper">
              <img
                src={pgaProcessor}
                alt="Trilhas de uma PCB"
                className="grid-container-homepage-item-icon"
              />
            </div>

            <h4>Arquitetura e organização de computadores</h4>

            <div className="grid-container-homepage-item-text-wrapper">
              <p>
                Escrever programas em linguagem assembly exige um certo nível de
                conhecimento na arquitetura alvo. Isso força o estudante a
                aprender sobre diversos elementos arquitetônicos, como:
                registradores, conjunto de instruções, endereçamento de memória,
                clock, E/S, pipeline, branch prediction, alinhamento de memória,
                estruturas de dados, SIMD etc. A grande vantagem disso é que, ao
                tentar aprender o assembly de outra arquitetura, será muito mais
                fácil, já que há muitos elementos que são comuns.
              </p>
            </div>
          </div>

          <div className="grid-container-homepage-item flex-center-column">
            <div className="grid-container-homepage-item-icon-wrapper">
              <img
                src={inteface}
                alt="Interface"
                className="grid-container-homepage-item-icon"
              />
            </div>

            <h4>Interface</h4>

            <div className="grid-container-homepage-item-text-wrapper">
              <p>
                Você aprenderá como os programas se comunicam com o sistema
                operacional do computador por meio de manipuladores de
                interrupção, chamadas de sistema e áreas de memória comuns. Você
                também aprenderá como é feita a interface entre a linguagem
                C/C++ e a linguagem assembly, permitindo que você escreva
                rotinas em assembly que poderão ser chamadas por uma linguagem
                de alto nível.
              </p>
            </div>
          </div>

          <div className="grid-container-homepage-item flex-center-column">
            <div className="grid-container-homepage-item-icon-wrapper">
              <img
                src={speedometer}
                alt="Medidor analógico de velocidade"
                className="grid-container-homepage-item-icon"
              />
            </div>

            <h4>Otimização</h4>

            <div className="grid-container-homepage-item-text-wrapper">
              <p>
                Sistemas embarcados costumam ter recursos limitados (como
                memória cache, por exemplo), por isso, é necessário que o
                programador se preocupe em gerenciar esses recursos com
                eficiência, visando evitar problemas no hardware, como
                travamentos e lentidões, por exemplo. Com o conhecimento em
                assembly, você poderá otimizar certos trechos de código que são
                custosos para o processador. Você também poderá aprender
                técnicas de otimização de código ao analisar o código assembly
                gerado pelo compilador.
              </p>
            </div>
          </div>

          <div className="grid-container-homepage-item flex-center-column">
            <div className="grid-container-homepage-item-icon-wrapper">
              <img
                src={skullAndCrossbones}
                alt="Caveira e ossos"
                className="grid-container-homepage-item-icon"
              />
            </div>

            <h4>Análise de malware</h4>

            <div className="grid-container-homepage-item-text-wrapper">
              <p>
                Caso você tenha interesse em analisar malware, você normalmente
                não terá o código-fonte do software servido em uma bandeja; você
                terá apenas o código de máquina. Assim, você poderá utilizar um
                disassembler para converter o código de máquina nos mnemônicos e
                nomes simbólicos da linguagem assembly. Com esse código em mãos,
                você poderá fazer as análises e tomar as ações e precauções
                necessárias.
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="site-image">
        <img
          src={asemblyFunny}
          alt="Garota de anime louca com a complexidade da linguagem assembly"
          className="assembly-funny"
        />
      </div>
    </div>
  );
};
