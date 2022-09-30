import { Tree, Drawer, Button } from 'antd';
import { useState } from 'react';

export const Content = (): JSX.Element => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <div>
      <Button onClick={() => setIsDrawerOpen(true)}>Content</Button>
      <Drawer
        title="Conteúdo do curso"
        placement="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      ></Drawer>
    </div>
  );
};
