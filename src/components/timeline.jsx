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
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react';

function Timeline({ cronograma, id }) {
  return (
    <Box id={id}>
      <Heading
        color="orange.600"
        borderBottom={{ style: 'solid', width: '2px' }}
        fontWeight="bold"
        my={3}
        textAlign="center"
        textDecor="underline"
      >
        Programação
      </Heading>
      <Box>
        <Tabs
          colorScheme="orange"
          isFitted
          mx="auto"
          maxW="90ch"
          orientation={useBreakpointValue({ base: 'vertical', md: 'horizontal' })}
          flexWrap="wrap"
        >
          <TabList w="100%">
            {cronograma.map((dia) => (
              <Tab
                key={dia.dia}
              >
                {dia.dia}
              </Tab>
            ))}
          </TabList>
          <TabPanels
            borderTop={{ base: 'none', md: { style: 'solid', width: '1px' } }}
            border={{ style: 'solid', width: '1px' }}
            borderColor="orange.400"
            padding={5}
          >
            { cronograma.map((dia) => (
              <TabPanel key={dia.dia}>
                <Accordion allowMultiple>
                  {dia.atividades.map((atividade) => (
                    <AccordionItem key={atividade.titulo}>
                      <AccordionButton fontWeight="bold" mt={2} _expanded={{ bg: 'orange.500', color: 'white' }}>
                        <Box flex="1" textAlign="left">
                          {`${atividade.hora} | ${atividade.tipo} | ${atividade.titulo}`}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Text
                          fontSize="2x1"
                          color="orange.400"
                          display={atividade.tipo === 'VGO' ? 'none' : ''}
                        >
                          {atividade.tipo === 'Mesa Redonda' ? 'Moderador: ' : 'Ministrante: '}
                        </Text>
                        <Text
                          fontSize="2x1"
                          display={atividade.tipo === 'VGO' ? 'none' : ''}
                          mb={3}
                        >
                          {atividade.ministrante}
                        </Text>
                        <Text
                          fontSize="2x1"
                          color="orange.400"
                        >
                          Descrição:
                        </Text>
                        <Text fontSize="2x1" whiteSpace="pre-line" mb={3}>
                          {atividade.desc}
                        </Text>
                        <Text
                          fontSize="2x1"
                          color="orange.400"
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

Timeline.defaultProps = {
  id: '',
};

Timeline.propTypes = {
  cronograma: PropTypes.arrayOf(PropTypes.shape({
    dia: PropTypes.string,
    atividades: PropTypes.arrayOf(PropTypes.shape({
      tipo: PropTypes.oneOf(['Palestra', 'Workshop', 'Minicurso', 'Mesa Redonda', 'VGO']),
      titulo: PropTypes.string,
      ministrante: PropTypes.string,
      desc: PropTypes.string,
      plataforma: PropTypes.string,
      hora: PropTypes.string,
    })),
  })).isRequired,
  id: PropTypes.string,
};

export default Timeline;
