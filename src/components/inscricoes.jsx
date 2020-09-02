import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '@chakra-ui/core';

const Inscricoes = ({ id }) => (
  <Heading size="lg" id={id}>
    Inscrições
  </Heading>
);

Inscricoes.defaultProps = {
  id: '',
};

Inscricoes.propTypes = {
  id: PropTypes.string,
};

export default Inscricoes;
