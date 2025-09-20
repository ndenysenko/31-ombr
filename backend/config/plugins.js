module.exports = () => ({
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: true,
      uri: process.env.STRAPI_URL + "/graphql",
    },
  },
});
