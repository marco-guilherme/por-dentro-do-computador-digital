import { PageInformation } from '../../../components/PageInformation';
import atom from '../../../images/atom.jpg';
import ion from '../../../images/ion.webp';
import voltage from '../../../images/voltage.jpg';
import powerSupply from '../../../images/power-supply.jpg';
import voltmeter from '../../../images/voltmeter.jpg';

export const Voltage = (): JSX.Element => {
  return (
    <div className="site-content-wrapper">
      <h1>Tensão</h1>

      <div className="site-content">
        <p>
          A distribuição dos elétrons nas diversas camadas ao redor do núcleo de
          um átomo obedece a regras bem definidas. A regra mais importante para
          a área da eletroeletrônica refere-se ao nível energético mais distante
          do núcleo, ou seja, a{' '}
          <span className="bold-text">camada externa</span> (Q):{' '}
          <span className="underline-text">
            o número máximo de elétrons nessa camada é oito
          </span>
          .
        </p>

        <div className="site-image">
          <img src={atom} className="medium-image" alt="Camadas de um átomo" />
        </div>

        <p>
          Os elétrons da órbita externa são chamados{' '}
          <span className="bold-text">elétrons livres</span>, pois têm uma certa
          facilidade de se desprenderem de seus átomos. Todas as reações
          químicas e elétricas acontecem nessa camada externa, chamada de{' '}
          <span className="bold-text">nível</span> ou{' '}
          <span className="bold-text">camada de valência</span>.
        </p>

        <p>
          A teoria eletrônica estuda o átomo só no aspecto da sua{' '}
          <span className="bold-text">eletrosfera</span>, ou seja, sua região
          periférica ou orbital.
        </p>

        <p>
          No seu estado natural, o átomo possui o número de prótons igual ao
          número de elétrons. Nessa condição, dizemos que o átomo está em{' '}
          <span className="bold-text">equilíbrio</span> ou{' '}
          <span className="bold-text">eletricamente neutro</span>.
        </p>

        <p>
          O átomo está em desequilíbrio quando o número de prótons é diferente
          do número de elétrons ou vice-versa.{' '}
          <span className="underline-text">
            Esse desequilíbrio é causado sempre por forças externas
          </span>{' '}
          que podem ser magnéticas, térmicas ou químicas.
        </p>

        <p>
          Um <span className="bold-text">íon</span> é um átomo eletricamente
          carregado, seja positivamente (cátion) ou negativamente (ânion). Um{' '}
          <span className="bold-text">cátion</span> é um átomo que perdeu (ou
          cedeu) elétrons e, portanto, está carregado positivamente. Um{' '}
          <span className="bold-text">ânion</span> é átomo que ganhou (ou
          recebeu) elétrons e, portanto, está carregado negativamente.
        </p>

        <div className="site-image">
          <img src={ion} className="small-image" alt="Íon" />
        </div>

        <p>
          A transformação de um átomo em íon ocorre devido a forças externas ao
          próprio átomo. Uma vez cessada a causa externa que originou o íon, a
          tendência natural do átomo é{' '}
          <span className="underline-text">atingir o equilíbrio elétrico</span>.
          Para atingir esse equilíbrio, ele cede elétrons que estão em excesso
          ou recupera os elétrons em falta.
        </p>

        <p>
          Sempre que dois corpos com cargas elétricas contrárias são colocados
          próximos um do outro, em condições favoráveis, o excesso de elétrons
          de um deles é atraído na direção daquele que está com falta de
          elétrons, sob a forma de uma{' '}
          <span className="bold-text">descarga elétrica</span>.
        </p>

        <p>
          O <span className="bold-text">potencial elétrico</span> de um corpo
          depende diretamente do desequilíbrio elétrico existente nesse corpo.
        </p>

        <p>
          Como certos átomos são forçados a ceder elétrons e outros a receber
          elétrons, é possível produzir uma{' '}
          <span className="underline-text">
            transferência de elétrons de um corpo para o outro
          </span>
          .
        </p>

        <p>
          A <span className="bold-text">tensão elétrica</span> é a{' '}
          <span className="bold-text">diferença de potencial elétrico</span>{' '}
          (DDP) <span className="bold-text">ENTRE DOIS PONTOS</span>. Em um
          campo elétrico estático, corresponde ao trabalho necessário por
          unidade de carga para mover uma carga de teste entre os dois pontos.
          Por analogia, a tensão elétrica seria a "força" responsável pela
          movimentação dos elétrons.
        </p>

        <div className="site-image">
          <img
            src={voltage}
            className="large-image"
            alt="Símbolo interncional da tensão elétrica"
          />
        </div>

        <p>
          Para que os aparelhos elétricos funcionem, foram desenvolvidos
          dispositivos capazes de criar um desequilíbrio elétrico entre dois
          pontos, dando origem a uma tensão elétrica. Esses dispositivos são as
          famigeradas <span className="bold-text">fontes de alimentação</span>.
        </p>

        <p>
          As pilhas são fontes geradoras de tensão constituídas por dois tipos
          de metais mergulhados em um preparado químico (
          <span className="bold-text">eletrólito</span>). Esse preparado químico
          reage com os metais, retirando elétrons de um e levando para o outro.
          Um dos metais fica com potencial elétrico positivo e o outro fica com
          potencial elétrico negativo. Entre os dois metais existe, portanto,
          uma tensão elétrica ou DDP.
        </p>

        <div className="site-image site-figure">
          <figure>
            <img
              src={powerSupply}
              alt="Fonte de alimentação"
              className="medium-image"
            />
            <figcaption>Fonte de alimentação</figcaption>
          </figure>
        </div>

        <p>
          Para que exista o movimento dos elétrons livres em um corpo, é
          necessário aplicar nesse corpo uma tensão elétrica. Essa tensão
          resulta na formação de um polo com excesso de elétrons denominado{' '}
          <span className="bold-text">polo negativo</span> e de outro com falta
          de elétrons denominado de{' '}
          <span className="bold-text">polo positivo</span>. Essa tensão é
          fornecida por uma fonte geradora de eletricidade.
        </p>

        <p>
          Um <span className="bold-text">voltímetro</span> pode ser usado para
          medir a tensão entre dois pontos em um sistema. Frequentemente, um
          potencial de referência comum, como o "
          <span className="bold-text">terra</span>" do sistema, é usado como um
          dos pontos. Uma tensão pode representar uma fonte de energia ou a
          perda, dissipação ou armazenamento de energia.
        </p>

        <div className="site-image site-figure">
          <figure>
            <img
              src={voltmeter}
              alt="Multímetros e fontes"
              className="large-image"
            />
            <figcaption>Voltímetros e fontes</figcaption>
          </figure>
        </div>

        <p>
          Note que, a tensão é sempre aplicada (ou aparece) ATRAVÉS da coisas.
          Portanto, sempre se refira à tensão como "
          <span className="underline-text">
            ENTRE dois pontos ou ATRAVÉS de dois pontos em um circuito
          </span>
          ". É comum dizer "a tensão em um ponto do circuito"; mas neste caso,
          fica subentendido como a tensão entre esse ponto e o terra (também
          chamado de ground/GND), um ponto comum no circuito.
        </p>

        <p>
          No exemplo abaixo, você pode variar a tensão ao girar o potênciometro
          (em azul):
        </p>

        <div className="flex-center-column circuit-frame-wrapper">
          <iframe
            title="potentiometer"
            src="https://www.tinkercad.com/embed/56Y4CXAZTiI?editbtn=1"
            className="circuit-frame"
          />
        </div>

        <p>
          No SI (Sistema Internacional de Unidades), a unidade derivada para a
          tensão é o volt ou V, em homenagem ao físico italiano Alessandro
          Volta. Na física, a tensão também é chamada de força eletromotriz e
          você também pode encontrá-la com a letra E ao invés de V.
        </p>

        <p>
          O termo voltagem, apesar de ser mais conhecido pelos leigos, é um
          termo incorreto. Esse nome foi derivado da unidade volt e da palavra
          "voltage", que é tensão em inglês. Ou seja, voltagem é uma tradução
          equivocada da palavra voltage. Sendo assim,{' '}
          <span className="underline-text">
            dê preferência para o termo correto
          </span>
          : tensão elétrica ou DDP.
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
