

const json1 = {
	"level": "logicNode",
	"type": "CallGraphQL",
	"label": "数据查询",
	"action": "query",
	"params": [
			{
					"name": "query",
					"in": "path",
					"schema": {
						"type": "string",
						"format": "",
						"isLeaf": true
					},
					"value": {
							"level": "expressionNode",
							"type": "NumericLiteral",
							"value": 123
					}
			},
	],
	"offsetX": 622,
	"offsetY": 255,
	"schemaRef": "#/flowend925/entities/RepairApply",
	"resolverName": "getRepairApply",
	"querySchemaMap": {
			"name": "RepairApply",
			"description": "",
			"type": "object",
			"format": "",
			"$ref": "#/flowend925/entities/RepairApply",
			"level": "entity",
			"checked": null,
			"properties": {
					"id": {
							"name": "id",
							"description": "主键",
							"type": "integer",
							"format": "long",
							"isLeaf": true,
							"editable": false,
							"level": "property",
							"checked": true
					},
					"uid": {
							"name": "uid",
							"description": "用户id",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property",
							"checked": true
					},
					"address": {
							"name": "address",
							"description": "详细地址",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property"
					},
					"applyContent": {
							"name": "applyContent",
							"description": "",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property"
					},
					"applyDate": {
							"name": "applyDate",
							"description": "",
							"type": "string",
							"format": "date-time",
							"isLeaf": true,
							"level": "property"
					},
					"checkStartDate": {
							"name": "checkStartDate",
							"description": "",
							"type": "string",
							"format": "date-time",
							"isLeaf": true,
							"level": "property"
					},
					"checkEndDate": {
							"name": "checkEndDate",
							"description": "",
							"type": "string",
							"format": "date-time",
							"isLeaf": true,
							"level": "property"
					},
					"completeDate": {
							"name": "completeDate",
							"description": "",
							"type": "string",
							"format": "date-time",
							"isLeaf": true,
							"level": "property"
					},
					"cost": {
							"name": "cost",
							"description": "总费用",
							"type": "decimal",
							"format": "double",
							"isLeaf": true,
							"label": "",
							"level": "property",
							"checked": true
					},
					"RepairMan": {
							"name": "RepairMan",
							"description": "",
							"type": "object",
							"format": "",
							"$ref": "#/flowend925/entities/RepairMan",
							"isLeaf": true,
							"relationship": "ManyToOne",
							"level": "entity",
							"expanded": true,
							"checked": null,
							"properties": {
									"id": {
											"name": "id",
											"description": "主键",
											"type": "integer",
											"format": "long",
											"isLeaf": true,
											"editable": false,
											"level": "property",
											"checked": true
									},
									"uid": {
											"name": "uid",
											"description": "",
											"type": "string",
											"format": "",
											"isLeaf": true,
											"level": "property"
									},
									"userName": {
											"name": "userName",
											"description": "",
											"type": "string",
											"format": "",
											"isLeaf": true,
											"level": "property"
									},
									"price": {
											"name": "price",
											"description": "",
											"type": "decimal",
											"format": "double",
											"isLeaf": true,
											"level": "property"
									}
							}
					},
					"status": {
							"name": "status",
							"description": "",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property",
							"checked": true
					},
					"comment": {
							"name": "comment",
							"description": "",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property"
					}
			}
	}
}

