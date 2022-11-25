import { PageInformation } from '../../../components/PageInformation';
import coiledCable from '../../../images/coiled-cable.webp';
import boot from '../../../images/boot.webp';
import silicon from '../../../images/silicon.jpg';

export const Resistance = (): JSX.Element => {
  return (
    <div className="site-content-wrapper">
      <h1>Resistência</h1>

      <div className="site-content">
        <p>
          A resistencia elétrica está intimamente relacionada a como um material
          reage quando uma DDP é aplicada entre suas extremidades. Como os
          materiais condutores, semicondutores e isolantes estão diretamente
          ligados à definição de resistência, vamos verificar brevemente o que
          eles são.
        </p>

        <p>
          Os <span className="bold-text">materiais condutores</span> são
          elementos que permitem a circulação da corrente elétrica oferecendo
          pouco impedimento (pouca resistência). Pela{' '}
          <span className="bold-text">Lei de Ohm</span>, se a resistência tender
          à zero, a corrente tenderá ao infinito. Como exemplo de materiais
          condutores, pode-se citar os metais, já que os elétrons da camada de
          valência estão vinculados ao núcleo do átomo com pouca intensidade.
          Isso significa que esses elétrons possuem uma maior facilidade em
          romper a ligação com o átomo e percorrer um meio condutor. Os cabos
          elétricos são compostos por cobre, que é um exemplo de material
          isolante. Os condutores elétricos possuem uma alta condutância.
        </p>

        <div className="site-image">
          <img
            src={coiledCable}
            className="medium-image"
            alt="Condutor elétrico"
          />
        </div>

        <p>
          Ao contrário dos materiais condutores, os{' '}
          <span className="bold-text">materiais isolantes</span> apresentam um
          impedimento elevado a circulação da corrente elétrica pois seus
          elétrons livres estão fortemente vinculados ao núcleo do átomo e
          dificilmente conseguirão romper essa ligação para participar do fluxo.
          Um exemplo típico de isolante é a borracha. Os isolantes elétricos
          possuem uma baixa condutância.
        </p>

        <div className="site-image">
          <img src={boot} className="medium-image" alt="Bota isolante" />
        </div>

        <p>
          Já os <span className="bold-text">semicondutores</span>, como o
          próprio nome sugere, são materiais que possuem uma resistência
          intermediária entre os condutores e isolantes. Os semicondutores são
          materiais que não são nem condutores e nem isolantes. Semicondutores
          contêm alguns elétrons livres, mas o que os torna diferentes é
          principalmente a presença de lacunas. Alguns exemplos de
          semicondutores são silício, germânio, arsenieto de gálio e elementos
          próximos à chamada "escada dos semimetais" da tabela periódica. Os
          semicondutores possuem uma condutância média.
        </p>

        <div className="site-image site-figure">
          <figure>
            <img src={silicon} alt="Silício" className="medium-image" />
            <figcaption>Silício</figcaption>
          </figure>
        </div>

        <p>
          A <span className="bold-text">resistência elétrica</span> é a oposição
          à passagem da corrente elétrica exercida por um material quando este é
          submetido a uma tensão elétrica. Ao analisar os tipos de materiais,
          nota-se a influência exercida pela resistência e como ela pode ser
          útil para controlar a intensidade da corrente que circula por um meio
          condutor.
        </p>

        <p>
          A <span className="bold-text">condutância elétrica</span> é o
          contrário da resistência elétrica, e representa a facilidade com que a
          corrente elétrica circula pelo material.
        </p>

        <p>
          No SI, a unidade derivada para a resistência é o ohm, representada
          pela letra grega ômega maiúscula (Ω), em homenagem ao físico alemão
          Georg Simon Ohm. No SI, a condutância é medida em siemens (S).
        </p>

        <p>
          O instrumento utilizado para medir a resistência é chamado de{' '}
          <span className="bold-text">ohmímetro</span>.
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
