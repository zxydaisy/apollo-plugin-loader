import {
  DSLSchema,
  isOa3Param,
  Oa3Param,
  Responses,
  GraphQLParameters,
  getParamDetailsFromRequestBody,
  Endpoints,
  Oa2NonBodyParam,
  getFields,
  NonBodyParam
} from "./config";
import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { RootGraphQLSchema, JSONSchemaType, BodySchema } from "./json-schema";

export interface Param {
  required: boolean;
  type: "header" | "query" | "formData" | "path" | "body";
  name: string;
  swaggerName: string;
  jsonSchema: JSONSchemaType;
}

interface StructureParam {
  required: boolean;
  type: "header" | "query" | "formData" | "path" | "body";
  name: string;
  jsonSchema: JSONSchemaType;
}

export interface Interfaces {
  [operationId: string]: Endpoint;
}
const replaceOddChars = (str: string): string =>
  str.replace(/[^_a-zA-Z0-9]/g, "_");

const paramMap = {
  GETALL: [
    {
      name: "query",
      in: "query",
      jsonSchema: {
        type: "string",
        format: "",
        isLeaf: true
      }
    }
  ],
  COUNT: [
    {
      name: "query",
      in: "query",
      jsonSchema: {
        type: "string",
        format: "",
        isLeaf: true
      }
    }
  ],
  GET: [
    {
      name: "id",
      in: "query",
      jsonSchema: {
        type: "string",
        format: "",
        isLeaf: true
      }
    }
  ],
  DELETE: [
    {
      name: "id",
      in: "query",
      jsonSchema: {
        type: "float",
        format: "",
        isLeaf: true
      }
    }
  ],
  UPDATE: [
    {
      name: "body",
      in: "body",
      jsonSchema: {
        type: "define",
        format: "",
        isLeaf: true
      }
    }
  ],
  CREATE: [
    {
      name: "body",
      in: "body",
      jsonSchema: {
        type: "define",
        format: "",
        isLeaf: true
      }
    }
  ]
};

/**
 * 根据和接口约定的格式生成的参数
 */
export const getDefineParam = (
  param: any,
  entityName: string
): StructureParam => {
  const { name, jsonSchema } = param;

  return {
    name,
    type: param.in,
    required: param.required,
    jsonSchema: Object.assign(jsonSchema || {}, {
      entityName
    })
  };
};

export interface EndpointParam {
  required: boolean;
  type: "header" | "query" | "formData" | "path" | "body";
  name: string;
  swaggerName: string;
  jsonSchema: JSONSchemaType;
}

// api 返回接哦股
export interface Endpoint {
  parameters: EndpointParam[];
  description?: string;
  response: JSONSchemaType | undefined;
  getRequestOptions: (args: GraphQLParameters) => RequestOptions;
  mutation: boolean;
  resolverOptions: ResolverOptions;
}

export interface ResolverOptions {
  baseUrl: string;
  path: string;
  // 扩展配置
  extendConfig: any;
  query: Param[];
}

export interface Response {
  parameters: EndpointParam[];
  description?: string;
  response: JSONSchemaType | undefined;
  getRequestOptions: (args: GraphQLParameters) => RequestOptions;
  mutation: boolean;
  schema: JSONSchemaType;
}

export interface RequestOptions {
  baseUrl?: string;
  path: string;
  method: string;
  headers?: {
    [key: string]: string;
  };
  query?: {
    [key: string]: string | string[];
  };
  body?: any;
  bodyType: "json" | "formData";
}

export type EntityResolver = {
  uuid: string;
  name: string;
  code: string;
  interface: {
    name: string;
    path: string;
    parameters: Oa2NonBodyParam[];
    responses: {
      schema: BodySchema;
    };
    method: string;
    extendConfig: {
      [key: string]: any;
    };
    description: string;
    requestBody?: any;
  };
};

type SourceItem = {
  resolverName: string; // 通过 sourceKey 能找到实体模版函数 自定义名字，使用的的时候第二个传入 args
};

type StructureResolver = {
  type: string;
  params: Param[];
  name: string;
  uuid: string;
  expression: any; // schema structure
  source: {
    [sourceKey: string]: SourceItem;
  };
};

