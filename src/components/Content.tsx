import { Tree, Drawer, Button } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Content = (): JSX.Element => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
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
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
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
