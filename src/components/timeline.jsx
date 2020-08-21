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
    Divider,
    Button,
    Link
} from '@chakra-ui/core';


function timeline({ atividades }) {
    const isBiggerOf744 = styleMedia.matchMedium('(min-width: 744px)');
    let key_id = 0;
    return (
        <Box flexGrow={1} flexShrink={1} >
            <Heading
                size="2x1"
                mx='auto'
            >
                <Text textAlign='center'>PROGRAMAÇÃO</Text>
                <Divider
                    borderColor='#D66B00'
                    borderWidth={5}
                    width='25%'
                    mx='auto'
                />
            </Heading >
            <Box>
                <Tabs
                    isFitted
                    variant={isBiggerOf744 ? 'enclosed' : 'unstyled'}
                    variantColor='#D66B00'
                    borderColor="#D66B00"
                    margin={3}
                    orientation={isBiggerOf744 ? 'horizontal' : 'vertical'}
                >
                    <TabList>
                        {atividades.map((dia) => (
                            <Tab color='#D66B00'
                                key={key_id++}
                                _hover={{ bg: '#D66B00', color: 'white' }}
                                _selected={isBiggerOf744 ? ({ bg: 'white', color: '#CC6600', border: '1px', borderBottom: 'none' }) : ({ bg: '#CC6600', color: 'white' })}
                            >
                                {dia.dia}
                            </Tab>
                        ))}
                    </TabList>
                    <TabPanels
                        borderTop={isBiggerOf744 ? '' : ({ style: 'solid', width: '1px' })}
                        borderTopColor='#D66B00'
                        borderLeft={{ style: 'solid', width: '1px' }}
                        borderLeftColor='#D66B00'
                        borderBottom={{ style: 'solid', width: '1px' }}
                        borderBottomColor='#D66B00'
                        borderRight={{ style: 'solid', width: '1px' }}
                        borderRightColor='#D66B00'
                        padding={5}
                    >
                        {
                            atividades.map((atividade) => (
                                <TabPanel key={key_id++}>
                                    <Accordion allowMultiple>
                                        {atividade.dados.map((dados) => (
                                            <AccordionItem key={key_id++} >
                                                <AccordionHeader bg='#D66B00' color='white' mt={2} _hover>
                                                    <Box flex="1" textAlign="left" >
                                                        {dados.hora} | {dados.tipo} | {dados.titulo}
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionHeader>
                                                <AccordionPanel pb={4} >
                                                    <Text
                                                        fontSize='2x1'
                                                        color='#D66B00'
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
                                                        color='#D66B00'
                                                    >
                                                        Descrição:
                                                    </Text>
                                                    <Text fontSize='2x1'>
                                                        {dados.desc}
                                                        <br /><br />
                                                    </Text>
                                                    <Text
                                                        fontSize='2x1'
                                                        color='#D66B00'
                                                    >
                                                        Plataforma:
                                                    </Text>
                                                    <Text fontSize='2x1'>
                                                        {dados.plataforma}
                                                    </Text>
                                                    <br />
                                                    <Link
                                                        href={dados.form}
                                                        _hover={{ textDecoration: 'none' }}
                                                        isExternal
                                                    >
                                                        <Button variantColor='orange'>
                                                            Ir para o formulário
                                                        </Button>
                                                    </Link>
                                                    <br />
                                                    <br />
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
