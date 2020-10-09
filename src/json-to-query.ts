import * as dslToGQL from "./dsl-to-gql";
import { printSchema, buildSchema } from "graphql";
import {
  GeneratorGraphTS
} from "./generator/genGraphJS";
import { generateQueryByField } from "./gql-to-randomquery";
import { generateMutationByField } from "./gql-to-randomquery/generator-query";

export function TransforClientQuery(
  dslSchema: any,
) {
    const { schema, isMutation, operationName } = dslToGQL.createSchema({
      dslSchema
    });
    // output query gql & graph.js
    if (isMutation) {
      const groupMutationObject = generateMutationByField(
        buildSchema(`${printSchema(schema)}`)
      );

      return GeneratorGraphTS({
        ...groupMutationObject
      });
    } else {
      // define query string
      const groupQueryObject = generateQueryByField(
        buildSchema(`${printSchema(schema)}`)
      );
      return GeneratorGraphTS({
        ...groupQueryObject
      });
    }
}
