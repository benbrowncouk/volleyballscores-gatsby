module.exports = {
  siteMetadata: {
    title: "VolleyballScores.co.uk",
    author: "Ben Brown",
    description: "A website for VolleyballScores.co.uk based on the Photon Gatsby.js Theme by HTML5 UP",
    siteUrl: 'https://www.volleyballscores.co.uk'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'VolleyballScores.co.uk',
        short_name: 'VolleyballSc',
        start_url: '/',
        background_color: '#4a87d3',
        theme_color: '#4a87d3',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-4114203-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        cookieDomain: "volleyballscores.co.uk",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/assets/images/`
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`
  ],
}
