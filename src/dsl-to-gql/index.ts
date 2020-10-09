import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLOutputType,
  GraphQLSchema
} from "graphql";
import { RequestOptions } from "./getRequestOptions";
import {
  schemaFromStructures,
  getAllInterfaces
} from "./interfaceStructure";

export function parseResponse(response: any, returnType: GraphQLOutputType) {
  const nullableType =
    returnType instanceof GraphQLNonNull ? returnType.ofType : returnType;
  if (
    nullableType instanceof GraphQLObjectType ||
    nullableType instanceof GraphQLList
  ) {
    return response;
  }

  if (nullableType.name === "String" && typeof response !== "string") {
    return JSON.stringify(response);
  }

  return response;
}

export { RequestOptions };

export interface CallBackendArguments<TContext> {
  context: TContext;
  requestOptions: RequestOptions;
}

type Options<T> = {
  [K: string]: any;
};

export const createSchema = <TContext>(
  options: Options<TContext>
) => {
  const { allOperations, isMutation, operationName } = getAllInterfaces(options.dslSchema);

  return {
    schema: schemaFromStructures(allOperations, options),
    endpoints: allOperations,
    isMutation,
    operationName
  };
};

export default createSchema;
