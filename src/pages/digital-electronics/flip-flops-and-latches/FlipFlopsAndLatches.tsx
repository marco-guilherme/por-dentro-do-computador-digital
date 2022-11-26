import { NavigationButtons } from '../../../components/NavigationButtons';
import { PageInformation } from '../../../components/PageInformation';

export const FlipFlopsAndLatches = (): JSX.Element => {
  return (
    <div className="site-content-wrapper">
      <h1>Flip-Flops e Latches</h1>

      <div className="site-content">
        <p></p>

        <br />

        <NavigationButtons
          previousPageUrl="/aulas/eletronica-digital/circuitos-aritmeticos/comparador-de-magnitude"
          nextPageUrl="/aulas/eletronica-digital/flip-flops-e-latches/d"
        />

        <hr />

        <br />

        <PageInformation
          lastUpdateDate="25/11/2022"
          originalPublicationDate="25/11/2022"
        />
      </div>
    </div>
  );
};
