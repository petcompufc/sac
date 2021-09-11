import React from 'react';
import { Global, css } from '@emotion/react';

import SEO from '../components/seo';
import Header from '../components/header';
import Sobre from '../components/sobre';
import Timeline from '../components/timeline';
import Parceiros from '../components/parceiros';
import Footer from '../components/footer';

import logoCeos from '../images/logo_CEOS.png';
import cronograma from '../data/atividades';
import museoModerno from '../assets/MuseoModerno-VariableFont_wght.ttf';
import Inscricoes from '../components/inscricoes';

const IndexPage = () => (
  <>
    <Global styles={css`
      @font-face {
        font-family: 'MuseoModerno';
        src: url('${museoModerno}') format('TrueType');
        font-weight: 100 900;
      }`}
    />
    <SEO title="Home" lang="pt-BR" />

    <Header />
    <Sobre id="sobre" />
    <Timeline cronograma={cronograma} id="timeline" />
    <Inscricoes id="inscrições" />
    <Parceiros
      id="parceiros"
      parceiros={[
        {
          nome: 'CEOS - Empresa Junior da Computação',
          logo: logoCeos,
          site: 'https://www.facebook.com/ceos.jr/',
        },
      ]}
    />
    <Footer />
  </>
);

export default IndexPage;
