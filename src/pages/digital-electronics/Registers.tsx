import Latex from 'react-latex';
import { NavigationButtons } from '../../components/NavigationButtons';
import { PageInformation } from '../../components/PageInformation';
import bufferRegister from '../../images/buffer-register.png';
import bufferRegister2 from '../../images/buffer-register-2.png';
import bufferRegister3 from '../../images/buffer-register-3.png';
import controlledBufferRegister from '../../images/controlled-buffer-register.png';
import threeStateBufferRegister from '../../images/three-state-buffer-register.png';
import shiftLeftRegister from '../../images/shift-left-register.png';
import shiftRightRegister from '../../images/shift-right-register.png';
import controlledShiftRegister from '../../images/controlled-shift-register.png';
import shiftRegister from '../../images/shift-register.png';

export const Registers = (): JSX.Element => {
  return (
    <div className="site-content-wrapper">
      <h1>Registradores</h1>

      <div className="site-content">
        <p>
          Um registrador é um grupo de elementos de memória que trabalham juntos
          como uma unidade. Um registrador simples armazena uma palavra binária,
          outros modificam a palavra armazenada ao deslocar os bits para a
          esquerda/direita ou realizando outras operações.
        </p>

        <div className="horizontal-space-2" />

        <h2>Regitrador Buffer</h2>

        <p>
          Um registrador buffer (ou buffer register em inglês) é um circuito que
          armazena uma palavra binária.
        </p>

        <div className="site-image">
          <img
            src={bufferRegister}
            className="large-image"
            alt="Registrador buffer"
          />
        </div>

        <p>
          No exemplo acima, o nibble é composto pelos bits{' '}
          {<Latex>{'$X_3X_2X_1X_0$'}</Latex>} e só é armazenado no registrador
          na borda de subida do clock.
        </p>

        <p>Uma variação do circuito acima é:</p>

        <div className="site-image">
          <img
            src={bufferRegister2}
            className="large-image"
            alt="Registrador buffer 2"
          />
        </div>

        <p>
          A palavra só é armazenada no registrador quando LOAD = 1 e na borda de
          subida do clock.
        </p>

        <p>
          Ambos os circuitos são muito primitivos para ter alguma utilidade. O
          que eles precisam é de algum controle sobre os bits{' '}
          {<Latex>{'$X_n$'}</Latex>}, alguma maneira de segurá-los até que
          estejamos prontos para armazená-los.
        </p>

        <p>Abaixo, temos um registrador buffer controlado:</p>

        <div className="site-image">
          <img
            src={controlledBufferRegister}
            className="large-image"
            alt="Registrador buffer controlado"
          />
        </div>

        <div className="flex-center-column logic-expression">
          <Latex>{'$Q_3Q_2Q_1Q_0 \\space = \\space X_3X_2X_1X_0$'}</Latex>
        </div>

        <p>Quando CLR = 1, o conteúdo do registrador é limpo, ou seja:</p>

        <div className="flex-center-column logic-expression">
          <Latex>{'$Q \\space = \\space 0000$'}</Latex>
        </div>

        <p>
          LOAD é uma entrada de controle. Quando LOAD = 0, os bits não chegam no
          flip-flop. Ao mesmo tempo, o sinal{' '}
          {<Latex>{'$\\overline{LOAD}$'}</Latex>} é alto; isso força a saída de
          cada flip-flop a realimentar sua entrada de dados. Quando cada borda
          de subida do clock chega, os dados circulam ou são retidos. Ou seja, o
          conteúdo do registrador não muda quando LOAD = 0.
        </p>

        <p>
          Quando LOAD = 1, os bits {<Latex>{'$X_3X_2X_1X_0$'}</Latex>} são
          transmitidos para as entradas de dados. Após um curto{' '}
          {<Latex>{'$t_{setup}$'}</Latex>}, os flip-flops estão prontos para
          armazenar os bits. Quando a borda de subida do clock chega, os bits{' '}
          {<Latex>{'$X_3X_2X_1X_0$'}</Latex>} são armazenados.
        </p>

        <p>Registrador buffer de saída de 8 bits:</p>

        <div className="site-image">
          <img
            src={bufferRegister3}
            className="large-image"
            alt="Registrador buffer 3"
          />
        </div>

        <p>O 74LS173 é composto por 4 flip-flops do tipo D.</p>

        <p>
          Cada chip armazena 4 bits da palavra de entrada X. C22 armazena o
          nibble mais significativo e C23 o menos significativo.
        </p>

        <p>Registrador buffer three-state:</p>

        <div className="site-image">
          <img
            src={threeStateBufferRegister}
            className="large-image"
            alt="Registrador buffer three-state"
          />
        </div>

        <p>Quando ENABLE = 0, a saída está flutuando.</p>

        <p>Quando ENABLE = 1, Y = Q.</p>

        <div className="horizontal-space-2" />

        <h2>Regitrador de Deslocamento</h2>

        <p>
          Um registrador de deslocamento (ou shift register em inglês) é um
          registrador que move os bits armazenados para a esquerda ou direita.
        </p>

        <p>
          Ele utiliza flip-flops em cascata de tal modo que, a saída de um
          flip-flop é conectada à entrada do próximo. Eles compartilham um único
          sinal de clock, o que faz com que os dados armazenados no sistema
          mudem de um local para o outro.
        </p>

        <p>
          Os registradores de deslocamento são úteis para converter uma
          informação serial em paralela.
        </p>

        <p>
          Registrador de deslocamento que desloca os bits para a esquerda
          (chamado de shift-left register em inglês):
        </p>

        <div className="site-image">
          <img
            src={shiftLeftRegister}
            className="large-image"
            alt="Shift-left register"
          />
        </div>

        <p>
          Registrador de deslocamento que desloca os bits para a direita
          (chamado de shift-right register em inglês):
        </p>

        <div className="site-image">
          <img
            src={shiftRightRegister}
            className="large-image"
            alt="Shift-right register"
          />
        </div>

        <p>
          Cada saída Q (exceto a última) está conectada na entrada D do
          flip-flop anterior.
        </p>

        <p>
          Um registrador de deslocamento controlado possui uma entrada de
          controle que determina o que o circuito faz no próximo pulso de clock.
        </p>

        <div className="site-image">
          <img
            src={controlledShiftRegister}
            className="large-image"
            alt="Registrador de deslocamento controlado"
          />
        </div>

        <p>
          SHL (sigla para shift-left) é o sinal de controle. Quando SHL = 0, os
          bits não são deslocados na borda de subida do clock.
        </p>

        <p>
          Um carregamento serial (ou serial loading em inglês) é quando uma
          palavra é armazenada em um registrador de deslocamento entrando 1 bit
          por pulso de clock. Para armazenar um nibble por exemplo, são
          necessários 4 pulsos de clock.
        </p>

        <p>
          Um carregamento paralelo (chamado de parallel ou broadside loading em
          inglês) é quando todos os bits de uma palavra são armazenados em um
          registrador de deslocamento. No carregamento paralelo, é necessário
          apenas 1 pulso de clock para armazenar uma palavra digital.
        </p>

        <p>
          O circuito abaixo pode armazenar os bits diretamente nos flip-flops
          e/ou deslocá-los para a esquerda, dependendo de qual sinal está ativo.
        </p>

        <div className="site-image">
          <img
            src={shiftRegister}
            className="large-image"
            alt="Registrador de deslocamento"
          />
        </div>

        <p>Este circuito utiliza o carregamento paralelo.</p>

        <p>Quando LOAD = SHL = 0, o registrador está inativo.</p>

        <p>
          Quando LOAD = 0 e SHL = 1, o circuito funciona como um registrador de
          deslocamento.
        </p>

        <p>
          Quando LOAD = 1 e SHL = 0, o circuito age como um registrador buffer.
        </p>

        <p>
          LOAD = 1 e SHL = 1 é uma condição proibida, já que é impossível
          realizar ambas as operações em uma única borda de clock.
        </p>

        <br />

        <p>
          Os registradores de deslocamento podem ter entradas e saídas paralelas
          e seriais.
        </p>

        <div className="flex-center-column">
          <p>SISO: serial-in serial-out</p>
          <p>PIPO: parallel-in parallel-out</p>
          <p>SIPO: serial-in parallel-out</p>
          <p>SIPO: serial-in parallel-out</p>
        </div>

        <p>
          Existem também tipos que têm entrada serial e paralela e tipos com
          saída serial e paralela. Existem também registradores de deslocamento
          "bidirecionais" que permitem o deslocamento em ambas as direções: L ⟶
          R ou R ⟶ L. A entrada serial e a última saída de um registrador de
          deslocamento também podem ser conectadas para criar um "registrador de
          deslocamento circular". Um registro PIPO é muito rápido, a saída é
          dada em um único pulso de clock.
        </p>

        <br />

        <NavigationButtons
          previousPageUrl="/aulas/eletronica-digital/contadores"
          nextPageUrl="/aulas/eletronica-digital/memorias/ram"
        />

        <hr />

        <br />

        <PageInformation
          lastUpdateDate="28/11/2022"
          originalPublicationDate="28/11/2022"
        />
      </div>
    </div>
  );
};
