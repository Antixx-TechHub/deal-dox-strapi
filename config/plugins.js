module.exports = ({ env }) => ({
  // ...
  upload: {
    // Update your cloudinary credentials here
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: "ds6j6gokv",
        api_key: "969987261619884",
        api_secret: "_For33eus3jpdwnqkOHg_PkbfDg",
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});
