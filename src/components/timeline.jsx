import React from 'react';
import {
  Heading,
  Tabs,
  TabList,
  TabPanel,
  Tab,
  TabPanels,
  Text,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/core';


function timeline({ atividades }) {
  return (

    <Heading
      size="lg"
      marginTop={50}
      marginLeft={100}
      marginRight={100}
    >
      <Text
        fontSize='auto'
        textAlign='center'
        borderBottom={{ style: 'solid', width: '2px' }}
        borderBottomColor='#cc6600'
      >
        PROGRAMAÇÃO
      </Text>
      <Tabs
        isFitted
        variant="enclosed"
        variantColor='#cc6600'
        borderColor="#cc6600"
        marginTop={10}
      >
        <TabList>
          {atividades.map((dia, index) => (
            <Tab color='#cc6600' _hover={{ bg: '#cc6600', color: 'white' }}> {dia.dia} </Tab>
          ))}
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
          {
            atividades.map((atividade) => (
              <TabPanel>
                <Accordion allowMultiple>
                  {atividade.dados.map((dados) => (
                    <AccordionItem >
                      <AccordionHeader bg='#cc6600' color='white' mt={2} _hover>
                        <Box flex="1" textAlign="left">
                          {dados.hora} | {dados.titulo}
                        </Box>
                        <AccordionIcon />
                      </AccordionHeader>
                      <AccordionPanel pb={4} >
                        <center>Ministrante:</center> {dados.ministrante}
                        <br />
                        <center>Descrição:</center> {dados.desc}
                        <br />
                        <center>Plataforma: </center>{dados.plataforma}
                      </AccordionPanel>
                    </AccordionItem>
                  ))}

                </Accordion>
              </TabPanel>
            ))
          }
        </TabPanels>
      </Tabs>
    </Heading>
  )
}

export default timeline;
