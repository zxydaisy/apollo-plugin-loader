

const { TransforClientQuery } = require("../dist/json-to-query");
const { json1, json3, json2, json4, json5, json6 } = require('./test');
/**
 * 用自定义的结构测试转化工具
 * 
 * yarn codegen  --dsl-schema=entityResolver.json
 */
require('yargs')
	.scriptName('dsl-test')
	.command(
		'$0',
		'Convert swagger schema to graphql schema',
		(yargs) => {
			yargs.options('dsl-schema', {
				describe: 'Path or url to a swagger schema, can be json or yaml',
				type: 'string',
				demandOption: true,
			});
		},
		async ({ dslSchema }) => {
			try {

				const data = await TransforClientQuery(json1,
					'/Users/daisy/wy/cloud-admin-template/src/global/apollo/test',
					'./graph1.js'
				);

				console.info('data1', data);

				const data2 = await TransforClientQuery(json2,
					'/Users/daisy/wy/cloud-admin-template/src/global/apollo/test',
					'./graph2.js'
				);
				console.info('data2', data2);

				const data3 = await TransforClientQuery(json3,
					'/Users/daisy/wy/cloud-admin-template/src/global/apollo/test',
					'./graph3.js'
				);

				console.info('data3', data3);

				const data4 = await TransforClientQuery(json4,
					'/Users/daisy/wy/cloud-admin-template/src/global/apollo/test',
					'./graph4.js'
				);
				console.info('data4', data4);

				const data5 = await TransforClientQuery(json5,
					'/Users/daisy/wy/cloud-admin-template/src/global/apollo/test',
					'./graph5.js'
				);
				console.info('data5', data5);

				const data6 = await TransforClientQuery(json6,
					'/Users/daisy/wy/cloud-admin-template/src/global/apollo/test',
					'./graph6.js'
				);

				console.info('data6', data6);

			} catch (err) {
				console.error(err);
				process.exit(1);
			}
		},
	)
	.help().argv;