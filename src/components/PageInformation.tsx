import { Avatar, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

type Props = {
  lastUpdateDate: string;
  originalPublicationDate: string;
  originalAuthor?: string;
};

export const PageInformation = ({
  lastUpdateDate,
  originalPublicationDate,
  originalAuthor = 'Marco Guilherme',
}: Props): JSX.Element => {
  return (
    <div className="page-information">
      <Card className="card-information">
        <Meta
          avatar={
            <Avatar
              size={40}
              src="https://avatars.githubusercontent.com/u/58197183?s=400&u=f3d38601430f8670397c818c6d883571761b201e&v=4"
            />
          }
          title={`Data da última atualização: ${lastUpdateDate}`}
          description={`Originalmente publicado por ${originalAuthor} em ${originalPublicationDate}`}
        />
      </Card>
    </div>
  );
};
