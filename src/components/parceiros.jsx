import React from 'react';
import { Heading, Link, Image, Flex } from '@chakra-ui/core';

const Parceiros = ({ parceiros }) => {
  const isBiggerOf500 = styleMedia.matchMedium('(min-width: 500px)');

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
        flexDirection={isBiggerOf500 ? 'row' : 'column'}
      >
        {
          parceiros.map((parceiro) => (
            <Link _hover={{ transform: 'scale(1.15)' }} mx='20px' href={parceiro.site} mt='20px'>
              <Image src={parceiro.logo} size='150px' objectFit='contain'></Image>
            </Link>
          ))
        }
      </Flex>
    </Flex>
  );
}

export default Parceiros;
