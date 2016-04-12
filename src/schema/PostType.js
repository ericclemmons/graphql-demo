import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

import AuthorType from "./AuthorType";

export default new GraphQLObjectType({
  name: "Post",
  description: "Blog post",

  fields() {
    return {
      id: { type: new GraphQLNonNull(GraphQLID) },

      author: {
        type: new GraphQLNonNull(AuthorType),
        resolve(parent, args, context) {
          const { db } = context;

          return db("author").first().where("id", parent.author_id);
        },
      },

      title: { type: new GraphQLNonNull(GraphQLString) },
      slug: { type: new GraphQLNonNull(GraphQLString) },
      body: { type: new GraphQLNonNull(GraphQLString) },

      createdAt: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(parent) {
          return parent.created_at;
        },
      },

      updatedAt: {
        type: GraphQLString,
        resolve(parent) {
          return parent.updated_at;
        },
      },

      lastUpdated: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(parent) {
          return parent.updated_at || parent.created_at;
        },
      },
    };
  },
});
