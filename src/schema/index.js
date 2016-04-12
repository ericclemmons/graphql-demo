import { GraphQLSchema } from "graphql";

import MutationType from "./MutationType";
import QueryType from "./QueryType";

export default new GraphQLSchema({
  mutation: MutationType,
  query: QueryType,
});
