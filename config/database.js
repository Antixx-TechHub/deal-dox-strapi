module.exports = ({ env }) => ({
  // Update your postgres credentials here
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "containers-us-west-205.railway.app"),
      port: env.int("DATABASE_PORT", 6369),
      database: env("DATABASE_NAME", "railway"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "WqEePv1ejjgE3k2xIFHK"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
