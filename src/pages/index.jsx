import React from 'react';
import { ThemeProvider, CSSReset, theme } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';

import SEO from '../components/seo';
import Header from '../components/header';
import Sobre from '../components/sobre/sobre';
import Timeline from '../components/timeline';
import Parceiros from '../components/parceiros';
import Footer from '../components/footer';

import logoCeos from '../images/logo_CEOS.png';
import cronograma from '../components/atividades';
import museoModerno from '../assets/MuseoModerno-VariableFont_wght.ttf';

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
        src: {museoModerno};
        font-weight: 100 900;
      }`}
    />
    <SEO title="Home" bg="blue" />

    <Header />
    <Sobre />
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
