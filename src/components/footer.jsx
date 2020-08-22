import PropTypes from 'prop-types';
import React from 'react';

import { 
  Box,
  Grid,
  Image,
  Text,
  ThemeProvider,
  List,
  ListItem,
  Link,
  Stack, 
  Flex,
} from '@chakra-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

import pet_logo from '../images/logo-pet.png';
import dc_logo from '../images/logo_dc.png';
import ufc_logo from '../images/logo_ufc.png';

export default function Footer() {

  const [width, setWidth] = React.useState(innerWidth);
  React.useEffect(() => {
    window.addEventListener('resize', () =>{
      setWidth(innerWidth);
    })
  });

  return (
    <ThemeProvider>
      <Box 
        bg="#555555"
        overflow="hidden"
        maxW="960"
        padding="1.45rem 1.0875rem"
        color="#fff"
        w="100%"
      > 
        <Grid
          maxW="1280px"
          w="90%"
          mx="auto"
          fontSize="16px"
          fontFamily="Open Sans"
          templateColumns={width>900? 'repeat(3, 1fr)' : width>600? 'repeat(2, 1fr' : 'repeat(1, 1fr)'}
          justifyContent="space-evenly"
          >
            
          <Box 
            mx = "auto"
            float="left"   
            boxSizing="border-box"
            >
              <Image 
                maxW="300px"
                w="90%"
                float="left"   
                src={pet_logo} 
                alt="Logo do pet branca." />

              <List 
                float="left"
                minH="1px"
                spacing="1"
                fontSize="16px"
                m="15px 0 0 60px"
                fontWeight="lighter" >
                <ListItem>Av. Humberto Monte, s/n</ListItem>
                <ListItem marginTop="-10px">UFC - Campus do Pici</ListItem>
                <ListItem marginTop="-10px">Departamento de Computação</ListItem>
                <ListItem marginTop="-10px">Bloco 910</ListItem>
              </List>
          </Box>

          <Box mx="auto" float="left" h="200px">
            <Grid  mx="auto" h="80px" templateColumns="repeat(3, 1fr)" gap={1}>
              <Link href='https://github.com/petcompufc' style={{ transition: '0.2s' }} _hover={{ transform: 'scale(1.15)' }} fontSize="25px" isExternal color="white" marginLeft="50px" ><FontAwesomeIcon icon={faGithub}/></Link>
              <Link href='https://www.facebook.com/PETCompUFC/' style={{ transition: '0.2s' }} _hover={{ transform: 'scale(1.15)' }} fontSize="25px"  isExternal color="white" marginLeft="50px"><FontAwesomeIcon icon={faFacebook}/></Link>
              <Link href="https://www.instagram.com/petcompufc" style={{ transition: '0.2s' }} _hover={{ transform: 'scale(1.15)' }} fontSize="25px"  isExternal color="white" marginLeft="50px"><FontAwesomeIcon icon={faInstagram} /></Link>
              <Link href="https://www.youtube.com/user/petcompufc/videos" style={{ transition: '0.2s' }} _hover={{ transform: 'scale(1.15)' }} fontSize="25px" isExternal color="white" marginLeft="50px"><FontAwesomeIcon icon={faYoutube} /></Link>
              <Link href="mailto:petcomp@ufc.br" style={{ transition: '0.2s' }} _hover={{ transform: 'scale(1.15)' }} fontSize="25px" isExternal color="white" marginLeft="50px"><FontAwesomeIcon icon={faMailBulk}/></Link>
              <Link href="http://www.petcomp.ufc.br/" style={{ transition: '0.2s' }} _hover={{ transform: 'scale(1.15)' }} fontSize="25px" isExternal color="white" marginLeft="50px"><FontAwesomeIcon icon={faGlobe}/></Link>
            </Grid>
            
            <Text fontWeight="bold" fontSize="24px">Sobre o PET</Text>
            <Text fontSize="13px" textAlign="justify">O PET Computação é um programa organizado por alguns alunos do curso de Ciência da Computação que promove eventos e projetos que possam disseminar o conhecimento sobre a área para todos.</Text>
          </Box>

          <Stack mx = "auto">
            <Link mx='auto' my="20px" w='90%' maxW='300px' href="http://www.ufc.br/" isExternal><Image src={ufc_logo} /></Link>
            <Link mx='auto' my="10px" w='85%' maxW='275px' href="https://dc.ufc.br/pt/" isExternal><Image src={dc_logo} /></Link>
          </Stack>
      </Grid>
    </Box>
   </ThemeProvider>
  );
}

