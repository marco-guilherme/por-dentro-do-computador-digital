import { PageInformation } from '../../../components/PageInformation';
import thermocouple from '../../../images/thermocouple.png';
import analogsignal from '../../../images/analog-signal.png';

export const AnalogueElectronics = (): JSX.Element => {
  return (
    <div className="site-content-wrapper">
      <h1>Eletrônica Analógica</h1>
      <div className="site-content">
        <p>
          A <span className="bold-text">eletrônica analógica</span> é um
          subcampo da eletrônica responsável pelo{' '}
          <span className="underline-text">
            estudo dos sinais que podem variar infinitamente dentro de uma
            determinada faixa de valores
          </span>
          . Esses são os chamados{' '}
          <span className="bold-text">sinais analógicos</span> ou{' '}
          <span className="bold-text">contínuos</span>. A seguir, temos uma{' '}
          <span className="bold-text">onda senoidal</span> que representa um
          sinal analógico (varia com o passar do tempo):
        </p>

        <div className="site-image">
          <img
            src={analogsignal}
            className="medium-image"
            alt="Onda senoidal"
          />
        </div>

        <p>
          Os <span className="bold-text">componentes analógicos</span> podem ser
          combinados para formar um{' '}
          <span className="bold-text">circuito eletrônico analógico</span>. Nos
          circuitos analógicos, os componentes normalmente operam de forma
          contínua ou <span className="bold-text">linear</span>. Exemplos de
          componentes analógicos:
        </p>

        <ul>
          <li>Resistores;</li>
          <li>Capacitores;</li>
          <li>Diodos;</li>
          <li>Indutores;</li>
          <li>Diodos.</li>
        </ul>

        <p>
          Para se ter alguma noção do que significa algo ser "analógico", vamos
          pensar na temperatura. Me diz, quantas temperaturas diferentes podem
          existir entre 0 e 100 °C? Se você pensou em 101, deixe-me dizer que a
          resposta é muito maior do que isso:{' '}
          <span className="underline-text">
            infinitas temperaturas diferentes
          </span>
          !
        </p>

        <p>Vamos exemplificar algumas:</p>

        <ul>
          <li>25,87 °C;</li>
          <li>25,875 °C;</li>
          <li>25,8756 °C;</li>
          <li>25,87569 °C;</li>
          <li>25,875691 °C;</li>
          <li>25,87569103493434932074230894729380 °C.</li>
        </ul>

        <p>
          Bom, acho que já deu pra entender que tudo depende da acurácia
          desejada. A temperatura é só um dos exemplos, mas também poderíamos
          pensar em um sinal de áudio, intensidade luminosa, pressão, posição
          etc.
        </p>

        <p>
          Ainda pensando em temperatura, vamos imaginar um sensor de temperatura
          do tipo termopar que opera na faixa de tensão de 0 a 20 mV (mV
          representa milivolts).
        </p>

        <div className="site-image">
          <img
            src={thermocouple}
            className="medium-image"
            alt="Sensor de temperatura termopar"
          />
        </div>

        <p>
          Esse sensor fica dentro de um forno industrial capturando a todo
          momento a intensidade da temperatura. A saída desse sensor é um sinal
          analógico que pode variar infinitamente entre 0 e 20 mV conforme a
          temperatura. Assim, podemos dizer que quanto maior a temperatura, mais
          próxima a tensão de saída será de 20 mV. Por outro lado, quanto menor
          a temperatura, mais próxima a tensão de saída será de 0 mV. Ou seja, a
          tensão de saída do termopar é diretamente proporcional à temperatura.
          Como a temperatura pode variar infinitamente, o sinal analógico de
          saída também poderá variar infinitamente dentro da faixa de 0 a 20 mV.
        </p>

        <br />

        <hr />

        <br />

        <PageInformation
          lastUpdateDate="19/11/2022"
          originalPublicationDate="19/11/2022"
        />
      </div>
    </div>
  );
};
