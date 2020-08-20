import React from 'react';
import {
  Flex,
  Heading,
  PseudoBox,
  Text }
  from '@chakra-ui/core';
import { keyframes } from '@emotion/core';

const glitch = keyframes`
  0% {
    transform: translateX(0%) translateY(0%);
  }
  20% {
    transform: translateX(-2%) translateY(-2%);
  }
  40% {
    transform: translateX(-2%) translateY(2%);
  }
  60% {
    transform: translateX(2%) translateY(-2%);
  }
  80% {
    transform: translateX(2%) translateY(2%);
  }
  100% {
    transform: translateX(0%) translateY(0%);
  }
`;

const Sobre = () => (
  <Flex direction="column" alignItems="center" backgroundColor="cyan.500">
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
      SAC
      <PseudoBox 
        display="inline"
        position="relative"
        zIndex="2"
        _before={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          content: '" Virtual?"',
          color: 'rgba(255, 0, 255, 0.6)',
          animation: `${glitch} 1s infinite`,
          zIndex: -2,
        }}
        _after={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          content: '" Virtual?"',
          color: 'rgba(0, 255, 255, 0.6)',
          animation: `${glitch} 1s .4s infinite`,
          zIndex: -1,
        }}
      >
        &nbsp;Virtual?
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
