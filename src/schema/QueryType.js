import {
  GraphQLError,
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
          const { db } = context.rootValue;
          const { id } = args;

          return db("author").first().where("id", id);
        },
      },

      authors: {
        type: new GraphQLList(AuthorType),

        resolve(parent, args, context) {
          const { db } = context.rootValue;

          return db("author");
        },
      },

      post: {
        type: PostType,

        args: {
          slug: { type: new GraphQLNonNull(GraphQLString) },
        },

        resolve(parent, args, context) {
          const { db } = context.rootValue;
          const { slug } = args;

          return db("post")
            .first()
            .where("slug", slug)
            .then((post) => {
              if (!post) {
                throw new GraphQLError(`Post with slug "${slug}" not found`);
              }

              return post;
            })
          ;
        },
      },

      posts: {
        type: new GraphQLList(PostType),

        args: {
          ids: { type: new GraphQLList(GraphQLID) },
        },

        resolve(parent, args, context) {
          const { ids } = args;
          const { db } = context.rootValue;

          if (ids) {
            return db("post").whereIn("id", ids);
          }

          return db("post");
        },
      },
    };
  },
});
