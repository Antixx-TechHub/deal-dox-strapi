module.exports = ({ env }) => ({
  // ...
  upload: {
    // Update your cloudinary credentials here
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: "do2....",
        api_key: "64658.............",
        api_secret: "TsLE...................",
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});
