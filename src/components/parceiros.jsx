import React from 'react';
import PropTypes from 'prop-types';
import {
  Heading,
  Link,
  Image,
  Flex,
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
        color="teal.500"
        fontWeight="bold"
        textDecor="underline"
      >
        Parceiros
      </Heading>
      <Flex flexDirection={['row', 'column']}>
        {parceiros.map((parceiro) => (
          <Link
            _hover={{ transform: 'scale(1.15)' }}
            mx="20px"
            href={parceiro.site}
            mt="40px"
            key={parceiro.nome}
          >
            <Image
              alt={parceiro.nome}
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
