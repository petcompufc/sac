import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import SEO from '../components/seo';
import Header from '../components/header';
import Sobre from '../components/sobre';
import Timeline from '../components/timeline';
import Parceiros from '../components/parceiros';
import Footer from '../components/footer';

import logoCeos from '../images/logo_CEOS.png';
import cronograma from '../components/atividades';

const IndexPage = () => (
  <ThemeProvider>
    <CSSReset />
    <Header />
    <Sobre />
    <SEO title="Home" bg="blue" />
    <Timeline cronograma={cronograma} />
    <Parceiros
      parceiros={[
        {
          logo: logoCeos,
          site: 'https://www.facebook.com/ceos.jr/',
        },
        {
          logo: logoCeos,
          site: 'https://www.google.com',
        },
      ]}
    />
    <Footer />
  </ThemeProvider>
);

export default IndexPage;
