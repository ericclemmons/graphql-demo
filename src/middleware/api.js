import graphql from "express-graphql";
import express from "express";
import knex from "knex";

import schema from "../schema";

const db = knex({
  client: "mysql",
  connection: {
    database: "graphql_demo",
    user: "root",
  },
});

export default express.Router()
  .all("/api", graphql({
    graphiql: true,
    pretty: true,
    schema,
    rootValue: {
      db,
    },
  }))
;
