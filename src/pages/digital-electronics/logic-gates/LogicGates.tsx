import { PageInformation } from '../../../components/PageInformation';

export const LogicGates = (): JSX.Element => {
  return (
    <div className="site-content-wrapper">
      <h1>Portas Lógicas</h1>
      <div className="site-content">
        <p>
          As portas lógicas são a base para a construção de circuitos digitais,
          como: registradores, contadores, circuitos aritméticos (somadores,
          subtratores, comparadores etc.), multiplexadores, demultiplexadores,
          codificadores e decodificadores, memórias etc.
        </p>
        <p>
          Uma porta lógica (ou <span className="italic-text">logic gate</span>{' '}
          em inglês) é um{' '}
          <span className="underline-text">circuito integrado</span> que
          implementa uma função booleana, i.e., uma operação lógica realizada
          entre uma ou mais entradas digitais que produz uma única saída
          digital.
        </p>
        <p>
          As portas e circuitos lógicos podem ser representados por uma
          expressão lógica/booleana. Um circuito que implementa uma função
          booleana é chamado de porta lógica e pode ser graficamente
          representado pela simbologia no padrão ANSI, IEC ou DIN.
        </p>
        <p>
          Um típico circuito integrado de porta lógica contém quatro portas
          lógicas.
        </p>
        <p>
          As portas lógicas podem ter uma ou mais entradas (também chamadas de
          variáveis), mas apenas uma saída. Geralmente, as entradas e saídas das
          portas lógicas são nomeadas com letras maiúsculas. As entradas
          geralmente são chamadas de A, B, C, D etc. As saídas geralmente são
          chamadas de S, Y, Q, Z etc.
        </p>
        <p>Portas lógicas básicas: AND (E), OR (OU) e NOT (NÃO).</p>
        <p>
          Portas lógicas derivadas: XOR (OU-EXCLUSIVO), XNOR (NÃO-OU-EXCLUSIVO),
          NAND (NÃO-E) e NOR (NÃO-OU).
        </p>
        <p>Outros: buffer digital.</p>

        <br />

        <hr />

        <br />

        <PageInformation
          lastUpdateDate="13/11/2022"
          originalPublicationDate="07/10/2022"
        />
      </div>
    </div>
  );
};
