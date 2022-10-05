import { Tree, Drawer, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationActionType } from '../store/application/types';
import { RootApplicationState } from '../store/rootReducer';
import { Dispatch } from 'redux';
import { setDrawerVisibility } from '../store/application/actions';

export const ContentDrawer = (): JSX.Element => {
  const {
    application: { drawerVisibility },
  } = useSelector((state: RootApplicationState) => state);

  const dispatch: Dispatch<ApplicationActionType> = useDispatch();

  const treeData = [
    {
      title: 'Eletrônica Digital',
      key: '0',
      children: [
        {
          title: 'Sobre a Eletrônica',
          key: '0-0',
          children: [
            { title: 'O Que é Eletrônica?', key: '0-0-0', children: [] },
            {
              title: 'Por Que Aprender Eletrônica?',
              key: '0-0-1',
              children: [],
            },
            { title: 'Eletrônica Analógica', key: '0-0-2', children: [] },
            { title: 'Eletrônica Digital', key: '0-0-3', children: [] },
            { title: 'Componentes Eletrônicos', key: '0-0-4', children: [] },
          ],
        },
      ],
    },
    {
      title: 'Linguagem Assembly x16',
      key: '1',
      children: [
        { title: 'Sobre a Linguagem Assembly', key: '1-0', children: [] },
      ],
    },
  ];

  const onSelect = (e: any, f: any): void => {
    console.log(e);
    console.log(f);
  };

  return (
    <div>
      <Drawer
        title="Conteúdo do curso"
        placement="right"
        open={drawerVisibility}
        onClose={() => dispatch(setDrawerVisibility(false))}
      >
        <Tree
          treeData={treeData}
          showLine
          showIcon={false}
          onSelect={onSelect}
        />
      </Drawer>
    </div>
  );
};
