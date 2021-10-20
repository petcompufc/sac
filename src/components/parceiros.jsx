import React from 'react';
import PropTypes from 'prop-types';
import {
  Flex,
  Heading,
  Image,
  Link,
  useColorModeValue,
}
  from '@chakra-ui/react';

function Parceiros({ id, parceiros }) {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      id={id}
      py={10}
    >
      <Heading
        color={useColorModeValue('teal.500', 'orange.400')}
        fontWeight="bold"
        textDecor="underline"
      >
        Parceiros
      </Heading>
      <Flex flexDirection={['row', 'column']}>
        {parceiros.map((parceiro) => (
          <Link
            _hover={{ transform: 'scale(1.15)' }}
            mx={5}
            href={parceiro.site}
            mt={10}
            key={parceiro.nome}
            isExternal
          >
            <Image
              alt={parceiro.nome}
              bg="white"
              borderRadius="md"
              p={3}
              src={parceiro.logo}
              size="200px"
              objectFit="contain"
            />
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}

Parceiros.defaultProps = {
  id: '',
};

Parceiros.propTypes = {
  id: PropTypes.string,
  parceiros: PropTypes.arrayOf(PropTypes.shape({
    nome: PropTypes.string,
    logo: PropTypes.string,
    site: PropTypes.string,
  })).isRequired,
};

export default Parceiros;
