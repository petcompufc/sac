import PropTypes from 'prop-types';
import React from 'react';

import { 
  Box,
  Image,
  Text,
  ThemeProvider,
  List,
  ListItem,
  Link,
  Stack, 
  IconButton,
} from '@chakra-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGithub, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

import pet_logo from '../images/logo_pet-white.png';
import dc_logo from '../images/logo_dc.png';
import ufc_logo from '../images/logo_ufc.png';

export default function Footer() {
  return (
    <ThemeProvider>
    <Box 
      bg="#555555"
      overflow="hidden"
      minH="100%"
      maxW="960"
      padding="1.45rem 1.0875rem"
      color="#fff"
      w="100%"
     
    > 
      <Box
        w="80%"
        m="0 auto"
        boxSizing="inherit"
        fontSize="14px"
        fontFamily="Open Sans"
        >
        
      <Box 
        w="36%" 
        float="left"   
        boxSizing="border-box" 
        marginLeft="auto" >
        <Text fontSize="18px" fontWeight="bold" textAlign="center" marginBottom="5px">Realização</Text>
        <Image 
          maxW="200px"
          minW="32px"
          float="left"   
          w={['32px, 64px, 128px, 200px']}
          h={['32px, 64px, 128px, 200px']}
          src={pet_logo} 
          alt="Logo do pet branca." />
        <List 
          minH="1px"
          spacing="1"
          fontWeight="lighter" >
          <ListItem fontSize="18px" fontWeight="bold" >PET COMPUTAÇÃO</ListItem>
          <ListItem>Av. Humberto Monte, s/n</ListItem>
          <ListItem marginTop="-10px">UFC - Campus do Pici</ListItem>
          <ListItem marginTop="-10px">Departamento de Computação</ListItem>
          <ListItem marginTop="-10px">Bloco 910</ListItem>
        </List>
      </Box>

        <List 
        w="25%"  
        float="left" 
        minH="1px"
        spacing="1"
        fontSize="15px"
         >
          <Text fontSize="18px" fontWeight="bold" textAlign="center">Contato</Text>
          <ListItem >
            <Link href='https://github.com/petcompufc' fontSize="25px" isExternal color="white" marginLeft="50px" ><FontAwesomeIcon icon={faGithub}/></Link> Github
          </ListItem>
          <ListItem marginTop="-5px">
            <Link href='https://www.facebook.com/PETCompUFC/' fontSize="25px"  isExternal color="white" marginLeft="50px"><FontAwesomeIcon icon={faFacebookF}/></Link> Facebook
          </ListItem>
          <ListItem marginTop="-5px">
            <Link href="https://www.instagram.com/petcompufc" fontSize="25px"  isExternal color="white" marginLeft="50px"><FontAwesomeIcon icon={faInstagram} /></Link> Instagram
          </ListItem>
          <ListItem marginTop="-5px">
            <Link href="https://www.youtube.com/user/petcompufc/videos" fontSize="25px" isExternal color="white" marginLeft="50px"><FontAwesomeIcon icon={faYoutube} /></Link> Youtube
          </ListItem>
          <ListItem marginTop="-5px"> 
            <Link href="mailto:petcomp@ufc.br" fontSize="25px" isExternal color="white" marginLeft="50px"><FontAwesomeIcon icon={faMailBulk}/></Link> Email
          </ListItem>
          <ListItem marginTop="-5px"> 
            <Link href="http://www.petcomp.ufc.br/" fontSize="25px" isExternal color="white" marginLeft="50px"><FontAwesomeIcon icon={faGlobe}/></Link> Site
          </ListItem>
        </List>

        <Box 
        w="33%" 
        marginLeft="auto" >
          <Text fontSize="18px" fontWeight="bold" >Apoio institucional</Text>
          <Link href="http://www.ufc.br/" isExternal><Image m="14px 0px 16px 0px" maxW="70%" maxH="90px" display="inline-block" src={ufc_logo} /></Link>
          <Link href="https://dc.ufc.br/pt/" isExternal><Image m="14px 0px 16px 0px" maxW="70%" maxH="90px" display="inline-block" src={dc_logo} /></Link>
        </Box>
      </Box>
    </Box>
    </ThemeProvider>
    );
  }

