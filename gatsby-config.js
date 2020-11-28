require(`dotenv`).config();
const { toSlug } = require("@reflexjs/gatsby-helpers");
const emoji = require("remark-emoji");
const a11yEmoji = require("@fec/remark-a11y-emoji");

module.exports = {
  pathPrefix: "",
  siteMetadata: {
    title: "Arsene Kuo",
    description: "Arsene's Personal Website.",
    mail: "crowley3141@hotmail.com",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    "@reflexjs/gatsby-theme-base",
    {
      resolve: `@reflexjs/gatsby-theme-post`,
      options: {
        contentPath: "content/posts",
        basePath: "/blog",
        postsPerPage: 10,
        pageQuery: `
          query {
            allPost(sort: {fields: date, order: DESC}, filter: {tags: {elemMatch: {name: {nin: "example"}}}}) {
              nodes {
                id
                slug
              }
            }
            allPostTag(sort: {fields: name, order: ASC}) {
              nodes {
                id
                name
                slug
              }
            }
          }
        `,
        slugResolver: null,
      },
    },
    "@reflexjs/gatsby-theme-post",
    {
      resolve: "@reflexjs/gatsby-plugin-metatags",
      options: {
        types: [`Page`, `Post`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: `@reflexjs/gatsby-theme-core`,
      options: {
        contentPath: `content/pages`,
        imagesPath: `content/images`,
        basePath: ``,
        mdxRemarkPlugins: [emoji, a11yEmoji],
        gatsbyRemarkPlugins: [],
        remarkPlugins: [],
      },
    },
  ],
};