const json2 = {
	"level": "logicNode",
	"type": "CallGraphQL",
	"label": "数据查询",
	"action": "mutation",
	"params": [
			{
					"name": "body",
					"in": "path",
					"schema": {
						"type": "string",
						"format": "",
						"isLeaf": true
					},
					"value": {
							"level": "expressionNode",
							"type": "NumericLiteral",
							"value": 123
					}
			},
	],
	"offsetX": 622,
	"offsetY": 255,
	"schemaRef": "#/flowend925/entities/RepairApply",
	"resolverName": "createRepairApply",
	"querySchemaMap": {
			"name": "RepairApply",
			"description": "",
			"type": "object",
			"format": "",
			"$ref": "#/flowend925/entities/RepairApply",
			"level": "entity",
			"checked": null,
			"properties": {
					"id": {
							"name": "id",
							"description": "主键",
							"type": "integer",
							"format": "long",
							"isLeaf": true,
							"editable": false,
							"level": "property",
							"checked": true
					},
					"uid": {
							"name": "uid",
							"description": "用户id",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property",
							"checked": true
					},
					"address": {
							"name": "address",
							"description": "详细地址",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property"
					},
					"applyContent": {
							"name": "applyContent",
							"description": "",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property"
					},
					"applyDate": {
							"name": "applyDate",
							"description": "",
							"type": "string",
							"format": "date-time",
							"isLeaf": true,
							"level": "property"
					},
					"checkStartDate": {
							"name": "checkStartDate",
							"description": "",
							"type": "string",
							"format": "date-time",
							"isLeaf": true,
							"level": "property"
					},
					"checkEndDate": {
							"name": "checkEndDate",
							"description": "",
							"type": "string",
							"format": "date-time",
							"isLeaf": true,
							"level": "property"
					},
					"completeDate": {
							"name": "completeDate",
							"description": "",
							"type": "string",
							"format": "date-time",
							"isLeaf": true,
							"level": "property"
					},
					"cost": {
							"name": "cost",
							"description": "总费用",
							"type": "decimal",
							"format": "double",
							"isLeaf": true,
							"label": "",
							"level": "property",
							"checked": true
					},
					"RepairMan": {
							"name": "RepairMan",
							"description": "",
							"type": "object",
							"format": "",
							"$ref": "#/flowend925/entities/RepairMan",
							"isLeaf": true,
							"relationship": "ManyToOne",
							"level": "entity",
							"expanded": true,
							"checked": null,
							"properties": {
									"id": {
											"name": "id",
											"description": "主键",
											"type": "integer",
											"format": "long",
											"isLeaf": true,
											"editable": false,
											"level": "property",
											"checked": true
									},
									"uid": {
											"name": "uid",
											"description": "",
											"type": "string",
											"format": "",
											"isLeaf": true,
											"level": "property"
									},
									"userName": {
											"name": "userName",
											"description": "",
											"type": "string",
											"format": "",
											"isLeaf": true,
											"level": "property"
									},
									"price": {
											"name": "price",
											"description": "",
											"type": "decimal",
											"format": "double",
											"isLeaf": true,
											"level": "property"
									}
							}
					},
					"status": {
							"name": "status",
							"description": "",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property",
							"checked": true
					},
					"comment": {
							"name": "comment",
							"description": "",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property"
					}
			}
	}
}

