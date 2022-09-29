import { Tree } from 'antd';

export const Content = (): JSX.Element => {
  const treeData = [
    {
      title: 'Eletrônica Digital',
      key: 'de',
      children: [
        { title: 'Portas Lógicas', key: 'lg' },
        { title: 'Registradores', key: 'reg' },
      ],
    },
    {
      title: 'Linguagem Assembly x16',
      key: 'asm',
      children: [{ title: 'Instruções', key: 'inst' }],
    },
  ];

  return (
    <div className="grid-container">
      <main className="main-content">
        <h1>Portas Lógicas</h1>
        <p>A porta lógica AND bla bla bla</p>
        <iframe
          src="https://circuitverse.org/simulator/embed/hello-world-02cbd5bf-29e0-4c20-a2a7-947c1639f114?theme=default&display_title=false&clock_time=true&fullscreen=true&zoom_in_out=true"
          name="myiframe"
          id="projectPreview"
          scrolling="no"
          frameBorder="1"
          height="500"
          width="500"
          allowFullScreen
        ></iframe>
      </main>
      <aside className="aside-content">
        <h2>Conteúdo do curso</h2>
        <Tree
          className="tree-content"
          treeData={treeData}
          defaultExpandAll
          onClick={e => console.log(e)}
        />
      </aside>
    </div>
  );
};
