import { NavigationButtons } from '../../components/NavigationButtons';
import { PageInformation } from '../../components/PageInformation';
import masmBox from '../../images/masm-box.jpg';

export const AssemblyOrAssembler = (): JSX.Element => {
  return (
    <div className="site-content-wrapper">
      <h1>Assembly ou Assembler?</h1>

      <div className="site-content">
        <p>
          O termo "assembly" é frequentemente confundido com "assembler". Apesar
          de parecidos,{' '}
          <span className="bold-text">
            os termos assembly e assembler não são sinônimos
          </span>{' '}
          e se referem a elementos distintos, mas relacionados.
        </p>

        <p>
          <span className="bold-text">Assembly</span> é o nome dado ao conjunto
          de mnemônicos e símbolos que representam as instruções de uma
          determinada arquitetura em um nível de abstração um pouco mais alto. A
          linguagem assembly é legível por humanos, mas não por computadores.
          Por conta disso, para que os computadores consigam executar o código
          assembly, primeiro, é necessário uma tradução de assembly para o
          código de máquina da arquitetura. Isso é feito por um programa chamado{' '}
          <span className="bold-text">assembler</span>.
        </p>

        <p>
          O assembler é responsável principalmente por calcular os offsets de
          memória, resolver o nome das labels em endereços e converter os
          mnemônicos em opcode para serem interpretados diretamente pelo
          processador do computador. A saída de um assembler pode ser um arquivo
          contendo o código hexadecimal e, opcionalmente, um{' '}
          <span className="bold-text">arquivo de listagem</span>. Exemplos de
          assemblers:
        </p>

        <ul>
          <li>Microsoft Macro Assembler (MASM);</li>
          <li>Netwide Assembler (NASM);</li>
          <li>GNU Assembler (GAS);</li>
          <li>Microchip Assembler (MPASM).</li>
        </ul>

        <div className="site-image">
          <img src={masmBox} className="medim-image" alt="MASM" />
        </div>

        <p>
          Em contraposição ao assembler, existe um programa chamado{' '}
          <span className="bold-text">disassembler</span>, que faz o contrário
          do assembler: converte os opcodes hexadecimais em código assembly.
        </p>

        <p>
          Em síntese, o assembly é a representação do código de máquina e o
          assembler é o programa que converte essa representação para código de
          máquina.
        </p>

        <br />

        <NavigationButtons
          previousPageUrl="/aulas/linguagem-assembly/linguagem-assembly"
          nextPageUrl="/aulas/linguagem-assembly/sintaxe-intel-e-at-e-t"
        />

        <hr />

        <br />

        <PageInformation
          lastUpdateDate="26/11/2022"
          originalPublicationDate="26/11/2022"
        />
      </div>
    </div>
  );
};
