import { NavigationButtons } from '../components/NavigationButtons';
import { PageInformation } from '../components/PageInformation';
import { useThirdPartyCookieCheck } from '../hooks/useThirdPartyCookieCheck ';

export const EightBitComputer = (): JSX.Element => {
  useThirdPartyCookieCheck();

  return (
    <div className="site-content-wrapper">
      <h1>Computador de 8 Bits</h1>

      <div className="site-content">
        <p>
          Na arquitetura de computadores, números inteiros de 8 bits ou outras
          unidades de dados são aqueles que têm 8 bits de largura (1 octeto).
          Além disso, arquiteturas de CPU e ALU de 8 bits são aquelas baseadas
          em registradores ou barramentos de dados desse tamanho. Os endereços
          de memória (e, portanto, os barramentos de endereços) para CPUs de 8
          bits geralmente são maiores que 8 bits, geralmente 16 bits.
          Microcomputadores de 8 bits são microcomputadores que usam
          microprocessadores de 8 bits.
        </p>

        <p>
          O termo "8 bits" também é aplicado aos conjuntos de caracteres que
          podem ser usados em computadores com bytes de 8 bits, sendo os mais
          conhecidos várias formas de ASCII estendido.
        </p>

        <p>
          O IBM System/360 introduziu a memória endereçável por bytes com bytes
          de 8 bits, em oposição à memória endereçável por bits ou dígitos
          decimais ou endereçável por palavras.
        </p>

        <p>
          O primeiro microprocessador de 8 bits amplamente adotado foi o Intel
          8080, sendo usado em muitos computadores amadores no final dos anos
          1970 e início dos anos 1980, geralmente executando o sistema
          operacional CP/M; tinha palavras de dados de 8 bits e endereços de 16
          bits. O Zilog Z80 (compatível com o 8080) e o Motorola 6800 também
          foram usados em computadores semelhantes. As CPUs Z80 e MOS Technology
          6502 de 8 bits foram amplamente utilizadas em computadores domésticos
          e consoles de jogos de segunda e terceira geração nas décadas de 1970
          e 1980. Muitas CPUs ou microcontroladores de 8 bits são a base dos
          onipresentes sistemas embarcados de hoje.
        </p>

        <p>
          Abaixo, temos um computador de 8 bits interativo que foi construido
          para unir os fundamentos da eletrônica digital e da linguagem
          assembly.
        </p>

        <div className="flex-center-column circuit-frame-wrapper">
          <iframe
            title="eight-bit-computer"
            src="https://circuitverse.org/simulator/embed/8-bit-computer-077db753-7e4f-4ef5-81c0-1afe5fbc2dbe"
            className="computer-circuit-frame"
          />
        </div>

        <br />

        <NavigationButtons previousPageUrl="/aulas/linguagem-assembly/convencoes-de-chamada" />

        <hr />

        <br />

        <PageInformation
          lastUpdateDate="29/11/2022"
          originalPublicationDate="29/11/2022"
        />
      </div>
    </div>
  );
};
