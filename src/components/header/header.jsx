import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import {
  Box,
  Image,
  Flex,
  Text,
  Link,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerBody,
  PseudoBox,
} from '@chakra-ui/core';

import logoSAC from '../../images/logoSAC.svg';
import menuIcone from '../../images/menu Icone.png';
import RGBText from './RGBText';

const NavLink = ({ children }) => (
  <Link
    p="16px"
    color="teal.500"
    display="flex"
    fontSize="20px"
    as={GatsbyLink}
    fontWeight="bold"
    alignItems="center"
    transition="all 0.3s"
    to={`#${children.toLowerCase()}`}
    _hover={{
      color: '#fff',
      bg: 'teal.500',
    }}
    _focus={{
      bg: 'teal.500',
      color: '#fff',
    }}
  >
    {children}
  </Link>
);

NavLink.propTypes = {
  children: PropTypes.string.isRequired,
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const blue = '#2ca4ab';

  return (
    <Flex
      w="100%"
      h="80px"
      as="header"
      justifyContent="space-between"
      boxShadow="lg"
      position="sticky"
      top="0px"
      zIndex="docked"
      bg="white"
    >

      <Flex ml="8px">
        <PseudoBox
          my="auto"
          transition="0.6s ease-in"
          _hover={{ transform: 'rotate(360deg)' }}
        >
          <Image src={logoSAC} maxW={16} maxH={16} alt="" />
        </PseudoBox>
        <Text ml="3%" my="auto" color={blue} fontSize="32px" fontWeight="bold">SAC|XV</Text>
        <RGBText my="auto" fontSize="32px">irtual</RGBText>
      </Flex>

      <Box display={{ base: 'flex', lg: 'none' }}>
        <Image my="auto" mr="8px" src={menuIcone} maxW="32px" maxH="32px" onClick={onOpen} alt="Abrir Menu" />
        <Drawer isOpen={isOpen} onClose={onClose} placement="right">
          <DrawerOverlay />
          <DrawerContent w="45%">
            <DrawerBody>
              <NavLink>Sobre</NavLink>
              <NavLink>Timeline</NavLink>
              <NavLink>Parceiros</NavLink>
              <NavLink>Inscrições</NavLink>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

      <Flex display={{ base: 'none', lg: 'flex' }} mr="3%">
        <NavLink>Sobre</NavLink>
        <NavLink>Timeline</NavLink>
        <NavLink>Parceiros</NavLink>
        <NavLink>Inscrições</NavLink>
      </Flex>

    </Flex>
  );
};

export default Header;
