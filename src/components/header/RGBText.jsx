import React from 'react';
import PropTypes from 'prop-types';
import { keyframes } from '@emotion/react';
import { Box } from '@chakra-ui/react';

function RGBText({
  children,
  my,
  ml,
  fontSize,
}) {
  const rgbT = keyframes`
    0% {
      color: rgb(255, 0, 0);
      text-shadow:0px 0px 3px rgb(255, 0, 0);
    }
    16% {
      color: rgb(255, 255, 0);
      text-shadow:0px 0px 3px rgb(255, 255, 0);
    }
    34% {
      color: rgb(0, 255, 0);
      text-shadow:0px 0px 3px rgb(0, 255, 0);
    }
    50% {
      color: rgb(0, 255, 255);
      text-shadow:0px 0px 3px rgb(0, 255, 255);
    }
    66% {
      color: rgb(0, 0, 255);
      text-shadow:0px 0px 3px rgb(0, 0, 255);
    }
    84% {
      color: rgb(255, 0, 255);
      text-shadow:0px 0px 3px rgb(255, 0, 255);
    }
    100% {
      color: rgb(255, 0, 0);
      text-shadow:0px 0px 3px rgb(255, 0, 0);
    }
  `;

  return (
    <>
      {children.split('').map((letter, index) => (
        <Box
          as="span"
          key={letter}
          animation={`${rgbT} 8s ${index * 1}s infinite`}
        >
          {letter}
        </Box>
      ))}
    </>
  );
}

RGBText.propTypes = {
  children: PropTypes.string.isRequired,
};

export default RGBText;
