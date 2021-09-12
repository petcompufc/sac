import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import { FaBars } from 'react-icons/fa';
import {
  Box,
  IconButton,
  Flex,
  Heading,
  Link,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerBody,
} from '@chakra-ui/react';

import RGBText from './RGBText';
import LogoSAC from './logoSAC';

function NavLink({ children }) {
  return (
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
}

NavLink.propTypes = {
  children: PropTypes.string.isRequired,
};

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const blue = '#2ca4ab';

  return (
    <Flex
      w="100%"
      h={16}
      as="header"
      justifyContent="space-between"
      boxShadow="lg"
      position="sticky"
      top="0px"
      zIndex="docked"
      bg="white"
    >

      <Flex ml="8px">
        <LogoSAC
          boxSize={16}
          my="auto"
          p={2}
          transition="0.6s ease-in"
          _hover={{ transform: 'rotate(360deg)' }}
        />
        <Heading my="auto" color={blue} fontSize="2xl" fontWeight="bold">
          SAC XV
          <RGBText my="auto" ml={0} fontSize="2xl">irtual</RGBText>
        </Heading>
      </Flex>

      <Box display={{ base: 'flex', lg: 'none' }}>
        <IconButton my="auto" mr={2} icon={<FaBars />} maxW={10} maxH={10} onClick={onOpen} aria-label="Abrir Menu" />
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
}

export default Header;