export enum ResolverType {
  INTERFACE = "interface",
  JOIN = "join",
  JSON = "json"
}

/**
 * resolver 作为信息表达的入口
 */

const action = {
  GETALL: "getAll",
  GET: "get",
  COUNT: "count",
  UPDATE: "update",
  DELETE: "delete",
  CREATE: "create"
};

// 判断返回的 action 前缀
function getActionKey(resolverName: string) {
  if (resolverName.indexOf(action.GETALL) > -1) {
    return "GETALL";
  }

  if (resolverName.indexOf(action.GET) > -1) {
    return "GET";
  }

  if (resolverName.indexOf(action.COUNT) > -1) {
    return "COUNT";
  }

  if (resolverName.indexOf(action.UPDATE) > -1) {
    return "UPDATE";
  }

  if (resolverName.indexOf(action.DELETE) > -1) {
    return "DELETE";
  }

  if (resolverName.indexOf(action.CREATE) > -1) {
    return "CREATE";
  }
}

/**
 * 获取全部 stucture
 * 创建关联关系
 *
 * deleteXX(id: Long)
 * createXX(body: XXXInput)
 * countXX(query: String)
 * getAllXX(query: String)
 * getXXX(query: String)
 * updateXX(body: XXXInput)
 *
 * @param schema
 * 目前转化单个 query
 */
export const getAllInterfaces = (schema: any = {}) => {
  const allOperations: {
    [key: string]: any;
  } = {};

  //   const bodyParams = schema.requestBody
  //   ? getParamDetailsFromRequestBody(schema.requestBody)
  //   : [];

  /**
   * GETALL, GET, COUNT, CREATE, UPDATE, DELETE
   * getAll, get, count, create, update, delete
   */
  // ["POST", "PUT", "PATCH", "DELETE"].indexOf(method) !== -1;
  const operationName = schema.resolverName || schema.operationName;
  const actionKey = getActionKey(operationName);
  const isMutation = ["CREATE", "UPDATE", "DELETE"].indexOf(actionKey) !== -1;
  // 使用预设置的参数
  const schemaParams = paramMap[actionKey];
  // 获取当前的实体名字
  const entityName = schema.querySchemaMap.name;

  const parameterDetails = [
    ...(schemaParams
      ? Object.values(schemaParams).map((param: any) => {
          return getDefineParam(param, entityName);
        })
      : [])
  ];
  allOperations[operationName] = {
    // entityResolver.type
    type: ResolverType.INTERFACE,
    // 定义 schema 的传入参数
    parameters: parameterDetails,
    description: schema.description,
    // 定义 schema 的返回结构
    response: schema.querySchemaMap,
    mutation: isMutation
  };

  return {
    allOperations,
    isMutation,
    operationName
  };
};

type Options<T> = {
  [K in keyof T]: K extends "context" ? T[K] : number;
};

export function addTitlesToJsonSchemas(schema: DSLSchema) {
  const jsonSchemas: {
    [schema: string]: any;
  } = schema.entities || {};
  Object.keys(jsonSchemas).forEach((schemaName: string) => {
    const jsonSchema = jsonSchemas[schemaName];
    jsonSchema.title = jsonSchema.title || schemaName;
  });

  return schema;
}

export const schemaFromStructures = <TContext>(
  endpoints: Endpoints,
  options: Options<TContext>
): GraphQLSchema => {
  const gqlTypes = {};
  const queryFields = getFields(endpoints, false, gqlTypes, options);
  if (Object.keys(queryFields).length) {
    const graphQLSchema: RootGraphQLSchema = {
      query: new GraphQLObjectType({
        name: "Query",
        fields: queryFields
      })
    };

    return new GraphQLSchema(graphQLSchema);
  }

  const mutationFields = getFields(endpoints, true, gqlTypes, options);
  if (Object.keys(mutationFields).length) {
    const graphQLSchema: any = {
      mutation: new GraphQLObjectType({
        name: "Mutation",
        fields: mutationFields
      })
    };
    return new GraphQLSchema(graphQLSchema);
  }
};
