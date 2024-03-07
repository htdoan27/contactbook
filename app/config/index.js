require('dotenv').config();

const config = {
  app: {
    port: process.env.PORT,
  },

  db: {
    uri: process.env.MONGODB_URI || "mongodb://localhost:27017"
    }
};


module.exports = config;
