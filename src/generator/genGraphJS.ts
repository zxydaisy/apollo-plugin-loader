import { print } from "graphql";
import generator from "@babel/generator";

/**
 * 
 * 
 * gql`query xxx{}`
 */
export function GeneratorGraphTS(groupQueryObject: { [field: string]: any }) {
  const { queryDocument } = Object.values(groupQueryObject)[0];
  return print(queryDocument);
}
