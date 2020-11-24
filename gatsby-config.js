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
    title: site.title,
    description: site.description,
    keywords: site.keywords,
    url: site.url,
    image: site.image,
    twitterUsername: site.twitterUsername,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: site.googleAnalyticsID,
      },
    }
  ],
}
