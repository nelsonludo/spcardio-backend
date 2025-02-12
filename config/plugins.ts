module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "your_secret_key"),
  },
});
