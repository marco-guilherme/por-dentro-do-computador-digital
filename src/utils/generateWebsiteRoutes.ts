import {
  RelativeUrlAndPageName,
  UrlPiecesAndPageName,
} from '../store/application/types';

export const generateWebsiteRoutes = (): RelativeUrlAndPageName => {
  const path: string[] = [];
  const relativeUrl_pageName: RelativeUrlAndPageName = {};
  const urlPiecesAndPageName: UrlPiecesAndPageName = {
    '/aulas': {
      '/eletronica-digital': {
        '/sobre-eletronica': {
          '/o-que-e-eletronica': 'O Que é Eletrônica?',
          '/por-que-aprender-eletronica': 'Por Que Aprender Eletrônica?',
          '/eletronica-analogica': 'Eletrônica Analógica',
          '/eletronica-digital': 'Eletrônica Digital',
          '/componentes-eletronicos': 'Componentes Eletrônicos',
          '/datasheets': 'Datasheets',
        },
        '/revisao-de-conceitos-basicos': {
          '/tensao': 'Tensão',
          '/corrente': 'Corrente',
          '/resistencia': 'Resistência',
          '/potencia': 'Potência',
          '/circuitos': 'Circuitos',
          '/resistores': 'Resistores',
          '/capacitores': 'Capacitores',
          '/diodos': 'Diodos',
          '/transistores': 'Transistores',
          '/primeira-e-segunda-lei-de-ohm': 'Primeira e Segunda Lei de Ohm',
          '/primeira-e-segunda-lei-de-kirchhoff':
            'Primeira e Segunda Lei de Kirchhoff',
        },
        '/sistemas-de-numeracao-e-codigos': {
          '/sistemas-de-numeracao': 'Sistemas de Numeração',
          '/decimal': 'Decimal',
          '/binario': 'Binário',
          '/hexadecimal': 'Hexadecimal',
          '/octal': 'Octal',
          '/bcd': 'BCD',
          '/ascii': 'ASCII',
        },
        '/conversao-entre-sistemas-de-numeracao-e-codigos': {
          '/decimal-para-binario': 'Decimal Para Binário',
          '/decimal-para-hexadecimal': 'Decimal Para Hexadecimal',
          '/decimal-para-octal': 'Decimal Para Octal',
          '/binario-para-decimal': 'Binário Para Decimal',
          '/binario-para-hexadecimal': 'Binário Para Hexadecimal',
          '/binario-para-octal': 'Binário Para Octal',
          '/hexadecimal-para-decimal': 'Hexadecimal Para Decimal',
          '/hexadecimal-para-binario': 'Hexadecimal Para Binário',
          '/hexadecimal-para-octal': 'Hexadecimal Para Octal',
          '/octal-para-decimal': 'Octal Para Decimal',
          '/octal-para-binario': 'Octal Para Binário',
          '/octal-para-hexadecimal': 'Octal Para Hexadecimal',
        },
        '/operacoes-bit-a-bit': {
          '/mascaras': 'Máscaras',
          '/para-maiusculo-minusculo': 'Para Maiúsculo/Minúsculo',
        },
        '/numeros-de-ponto-flutuante': {
          '/conversao-de-numeros-reais-para-binario':
            'Conversão de Números Reais Para Binário',
          '/ieee-754': 'IEEE 754',
        },
        '/algebra-de-boole-e-teoremas-de-de-morgan': {
          '/teoremas-de-de-morgan': 'Teoremas de De Morgan',
          '/simplificacao': 'Simplificação',
        },
        '/chips': 'Chips',
        '/familias-logicas': 'Famílias Lógicas',
        '/portas-logicas': {
          '/portas-logicas': 'Portas Lógicas',
          '/porta-and': 'Porta AND',
          '/porta-or': 'Porta OR',
          '/porta-not': 'Porta NOT',
          '/porta-xor': 'Porta XOR',
          '/porta-xnor': 'Porta XNOR',
          '/porta-nand': 'Porta NAND',
          '/porta-nor': 'Porta NOR',
        },
        '/clock': 'Clock',
        '/cicuitos-combinacionais': 'Circuitos Combinacionais',
        '/circuitos-sequenciais': 'Circuitos Sequenciais',
        '/circuitos-aritmeticos': {
          '/circuitos-aritmeticos': 'Circuitos Aritméticos',
          '/meio-somador': 'Meio Somador',
          '/somador-completo': 'Somador Completo',
          '/meio-subtrator': 'Meio Subtrator',
          '/subtrator-completo': 'Subtrator Completo',
          '/comparador-de-magnitude': 'Comparador de Magnitude',
        },
        '/flip-flops-e-latches': {
          '/flip-flops-e-latches': 'Flip-Flops e Latches',
          '/d': 'D',
          '/t': 'T',
          '/rs': 'RS',
          '/jk': 'JK',
          '/mestre-escravo': 'Mestre-Escravo',
        },
        '/codificadoes-e-decodificadores': 'Codificadores e Decodificadores',
        '/multiplexadores-e-demultiplexadores':
          'Multiplexadores e Demultiplexadores',
        '/contadores': 'Contadores',
        '/registradores': 'Registradores',
        '/memorias': {
          '/ram': 'RAM',
          '/rom': 'ROM',
          '/prom': 'PROM',
          '/eprom': 'EPROM',
          '/eeprom': 'EEPROM',
        },
        '/microprocessadores-e-microcontroladores':
          'Microprocessadores e Microcontroladores',
      },
      '/linguagem-assembly': {
        '/linguagens-de-programacao': 'Linguagens de Programação',
        '/linguagem-assembly': 'Linguagem Assembly',
        '/assembly-ou-assembler': 'Assembly ou Assembler?',
        '/sintaxe-intel-e-at-e-t': 'Sintaxe Intel e AT&T',
        '/endianness': 'Endianness',
        '/arquitetura-x86-16': 'Arquitetura x86-16',
        '/memoria': 'Memória',
        '/instrucoes-aritmetica': 'Instruções Aritméticas',
        '/instrucoes-logicas': 'Instruções Lógicas',
        '/instrucoes-de-salto': 'Instruções de Salto',
        '/segmentacao': 'Segmentação',
        '/extensao-do-sinal': 'Extensão do Sinal',
        '/modos-de-operacao': 'Modos de Operação',
        '/interrupcoes': 'Interrupções',
        '/bios': 'BIOS',
        '/flags': 'Flags',
        '/pilha': 'Pilha',
        '/convencoes-de-chamada': 'Convenções de Chamada',
      },
      '/computador-de-8-bits': 'Computador de 8 Bits',
    },
  };

  const urlGenerator = (urlPiecesPageName: UrlPiecesAndPageName) => {
    for (const [key, value] of Object.entries(urlPiecesPageName)) {
      path.push(key);

      if (typeof value === 'object') {
        urlGenerator(value as UrlPiecesAndPageName);
      } else {
        const urlKey: string = path.join('');

        relativeUrl_pageName[urlKey] = value as string;

        path.pop();

        continue;
      }
    }

    path.pop();
  };

  urlGenerator(urlPiecesAndPageName);

  return relativeUrl_pageName;
};
