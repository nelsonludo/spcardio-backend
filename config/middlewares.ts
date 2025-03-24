export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: ["http://localhost:1574, https://spcardio.crest.cm/"], // Add your frontend app's domain(s) here
      credentials: true, // Allow credentials like cookies
      headers: ["Content-Type", "Authorization"], // Allow these headers
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
