/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
	propsParser(filePath, source, resolver, handlers) {
		return require('react-docgen-typescript')
			.withCustomConfig(
				'./tsconfig.json',
				[
					{
						skipPropsWithoutDoc: false,
						// skipPropsWithName: '',
					},
				],
			)
			.parse(source, resolver, handlers);
	},
	components: 'src/**/[A-Z]*.tsx',
	ignore: [
		'src/routes/**',
		'src/state/**',
		'src/util/**',
		'src/**/*.styles.*',
	],
	// sections: [
	// 	{
	// 		name: 'Introduction',
	// 		content: 'docs/introduction.md',
	// 	},
	// 	{
	// 		name: 'Documentation',
	// 		sections: [
	// 			{
	// 				name: 'Installation',
	// 				content: 'docs/installation.md',
	// 				description: 'The description for the installation section',
	// 			},
	// 			{
	// 				name: 'Configuration',
	// 				content: 'docs/configuration.md',
	// 			},
	// 			{
	// 				name: 'Project Website',
	// 				external: true,
	// 				href: 'http://www.bananaapp.org',
	// 			},
	// 		],
	// 	},
	// 	{
	// 		name: 'UI',
	// 		sections: [
	// 			{
	// 				name: 'Elements',
	// 				description: 'Reusable components.',
	// 				content: 'src/elements/doc.md',
	// 				components: 'src/elements/*.tsx',
	// 				usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
	// 				exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
	// 			},
	// 		],
	// 	},
	// ],
};
