import React from 'react';
import PropTypes from 'prop-types';
import { PseudoBox } from '@chakra-ui/core';
import { Global } from '@emotion/core';

const GlitchingText = ({ children }) => {
  let e;

  function startGlitching() {
    e = setInterval(() => {
      document.documentElement.style.setProperty('--clip-path-1', `inset(${Math.random() * 100}% 0% ${Math.random() * 100}% 0%)`);
      document.documentElement.style.setProperty('--clip-path-2', `inset(${Math.random() * 100}% 0% ${Math.random() * 100}% 0%)`);
    }, 150);
  }

  function stopGlitching() {
    clearInterval(e);
    document.documentElement.style.setProperty('--clip-path-1', 'inset(100% 0% 0% 0%)');
    document.documentElement.style.setProperty('--clip-path-2', 'inset(100% 0% 0% 0%)');
  };

  return (
  <>
    <Global 
      styles={{
        ':root': {
          '--clip-path-1': 'inset(100% 0% 0% 0%)',
          '--clip-path-2': 'inset(100% 0% 0% 0%)',
        },
      }}
    />
    <PseudoBox
      display="inline"
      position="relative"
      zIndex="2"
      _before={{
        bg: 'cyan.500',
        clipPath: 'var(--clip-path-1)',
        position: 'absolute',
        bottom: 0,
        content: `"${children}"`,
        left: '2px',
        textShadow: '0 -2px #f0f',
        width: 'calc(100% + 2px)',
      }}
      _after={{
        bg: 'cyan.500',
        clipPath: 'var(--clip-path-2)',
        position: 'absolute',
        bottom: 0,
        content: `"${children}"`,
        left: '-3px',
        textShadow: '0 3px #0ff',
      }}
      onMouseEnter={startGlitching}
      onMouseLeave={stopGlitching}
    >
      {children}
    </PseudoBox>
  </>
  )
}

GlitchingText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlitchingText;
