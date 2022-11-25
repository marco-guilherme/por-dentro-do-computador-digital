import { PageInformation } from '../../../components/PageInformation';
import lightBulb from '../../../images/light-bulb.gif';
import shower from '../../../images/shower.png';

export const Power = (): JSX.Element => {
  return (
    <div className="site-content-wrapper">
      <h1>Potência</h1>

      <div className="site-content">
        <p>
          Quando a corrente elétrica circula por uma carga instalada em um
          circuito (e.g.: um resistor), ela produz calor, luz, movimento etc.
          Esses efeitos são denominados de{' '}
          <span className="bold-text">trabalho</span>.
        </p>

        <p>
          O trabalho de transformação de energia elétrica em outra forma de
          energia é realizado pelo <span className="bold-text">consumidor</span>{' '}
          ou pela <span className="bold-text">carga</span>. Ao transformar a
          energia elétrica, o consumidor realiza um trabalho elétrico.
        </p>

        <p>
          A <span className="bold-text">potência</span> é a capacidade de um
          consumidor produzir um trabalho (como acender uma lâmpada, aquecer um
          líquido, girar um motor etc.) numa unidade de tempo, a partir da
          energia elétrica.
        </p>

        <div className="site-image">
          <img
            src={lightBulb}
            className="medium-image"
            alt="Lampada incandescente"
          />
        </div>

        <p>
          Potência é a grandeza que determina a quantidade de energia concedida
          por uma fonte a cada unidade de tempo. Em outros termos, potência é a
          rapidez com a qual uma certa quantidade de energia é transformada ou é
          a rapidez com que o trabalho é realizado.
        </p>

        <p>
          No SI, a unidade derivada para a potência é o watt ou W, em homenagem
          ao matemático britânico James Watt.
        </p>

        <p>
          Um watt (1 W) corresponde à potência desenvolvida no tempo de um
          segundo em uma carga, alimentada por uma tensão de 1 V, na qual
          circula uma corrente de 1 A.
        </p>

        <p>
          Certos aparelhos como chuveiros, lâmpadas e motores têm uma
          característica particular: seu funcionamento obedece a uma tensão
          previamente estabelecida. Essa tensão é chamada de{' '}
          <span className="bold-text">tensão nominal</span>. Enquanto uma carga
          trabalha dissipando sua potência nominal, a sua condição de
          funcionamento é ideal. A{' '}
          <span className="bold-text">potência nominal</span> de um aparelho é a
          tensão que ele foi projetado para funcionar.
        </p>

        <p>
          O <span className="bold-text">efeito Joule</span> é o efeito térmico
          produzido pela passagem de corrente elétrica através de uma
          resistência. O efeito Joule consiste na conversão de energia elétrica
          em calor. A grandeza física que mede a quantidade de calor que um
          resistor transfere para os seus arredores a cada segundo é chamada de
          potência dissipada.
        </p>

        <div className="site-image site-figure">
          <figure>
            <img
              src={shower}
              alt="Chuveiro Lorenzetti"
              className="medium-image"
            />
            <figcaption>O famoso Lorenzetti brasileiro</figcaption>
          </figure>
        </div>

        <p>
          A potência elétrica de um consumidor depende da tensão aplicada e da
          corrente que circula nos seus terminais.
        </p>

        <p>
          Quanto maior a potência dissipada maior o aquecimento, e quanto menor
          a potência dissipada menor o aquecimento. Portanto, se a dissipação de
          potência for limitada, a produção de calor também o será.
        </p>

        <br />

        <hr />

        <br />

        <PageInformation
          lastUpdateDate="24/11/2022"
          originalPublicationDate="24/11/2022"
        />
      </div>
    </div>
  );
};
