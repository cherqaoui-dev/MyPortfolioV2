/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config = require('./src/config')
const {site} = config

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: site.siteTitle,
    description: site.siteDescription,
    keywords: site.siteKeywords,
    url: site.siteUrl
  },
  plugins: [
    //'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
  ],
}
