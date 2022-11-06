import transistorNpn from '../images/transistor-npn.png';
import srClockedFlipFlop from '../images/sr-clocked-flip-flop.png';

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
      <h2>Por Que Aprender Eletrônica Digital?</h2>
      <div className="grid-container-homepage">
        <div className="grid-container-homepage-item flex-center-column">
          <img
            src={srClockedFlipFlop}
            alt="Flip-flop SR ativo por clock"
            className="grid-container-homepage-item-icon"
          />
          <h4>Análise de circuitos eletrônicos</h4>
        </div>
        <div className="grid-container-homepage-item flex-center-column">
          <img
            src={transistorNpn}
            alt="Simbologia do transistor NPN"
            className="grid-container-homepage-item-icon"
          />
          <h4>Construção de circuitos</h4>
        </div>
        <div className="grid-container-homepage-item flex-center-column">
          <img
            src={transistorNpn}
            alt="Simbologia do transistor NPN"
            className="grid-container-homepage-item-icon"
          />
          <h4>Manutenção em PCBs</h4>
        </div>
        <div className="grid-container-homepage-item flex-center-column">
          <img
            src={transistorNpn}
            alt="Simbologia do transistor NPN"
            className="grid-container-homepage-item-icon"
          />
          <h4>Desenvolvimento de projetos de automação</h4>
        </div>
      </div>
      <h2>Por Que Aprender Assembly?</h2>
    </div>
  );
};
