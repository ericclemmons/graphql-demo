import DataLoader from "dataloader";
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

const loaders = {
  post: new DataLoader(function fetchBySlugs(slugs) {
    console.info("[post] Fetching by ", slugs);

    return db("post").whereIn("slug", slugs);
  }),
};

export default express.Router()
  .all("/api", graphql({
    context: { db, loaders },
    graphiql: true,
    pretty: true,
    schema,
  }))
;
