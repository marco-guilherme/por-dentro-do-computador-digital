import { Tree, Drawer } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationActionType } from '../store/application/types';
import { RootApplicationState } from '../store/rootReducer';
import { Dispatch } from 'redux';
import { setDrawerVisibility } from '../store/application/actions';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Key } from 'rc-tree/lib/interface';

export const TreeDrawer = (): JSX.Element => {
  const {
    application: { drawerVisibility },
  } = useSelector((state: RootApplicationState) => state);

  const dispatch: Dispatch<ApplicationActionType> = useDispatch();

  const navigate: NavigateFunction = useNavigate();

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
            {
              title: 'Eletrônica Analógica',
              key: '/aulas/eletronica-digital/sobre-eletronica/eletronica-analogica',
              children: [],
            },
            {
              title: 'Eletrônica Digital',
              key: '/aulas/eletronica-digital/sobre-eletronica/eletronica-digital',
              children: [],
            },
            {
              title: 'Componentes Eletrônicos',
              key: '/aulas/eletronica-digital/sobre-eletronica/componentes-eletronicos',
              children: [],
            },
            {
              title: 'Datasheets',
              key: '/aulas/eletronica-digital/sobre-eletronica/datasheets',
              children: [],
            },
          ],
          selectable: false,
        },
        {
          title: 'Revisão de Conceitos Básicos',
          key: '0-1',
          children: [
            {
              title: 'Tensão',
              key: '/aulas/eletronica-digital/revisao-de-conceitos-basicos/tensao',
              children: [],
            },
            {
              title: 'Corrente',
              key: '/aulas/eletronica-digital/revisao-de-conceitos-basicos/corrente',
              children: [],
            },
            {
              title: 'Resistência',
              key: '/aulas/eletronica-digital/revisao-de-conceitos-basicos/resistencia',
              children: [],
            },
            {
              title: 'Potência',
              key: '/aulas/eletronica-digital/revisao-de-conceitos-basicos/potencia',
              children: [],
            },
            {
              title: 'Circuitos',
              key: '/aulas/eletronica-digital/revisao-de-conceitos-basicos/circuitos',
              children: [],
            },
            {
              title: 'Resistores',
              key: '/aulas/eletronica-digital/revisao-de-conceitos-basicos/resistores',
              children: [],
            },
            {
              title: 'Capacitores',
              key: '/aulas/eletronica-digital/revisao-de-conceitos-basicos/capacitores',
              children: [],
            },
            {
              title: 'Diodos',
              key: '/aulas/eletronica-digital/revisao-de-conceitos-basicos/diodos',
              children: [],
            },
            {
              title: 'Transistores',
              key: '/aulas/eletronica-digital/revisao-de-conceitos-basicos/transistores',
              children: [],
            },
            {
              title: 'Primeira e Segunda Lei de Ohm',
              key: '/aulas/eletronica-digital/revisao-de-conceitos-basicos/primeira-e-segunda-lei-de-ohm',
              children: [],
            },
            {
              title: 'Primeira e Segunda Lei de Kirchhoff',
              key: '/aulas/eletronica-digital/revisao-de-conceitos-basicos/primeira-e-segunda-lei-de-kirchhoff',
              children: [],
            },
          ],
        },
        {
          title: 'Sistemas de Numeração e Códigos',
          key: '0-2',
          children: [
            {
              title: 'Decimal',
              key: '/aulas/eletronica-digital/sistemas-numericos-e-codigos/decimal',
              children: [],
            },
            {
              title: 'Binário',
              key: '/aulas/eletronica-digital/sistemas-numericos-e-codigos/binario',
              children: [],
            },
            {
              title: 'Hexadecimal',
              key: '/aulas/eletronica-digital/sistemas-numericos-e-codigos/hexadecimal',
              children: [],
            },
            {
              title: 'Octal',
              key: '/aulas/eletronica-digital/sistemas-numericos-e-codigos/octal',
              children: [],
            },
            {
              title: 'BCD',
              key: '/aulas/eletronica-digital/sistemas-numericos-e-codigos/bcd',
              children: [],
            },
            {
              title: 'ASCII',
              key: '/aulas/eletronica-digital/sistemas-numericos-e-codigos/ascii',
              children: [],
            },
          ],
        },
        {
          title: 'Conversão Entre Sistemas de Numeração e Códigos',
          key: '0-3',
          children: [
            {
              title: 'Decimal Para Binário',
              key: '/aulas/eletronica-digital/conversao-entre-sistemas-de-numeracao-e-codigos/decimal-para-binario',
              children: [],
            },
            {
              title: 'Decimal Para Hexadecimal',
              key: '/aulas/eletronica-digital/conversao-entre-sistemas-de-numeracao-e-codigos/decimal-para-hexadecimal',
              children: [],
            },
            {
              title: 'Decimal Para Octal',
              key: '/aulas/eletronica-digital/conversao-entre-sistemas-de-numeracao-e-codigos/decimal-para-octal',
              children: [],
            },
            {
              title: 'Binário Para Decimal',
              key: '/aulas/eletronica-digital/conversao-entre-sistemas-de-numeracao-e-codigos/binario-para-decimal',
              children: [],
            },
            {
              title: 'Binário Para Hexadecimal',
              key: '/aulas/eletronica-digital/conversao-entre-sistemas-de-numeracao-e-codigos/binario-para-hexadecimal',
              children: [],
            },
            {
              title: 'Binário Para Octal',
              key: '/aulas/eletronica-digital/conversao-entre-sistemas-de-numeracao-e-codigos/binario-para-octal',
              children: [],
            },
            {
              title: 'Hexadecimal Para Decimal',
              key: '/aulas/eletronica-digital/conversao-entre-sistemas-de-numeracao-e-codigos/hexadecimal-para-decimal',
              children: [],
            },
            {
              title: 'Hexadecimal Para Binário',
              key: '/aulas/eletronica-digital/conversao-entre-sistemas-de-numeracao-e-codigos/hexadecimal-para-binario',
              children: [],
            },
            {
              title: 'Hexadecimal Para Octal',
              key: '/aulas/eletronica-digital/conversao-entre-sistemas-de-numeracao-e-codigos/hexadecimal-para-octal',
              children: [],
            },
            {
              title: 'Octal Para Decimal',
              key: '/aulas/eletronica-digital/conversao-entre-sistemas-de-numeracao-e-codigos/octal-para-decimal',
              children: [],
            },
            {
              title: 'Octal Para Binário',
              key: '/aulas/eletronica-digital/conversao-entre-sistemas-de-numeracao-e-codigos/octal-para-binario',
              children: [],
            },
            {
              title: 'Octal Para Hexadecimal',
              key: '/aulas/eletronica-digital/conversao-entre-sistemas-de-numeracao-e-codigos/octal-para-hexadecimal',
              children: [],
            },
          ],
        },
        {
          title: 'Operações Bit a Bit',
          key: '0-4',
          children: [
            {
              title: 'Máscaras',
              key: '/aulas/eletronica-digital/operacoes-bit-a-bit/mascaras',
              children: [],
            },
            {
              title: 'Para Maiúsculo/Minúsculo',
              key: '/aulas/eletronica-digital/operacoes-bit-a-bit/para-maiusculo-minusculo',
              children: [],
            },
          ],
        },
        {
          title: 'Números de Ponto Flutuante',
          key: '0-5',
          children: [
            {
              title: 'Conversão de Números Reais Para Binário',
              key: '/aulas/eletronica-digital/numeros-de-ponto-flutuante/conversao-de-numeros-reais-para-binario',
              children: [],
            },
            {
              title: 'IEEE 754',
              key: '/aulas/eletronica-digital/numeros-de-ponto-flutuante/ieee-754',
              children: [],
            },
          ],
        },
        {
          title: 'Álgebra de Boole e Teoremas de De Morgan',
          key: '0-6',
          children: [
            {
              title: 'Teoremas de De Morgan',
              key: '/aulas/eletronica-digital/algebra-de-boole-e-teoremas-de-de-morgan/teoremas-de-de-morgan',
              children: [],
            },
            {
              title: 'Simplificação',
              key: '/aulas/eletronica-digital/algebra-de-boole-e-teoremas-de-de-morgan/simplificacao',
              children: [],
            },
          ],
        },
        {
          title: 'Chips',
          key: '/aulas/eletronica-digital/chips',
          children: [],
        },
        {
          title: 'Famílias Lógicas',
          key: '/aulas/eletronica-digital/familias-logicas',
          children: [],
        },
        {
          title: 'Portas Lógicas',
          key: '0-7',
          children: [
            {
              title: 'Portas Lógicas',
              key: '/aulas/eletronica-digital/portas-logicas',
              children: [],
            },
            {
              title: 'Porta AND',
              key: '/aulas/eletronica-digital/portas-logicas/porta-and',
              children: [],
            },
            {
              title: 'Porta OR',
              key: '/aulas/eletronica-digital/portas-logicas/porta-or',
              children: [],
            },
            {
              title: 'Porta NOT',
              key: '/aulas/eletronica-digital/portas-logicas/porta-not',
              children: [],
            },
            {
              title: 'Porta XOR',
              key: '/aulas/eletronica-digital/portas-logicas/porta-xor',
              children: [],
            },
            {
              title: 'Porta XNOR',
              key: '/aulas/eletronica-digital/portas-logicas/porta-xnor',
              children: [],
            },
            {
              title: 'Porta NAND',
              key: '/aulas/eletronica-digital/portas-logicas/porta-nand',
              children: [],
            },
            {
              title: 'Porta NOR',
              key: '/aulas/eletronica-digital/portas-logicas/porta-nor',
              children: [],
            },
          ],
        },
        {
          title: 'Clock ',
          key: '/aulas/eletronica-digital/clock',
          children: [],
        },
        {
          title: 'Circuitos Combinacionais',
          key: '/aulas/eletronica-digital/cicuitos-combinacionais',
          children: [],
        },
        {
          title: 'Circuitos Sequenciais',
          key: '/aulas/eletronica-digital/circuitos-sequenciais',
          children: [],
        },
        {
          title: 'Circuitos Aritméticos',
          key: '0-8',
          children: [
            {
              title: 'Circuitos Aritméticos',
              key: '/aulas/eletronica-digital/circuitos-aritmeticos',
              children: [],
            },
            {
              title: 'Meio Somador',
              key: '/aulas/eletronica-digital/circuitos-aritmeticos/meio-somador',
              children: [],
            },
            {
              title: 'Somador Completo',
              key: '/aulas/eletronica-digital/circuitos-aritmeticos/somador-completo',
              children: [],
            },
            {
              title: 'Meio Subtrator',
              key: '/aulas/eletronica-digital/circuitos-aritmeticos/meio-subtrator',
              children: [],
            },
            {
              title: 'Subtrator Completo',
              key: '/aulas/eletronica-digital/circuitos-aritmeticos/subtrator-completo',
              children: [],
            },
            {
              title: 'Comparador de Magnitude',
              key: '/aulas/eletronica-digital/circuitos-aritmeticos/comparador-de-magnitude',
              children: [],
            },
          ],
        },
        {
          title: 'Flip-Flop e Latch',
          key: '0-9',
          children: [
            {
              title: 'D',
              key: '/aulas/eletronica-digital/flip-flop-e-latch/d',
              children: [],
            },
            {
              title: 'T',
              key: '/aulas/eletronica-digital/flip-flop-e-latch/t',
              children: [],
            },
            {
              title: 'RS',
              key: '/aulas/eletronica-digital/flip-flop-e-latch/rs',
              children: [],
            },
            {
              title: 'JK',
              key: '/aulas/eletronica-digital/flip-flop-e-latch/jk',
              children: [],
            },
            {
              title: 'Mestre-Escravo',
              key: '/aulas/eletronica-digital/flip-flop-e-latch/mestre-escravo',
              children: [],
            },
          ],
        },
        {
          title: 'Codificadores e Decodificadores',
          key: '0-10',
          children: [],
        },
        {
          title: 'Multiplexadores e Demultiplexadores',
          key: '0-11',
          children: [],
        },
        {
          title: 'Contadores',
          key: '0-12',
          children: [],
        },
        {
          title: 'Registradores',
          key: '0-13',
          children: [],
        },
        {
          title: 'Memórias',
          key: '0-14',
          children: [
            {
              title: 'RAM',
              key: '/aulas/eletronica-digital/memorias/ram',
              children: [],
            },
            {
              title: 'ROM',
              key: '/aulas/eletronica-digital/memorias/rom',
              children: [],
            },
            {
              title: 'PROM',
              key: '/aulas/eletronica-digital/memorias/prom',
              children: [],
            },
            {
              title: 'EPROM',
              key: '/aulas/eletronica-digital/memorias/eprom',
              children: [],
            },
            {
              title: 'EEPROM',
              key: '/aulas/eletronica-digital/memorias/eeprom',
              children: [],
            },
          ],
        },
        {
          title: 'Microprocessadores e Microcontroladores',
          key: '0-15',
          children: [],
        },
      ],
      selectable: false,
    },
    {
      title: 'Linguagem Assembly x86-16',
      key: '1',
      children: [
        {
          title: 'Linguagens de Programação',
          key: '/aulas/linguagem-assembly/linguagens-de-programacao',
          children: [],
        },
        {
          title: 'Linguagem Assembly',
          key: '/aulas/linguagem-assembly/linguagem-assembly',
          children: [],
        },
        {
          title: 'Assembly ou Assembler?',
          key: '/aulas/linguagem-assembly/assembly-ou-assembler',
          children: [],
        },
        {
          title: 'Sintaxe Intel e AT&T',
          key: '/aulas/linguagem-assembly/sintaxe-intel-e-at-e-t',
          children: [],
        },
        {
          title: 'Endianness',
          key: '/aulas/linguagem-assembly/endianness',
          children: [],
        },
        {
          title: 'Arquitetura x86-16',
          key: '/aulas/linguagem-assembly/arquitetura-x86-16',
          children: [],
        },
        {
          title: 'Memória',
          key: '/aulas/linguagem-assembly/memória',
          children: [],
        },
        {
          title: 'Ponteiros',
          key: '/aulas/linguagem-assembly/ponteiros',
          children: [],
        },
        {
          title: 'Instruções Aritméticas',
          key: '/aulas/linguagem-assembly/instrucoes-aritmeticas',
          children: [],
        },
        {
          title: 'Instruções Lógicas',
          key: '/aulas/linguagem-assembly/instrucoes-logicas',
          children: [],
        },
        {
          title: 'Instruções de Salto',
          key: '/aulas/linguagem-assembly/instrucoes-de-salto',
          children: [],
        },
        {
          title: 'Segmentação',
          key: '/aulas/linguagem-assembly/segmentacao',
          children: [],
        },
        {
          title: 'Extensão do Sinal',
          key: '/aulas/linguagem-assembly/extensao-do-sinal',
          children: [],
        },
        {
          title: 'Modos de Operação',
          key: '/aulas/linguagem-assembly/modos-de-operacao',
          children: [],
        },
        {
          title: 'Interrupções',
          key: '/aulas/linguagem-assembly/interrupcoes',
          children: [],
        },
        {
          title: 'BIOS',
          key: '/aulas/linguagem-assembly/bios',
          children: [],
        },
        {
          title: 'Flags',
          key: '/aulas/linguagem-assembly/flags',
          children: [],
        },
        {
          title: 'Pilha',
          key: '/aulas/linguagem-assembly/pilha',
          children: [],
        },
        {
          title: 'Convenções de Chamada',
          key: '/aulas/linguagem-assembly/convencoes-de-chamada',
          children: [],
        },
      ],
      selectable: false,
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
