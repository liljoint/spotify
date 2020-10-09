const config = {
  PORT: process.env.PORT || 3001,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/testdb',
  SPOTIFY: {
    CLIENT_ID: process.env.CLIENT_ID || '377aa854eb724f2d9b847f89ed8ea2cc',
    CLIENT_SECRET: process.env.CLIENT_ID || '7ab1836bd0d14f3da629ca02b30418d7',
  },
};
module.exports = config;
