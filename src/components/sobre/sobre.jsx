import React from 'react';
import {
  Heading,
  PseudoBox,
  Text,
}
  from '@chakra-ui/core';
import { Global } from '@emotion/core';

import GlitchingText from './glitchingText';
import grafo from '../../images/grafo.svg';

const Sobre = () => (
  <PseudoBox
    backgroundColor="cyan.500"
    bgImage="repeating-linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0.1) 75%,
      transparent 75%,
      transparent)"
    bgSize="1vh 1vh"
    p={4}
    position="relative"
    zIndex={0}
    _after={{
      content: '""',
      display: 'block',
      width: '100%',
      height: '100%',
      bgImage: `url(${grafo})`,
      bgSize: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
    }}
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
      <GlitchingText>SAC Virtual?</GlitchingText>
    </Heading>
    <Text maxW="90ch" mt={2} mb={10} mx="auto">
      Em decorrência da pandemia da COVID-19, a XV SAC será virtual, para você poder
      acompanhar no conforto da sua casa, sem o risco da pandemia. A SAC ainda contará com diversas
      palestras dos mais variados tópicos, com convidados de todo o Brasil.
      <br />
      (E não se preocupem, a VGO não foi cancelada 😉)
    </Text>
  </PseudoBox>
);

export default Sobre;
