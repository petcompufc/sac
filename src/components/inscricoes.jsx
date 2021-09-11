import React from 'react';
import PropTypes from 'prop-types';
import {
  Heading, Icon, Link, List, ListItem,
} from '@chakra-ui/react';

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

      <List maxW="2xl" mx="auto">
        <ListItem>
          <Heading size="lg" my={2}>Palestras:</Heading>
          <Link href="https://forms.gle/SMUFcW1xvw6jgGmp6" isExternal>
            Inscreva-se
            <Icon ml={1} name="external-link" />
          </Link>
        </ListItem>
        <ListItem>
          <Heading size="lg" my={2}>VGO:</Heading>
          <Link href="https://forms.gle/gDRgR6dLXiRFnFxFA" isExternal>
            Inscreva-se
            <Icon ml={1} name="external-link" />
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
