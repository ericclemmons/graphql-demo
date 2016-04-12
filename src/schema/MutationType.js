import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

import { kebabCase } from "lodash";

import PostType from "./PostType";

export default new GraphQLObjectType({
  name: "Mutation",
  description: "Create a post, comment, or user",

  fields() {
    return {
      updatePost: {
        type: PostType,

        args: {
          title: { type: new GraphQLNonNull(GraphQLString) },
          slug: { type: new GraphQLNonNull(GraphQLString) },
          body: { type: new GraphQLNonNull(GraphQLString) },
        },

        resolve(parent, args, context) {
          const { db } = context.rootValue;
          const { title, body } = args;

          const slug = kebabCase(title);

          return db("post")
            .where("slug", args.slug)
            .update({ title, slug, body })
            .then(() => db("post").first().where("slug", slug))
          ;
        },
      },
    };
  },
});
