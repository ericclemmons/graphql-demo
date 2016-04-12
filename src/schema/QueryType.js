import {
  // GraphQLError,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

import AuthorType from "./AuthorType";
import PostType from "./PostType";

export default new GraphQLObjectType({
  name: "Query",
  description: "Blog posts, comments, & users",

  fields() {
    return {
      author: {
        type: AuthorType,

        args: {
          id: { type: new GraphQLNonNull(GraphQLID) },
        },

        resolve(parent, args, context) {
          const { db } = context;
          const { id } = args;

          return db("author")
            .first()
            .where("id", id)
          ;
        },
      },

      authors: {
        type: new GraphQLList(AuthorType),

        resolve(parent, args, context) {
          const { db } = context;

          return db("author");
        },
      },

      post: {
        type: PostType,

        args: {
          slug: { type: new GraphQLNonNull(GraphQLString) },
        },

        resolve(parent, args, context) {
          const { post } = context.loaders;
          const { slug } = args;

          return post.load(slug);
        },
      },

      posts: {
        type: new GraphQLList(PostType),

        resolve(parent, args, context) {
          const { db } = context;
          const { post } = context.loaders;

          return db("post")
            .select("slug")
            .map(({ slug }) => slug)
            .then((slugs) => post.loadMany(slugs))
          ;
        },
      },
    };
  },
});
