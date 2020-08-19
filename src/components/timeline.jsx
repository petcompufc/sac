import React from 'react';
import { Heading, Tabs, TabList, TabPanel, Tab, TabPanels, Text } from '@chakra-ui/core';

const Timeline = () => (
  <Heading
    size="lg"
    marginTop={50}
    marginLeft={100}
    marginRight={100}
  >
    <Text
      fontSize='auto'
      textAlign='center'
      color='black'
      borderBottom={{ color: 'orange', style: 'solid', width: '1px' }}
    >
      PROGRAMAÇÃO
  </Text>
    <Tabs
      isFitted
      variant="enclosed"
      variantColor="red.500"
      borderColor="#cc6600"
      marginTop={10}
    >
      <TabList>
        <Tab color='#cc6600' _hover={{ bg: '#cc6600', color: 'white' }}>Terça-feira (08)</Tab>
        <Tab color='#cc6600' _hover={{ bg: '#cc6600', color: 'white' }}>Quarta-feira (09)</Tab>
        <Tab color='#cc6600' _hover={{ bg: '#cc6600', color: 'white' }}>Quinta-feira (10)</Tab>
        <Tab color='#cc6600' _hover={{ bg: '#cc6600', color: 'white' }}>Sexta-feira (11)</Tab>
        <Tab color='#cc6600' _hover={{ bg: '#cc6600', color: 'white' }}>Sábado (12)</Tab>
        <Tab color='#cc6600' _hover={{ bg: '#cc6600', color: 'white' }}>Domingo (13)</Tab>
      </TabList>
      <TabPanels
        borderLeft={{ style: 'solid', width: '1px' }}
        borderLeftColor='#cc6600'
        borderBottom={{ style: 'solid', width: '1px' }}
        borderBottomColor='#cc6600'
        borderRight={{ style: 'solid', width: '1px' }}
        borderRightColor='#cc6600'
        padding={5}
      >
        <TabPanel>
          Palestra 01
          Palestra 02
        </TabPanel>
        <TabPanel>
          Palestra 03
          Palestra 04
        </TabPanel>
        <TabPanel>
          Palestra 05
          Palestra 06
        </TabPanel>
        <TabPanel>
          Palestra 07
          Palestra 08
        </TabPanel>
        <TabPanel>
          Campeonato de LOL
          Campeonato de Valorant
        </TabPanel>
        <TabPanel>
          Campeonato de CS:Go
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Heading>
);

export default Timeline;
