import andGateAnsi from '../images/and-gate-ansi.png';
import andGateIec from '../images/and-gate-iec.png';

export const AndGate = (): JSX.Element => {
  return (
    <div className="site-content-wrapper">
      <h1>Porta Lógica AND</h1>
      <div className="site-content">
        <p>
          Na porta AND a saída só será um (nível lógico alto), se todas as suas
          entradas forem iguais a um. Caso contrário, teremos zero na saída.
          Simbologia no padrão ANSI:
        </p>
        <div className="site-image">
          <img
            src={andGateAnsi}
            className="and-gate-symbol-image"
            alt="Simbologia da porta lógica AND no padrão ANSI"
          />
        </div>
        <p>Simbologia no padrão IEC:</p>
        <div className="site-image">
          <img
            src={andGateIec}
            className="and-gate-symbol-image"
            alt="Simbologia da porta lógica AND no padrão IEC"
          />
        </div>
      </div>
    </div>
  );
};
