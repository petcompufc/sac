import React from 'react';
import PropTypes from 'prop-types';
import {
  Heading,
  Box,
  Text,
} from '@chakra-ui/react';

import GlitchingText from './glitchingText';
import grafo from '../../images/grafo.svg';

function Sobre({ id }) {
  return (
    <Box
      backgroundColor="orange.500"
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
      id={id}
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
      <Heading as="h1" size="xl" my={5} textAlign="center">
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
        <GlitchingText>SAC Virtual de novo?</GlitchingText>
      </Heading>
      <Text maxW="90ch" mt={2} mb={10} mx="auto">
        Calma jovem padawan...A pandemia da COVID-19 ainda não acabou, por isso a SAC será virtual
        novamente, assim você pode acompanhar no conforto da sua casa, sem o risco da pandemia.
        A SAC deste ano será ainda mais dinâmica e ainda contará com diversas palestras dos mais
        variados tópicos (pensados de acordo com os pedidos dos estudantes😉 ), com convidados
        de todo o Brasil.
        <br />
        Vale lembrar que a VGO vem com tudo esse ano, com diversos campeonatos com os 3 jogos
        mais votados.
      </Text>
    </Box>
  );
}

Sobre.defaultProps = {
  id: '',
};

Sobre.propTypes = {
  id: PropTypes.string,
};

export default Sobre;
