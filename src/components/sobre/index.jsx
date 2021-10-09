import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import GlitchingText from './glitchingText';
import grafo from '../../images/grafo.svg';
import publico from '../../images/publico.jpg';

function Sobre({ id }) {
  return (
    <Box
      bgImage={`url(${publico})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
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
        bgColor: useColorModeValue('cyan.500', 'cyan.800'),
        opacity: '82%',
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
