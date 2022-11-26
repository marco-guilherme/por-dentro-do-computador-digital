import { PageInformation } from '../../../components/PageInformation';
import electricalCurrent from '../../../images/electrical-current.gif';
import movementOfElectricCharges from '../../../images/movement-of-electric-charges.png';
import electricalCurrent2 from '../../../images/electrical-current-2.gif';
import dcAndAcCurrent from '../../../images/dc-and-ac-current.png';
import currentDirection from '../../../images/current-direction.gif';
import magneticFieldDirection from '../../../images/magnetic-field-direction.webp';
import { NavigationButtons } from '../../../components/NavigationButtons';
import { useThirdPartyCookieCheck } from '../../../hooks/useThirdPartyCookieCheck ';

export const Current = (): JSX.Element => {
  useThirdPartyCookieCheck();

  return (
    <div className="site-content-wrapper">
      <h1>Corrente</h1>

      <div className="site-content">
        <p>
          A <span className="bold-text">corrente elétrica</span> é o fluxo
          ordenado de partículas portadoras de carga elétrica através de um
          condutor (e.g.: um cabo ou fio), quando existe uma diferença de
          potencial elétrico (tensão) entre as extremidades. Tal deslocamento
          procura restabelecer o equilíbrio desfeito pela ação de um campo
          elétrico ou outros meios (reações químicas, atrito, luz etc.).
        </p>

        <div className="site-image">
          <img
            src={electricalCurrent}
            className="large-image"
            alt="Corrente elétrica"
          />
        </div>

        <p>
          No SI, a unidade derivada para a corrente é o ampere ou A, em
          homenagem ao físico francês André-Marie Ampère.
        </p>

        <p>
          Para medir a corrente, pode-se utilizar um amperímetro. Como toda
          corrente produz um campo magnético associado, podemos tentar medir
          este campo para determinar a intensidade da corrente.
        </p>

        <p>
          As cargas elétricas que se movimentam no interior dos materiais
          sólidos são os{' '}
          <span className="bold-text">elétrons/cargas livres</span>.
          Microscopicamente, as cargas livres estão em{' '}
          <span className="bold-text">movimento aleatório</span> devido à
          agitação térmica. Apesar desse movimento desordenado, ao
          estabelecermos um campo elétrico na região das cargas, verifica-se um{' '}
          <span className="bold-text">movimento ordenado</span> que se apresenta
          superposto ao primeiro. Esse movimento recebe o nome de{' '}
          <span className="bold-text">movimento de deriva</span> das cargas
          livres.
        </p>

        <div className="site-image">
          <img
            src={movementOfElectricCharges}
            className="medium-image"
            alt="Movimento das cargas elétricas"
          />
        </div>

        <p>
          Em uma pilha, os elétrons em excesso no polo negativo movimentam-se
          pelo condutor, passam pela carga, e vão em direção ao polo positivo.
          Enquanto a pilha for capaz de manter o excesso de elétrons no polo
          negativo e a falta de elétrons no polo positivo, haverá corrente
          elétrica no circuito.
        </p>

        <p>
          Para que exista corrente, é necessário que exista tensão e que o
          circuito esteja fechado. Não existe corrente sem tensão, mas a
          afirmação recíproca é verdadeira.
        </p>

        <div className="site-image">
          <img
            src={electricalCurrent2}
            className="medium-image"
            alt="Corrente elétrica em um circuito"
          />
        </div>

        <p>
          No exemplo abaixo, perceba que ao pressionar a chave, o circuito será
          fechado, fazendo com que a corrente flua pelo amperímetro, pelo
          resistor e pelo LED.
        </p>

        <div className="flex-center-column circuit-frame-wrapper">
          <iframe
            title="electric-current"
            src="https://www.tinkercad.com/embed/cRqc9EgUbw5?editbtn=1"
            className="circuit-frame"
          />
        </div>

        <p>
          Os metais são excelentes condutores de corrente elétrica, porque os
          elétrons da última camada da eletrosfera (
          <span className="bold-text">elétrons de valência</span>) estão
          fracamente ligados ao núcleo do átomo. Por causa disso, desprendem-se
          com facilidade o que permite seu movimento ordenado. Depois da prata,
          o cobre é considerado o melhor condutor elétrico.
        </p>

        <p>
          Materiais isolantes são os que apresentam forte oposição à circulação
          de corrente elétrica no interior de sua estrutura. Isso acontece
          porque os elétrons livres dos átomos que compõem a estrutura química
          dos materiais isolantes são fortemente ligados a seus núcleos e
          dificilmente serão liberados para a circulação.
        </p>

        <p>
          Geralmente, a corrente é dividida em{' '}
          <span className="bold-text">alternada</span> (CA ou AC) e{' '}
          <span className="bold-text">contínua</span> (CC ou DC), sendo que, na
          corrente alternada existe uma variação na polaridade ao longo do
          tempo, já na contínua, a polaridade é sempre a mesma.
        </p>

        <div className="site-image">
          <img src={dcAndAcCurrent} className="medium-image" alt="CA e CC" />
        </div>

        <p>
          O <span className="bold-text">sentido da corrente</span> representa de
          qual polo as cargas elétricas saem e para qual polo elas vão dentro de
          um condutor. Ele é divido em real e convencional. O{' '}
          <span className="bold-text">sentido real</span> (ou{' '}
          <span className="bold-text">sentido eletrônico</span>) é sempre do
          polo negativo para o polo positivo. O{' '}
          <span className="bold-text">sentido convencional</span> é sempre do
          polo positivo para o polo negativo.
        </p>

        <div className="site-image">
          <img
            src={currentDirection}
            className="medium-image"
            alt="Sentido da corrente elétrica"
          />
        </div>

        <p>
          O sentido convencional foi estabelecido em uma época na qual não se
          compreendiam com precisão a natureza do fluxo de elétrons. Logo, ele
          surgiu primeiro. Com o passar dos anos, ocorreram diversos progressos
          nos estudos da elétrica/eletrônica; um deles, foi a descoberta do
          sentido real da corrente. Para os estudos da eletrônica, normalmente
          se adota o sentido convencional da corrente, assim como este site o
          faz. Na prática, o sentido da corrente nos estudos não interfere nos
          resultados.
        </p>

        <p>
          A corrente elétrica não é exclusividade dos meios sólidos - ela pode
          ocorrer também nos gases e nos líquidos. Nos sólidos, as cargas cujo
          fluxo constitui a corrente real são os elétrons livres. Nos líquidos,
          os portadores de corrente são íons positivos e íons negativos. Nos
          gases, são íons positivos, íons negativos e elétrons livres. A
          corrente elétrica que se estabelece nos condutores eletrolíticos e nos
          condutores gasosos (como a que surge em uma lâmpada fluorescente) é
          denominada <span className="bold-text">corrente iônica</span>.
        </p>

        <p>
          De acordo com a <span className="bold-text">Lei de Ampère</span>, uma
          corrente elétrica produz um{' '}
          <span className="bold-text">campo magnético</span> com{' '}
          <span className="bold-text">direção</span>. Utiliza-se a famosa{' '}
          <span className="bold-text">regra da mão direita</span> para
          determinar a direção do campo magnético.
        </p>

        <div className="site-image">
          <img
            src={magneticFieldDirection}
            className="medium-image"
            alt="Direção do campo magnético"
          />
        </div>

        <p>
          Note que, a corrente sempre FLUI pelos condutores de um circuito, e a
          tensão é sempre aplicada ENTRE dois pontos do circuito. Dos mesmos
          criadores de voltagem, vem aí "
          <span className="bold-text">amperagem</span>". Novamente, preze sempre
          pelos termos corretos. E.g.: a tomada de casa é de 10 A. Outro
          exemplo: a corrente que flui pelo resistor R1 é de 19 mA.
        </p>

        <br />

        <NavigationButtons
          previousPageUrl="/aulas/eletronica-digital/revisao-de-conceitos-basicos/tensao"
          nextPageUrl="/aulas/eletronica-digital/revisao-de-conceitos-basicos/resistencia"
        />

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
