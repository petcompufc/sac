import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import { FaBars } from 'react-icons/fa';
import { TiChevronRight } from 'react-icons/ti';
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

function NavLink({ children, onClick }) {
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
        bg: 'teal.500',
        color: 'white',
      }}
      _focus={{
        bg: 'teal.500',
        color: 'white',
      }}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

NavLink.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const blue = 'cyan.500';

  return (
    <Flex
      as="header"
      bg="white"
      boxShadow="lg"
      h={16}
      justifyContent="space-between"
      position="sticky"
      top="0px"
      w="100%"
      zIndex="docked"
    >

      <Flex ml="8px">
        <LogoSAC
          alt=""
          boxSize={16}
          my="auto"
          p={2}
          role="presentation"
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
            <DrawerBody as="nav">
              <IconButton my="auto" mr={2} icon={<TiChevronRight />} maxW={10} maxH={10} onClick={onClose} aria-label="Fechar Menu" />
              <NavLink onClick={onClose}>Sobre</NavLink>
              <NavLink onClick={onClose}>Timeline</NavLink>
              <NavLink onClick={onClose}>Parceiros</NavLink>
              <NavLink onClick={onClose}>Inscrições </NavLink>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

      <Flex as="nav" display={{ base: 'none', lg: 'flex' }} mr="3%">
        <NavLink>Sobre</NavLink>
        <NavLink>Timeline</NavLink>
        <NavLink>Parceiros</NavLink>
        <NavLink>Inscrições</NavLink>
      </Flex>

    </Flex>
  );
}

export default Header;
