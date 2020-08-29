import React from 'react';
import {
  Box,
  Heading,
  PseudoBox,
  Text,
}
  from '@chakra-ui/core';
import { Global } from '@emotion/core';

let e;

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
  <Box
    backgroundColor="cyan.500"
    bgImage="repeating-linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0.3) 75%,
      transparent 75%,
      transparent)"
    bgSize="1vh 1vh"
    p={4}
    position="relative"
  >
    <Global styles={{
      ':root': {
        '--clip-path-1': 'inset(100% 0% 0% 0%)',
        '--clip-path-2': 'inset(100% 0% 0% 0%)',
      },
    }}
    />
    <Heading size="xl" my={5} textAlign="center">
      Semana Acadêmica da Computação
    </Heading>
    <Text maxW="90ch" my={3} mx="auto">
      A SAC é um evento anual organizado pelo PET Computação como projeto de extensão do
      Departamento de Computação da UFC. A SAC explora as diversas áreas da computação, como Data
      Science, Empreendedorismo e Desenvolvimento Web através de palestras, workshops e mesas
      redondas, onde alunos de Computação (e outras pessoas interessadas) podem aprender ou
      apresentar tópicos que lhe interessam.
    </Text>
    <Heading size="xl" my={5} textAlign="center">
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
    <Text maxW="90ch" mt={2} mb={10} mx="auto">
      Em decorrência da pandemia da COVID-19, a XV SAC será virtual, para você poder
      acompanhar no conforto da sua casa, sem o risco da pandemia. A SAC ainda contará com diversas
      palestras dos mais variados tópicos, com convidados de todo o Brasil.
      <br />
      (E não se preocupem, a VGO não foi cancelada 😉)
    </Text>
  </Box>
);

export default Sobre;
