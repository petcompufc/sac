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
  Box,
  Divider
} from '@chakra-ui/core';


function timeline({ atividades }) {
  const isBiggerOf744 = styleMedia.matchMedium('(min-width: 744px)')
  return (
    <Box flexGrow={1} flexShrink={1} >
      <Heading
        size="2x1"
        maxW={250}
        marginTop={50}
        marginLeft={75}
        marginRight={50}
      >
        <Text textAlign='center'>PROGRAMAÇÃO</Text>
        <Divider
          borderColor='#cc6600'
          borderWidth={5}
        />
      </Heading >
      <Box>
        <Tabs
          isFitted
          variant={isBiggerOf744 ? 'enclosed' : 'unstyled'}
          _selected={{ color: "white", bg: "blue.500" }}
          variantColor='#cc6600'
          borderColor="#cc6600"
          margin={3}
          orientation={isBiggerOf744 ? 'horizontal' : 'vertical'}
        >
          <TabList>
            {atividades.map((dia) => (
              <Tab color='#cc6600'
                _hover={{ bg: '#cc6600', color: 'white' }}
                _selected={isBiggerOf744 ? ({ bg: 'white', color: '#CC6600', border:'1px', borderBottom:'none' }) : ({ bg: '#CC6600', color: 'white' })}
              >
                {dia.dia}
              </Tab>
            ))}
          </TabList>
          <TabPanels
            borderTop={isBiggerOf744 ? '' : ({style: 'solid', width: '1px'})}
            borderTopColor='#cc6600'
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
                          <Box flex="1" textAlign="left" >
                            {dados.hora} | {dados.tipo} | {dados.titulo}
                          </Box>
                          <AccordionIcon />
                        </AccordionHeader>
                        <AccordionPanel pb={4} >
                          <Text
                            fontSize='2x1'
                            color='#cc6600'
                            display={dados.tipo == 'VGO' ? 'none' : ''}
                          >
                            {dados.tipo == 'Mesa Redonda' ? 'Moderador: ' : 'Ministrante: '}
                          </Text>
                          <Text
                            fontSize='2x1'
                            display={dados.tipo == 'VGO' ? 'none' : ''}
                          >
                            {dados.ministrante}
                            <br /><br />
                          </Text>
                          <Text
                            fontSize='2x1'
                            color='#cc6600'
                          >
                            Descrição:
                        </Text>
                          <Text fontSize='2x1'>
                            {dados.desc}
                            <br /><br />
                          </Text>
                          <Text
                            fontSize='2x1'
                            color='#cc6600'
                          >
                            Plataforma:
                        </Text>
                          <Text fontSize='2x1'>
                            {dados.plataforma}
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    ))}

                  </Accordion>
                </TabPanel>
              ))
            }
          </TabPanels>
        </Tabs>
      </Box >
    </Box>
  )
}

export default timeline;