const json3 = {
	"level": "logicNode",
	"type": "CallGraphQL",
	"label": "数据查询",
	"action": "query",
	"params": [
			{
					"name": "query",
					"in": "path",
					"schema": {
						"type": "string",
						"format": "",
						"isLeaf": true
					},
					"value": {
							"level": "expressionNode",
							"type": "NumericLiteral",
							"value": 123
					}
			},
	],
	"offsetX": 622,
	"offsetY": 255,
	"schemaRef": "#/flowend925/entities/RepairApply",
	"resolverName": "deleteRepairApply",
	"querySchemaMap": {
			"name": "RepairApply",
			"description": "",
			"type": "object",
			"format": "",
			"$ref": "#/flowend925/entities/RepairApply",
			"level": "entity",
			"checked": null,
			"properties": {
					"id": {
							"name": "id",
							"description": "主键",
							"type": "integer",
							"format": "long",
							"isLeaf": true,
							"editable": false,
							"level": "property",
							"checked": true
					},
					"uid": {
							"name": "uid",
							"description": "用户id",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property",
							"checked": true
					},
					"address": {
							"name": "address",
							"description": "详细地址",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property"
					},
					"applyContent": {
							"name": "applyContent",
							"description": "",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property"
					},
					"applyDate": {
							"name": "applyDate",
							"description": "",
							"type": "string",
							"format": "date-time",
							"isLeaf": true,
							"level": "property"
					},
					"checkStartDate": {
							"name": "checkStartDate",
							"description": "",
							"type": "string",
							"format": "date-time",
							"isLeaf": true,
							"level": "property"
					},
					"checkEndDate": {
							"name": "checkEndDate",
							"description": "",
							"type": "string",
							"format": "date-time",
							"isLeaf": true,
							"level": "property"
					},
					"completeDate": {
							"name": "completeDate",
							"description": "",
							"type": "string",
							"format": "date-time",
							"isLeaf": true,
							"level": "property"
					},
					"cost": {
							"name": "cost",
							"description": "总费用",
							"type": "decimal",
							"format": "double",
							"isLeaf": true,
							"label": "",
							"level": "property",
							"checked": true
					},
					"RepairMan": {
							"name": "RepairMan",
							"description": "",
							"type": "object",
							"format": "",
							"$ref": "#/flowend925/entities/RepairMan",
							"isLeaf": true,
							"relationship": "ManyToOne",
							"level": "entity",
							"expanded": true,
							"checked": null,
							"properties": {
									"id": {
											"name": "id",
											"description": "主键",
											"type": "integer",
											"format": "long",
											"isLeaf": true,
											"editable": false,
											"level": "property",
											"checked": true
									},
									"uid": {
											"name": "uid",
											"description": "",
											"type": "string",
											"format": "",
											"isLeaf": true,
											"level": "property"
									},
									"userName": {
											"name": "userName",
											"description": "",
											"type": "string",
											"format": "",
											"isLeaf": true,
											"level": "property"
									},
									"price": {
											"name": "price",
											"description": "",
											"type": "decimal",
											"format": "double",
											"isLeaf": true,
											"level": "property"
									}
							}
					},
					"status": {
							"name": "status",
							"description": "",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property",
							"checked": true
					},
					"comment": {
							"name": "comment",
							"description": "",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property"
					}
			}
	}
}

const json4 = {
	"level": "logicNode",
	"type": "CallGraphQL",
	"label": "数据查询",
	"action": "query",
	"params": [
			{
					"name": "query",
					"in": "path",
					"schema": {
						"type": "string",
						"format": "",
						"isLeaf": true
					},
					"value": {
							"level": "expressionNode",
							"type": "NumericLiteral",
							"value": 123
					}
			},
	],
	"offsetX": 622,
	"offsetY": 255,
	"schemaRef": "#/flowend925/entities/RepairApply",
	"resolverName": "updateRepairApply",
	"querySchemaMap": {
			"name": "RepairApply",
			"description": "",
			"type": "object",
			"format": "",
			"$ref": "#/flowend925/entities/RepairApply",
			"level": "entity",
			"checked": null,
			"properties": {
					"id": {
							"name": "id",
							"description": "主键",
							"type": "integer",
							"format": "long",
							"isLeaf": true,
							"editable": false,
							"level": "property",
							"checked": true
					},
					"uid": {
							"name": "uid",
							"description": "用户id",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property",
							"checked": true
					},
					"address": {
							"name": "address",
							"description": "详细地址",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property"
					},
					"applyContent": {
							"name": "applyContent",
							"description": "",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property"
					},
					"applyDate": {
							"name": "applyDate",
							"description": "",
							"type": "string",
							"format": "date-time",
							"isLeaf": true,
							"level": "property"
					},
					"checkStartDate": {
							"name": "checkStartDate",
							"description": "",
							"type": "string",
							"format": "date-time",
							"isLeaf": true,
							"level": "property"
					},
					"checkEndDate": {
							"name": "checkEndDate",
							"description": "",
							"type": "string",
							"format": "date-time",
							"isLeaf": true,
							"level": "property"
					},
					"completeDate": {
							"name": "completeDate",
							"description": "",
							"type": "string",
							"format": "date-time",
							"isLeaf": true,
							"level": "property"
					},
					"cost": {
							"name": "cost",
							"description": "总费用",
							"type": "decimal",
							"format": "double",
							"isLeaf": true,
							"label": "",
							"level": "property",
							"checked": true
					},
					"RepairMan": {
							"name": "RepairMan",
							"description": "",
							"type": "object",
							"format": "",
							"$ref": "#/flowend925/entities/RepairMan",
							"isLeaf": true,
							"relationship": "ManyToOne",
							"level": "entity",
							"expanded": true,
							"checked": null,
							"properties": {
									"id": {
											"name": "id",
											"description": "主键",
											"type": "integer",
											"format": "long",
											"isLeaf": true,
											"editable": false,
											"level": "property",
											"checked": true
									},
									"uid": {
											"name": "uid",
											"description": "",
											"type": "string",
											"format": "",
											"isLeaf": true,
											"level": "property"
									},
									"userName": {
											"name": "userName",
											"description": "",
											"type": "string",
											"format": "",
											"isLeaf": true,
											"level": "property"
									},
									"price": {
											"name": "price",
											"description": "",
											"type": "decimal",
											"format": "double",
											"isLeaf": true,
											"level": "property"
									}
							}
					},
					"status": {
							"name": "status",
							"description": "",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property",
							"checked": true
					},
					"comment": {
							"name": "comment",
							"description": "",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property"
					}
			}
	}
}

