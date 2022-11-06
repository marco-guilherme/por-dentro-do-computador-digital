import transistorNpn from '../images/transistor-npn.png';
import srClockedFlipFlop from '../images/sr-clocked-flip-flop2.png';
import circuitBoardTracks from '../images/circuit-board-tracks.png';
import homeAutomation from '../images/home-automation.png';

export const Home = (): JSX.Element => {
  return (
    <div className="homepage">
      <div className="first-fraction flex-center-column">
        <h1>
          <span>Por Dentro do Computador Digital</span>
        </h1>
        <h3>
          <span>
            Website Interativo Para Ensino de Tópicos de Eletrônica Digital e
            Linguagem Assembly
          </span>
        </h3>
      </div>
      <br />
      <h2>Por Que Aprender Eletrônica Digital?</h2>
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
              infelizmente não está livre de falhas, assim, você poderá realizar
              a manutenção nessas placas, como a soldagem e dessoldagem de SMDs,
              determinação de componentes equivalentes, limpeza com álcool
              isopropílico, remoção de curtos etc.
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
              residencial/industrial; por isso, saber manipulá-lo é extremamente
              importante.
            </p>
          </div>
        </div>
      </div>
      <h2>Por Que Aprender Assembly?</h2>
    </div>
  );
};
