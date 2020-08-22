import React from 'react';
import {
  Flex,
  Heading,
  PseudoBox,
  Text }
  from '@chakra-ui/core';
import { Global, keyframes } from '@emotion/core';

/* TODO: Criação programática dos keyframes */
const glitch1 = keyframes`
  0% {
    clip-path: inset(${Math.random() * 100}% 0% ${Math.random() * 100}% 0%)
  }
  20% {
    clip-path: inset(${Math.random() * 100}% 0% ${Math.random() * 100}% 0%)
  }
  40% {
    clip-path: inset(${Math.random() * 100}% 0% ${Math.random() * 100}% 0%)
  }
  60% {
    clip-path: inset(${Math.random() * 100}% 0% ${Math.random() * 100}% 0%)
  }
  80% {
    clip-path: inset(${Math.random() * 100}% 0% ${Math.random() * 100}% 0%)
  }
  100% {
    clip-path: inset(${Math.random() * 100}% 0% ${Math.random() * 100}% 0%)
  }
`;

const glitch2 = keyframes`
  0% {
    clip-path: inset(${Math.random() * 100}% 0% ${Math.random() * 100}% 0%)
  }
  20% {
    clip-path: inset(${Math.random() * 100}% 0% ${Math.random() * 100}% 0%)
  }
  40% {
    clip-path: inset(${Math.random() * 100}% 0% ${Math.random() * 100}% 0%)
  }
  60% {
    clip-path: inset(${Math.random() * 100}% 0% ${Math.random() * 100}% 0%)
  }
  80% {
    clip-path: inset(${Math.random() * 100}% 0% ${Math.random() * 100}% 0%)
  }
  100% {
    clip-path: inset(${Math.random() * 100}% 0% ${Math.random() * 100}% 0%)
  }
`;

let e = null;

const startGlitching = () => {
  e = setInterval(() => {
    document.documentElement.style.setProperty('--clip-path-1', `inset(${Math.random() * 100}% 0% ${Math.random() * 100}% 0%)`);
    document.documentElement.style.setProperty('--clip-path-2', `inset(${Math.random() * 100}% 0% ${Math.random() * 100}% 0%)`);
  }, 150);
};

const stopGlitching = () => {
  clearInterval(e);
  document.documentElement.style.setProperty('--clip-path-1', 'inset(100% 0% 0% 0%)');
  document.documentElement.style.setProperty('--clip-path-2', 'inset(100% 0% 0% 0%)');
};

const Sobre = () => (
  <Flex direction="column" alignItems="center" backgroundColor="cyan.500">
    <Global styles={{
      ':root': {
        '--clip-path-1': 'inset(100% 0% 0% 0%)',
        '--clip-path-2': 'inset(100% 0% 0% 0%)',
      }
    }} 
    />
    <Heading size="xl" my={5}>
      Semana Acadêmica da Computação
    </Heading>
    <Text maxW="90ch" my={3}>
      A SAC é um evento anual organizado pelo PET Computação como projeto de extensão do
      Departamento de Computação da UFC. A SAC explora as diversas áreas da computação, como Data
      Science, Empreendedorismo e Desenvolvimento Web através de palestras, workshops e mesas
      redondas, onde alunos de Computação (e outras pessoas interessadas) podem aprender ou
      apresentar tópicos que lhe interessam.
    </Text>
    <Heading size="xl" my={5}>
      <PseudoBox
        display="inline"
        position="relative"
        zIndex="2"
        _before={{
          bg: 'cyan.500',
          clipPath: 'var(--clip-path-1)',
          position: 'absolute',
          bottom: 0,
          content: '"SAC Virtual?"',
          left: '2px',
          textShadow: '0 -2px #f0f',
          width: 'calc(100% + 2px)',
        }}
        _after={{
          bg: 'cyan.500',
          clipPath: 'var(--clip-path-2)',
          position: 'absolute',
          bottom: 0,
          content: '"SAC Virtual?"',
          left: '-3px',
          textShadow: '0 3px #0ff',
        }}
        onMouseEnter={startGlitching}
        onMouseLeave={stopGlitching}
      >
        SAC Virtual?
      </PseudoBox>
    </Heading>
    <Text maxW="90ch" mt={2} mb={5}>
      Em decorrência da pandemia do coronavírus, a XV SAC será virtual, para você poder
      acompanhar no conforto da sua casa, sem o risco da pandemia. A SAC ainda contará com diversas
      palestras dos mais variados tópicos, com convidados de todo o Brasil.
      <br />
      (E não se preocupem, a VGO não foi cancelada 😉)
    </Text>
  </Flex>
);

export default Sobre;
