import React from 'react'

import { keyframes } from '@emotion/core'
import { Text, PseudoBox, Flex } from '@chakra-ui/core'

export default ({ children, my, ml, fontSize})=>{

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
  `


  return(
    <Flex
      ml={ml}
      my={my}
      fontSize={fontSize}
      >
      {children.split('').map((letter, index)=>(
        <PseudoBox
          animation={`${rgbT} 8s ${index*1}s infinite`}
          >
          <Text
            >
            {letter}
          </Text>
        </PseudoBox>
      ))}
    </Flex>
  )
}