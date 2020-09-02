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
    align="center"
    flexGrow={1}
    flexShrink={1}
    id={id}
    paddingBottom={5}
    paddingTop={10}
  >
    <Heading
      color="teal.500"
      borderBottom={{ style: 'solid', width: '2px' }}
      font-weight="bold"
      maxW={250}
    >
      PARCEIROS
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
    logo: PropTypes.string,
    site: PropTypes.string,
  })).isRequired,
};

export default Parceiros;
