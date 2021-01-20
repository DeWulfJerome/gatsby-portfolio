require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Jerome De Wulf Portfolio',
    description:
      "Hi, I'm a front-end developer from Antwerp. Take a look at my portfolio.",
    author: 'Jerome De Wulf',
    siteUrl: 'https://jeromedewulf-gatsby-portfolio.web.app/'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID
        }
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'syo2cixj',
        dataset: 'production',
        token: process.env.SANITY_TOKEN
      }
    }
  ]
};
