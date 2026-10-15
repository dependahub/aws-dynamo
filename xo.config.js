
/** @type {import('xo').FlatXoConfig} */
const xoConfig = [
	{
		name: 'global-ignores',
		ignores: [
			'@types/**',
		],
	},
	{
		name: 'project-rules',
		rules: {
			'capitalized-comments': 'off',
			'unicorn/single-line-block-comment-style': 'off',
			'jsdoc/require-description': 'off',
			'jsdoc/require-param': 'error',
			'jsdoc/require-returns': 'error',
			'jsdoc/require-returns-description': 'off',
			'jsdoc/require-asterisk-prefix': 'off',
			'jsdoc/require-param-description': 'off',
		},
	},
];

export default xoConfig;
