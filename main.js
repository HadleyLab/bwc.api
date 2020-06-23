process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
process.env.PORT = process.env.PORT || 8080;

require('babel-register');
require('./src');
