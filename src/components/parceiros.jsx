import React from 'react';
import { Heading, Link, Image, Text, Flex, useColorMode, Divider, Box, PseudoBox } from '@chakra-ui/core';

import logo from '../images/CEOS-logo.png';

const Parceiros = () => {
  return (
    <Flex
      flexDirection='column'
      align="center"
      flexGrow={1} 
      flexShrink={1}

    >
      <Heading
        color='#00B4DB' borderBottom={{ style: 'solid', width: '2px' }}
        font-weight='bold'
        maxW={250}
      > PARCEIROS </Heading>
      <Flex
        flexDirection='row'
        mt='20px'>
            <Link transition= '0.2s' _hover={{ transform: 'scale(1.15)'}} mx='20px' href='https://cc.ufc.br/projetos-e-apoio/empresa-junior/'>
              <Image src={logo} size='150px' objectFit='contain'></Image>
            </Link>
            <Link  _hover={{ transform: 'scale(1.15)'}} mx='20px' href='https://cc.ufc.br/projetos-e-apoio/empresa-junior/'>
              <Image src={logo} size='150px' objectFit='contain'></Image>
            </Link>
            <Link _hover={{ transform: 'scale(1.15)'}} mx='20px' href='https://cc.ufc.br/projetos-e-apoio/empresa-junior/'>
              <Image src={logo} size='150px' objectFit='contain'></Image>
            </Link>
      </Flex>
    </Flex>
  );
}

export default Parceiros;

{/** testes
  import React from 'react';
import { Heading, Link, Image, Text, Flex, useColorMode, Divider, Box } from '@chakra-ui/core';

import logo from '../images/ceosLogo.png';

const Parceiros = () => {
  {const {colorMode} = useColorMode();}
  const bgColor = { Light: 'gray.100', dark: 'gray.700' };
  return(
    <Flex
      maxW='1000px'
      w='70vw'
      direction={['Column', 'Column', 'row', 'row']}
      justify='center'
      bg={bgColor[colorMode]}
      boxShadow='md'
      rounded='lg'
      p='4'>
        <Flex align='center' mx='2'>
              <Image src= '../images/ceosLogo.png' alt='ceos' size='sm'>
            <Box mx='4'>
              <Text as='h2' fontSize='xl' fontWeight='bold' mb='2'>
                Usability
              </Text>
              <Text as='h3' fontSize='lg' fontWeight='light'>
                sfdsfsdfdsf
              </Text>
            </Box>
        </Flex>
        <Divider orientation='vertical' borderColor='gray.300' my='2' />
        <Flex align='center' mx='2'>
          <Image src='../images/ceosLogo.png'/>
          <Box m='4'>
          <Text as='h2' fontSize='xl' fontWeight='bold' mb='2'>
                Usability
              </Text>
              <Text as='h3' fontSize='lg' fontWeight='light'>
                sfdsfsdfdsf
              </Text>
          </Box>
        </Flex>
    </Flex>
  );
}

export default Parceiros; */}