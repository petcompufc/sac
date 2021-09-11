import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
import { Global } from '@emotion/react';

function GlitchingText({ children }) {
  let glitch;

  function startGlitching(e) {
    glitch = setInterval(() => {
      e.target.style.setProperty('--clip-path-1', `inset(${Math.random() * 100}% 0% ${Math.random() * 100}% 0%)`);
      e.target.style.setProperty('--clip-path-2', `inset(${Math.random() * 100}% 0% ${Math.random() * 100}% 0%)`);
    }, 150);
  }

  function stopGlitching(e) {
    clearInterval(glitch);
    e.target.style.setProperty('--clip-path-1', 'inset(100% 0% 0% 0%)');
    e.target.style.setProperty('--clip-path-2', 'inset(100% 0% 0% 0%)');
  }

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
      <Box
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
        onMouseEnter={(e) => { startGlitching(e); }}
        onMouseLeave={(e) => { stopGlitching(e); }}
      >
        {children}
      </Box>
    </>
  );
}

GlitchingText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlitchingText;
