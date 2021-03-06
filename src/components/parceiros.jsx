import React from 'react';
import PropTypes from 'prop-types';
import {
  Heading,
  Link,
  Image,
  Flex,
}
  from '@chakra-ui/core';

const Parceiros = ({ id, parceiros }) => (
  <Flex
    flexDirection="column"
    alignItems="center"
    id={id}
    py={10}
  >
    <Heading
      color="teal.500"
      font-weight="bold"
      textDecor="underline"
    >
      Parceiros
    </Heading>
    <Flex
      flexDirection={{
        md: 'row',
        base: 'column',
      }}
    >
      {
          parceiros.map((parceiro) => (
            <Link
              _hover={{ transform: 'scale(1.15)' }}
              mx="20px"
              href={parceiro.site}
              mt="40px"
            >
              <Image
                alt={parceiro.nome}
                src={parceiro.logo}
                size="200px"
                objectFit="contain"
              />
            </Link>
          ))
        }
    </Flex>
  </Flex>
);

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