const json5 = {
	"level": "logicNode",
	"type": "CallGraphQL",
	"label": "数据查询",
	"action": "query",
	"params": [
			{
					"name": "query",
					"in": "path",
					"schema": {
						"type": "string",
						"format": "",
						"isLeaf": true
					},
					"value": {
							"level": "expressionNode",
							"type": "NumericLiteral",
							"value": 123
					}
			},
	],
	"offsetX": 622,
	"offsetY": 255,
	"schemaRef": "#/flowend925/entities/RepairApply",
	"resolverName": "countRepairApply",
	"querySchemaMap": {
			"name": "RepairApply",
			"description": "",
			"type": "object",
			"format": "",
			"$ref": "#/flowend925/entities/RepairApply",
			"level": "entity",
			"checked": null,
			"properties": {
					"id": {
							"name": "id",
							"description": "主键",
							"type": "integer",
							"format": "long",
							"isLeaf": true,
							"editable": false,
							"level": "property",
							"checked": true
					},
					"uid": {
							"name": "uid",
							"description": "用户id",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property",
							"checked": true
					},
					"address": {
							"name": "address",
							"description": "详细地址",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property"
					},
					"applyContent": {
							"name": "applyContent",
							"description": "",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property"
					},
					"applyDate": {
							"name": "applyDate",
							"description": "",
							"type": "string",
							"format": "date-time",
							"isLeaf": true,
							"level": "property"
					},
					"checkStartDate": {
							"name": "checkStartDate",
							"description": "",
							"type": "string",
							"format": "date-time",
							"isLeaf": true,
							"level": "property"
					},
					"checkEndDate": {
							"name": "checkEndDate",
							"description": "",
							"type": "string",
							"format": "date-time",
							"isLeaf": true,
							"level": "property"
					},
					"completeDate": {
							"name": "completeDate",
							"description": "",
							"type": "string",
							"format": "date-time",
							"isLeaf": true,
							"level": "property"
					},
					"cost": {
							"name": "cost",
							"description": "总费用",
							"type": "decimal",
							"format": "double",
							"isLeaf": true,
							"label": "",
							"level": "property",
							"checked": true
					},
					"RepairMan": {
							"name": "RepairMan",
							"description": "",
							"type": "object",
							"format": "",
							"$ref": "#/flowend925/entities/RepairMan",
							"isLeaf": true,
							"relationship": "ManyToOne",
							"level": "entity",
							"expanded": true,
							"checked": null,
							"properties": {
									"id": {
											"name": "id",
											"description": "主键",
											"type": "integer",
											"format": "long",
											"isLeaf": true,
											"editable": false,
											"level": "property",
											"checked": true
									},
									"uid": {
											"name": "uid",
											"description": "",
											"type": "string",
											"format": "",
											"isLeaf": true,
											"level": "property"
									},
									"userName": {
											"name": "userName",
											"description": "",
											"type": "string",
											"format": "",
											"isLeaf": true,
											"level": "property"
									},
									"price": {
											"name": "price",
											"description": "",
											"type": "decimal",
											"format": "double",
											"isLeaf": true,
											"level": "property"
									}
							}
					},
					"status": {
							"name": "status",
							"description": "",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property",
							"checked": true
					},
					"comment": {
							"name": "comment",
							"description": "",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property"
					}
			}
	}
}

