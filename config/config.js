var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'yuki-transmedia'
    },
    port: 3000,
    db: 'mongodb://localhost/yuki-transmedia-development',
    key: "mdslmlfd893879smlfsldmffnneknwklelm8934879478"
  },

  test: {
    root: rootPath,
    app: {
      name: 'yuki-transmedia'
    },
    port: 3000,
    db: 'mongodb://localhost/yuki-transmedia-test',
    key: "mdslmlfd893879smlfsldmffnneknwklelm8934879478"
  },

  production: {
    root: rootPath,
    app: {
      name: 'yuki-transmedia'
    },
    port: process.env.PORT || 3000,
    db: process.env.DATABASE_URL || 'mongodb://localhost/yuki-transmedia-production',
    key: process.env.SECRET_KEY || "mdslmlfd893879smlfsldmffnneknwklelm8934879478"
  }
};

module.exports = config[env];
