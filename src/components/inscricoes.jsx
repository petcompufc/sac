import React from 'react';
import PropTypes from 'prop-types';
import {
  Heading, Icon, Link, List, ListItem,
} from '@chakra-ui/react';
import {
  FaExternalLinkSquareAlt,
} from 'react-icons/fa';

function Inscricoes({ id }) {
  return (
    <>
      <Heading
        color="teal.500"
        id={id}
        my={3}
        size="xl"
        textAlign="center"
        textDecor="underline"
      >
        Inscrições
      </Heading>

      <List
        maxW={['100vw', '40vw']}
        d="flex"
        justifyContent="space-between"
        flexDirection={['column', 'row']}
        mx="auto"
      >
        <ListItem textAlign="center">
          <Heading size="lg" my={2}>Palestras:</Heading>
          <Link href="https://forms.gle/SMUFcW1xvw6jgGmp6" isExternal>
            Inscreva-se
            <Icon as={FaExternalLinkSquareAlt} ml={1} role="presentation" />
          </Link>
        </ListItem>
        <ListItem textAlign="center" ml="2rem" mr="2rem">
          <Heading size="lg" my={2}>VGO:</Heading>
          <Link href="https://forms.gle/gDRgR6dLXiRFnFxFA" isExternal>
            Inscreva-se
            <Icon as={FaExternalLinkSquareAlt} ml={1} role="presentation" />
          </Link>
        </ListItem>
      </List>
    </>
  );
}

Inscricoes.defaultProps = {
  id: '',
};

Inscricoes.propTypes = {
  id: PropTypes.string,
};

export default Inscricoes;
