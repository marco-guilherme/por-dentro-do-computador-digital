import { PageInformation } from '../../components/PageInformation';
import assemblyCode from '../../images/assembly-code.jpg';
import intel8086InstructionSetPage from '../../images/intel-8086-instruction-set-page.jpg';
import intel8086 from '../../images/intel-8086.jpg';
import benEaterComputerProgramming from '../../images/ben-eater-computer-programming.gif';
import intel8086MovInstruction from '../../images/intel-8086-mov-instruction.png';
import intel8086MovInstruction2 from '../../images/intel-8086-mov-instruction-2.png';
import Table, { ColumnsType } from 'antd/lib/table';
import binaryNumber from '../../images/binary-number.gif';
import epromProgrammer from '../../images/eprom-programmer.jpg';
import assembler from '../../images/assembler.png';
import { NavigationButtons } from '../../components/NavigationButtons';

type AssemblyTable = {
  key: number;
  address: React.ReactNode | string;
  opcode: React.ReactNode | string;
  assembly?: React.ReactNode | string;
};

export const AssemblyLanguage = (): JSX.Element => {
  const columns: ColumnsType<Object> = [
    {
      title: 'Endereço',
      dataIndex: 'address',
      align: 'center',
    },
    {
      title: 'Opcode',
      dataIndex: 'opcode',
      align: 'center',
    },
    {
      title: 'Assembly',
      dataIndex: 'assembly',
      align: 'center',
      onCell: (
        data: Object,
        index?: number | undefined
      ): React.HTMLAttributes<any> | React.TdHTMLAttributes<any> => {
        if (index === 0) {
          return {
            rowSpan: 3,
          };
        }

        return {
          rowSpan: 0,
        };
      },
    },
  ];

  const dataSource: AssemblyTable[] = [
    {
      key: 1,
      address: <span className="monospaced-snippet">0x0100</span>,
      opcode: <span className="monospaced-snippet">0xB8</span>,
      assembly: <span className="monospaced-snippet">movw $0x1FA4, %AX</span>,
    },
    {
      key: 2,
      address: <span className="monospaced-snippet">0x0101</span>,
      opcode: <span className="monospaced-snippet">0xA4</span>,
    },
    {
      key: 3,
      address: <span className="monospaced-snippet">0x0102</span>,
      opcode: <span className="monospaced-snippet">0x1F</span>,
    },
  ];

  return (
    <div className="site-content-wrapper">
      <h1>Linguagem Assembly</h1>

      <div className="site-content">
        <p>
          <span className="bold-text">Assembly</span> (às vezes abreviado como
          asm){' '}
          <span className="underline-text">
            é um nome genérico que pode ser dado a qualquer linguagem de
            programação de baixo nível que possua uma relação de um para um
            entre o código de operação da arquitetura e os nomes simbólicos
          </span>
          . Achou complicado? Pois saiba que no começo é assim mesmo, mas depois
          de alguns anos estudando assembly, parece que você ainda está no
          começo! Brincadeiras a parte, vamos passo a passo.
        </p>

        <div className="site-image">
          <img
            src={assemblyCode}
            className="large-image"
            alt="Código escrito em linguagem assembly"
          />
        </div>

        <p>
          A eletrônica digital está por trás da construção e manutenção do
          hardware (circuitaria física) de diversos sistemas digitais. A forma
          como o hardware está organizado é o que define a{' '}
          <span className="bold-text">arquitetura</span> do sistema. Cada
          arquitetura possui seu próprio{' '}
          <span className="bold-text">conjunto de instruções</span> (
          <span className="italic-text">instruction set</span>), que em um nível
          de abstração mais alto, significa: o que aquele processador é capaz de
          fazer. Veremos a seguir uma parte do{' '}
          <span className="underline-text">
            conjunto de instruções da arquitetura x86-16
          </span>{' '}
          do clássico microprocessador da Intel, o 8086:
        </p>

        <div className="site-image">
          <img
            src={intel8086InstructionSetPage}
            className="large-image manual-page"
            alt="Página do manual do microprocessador Intel 8086"
          />
        </div>

        <p>
          Sem entrar muito em detalhes por enquanto, mas um exemplo de instrução
          ilustrada na imagem anterior é "
          <span className="monospaced-snippet">add</span>". A instrução{' '}
          <span className="monospaced-snippet">add</span> é utilizada para{' '}
          <span className="underline-text">somar dois valores</span>.
          Interessante, não? E para aqueles(as) que não conhecem o 8086, segue
          uma imagem desse belíssimo microprocessador :)
        </p>

        <div className="site-image">
          <img
            src={intel8086}
            className="large-image"
            alt="Microprocessador Intel 8086"
          />
        </div>

        <p>
          Caso a arquitetura não possuísse um conjunto de instruções, a forma de
          solicitar ao hardware que execute uma simples soma, por exemplo, seria
          bem mais complicada e lenta. O operador que se aventurasse a executar
          uma soma, além do domínio sobre o circuito, deveria mover chaves
          (interruptores mecânicos) de suas posições, pressionar botões,
          conectar e desconectar cabos, aguardar os períodos corretos etc.
          Considerando o fato de que um processador moderno consegue executar
          muito mais instruções por segundo do que um ser humano, e que
          programas de computador modernos necessitam de um processamento veloz
          (na ordem dos milissegundos), é imprescindível que toda arquitetura
          possua seu próprio conjunto de instruções.
        </p>

        <p>
          Um <span className="bold-text">programa</span> é uma sequência lógica
          de instruções, de forma que, ao ser executado pelo hardware,
          automatiza uma tarefa e/ou produz um resultado. Sendo assim, para
          desenvolver um programa, basta gravar todas as instruções desejadas na{' '}
          <span className="bold-text">memória de programa</span> (memória que
          armazena o programa) do sistema. O problema é que,{' '}
          <span className="underline-text">
            cada instrução é representada por um grupo de bits
          </span>
          , o chamado “<span className="bold-text">código de operação</span>”.
          Isso faz com que o programador precise gravar bit a bit na memória
          para cada instrução, o que é demorado e sujeito a erros.
        </p>

        <div className="site-image">
          <img
            src={binaryNumber}
            className="small-image"
            alt="Número binário"
          />
        </div>

        <p>
          Visando facilitar o desenvolvimento dos programas, a partir de um
          conjunto de instruções,{' '}
          <span className="underline-text">
            os fabricantes definiram e associaram cada código de operação a um
            nome simbólico
          </span>
          . O motivo disso é que, é muito mais fácil para um ser humano se
          lembrar de algumas poucas letras do que de uma longa e variável cadeia
          de zeros e uns. Assim que esse mapeamento foi concluído, os
          programadores desenvolveram um{' '}
          <span className="bold-text">programa utilitário</span> para converter
          cada símbolo no seu código binário correspondente.
        </p>

        <p>
          Tomando um conjunto de nomes simbólicos como entrada (i.e., um
          programa em um nível de abstração mais alto), sintática e
          semanticamente corretos, de acordo com as regras da arquitetura, o
          utilitário converte esse programa em um arquivo hexadecimal, onde cada
          byte possui uma instrução correspondente na entrada. O arquivo
          hexadecimal pode então ser gravado no hardware, isto é, o programador
          pode carregar o programa no circuito para uma eventual execução. Isso
          pode ser feito em poucos segundos com o auxílio de um dispositivo
          conhecido como <span className="bold-text">gravador</span> ou{' '}
          <span className="bold-text">programador</span>.
        </p>

        <div className="site-image">
          <img
            src={epromProgrammer}
            className="medium-image"
            alt="Programador de EPROM"
          />
        </div>

        <p>
          Assim, o desenvolvimento dos programas foi acelerado, pois, o
          programador não precisa mais se importar ou saber quais são os bits de
          uma instrução, ele só precisa saber qual símbolo corresponde a uma
          determinada instrução. Com isso, temos que, a eletrônica digital é o
          que rege a construção dos circuitos que implementam as funcionalidades
          e características de um sistema digital. Já o conjunto de nomes
          simbólicos de cada instrução da arquitetura, é a linguagem de
          programação de baixo nível, utilizada para controlar o hardware com
          muito mais facilidade e velocidade.
        </p>

        <div className="horizontal-space-2 " />

        <h2>Um Passo Adiante</h2>

        <p>
          Conforme vimos anteriormente, se um ser humano fosse programar um
          computador no modo "<span className="italic-text">bare-metal</span>"
          (sem nenhum assembler e/ou gravador de memória), seria necessário
          alterar bit a bit de cada byte na memória de programa para formar o
          código da instrução. Isso seria realizado com chaves; em seguida,
          seria necessário alternar entre os endereços da memória para gravar as
          próximas instruções e aplicar os sinais de controle corretos no chip
          para escrever efetivamente cada um dos bits. Assim que todo o software
          estivesse gravado corretamente, bastaria iniciar a execução do
          computador e aguardar a execução do programa. Não acredita em mim?
          Veja um exemplo abaixo retirado do vídeo do Ben Eater.
        </p>

        <div className="site-image">
          <img
            src={benEaterComputerProgramming}
            className="large-image"
            alt="Ben Eater programando o computador de 8 bits"
          />
        </div>

        <p>
          Como o processo de programar manualmente um computador digital é
          dispendioso, demorado e altamente sujeito a erros, foram desenvolvidas
          diversas linguagens de programação de baixo nível para abstrair um
          pouco os detalhes do hardware e associar nomes simbólicos às operações
          de baixo nível.
        </p>

        <p>
          A <span className="bold-text">linguagem assembly</span> (ou{' '}
          <span className="bold-text">linguagem de montagem</span>) é qualquer
          linguagem de programação de baixo nível que possua uma relação muito
          forte e direta entre os mnemônicos e os códigos de operação da
          arquitetura.
        </p>

        <p>
          <span className="bold-text">Mnemônicos</span> (nomes simbólicos) são
          palavras curtas (geralmente, com três letras) que ajudam o programador
          a se lembrar de alguma instrução do dispositivo. Como vimos
          anteriormente, a instrução{' '}
          <span className="monospaced-snippet">add</span> é utilizada para somar
          dois números. O nome "<span className="monospaced-snippet">add</span>"
          é um mnemônico, pois é um tipo de "apelido" para representar alguma
          instrução da arquitetura; no caso, a instrução de soma. O código de
          operação (<span className="italic-text">operation code</span> ou{' '}
          <span className="italic-text">opcode</span>), é uma sequência de bits
          que representa uma instrução e opcionalmente, os dados que serão
          operados por aquela instrução. Do ponto de vista prático, podemos
          dizer que os{' '}
          <span className="underline-text">
            opcodes da arquitetura são o que o computador realmente entende
          </span>
          : uma cadeia de zeros e uns. Para entender melhor, vamos utilizar um
          trecho de assembly x86-16 na{' '}
          <span className="bold-text">sintaxe AT&T</span>:
        </p>

        <div className="flex-center-column">
          <p>
            <span className="monospaced-snippet">movw $0x1FA4, %AX</span>
          </p>
        </div>

        <p>
          Essa instrução move (na verdade, ela copia) uma palavra imediata (16
          bits) para o registrador acumulador. No entanto, o seu computador não
          faz a mínima ideia do que isso quer dizer. Para que o computador possa
          entender e executar essa instrução escrita em uma linguagem simbólica,
          devemos convertê-la para o código de operação correspondente, que no
          caso, é:
        </p>

        <div className="flex-center-column">
          <p>
            <span className="monospaced-snippet">101110001010010000011111</span>
          </p>
        </div>

        <p>
          Mas como cheguei nesse número? Vamos demonstrar agora um exemplo de
          como converter essa instrução assembly em seu opcode correspondente. E
          claro, para aumentar a diversão, isso será feito manualmente.
        </p>

        <p>
          Para começar, tenha em mãos o{' '}
          <span className="italic-text">datasheet</span> (manual) do
          microprocessador Intel 8086. Você pode encontrá-la clicando{' '}
          <a
            href="https://www.inf.pucrs.br/~calazans/undergrad/orgcomp_EC/mat_microproc/intel-8086_datasheet.pdf"
            target="_blank"
            rel="noreferrer"
          >
            aqui
          </a>
          . Agora vejamos como montar esse opcode.
        </p>

        <div className="site-image">
          <img
            src={intel8086MovInstruction}
            className="large-image"
            alt="Instrução de cópia de dados do 8086"
          />
        </div>

        <p>
          Primeiro, <span className="monospaced-snippet">0x1FA4</span> é uma
          palavra (16 bits) na base hexadecimal (
          <span className="monospaced-snippet">0x</span>), i.e., é o valor que
          será copiado. Essa palavra será colocada no lugar do placeholder{' '}
          <span className="monospaced-snippet">data</span>. Note que, a
          instrução ocupará 3 bytes (24 bits) da memória de programa. Em
          seguida, devemos verificar o que colocar no lugar de{' '}
          <span className="monospaced-snippet">w</span> e{' '}
          <span className="monospaced-snippet">reg</span>.
        </p>

        <div className="site-image">
          <img
            src={intel8086MovInstruction2}
            className="large-image"
            alt="Valor dos placeholders w e reg"
          />
        </div>

        <p>
          Como temos uma palavra (
          <span className="monospaced-snippet">0x1FA4</span>), então{' '}
          <span className="monospaced-snippet">w = 1</span>. Vamos mover
          (copiar) essa palavra para um registrador chamado{' '}
          <span className="monospaced-snippet">AX</span> (
          <span className="monospaced-snippet">%AX</span>). Sendo assim, ao
          procurar por <span className="monospaced-snippet">AX</span> na tabela
          (coluna <span className="monospaced-snippet">16-Bit (w = 1)</span>),
          vamos encontrar os bits{' '}
          <span className="monospaced-snippet">000</span>. Assim, o byte mais
          significativo da instrução fica{' '}
          <span className="monospaced-snippet">10111000</span> (
          <span className="monospaced-snippet">1 0 1 1 w reg</span> →{' '}
          <span className="monospaced-snippet">w = 1</span> e{' '}
          <span className="monospaced-snippet">reg = 000</span> →{' '}
          <span className="monospaced-snippet">1000</span> →{' '}
          <span className="monospaced-snippet">10111000</span>). Simples e
          intuitivo :D
        </p>

        <p>
          Para os dois bytes menos significativos da instrução temos um pequeno
          segredo. Como os processadores x86 são máquinas{' '}
          <span className="bold-text">little-endian</span>, o byte menos
          significativo do dado (
          <span className="monospaced-snippet">0xA4</span>) será armazenado no
          menor endereço e o mais significativo (
          <span className="monospaced-snippet">0x1F</span>) será armazenado no
          maior endereço. Como <span className="monospaced-snippet">w = 1</span>
          , o opcode restante será{' '}
          <span className="monospaced-snippet">1010010000011111</span> (
          <span className="monospaced-snippet">0xA41F</span>). Ou seja, vamos
          apenas fazer um swap entre os dois bytes da palavra antes de gravar na
          memória. Ao invés de{' '}
          <span className="monospaced-snippet">0x1FA4</span>, teremos{' '}
          <span className="monospaced-snippet">0xA41F</span>.
        </p>

        <p>
          Assumindo que esse programa seja gravado na memória a partir do
          endereço <span className="monospaced-snippet">0x0100</span>, teríamos
          a seguinte organização na memória:
        </p>

        <div className="flex-center-column">
          <Table
            columns={columns}
            bordered
            size="middle"
            dataSource={dataSource}
            pagination={false}
          />
        </div>

        <br />

        <p>
          Ao invés de escrever manualmente cada um desses bytes em um endereço
          específico na memória de programa, pode-se utilizar a instrução “
          <span className="monospaced-snippet">movw</span>” do assembly, montar
          o programa utilizando um assembler e escrever a saída no chip de
          memória utilizando um dispositivo gravador.
        </p>

        <p>
          Apesar da relação muito próxima entre os mnemônicos e as operações de
          baixo nível,{' '}
          <span className="underline-text">
            o computador não consegue interpretar o código assembly diretamente
          </span>
          . Um programa assembly em si é apenas texto simples que precisa ser
          convertido para código de máquina por meio de um programa chamado{' '}
          <span className="bold-text">assembler</span> (
          <span className="bold-text">montador</span>). O processo de converter
          o código assembly para código de máquina é conhecido como{' '}
          <span className="bold-text">montagem</span> (ao invés de o programa
          assembly ser compilado, ele é montado) e o período em que isso ocorre
          é chamado de <span className="bold-text">tempo de montagem</span> (
          <span className="italic-text">assembly time</span>).
        </p>

        <div className="site-image">
          <img
            src={assembler}
            className="medium-image"
            alt="Conversão de assembly para código de máquina"
          />
        </div>

        <p>
          Devido ao forte vínculo entre o assembly e o hardware do dispositivo,{' '}
          <span className="underline-text">
            cada linguagem assembly é específica para uma determinada
            arquitetura
          </span>{' '}
          de computador. Em outras palavras, um programa assembly normalmente
          não é portável, i.e., não funcionará em outros dispositivos que
          possuam uma arquitetura diferente e às vezes, até mesmo em
          dispositivos distintos da mesma arquitetura. Por exemplo, um programa
          escrito para o processador Intel i486 x86-32 não funcionará no
          processador MC68010 de 16/32 bits da Motorola, já que as arquiteturas
          são diferentes.
        </p>

        <br />

        <NavigationButtons
          previousPageUrl="/aulas/linguagem-assembly/linguagens-de-programacao"
          nextPageUrl="/aulas/linguagem-assembly/assembly-ou-assembler"
        />

        <hr />

        <br />

        <PageInformation
          lastUpdateDate="20/11/2022"
          originalPublicationDate="20/11/2022"
        />
      </div>
    </div>
  );
};
