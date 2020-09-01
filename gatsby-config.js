module.exports = {
  siteMetadata: {
    title: 'XV SAC',
    description: 'A Semana Acadêmica da Computação é um evento anual do PET que traz palestras, hands-on e mesas redondas para os alunos do curso de computação e outras pessoas interessadas na área.',
    author: '@petcompufc',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Semana Acadêmica da Computação',
        short_name: 'SAC',
        start_url: '/sac/',
        background_color: '#ffffff',
        theme_color: '#2ca4ab',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
