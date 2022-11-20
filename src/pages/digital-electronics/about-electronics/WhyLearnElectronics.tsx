import { PageInformation } from '../../../components/PageInformation';
import electronicCircuit from '../../../images/electronic-circuit.jpg';

export const WhyLearnElectronics = (): JSX.Element => {
  return (
    <div className="site-content-wrapper">
      <h1>Por Que Aprender Eletrônica?</h1>

      <div className="site-content">
        <p>
          É inegável o fato de que a eletrônica teve uma influência gigantesca
          no desenvolvimento da sociedade moderna. Olhe ao seu redor, você
          geralmente verá diversos dispositivos e aparelhos que utilizam da
          eletrônica para entregar uma funcionalidade útil para o cliente. Desde
          acender um simples LED à controlar o computador de um foguete, a
          eletrônica pode ser utilizada para aquecer, esfriar, automatizar,
          iluminar, tocar, processar entre outros. É inimaginável viver no mundo
          de hoje em dia sem toda a tecnologia proporcionada pela eletrônica.
        </p>

        <div className="site-image">
          <img
            src={electronicCircuit}
            className="large-image"
            alt="PCB de algum dispositivo eletrônico"
          />
        </div>

        <p>
          A eletrônica será utilizada como ferramenta durante a construção da
          revolução de amanhã. Sistemas grandes e complexos, sistemas que cuidam
          e monitoram da vida, que garantem a segurança, que controlam e que nos
          desloca; a eletrônica é uma das causas das facilidades e agilidades
          vida moderna. Caso você esteja se perguntando se vale a pena ou não
          aprender eletrônica, a resposta é SIM! O aprendizado de eletrônica
          definitivamente não é fácil, exige muita curiosidade e dedicação por
          parte do estudante, mas com certeza é satisfatório. É indescritível a
          alegria de ver o circuito que você mesmo montou funcionando!
        </p>

        <p>
          Talvez você não ouça falar com frequência dos grandes gênios ocultos
          da eletrônica que estão "ralando" para criar produtos inovadores e
          melhorar os já existentes, mas eles existem e estão por aí. Já
          imaginou do que seria do mundo se todos os técnicos e engenheiros da
          eletrônica fossem extintos?
        </p>

        <p>
          O estudo da eletrônica irá melhorar o seu raciocínio lógico. Com o
          conhecimento em eletrônica, você poderá desenvolver os seus próprios
          projetos e poderá reparar placas eletrônicas defeituosas. Assim como a
          computação, a eletrônica é um campo muito dinâmico, o que faz com que
          você sempre tenha novos desafios pela frente e nunca morra de tédio. A
          comunidade da eletrônica é tão grande quanto sua importância; assim,
          você não estará sozinho na área, pois existem muitos fóruns e livros
          para pesquisar e estudar.
        </p>

        <br />

        <hr />

        <br />

        <PageInformation
          lastUpdateDate="18/11/2022"
          originalPublicationDate="18/11/2022"
        />
      </div>
    </div>
  );
};
