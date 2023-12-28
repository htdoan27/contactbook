require('dotenv').config();

const config = {
  app: {
    port: process.env.PORT,
  },
};

console.log("PORT: ", process.env.PORT)

module.exports = config;
