import { PageInformation } from '../../../components/PageInformation';
import resistorTerminal from '../../../images/resistor-terminal.jpg';
import resistors from '../../../images/resistors.webp';
import capacitors from '../../../images/capacitors.jpg';
import diodes from '../../../images/diodes.jpg';
import transistors from '../../../images/transistors.webp';
import leds from '../../../images/leds.png';
import integratedCircuits from '../../../images/integrated-circuits.jpg';
import relays from '../../../images/relays.webp';
import { NavigationButtons } from '../../../components/NavigationButtons';
import { useThirdPartyCookieCheck } from '../../../hooks/useThirdPartyCookieCheck ';

export const ElectronicComponents = (): JSX.Element => {
  useThirdPartyCookieCheck();

  return (
    <div className="site-content-wrapper">
      <h1>Componentes Eletrônicos</h1>

      <div className="site-content">
        <p>
          Os <span className="bold-text">componentes eletrônicos</span> são os
          blocos de construção dos circuitos eletrônicos. Cada componente
          eletrônico afeta o fluxo de elétrons de uma forma diferente. O
          circuito eletrônico mais simples que poderíamos montar seria composto
          por uma fonte de energia e por um resistor (componente eletrônico).
        </p>

        <div className="flex-center-column circuit-frame-wrapper">
          <iframe
            title="simple circuit"
            src="https://www.tinkercad.com/embed/8XoUwIk3dPV?editbtn=1"
            className="circuit-frame"
          />
        </div>

        <p>
          Os <span className="bold-text">componentes discretos</span> são
          definidos como componentes eletrônicos
          elementares/unitários/indivisíveis, em contraste com os circuitos
          integrados que são compostos por diversos componentes eletrônicos
          dentro de um encapsulamento. De certa forma, podemos dizer que é
          possível dividir um circuito integrado em milhares componentes
          discretos, mas não é possível dividir um componente discreto em outros
          componentes, já que ele é o bloco de construção básico para os
          circuitos eletrônicos.
        </p>

        <p>
          Os componentes eletrônicos possuem vários{' '}
          <span className="bold-text">terminais elétricos</span> (coloquialmente
          chamados de "perninhas"). Os terminais se conectam a outros
          componentes eletrônicos, geralmente por fio, para criar um circuito
          eletrônico com uma função específica.
        </p>

        <div className="site-image">
          <img
            src={resistorTerminal}
            className="medium-image"
            alt="Resistores"
          />
        </div>

        <p>
          Os componentes podem ser classificados como passivos, ativos ou
          eletromecânicos. Se um componente não for passivo, então ele é
          automaticamente um componente ativo.
        </p>

        <p>
          Os <span className="bold-text">componentes passivos</span> não
          amplificam e nem geram sinais, embora possam aumentar a tensão ou
          corrente. Os componentes passivos são incapazes de controlar a
          corrente por meio de outro sinal elétrico. Os componentes passivos não
          podem fornecer energia por si mesmos. Um circuito eletrônico que
          consiste inteiramente em componentes passivos é chamado de circuito
          passivo e tem as mesmas propriedades de um componente passivo.
          Exemplos de componentes passivos: resistores, capacitores, indutores,
          transformadores, etc.
        </p>

        <p>
          Os <span className="bold-text">componentes ativos</span> podem gerar
          ou amplificar sinais e dependem de uma fonte de energia. Exemplos de
          componentes ativos: diodos, transistores, circuitos integrados,
          dispositivos optoeletrônicos e fontes de energia.
        </p>

        <p>
          Os <span className="bold-text">componentes eletromecânicos</span>{' '}
          combinam processos elétricos e mecânicos, utilizando-se da
          movimentação de partes móveis. Os componentes eletromecânicos utilizam
          um sinal elétrico para criar movimento mecânico, ou vice-versa.
          Exemplos de componentes eletromecânicos: relés, cristais, terminais,
          conectores e fusíveis.
        </p>

        <p>A seguir, veremos alguns componentes eletrônicos.</p>

        <br />

        <h2>Resistor</h2>

        <div className="site-image">
          <img src={resistors} className="medium-image" alt="Resistores" />
        </div>

        <br />

        <h2>Capacitor</h2>

        <div className="site-image">
          <img src={capacitors} className="medium-image" alt="Capacitores" />
        </div>

        <br />

        <h2>Diodo</h2>

        <div className="site-image">
          <img src={diodes} className="medium-image" alt="Diodos" />
        </div>

        <br />

        <h2>Transistor</h2>

        <div className="site-image">
          <img src={transistors} className="medium-image" alt="Transistores" />
        </div>

        <br />

        <h2>Circuito Integrado</h2>

        <div className="site-image">
          <img
            src={integratedCircuits}
            className="medium-image"
            alt="Circuitos integrados"
          />
        </div>

        <br />

        <h2>LED</h2>

        <div className="site-image">
          <img src={leds} className="medium-image" alt="LEDs" />
        </div>

        <br />

        <h2>Relé</h2>

        <div className="site-image">
          <img src={relays} className="medium-image" alt="Relés" />
        </div>

        <br />

        <NavigationButtons
          previousPageUrl="/aulas/eletronica-digital/sobre-eletronica/eletronica-digital"
          nextPageUrl="/aulas/eletronica-digital/sobre-eletronica/datasheets"
        />

        <hr />

        <br />

        <PageInformation
          lastUpdateDate="23/11/2022"
          originalPublicationDate="22/11/2022"
        />
      </div>
    </div>
  );
};
