import React from 'react';
import PropTypes from 'prop-types';
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
  Flex,
} from '@chakra-ui/core';

function timeline({ cronograma, id }) {
  return (
    <Box>
      <Flex
        mb={10}
        align="center"
        id={id}
        mx="auto"
        maxW="30ch"
      >
        <Heading
          color="#F39643"
          borderBottom={{ style: 'solid', width: '2px' }}
          fontWeight="bold"
        >
          PROGRAMAÇÃO
        </Heading>
      </Flex>
      <Box>
        <Tabs
          isFitted
          variant="enclosed"
          variantColor="orange.500"
          borderColor="orange.500"
          orientation="vertical"
          mx="auto"
          maxW="90ch"
        >
          <TabList>
            {cronograma.map((dia) => (
              <Tab
                color="#F39643"
                key={dia.dia}
                _hover={{ bg: '#F39643', color: 'white' }}
                _selected={{
                  bg: '#F39643',
                  color: 'white',
                  border: '1px',
                  borderBottom: 'none',
                }}
              >
                {dia.dia}
              </Tab>
            ))}
          </TabList>
          <TabPanels
            borderTop={{ base: 'none', md: { style: 'solid', width: '1px' } }}
            border={{ style: 'solid', width: '1px' }}
            borderColor="#D66B00"
            padding={5}
          >
            { cronograma.map((dia) => (
              <TabPanel key={dia.dia}>
                <Accordion allowMultiple>
                  {dia.atividades.map((atividade) => (
                    <AccordionItem key={atividade.titulo}>
                      <AccordionHeader bg="#D66B00" color="white" mt={2} _hover>
                        <Box flex="1" textAlign="left">
                          {`${atividade.hora} | ${atividade.tipo} | ${atividade.titulo}`}
                        </Box>
                        <AccordionIcon />
                      </AccordionHeader>
                      <AccordionPanel pb={4}>
                        <Text
                          fontSize="2x1"
                          color="#D66B00"
                          display={atividade.tipo === 'VGO' ? 'none' : ''}
                        >
                          {atividade.tipo === 'Mesa Redonda' ? 'Moderador: ' : 'Ministrante: '}
                        </Text>
                        <Text
                          fontSize="2x1"
                          display={atividade.tipo === 'VGO' ? 'none' : ''}
                        >
                          {atividade.ministrante}
                          <br />
                          <br />
                        </Text>
                        <Text
                          fontSize="2x1"
                          color="#D66B00"
                        >
                          Descrição:
                        </Text>
                        <Text fontSize="2x1" whiteSpace="pre-line">
                          {atividade.desc}
                          <br />
                          <br />
                        </Text>
                        <Text
                          fontSize="2x1"
                          color="#D66B00"
                        >
                          Plataforma:
                        </Text>
                        <Text fontSize="2x1">
                          {atividade.plataforma}
                        </Text>
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}

timeline.defaultProps = {
  id: '',
};

timeline.propTypes = {
  cronograma: PropTypes.arrayOf(PropTypes.shape({
    dia: PropTypes.string,
    atividades: PropTypes.arrayOf(PropTypes.shape({
      tipo: PropTypes.oneOf('Palestra', 'Workshop', 'Minicurso', 'Mesa Redonda', 'VGO'),
      titulo: PropTypes.string,
      ministrante: PropTypes.string,
      desc: PropTypes.string,
      plataforma: PropTypes.string,
      hora: PropTypes.string,
    })),
  })).isRequired,
  id: PropTypes.string,
};

export default timeline;
