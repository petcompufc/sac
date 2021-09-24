
module.exports = {
  siteMetadata: {
    title: 'XV SAC',
    description: 'A Semana Acadêmica da Computação é um evento anual do PET que traz palestras, hands-on e mesas redondas para os alunos do curso de computação e outras pessoas interessadas na área.',
    author: '@petcompufc',
  },
  pathPrefix: '/sac',
  plugins: [
    '@chakra-ui/gatsby-plugin',
    'gatsby-plugin-eslint',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'XV Semana Acadêmica da Computação',
        short_name: 'SAC XV',
        start_url: '/',
        background_color: 'white',
        theme_color:'#2ca4ab',
        display: 'standalone',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-preact`
  ],
};
