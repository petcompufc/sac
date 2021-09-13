import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  Box,
  Flex,
  Link,
  VStack,
  Stack,
  Heading,
  Icon,
} from '@chakra-ui/react';
import {
  RiFacebookLine,
  RiGithubLine,
  RiInstagramLine,
  RiYoutubeLine,
} from 'react-icons/ri';

export default function Footer() {
  return (
    <Stack
      align={['center', 'flex-start']}
      as="footer"
      bg="#37474f"
      color="#ffffff"
      direction={['column', 'row']}
      p={10}
      spacing={[5, 10]}
      w="100%"
      justifyContent="center"
    >
      <Box
        width="10rem"
      >
        <StaticImage
          alt="PETCOMP ufc"
          src="../images/logoPET.svg"
        />
      </Box>

      <Box
        as="address"
        fontStyle="normal"
      >
        <Heading as="h3" fontSize="xl" mb={3}>PET Computação</Heading>
        Av. Humberto Monte, s/n
        <br />
        UFC - Campus do Pici
        <br />
        Departamento de Computação
        <br />
        Bloco 910
        <br />
        <Link href="mailto:petcomp@ufc.br">petcomp@ufc.br</Link>
      </Box>

      <VStack
        alignItems="flex-begin"
        spacing={3}
      >
        <Box
          display={['none', 'block']}
        >
          <Heading
            as="h3"
            fontSize="xl"
            mb={3}
          >
            Links
          </Heading>
          <Link
            href="http://www.ufc.br/"
            isExternal
          >
            Portal UFC
          </Link>
          <br />
          <Link
            href="http://portal.dc.ufc.br/"
            isExternal
          >
            Departamento de Computação
          </Link>
          <br />
          <Link href="https://cc.ufc.br/" isExternal color="white">Curso de Ciência da Computação</Link>
        </Box>

        <Flex
          alignItems="center"
          justify="space-evenly"
        >
          <Link
            aria-label="Acesse nossos repositórios no GitHub"
            href="https://github.com/petcompufc"
            isExternal
            textDecoration="initial"
          >
            <Icon
              as={RiGithubLine}
              boxSize={6}
              borderWidth={2}
              borderColor="whiteAlpha.400"
              borderRadius="full"
              boxSizing="content-box"
              padding={2}
              transition="all .4s"
              _hover={{ borderColor: 'whiteAlpha.800' }}
            />
          </Link>
          <Link
            aria-label="Acesse a nossa página do Facebook"
            href="https://www.facebook.com/PETCompUFC/"
            isExternal
          >
            <Icon
              as={RiFacebookLine}
              boxSize={6}
              borderWidth={2}
              borderColor="whiteAlpha.400"
              borderRadius="full"
              boxSizing="content-box"
              padding={2}
              transition="all .4s"
              _hover={{ borderColor: 'whiteAlpha.800' }}
            />
          </Link>
          <Link
            aria-label="Veja o nosso instagram"
            href="https://www.instagram.com/petcompufc"
            isExternal
          >
            <Icon
              as={RiInstagramLine}
              boxSize={6}
              borderWidth={2}
              borderColor="whiteAlpha.400"
              borderRadius="full"
              boxSizing="content-box"
              padding={2}
              transition="all .4s"
              _hover={{ borderColor: 'whiteAlpha.800' }}
            />
          </Link>
          <Link
            aria-label="Assista aos nossos vídeos no YouTube"
            href="https://www.youtube.com/user/petcompufc/videos"
            isExternal
          >
            <Icon
              as={RiYoutubeLine}
              boxSize={6}
              borderWidth={2}
              borderColor="whiteAlpha.400"
              borderRadius="full"
              boxSizing="content-box"
              padding={2}
              transition="all .4s"
              _hover={{ borderColor: 'whiteAlpha.800' }}
            />
          </Link>
        </Flex>
      </VStack>

      <VStack
        align="center"
        display={['none', 'flex']}
        spacing={5}
      >
        <Link
          href="http://www.ufc.br/"
          width="15rem"
          isExternal
        >
          <StaticImage
            alt="Universidade Federal do Ceará"
            width={300}
            src="../images/logoUFC.svg"
          />
        </Link>
        <Link
          href="http://portal.dc.ufc.br/"
          width="15rem"
          isExternal
        >
          <StaticImage
            alt="Departamento de Computação"
            width={300}
            src="../images/logoDC.svg"
          />
        </Link>
      </VStack>
    </Stack>
  );
}
