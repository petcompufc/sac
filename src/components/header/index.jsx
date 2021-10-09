import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import { FaBars } from 'react-icons/fa';
import { TiChevronRight } from 'react-icons/ti';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Link,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import LogoSAC from './logoSAC';

function NavLink({ children, onClick }) {
  const accentText = useColorModeValue('cyan.700', 'orange.500');
  const bg = useColorModeValue('white', 'gray.800');
  return (
    <Link
      p={4}
      color={accentText}
      display="flex"
      fontSize="20px"
      as={GatsbyLink}
      fontWeight="bold"
      alignItems="center"
      transition="all 0.3s"
      to={`#${children.toLowerCase()}`}
      _hover={{
        bg: accentText,
        color: bg,
      }}
      _focus={{
        bg: accentText,
        color: bg,
      }}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

NavLink.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

NavLink.defaultProps = {
  onClick: () => {},
};

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const accentText = useColorModeValue('cyan.700', 'orange.500');
  const bg = useColorModeValue('white', 'gray.800');

  return (
    <Flex
      as="header"
      bg={bg}
      boxShadow="lg"
      color={accentText}
      h={16}
      justifyContent="space-between"
      position="sticky"
      top={0}
      w="100%"
      zIndex="docked"
    >
      <Flex ml={2}>
        <LogoSAC
          alt=""
          boxSize={16}
          fill={accentText}
          my="auto"
          p={2}
          role="presentation"
          transition="0.6s ease-in"
          _hover={{ transform: 'rotate(360deg)' }}
        />
        <Heading my="auto" fontSize="2xl" fontWeight="bold">
          <Flex>
            <Box> SAC XVI </Box>
            <Box
              my="auto"
              ml={0}
              fontSize="2xl"
              _hover={{ letterSpacing: '5px', marginLeft: '5px' }}
              fontWeight="400"
              transition="0.4s ease-in"
            >
              RTUAL
            </Box>
          </Flex>
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

      <Flex as="nav" display={{ base: 'none', lg: 'flex' }} mr={2}>
        <NavLink>Sobre</NavLink>
        <NavLink>Timeline</NavLink>
        <NavLink>Parceiros</NavLink>
        <NavLink>Inscrições</NavLink>
      </Flex>

    </Flex>
  );
}

export default Header;
