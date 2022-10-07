import { Tree, Drawer, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationActionType } from '../store/application/types';
import { RootApplicationState } from '../store/rootReducer';
import { Dispatch } from 'redux';
import { setDrawerVisibility } from '../store/application/actions';
import { useNavigate } from 'react-router-dom';
import { Key } from 'rc-tree/lib/interface';

export const TreeDrawer = (): JSX.Element => {
  const {
    application: { drawerVisibility },
  } = useSelector((state: RootApplicationState) => state);

  const dispatch: Dispatch<ApplicationActionType> = useDispatch();

  const navigate = useNavigate();

  const treeData = [
    {
      title: 'Eletrônica Digital',
      key: '0',
      children: [
        {
          title: 'Sobre a Eletrônica',
          key: '0-0',
          children: [
            {
              title: 'O Que é Eletrônica?',
              key: '/aulas/eletronica-digital/sobre-eletronica/o-que-e-eletronica',
              children: [],
            },
            {
              title: 'Por Que Aprender Eletrônica?',
              key: '/aulas/eletronica-digital/sobre-eletronica/por-que-aprender-eletronica',
              children: [],
            },
            { title: 'Eletrônica Analógica', key: '0-0-2', children: [] },
            { title: 'Eletrônica Digital', key: '0-0-3', children: [] },
            { title: 'Componentes Eletrônicos', key: '0-0-4', children: [] },
          ],
        },
        {
          title: 'Portas Lógicas',
          key: '/aulas/eletronica-digital/portas-logicas',
          children: [
            {
              title: 'Porta AND',
              key: '/aulas/eletronica-digital/portas-logicas/porta-and',
              children: [],
            },
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

  const onSelect = (selectedKeys: Key[]): void => {
    if (!selectedKeys.length) {
      return;
    }

    const selectedKey: Key = selectedKeys[0].toString();

    if (selectedKey.includes('/')) {
      navigate(selectedKey);
    }
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
          defaultExpandAll
          onSelect={onSelect}
        />
      </Drawer>
    </div>
  );
};
