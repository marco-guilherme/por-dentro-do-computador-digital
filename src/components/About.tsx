import unipAraraquara from '../images/unip-araraquara.jpg';

export const About = (): JSX.Element => {
  return (
    <div className="site-content-wrapper">
      <h1>Sobre Este Site</h1>
      <div className="site-content">
        <p>
          Este site foi desenvolvido por Marco Guilherme como Trabalho de
          Conclusão de Curso (TCC) para obtenção do título de graduação em
          Ciência da Computação (bacharelado). Ele será apresentado à
          Universidade Paulista – UNIP, campus Araraquara.
        </p>
        <br />
        <p style={{ textAlign: 'right' }}>São Carlos, 2022</p>
        <div className="site-image">
          <img
            src={unipAraraquara}
            alt="Universidade Paulista - UNIP, campus Araraquara"
            style={{ width: '60vw' }}
          />
        </div>
      </div>
    </div>
  );
};