const json6 = {
	"level": "logicNode",
	"type": "CallGraphQL",
	"label": "数据查询",
	"action": "query",
	"params": [
			{
					"name": "query",
					"in": "path",
					"schema": {
						"type": "string",
						"format": "",
						"isLeaf": true
					},
					"value": {
							"level": "expressionNode",
							"type": "NumericLiteral",
							"value": 123
					}
			},
	],
	"offsetX": 622,
	"offsetY": 255,
	"schemaRef": "#/flowend925/entities/RepairApply",
	"resolverName": "getAllRepairApply",
	"querySchemaMap": {
			"name": "RepairApply",
			"description": "",
			"type": "object",
			"format": "",
			"$ref": "#/flowend925/entities/RepairApply",
			"level": "entity",
			"checked": null,
			"properties": {
					"id": {
							"name": "id",
							"description": "主键",
							"type": "integer",
							"format": "long",
							"isLeaf": true,
							"editable": false,
							"level": "property",
							"checked": true
					},
					"uid": {
							"name": "uid",
							"description": "用户id",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property",
							"checked": true
					},
					"address": {
							"name": "address",
							"description": "详细地址",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property"
					},
					"applyContent": {
							"name": "applyContent",
							"description": "",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property"
					},
					"applyDate": {
							"name": "applyDate",
							"description": "",
							"type": "string",
							"format": "date-time",
							"isLeaf": true,
							"level": "property"
					},
					"checkStartDate": {
							"name": "checkStartDate",
							"description": "",
							"type": "string",
							"format": "date-time",
							"isLeaf": true,
							"level": "property"
					},
					"checkEndDate": {
							"name": "checkEndDate",
							"description": "",
							"type": "string",
							"format": "date-time",
							"isLeaf": true,
							"level": "property"
					},
					"completeDate": {
							"name": "completeDate",
							"description": "",
							"type": "string",
							"format": "date-time",
							"isLeaf": true,
							"level": "property"
					},
					"cost": {
							"name": "cost",
							"description": "总费用",
							"type": "decimal",
							"format": "double",
							"isLeaf": true,
							"label": "",
							"level": "property",
							"checked": true
					},
					"RepairMan": {
							"name": "RepairMan",
							"description": "",
							"type": "object",
							"format": "",
							"$ref": "#/flowend925/entities/RepairMan",
							"isLeaf": true,
							"relationship": "ManyToOne",
							"level": "entity",
							"expanded": true,
							"checked": null,
							"properties": {
									"id": {
											"name": "id",
											"description": "主键",
											"type": "integer",
											"format": "long",
											"isLeaf": true,
											"editable": false,
											"level": "property",
											"checked": true
									},
									"uid": {
											"name": "uid",
											"description": "",
											"type": "string",
											"format": "",
											"isLeaf": true,
											"level": "property"
									},
									"userName": {
											"name": "userName",
											"description": "",
											"type": "string",
											"format": "",
											"isLeaf": true,
											"level": "property"
									},
									"price": {
											"name": "price",
											"description": "",
											"type": "decimal",
											"format": "double",
											"isLeaf": true,
											"level": "property"
									}
							}
					},
					"status": {
							"name": "status",
							"description": "",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property",
							"checked": true
					},
					"comment": {
							"name": "comment",
							"description": "",
							"type": "string",
							"format": "",
							"isLeaf": true,
							"level": "property"
					}
			}
	}
}

module.exports = {
	json1,
	json2,
	json3,
	json4,
	json5,
	json6
}