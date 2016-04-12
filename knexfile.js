require("babel-register")();

module.exports = {
  development: {
    client: "mysql",
    connection: {
      database: "graphql_demo",
      user: "root",
    },
    pool: {
      min: 0,
      max: 1,
    },
  },
};
