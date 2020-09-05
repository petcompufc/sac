import React from 'react';
import { ThemeProvider, CSSReset, theme } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';

import SEO from '../components/seo';
import Header from '../components/header/header';
import Sobre from '../components/sobre/sobre';
import Timeline from '../components/timeline';
import Parceiros from '../components/parceiros';
import Footer from '../components/footer';

import logoCeos from '../images/logo_CEOS.png';
import cronograma from '../data/atividades';
import museoModerno from '../assets/MuseoModerno-VariableFont_wght.ttf';
import Inscricoes from '../components/inscricoes';

const temaSAC = {
  ...theme,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"MuseoModerno", sans-serif',
    mono: 'monospace',
  },
};

const IndexPage = () => (
  <ThemeProvider theme={temaSAC}>
    <CSSReset />
    <Global styles={css`
      @font-face {
        font-family: 'MuseoModerno';
        src: url('${museoModerno}') format('TrueType');
        font-weight: 100 900;
      }`}
    />
    <SEO title="Home" bg="blue" />

    <Header />
    <Sobre id="sobre" />
    <Timeline cronograma={cronograma} id="timeline" />
    <Inscricoes id="inscricoes" />
    <Parceiros
      id="parceiros"
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
