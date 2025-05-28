const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./db');

const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    MONGO_URI: process.env.MONGO_DEV_URI,
  },
  production: {
    MONGO_URI: process.env.MONGO_PROD_URI,
  },
};

module.exports = config[env];