

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

				console.info('data', data);

				await TransforClientQuery(json2,
					'/Users/daisy/wy/cloud-admin-template/src/global/apollo/test',
					'./graph2.js'
				);

				await TransforClientQuery(json3,
					'/Users/daisy/wy/cloud-admin-template/src/global/apollo/test',
					'./graph3.js'
				);

				await TransforClientQuery(json4,
					'/Users/daisy/wy/cloud-admin-template/src/global/apollo/test',
					'./graph4.js'
				);

				await TransforClientQuery(json5,
					'/Users/daisy/wy/cloud-admin-template/src/global/apollo/test',
					'./graph5.js'
				);

				await TransforClientQuery(json6,
					'/Users/daisy/wy/cloud-admin-template/src/global/apollo/test',
					'./graph6.js'
				);

			} catch (err) {
				console.error(err);
				process.exit(1);
			}
		},
	)
	.help().argv;