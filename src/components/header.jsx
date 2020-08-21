import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Image, Flex, Text, Link, Drawer, DrawerOverlay, DrawerContent, useDisclosure, DrawerBody, Stack, PseudoBox } from '@chakra-ui/core'

import logoSAC from '../images/Sac logo.png'
import menuIcone from '../images/menu icone.png'

export default () => {
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const blue = '#7BB4B6'

  const NavLink = ({ children }) =>(
    <Link
      p='16px'
      color={blue}
      display='flex'
      as={GatsbyLink}
      alignItems='center'
      transition='all 0.3s'
      to={`#${children.toLowerCase()}`}

      _hover={{
        textDecoration: 'none',
        color: '#fff',
        bg: blue,
      }}
      _focus={{
        bg: blue,
        color: '#fff',
      }}
      >
      <Text fontSize='20px' fontWeight='bold'>
        {children}
      </Text>
    </Link>
  )


  return(
    <Flex
      w='100%'
      h='80px'
      as="header"
      justifyContent='space-between'
      boxShadow='0px 2px 3px #00000060'
      >
      
      <Flex ml='8px'>
        <PseudoBox
          my='auto'
          style={{ transition: '0.6s ease-in' }}
          _hover={{ transform: 'rotate(360deg)' }}
        >
          <Image src={logoSAC} maxW='64px' maxH='64px'/>
        </PseudoBox>
        <Text ml='3%' my='auto' color={blue} fontSize='32px' fontWeight='bold'>XV|SAC</Text>
      </Flex>

      <Box display={['flex', 'flex', 'none']}>
        <Image my='auto' mr='8px' src={menuIcone} maxW='32px' maxH='32px' onClick={onOpen}/>
        <Drawer isOpen={isOpen} onClose={onClose} placement='right'>  
          <DrawerOverlay/>
          <DrawerContent w='45%'>
            <DrawerBody>
              <NavLink>Eventos</NavLink>
              <NavLink>Timeline</NavLink>
              <NavLink>Parceiros</NavLink>
              <NavLink>Inscrições</NavLink>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

      <Flex display={['none', 'none','flex']} mr='3%'>
        <NavLink>Eventos</NavLink>
        <NavLink>Timeline</NavLink>
        <NavLink>Parceiros</NavLink>
        <NavLink>Inscrições</NavLink>
      </Flex>

    </Flex>
  )
};