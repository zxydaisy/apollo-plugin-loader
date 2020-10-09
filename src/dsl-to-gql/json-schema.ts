import { GraphQLObjectType } from "graphql";

export interface RootGraphQLSchema {
  query: GraphQLObjectType;
  mutation?: GraphQLObjectType;
}

interface CommonSchema {
  description?: string;
  title?: string;
}

export interface BodySchema extends CommonSchema {
  in: "body";
  schema: JSONSchemaType;
  entityName?: string;
  required?: boolean;
}

export interface ObjectSchema extends CommonSchema {
  type: "object";
  properties: {
    [propertyName: string]: JSONSchemaType;
  };
  required?: string[];
}

export interface ArraySchema extends CommonSchema {
  type: "array";
  items: JSONSchemaNoBody | JSONSchemaNoBody[];
  required?: boolean;
}

export type JSONSchemaTypes =
  | "string"
  | "date"
  | "integer"
  | "number"
  | "boolean"
  | "file";

export interface ScalarSchema extends CommonSchema {
  type: JSONSchemaTypes;
  format?: string;
  required?: boolean;
  // 自定义 schema 的名字通过实体名字生成的
  entityName?: string;
}

export type JSONSchemaNoBody = ObjectSchema | ArraySchema | ScalarSchema;

export type JSONSchemaType = BodySchema | JSONSchemaNoBody;

/**
 * 自定义的输入结构, 为了和后端的结构匹配
 */
export const isDefineType = (
  jsonSchema: JSONSchemaType
): jsonSchema is BodySchema =>
  Object.keys(jsonSchema || {}).includes("type") &&
  ((jsonSchema as any) || {}).type === "define";

export const isBodyType = (
  jsonSchema: JSONSchemaType
): jsonSchema is BodySchema =>
  Object.keys(jsonSchema || {}).includes("in") &&
  ((jsonSchema as BodySchema) || {}).in === "body";

export const isObjectType = (
  jsonSchema: JSONSchemaType
): jsonSchema is ObjectSchema =>
  !isBodyType(jsonSchema) &&
  (Object.keys(jsonSchema || {}).includes("properties") ||
    (jsonSchema || {})["type"] === "object");

export const isArrayType = (
  jsonSchema: JSONSchemaType
): jsonSchema is ArraySchema =>
  !isBodyType(jsonSchema) &&
  (Object.keys(jsonSchema || {}).includes("items") ||
    (jsonSchema || {})["type"] === "array");
