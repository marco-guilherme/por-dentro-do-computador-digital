import { PageInformation } from '../../../components/PageInformation';
import benEaterDatasheet from '../../../images/ben-eater-datasheet.png';

export const Datasheets = (): JSX.Element => {
  return (
    <div className="site-content-wrapper">
      <h1>Datasheets</h1>

      <div className="site-content">
        <p>
          Ao se aventurar pelo mundo da eletrônica, é de extrema importância que
          se conheça as características gerais do componente/circuito integrado
          que será manipulado. Isso evita, por exemplo, que você queime um
          componente eletrônico por aplicar uma tensão entre seus terminais
          maior do que a suportada por ele. Muitos componentes eletrônicos
          possuem suas peculiaridades que você só descobre lendo o manual desse
          componente!
        </p>

        <p>
          O datasheet (folha de dados ou folha de especificações) é justamente o
          manual do componente eletrônico que PRECISA ser lido pelo projetista
          do circuito antes de colocar a mão na massa. Ele é um documento que
          resume o desempenho e outras características de um produto, máquina,
          componente, material, subsistema (e.g.:, uma fonte de alimentação) ou
          software. O datasheet possui detalhes suficientes para permitir ao
          cliente entender o que é o produto e ao engenheiro de projeto entender
          a função do componente no sistema geral.
        </p>

        <div className="site-image">
          <img
            src={benEaterDatasheet}
            className="large-image"
            alt="Datasheet e circuito eletrônico"
          />
        </div>

        <p>
          Normalmente, o datasheet é criado pelo fabricante e começa com uma
          página introdutória descrevendo o restante do documento, seguida de
          listagens de características específicas, com mais informações sobre a
          conectividade dos dispositivos. Nos casos em que há código-fonte
          relevante a ser incluído, geralmente ele é anexado próximo ao final do
          documento ou separado em outro arquivo. Dependendo da finalidade
          específica, um datasheet pode oferecer um valor médio, um valor
          típico, uma faixa típica, tolerâncias de engenharia ou um valor
          nominal. O tipo e a fonte dos dados geralmente são declarados no
          próprio datasheet.
        </p>

        <br />

        <h2>Eletrônica, Computação e Inglês</h2>

        <p>
          Agora, um detalhe extremamente importante: os datasheets normalmente
          estarão em INGLÊS. Por isso, o projetista do circuito precisa ter pelo
          menos uma leitura básica no inglês. Mas não se espante, falo por
          experiência própria, dentro do universo da eletrônica e computação, o
          inglês reina! As linguagens de programação normalmente estarão em
          inglês (como é o caso dos mnemônicos do assembly), os datasheets
          estarão em inglês, as documentações técnicas estarão em inglês,
          excelentes vídeos e livros também estarão em inglês.
        </p>

        <p>
          Ao invés de ficar dependendo de uma ferramenta de tradução, que tal
          dar um passo a diante e tentar aprender a ler o básico em inglês? Eu
          te garanto que além de ser uma excelente escolha, será um tempo bem
          gasto. Não dê um passo maior que a sua perna! Você pode começar por
          livros infantis e com um dicionário ao lado. Em seguida, pode ler
          livros um pouco mais complexos e depender menos do dicionário. Leia
          livros sobre assuntos que você goste, tente ler um datasheet e
          entender que uma palavra pode ter mais de uma tradução, o que vai
          depender do contexto. A palavra "bus", por exemplo, pode significar
          "ônibus" ou "barramento"; isso dependende se estamos falando no
          contexto automobilístico (bus é um veículo) ou da eletrônica (bus é o
          barramento de dados).
        </p>

        <p>
          E por último, a dica mais importante que posso te dar: faça mais
          esforço tentando mapear uma palavra com o que ela representa do que
          com sua tradução no português. Muitas das vezes, as palavras ou não
          tem tradução para o português, ou a tradução é estranha demais. Por
          exemplo, "buffer" pode ser uma porta lógica, uma porção de memória
          temporária etc. Agora, a tradução de buffer é algo como "amortecedor".
          Acho que não faz muito sentido no contexto da eletrônica/computação;
          portanto, esse é um caso onde é preferível manter o nome em inglês e
          simplesmente associá-lo com o que ele representa na realidade do que
          tentar traduzir e provocar um olhar de confusão.
        </p>

        <p>
          Novamente, utilize o poder da associação! Quando for ler em inglês,
          não leia traduzindo, apenas leia e pense no que aquilo representa. Por
          exemplo, ao ler a palavra "book", pense naquele conjunto de páginas
          com muito texto, e não no que a palavra significa. Isso pode parecer
          estranho e difícil no começo, mas é a chave para desenrolar a sua
          leitura no inglês.
        </p>

        <br />

        <hr />

        <br />

        <PageInformation
          lastUpdateDate="21/11/2022"
          originalPublicationDate="21/11/2022"
        />
      </div>
    </div>
  );
};
