import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import SEO from '../components/seo';
import Header from '../components/header';
import Sobre from '../components/sobre';
import Timeline from '../components/timeline';
import Parceiros from '../components/parceiros';
import Inscricoes from '../components/inscricoes';
import Footer from '../components/footer';

import logo_ceos from '../images/CEOS-logo.png'
const IndexPage = () => (
  <ThemeProvider>
    <CSSReset />
    <SEO title="Home" />

    <Parceiros 
      parceiros={[
        {
          logo: logo_ceos,
          site: 'https://www.facebook.com/ceos.jr/'
        },
        {
            logo: logo_ceos,
            site: 'https://www.google.com'
        }
      ]}
    />

  </ThemeProvider>
);

export default IndexPage;
