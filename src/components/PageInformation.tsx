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
              src="https://avatars.githubusercontent.com/u/58197183?s=400&u=579e7c7f22c2c897edcc8c5afee438c882f7d723&v=4"
            />
          }
          title={`Data da última atualização: ${lastUpdateDate}`}
          description={`Originalmente publicado por ${originalAuthor} em ${originalPublicationDate}`}
        />
      </Card>
    </div>
  );
};
