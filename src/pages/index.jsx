import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import SEO from '../components/seo';
import Header from '../components/header';
import Sobre from '../components/sobre';
import Timeline from '../components/timeline';
import Parceiros from '../components/parceiros';
import Inscricoes from '../components/inscricoes';
import Footer from '../components/footer';

const IndexPage = () => (
  <ThemeProvider>
    <CSSReset />
    <SEO title="Home" />

    <Header />
    <Sobre />
    <Timeline />
    <Parceiros />
    <Inscricoes />
    <Footer />
  </ThemeProvider>
);

export default IndexPage;
