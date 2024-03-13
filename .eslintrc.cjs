module.exports = {
	env: {
		node: true,
		es2022: true,
		browser: true
	},
	// ...
	extends: [
		// ...
		'eslint:recommended',
		'plugin:astro/recommended',
		'plugin:astro/jsx-a11y-recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'prettier'
	],
	settings: {
		'import/resolver': {
			typescript: true
		}
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		'import/no-unresolved': 'warn',
		'import/order': 'warn',
		'astro/jsx-a11y/media-has-caption': 'off'
	},
	// ...
	overrides: [
		{
			// Define the configuration for `.astro` file.
			files: ['*.astro'],
			// Allows Astro components to be parsed.
			parser: 'astro-eslint-parser',
			// Parse the script in `.astro` as TypeScript by adding the following configuration.
			// It's the setting you need when using TypeScript.
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro']
			}
		},
		{
			files: ['*.ts'],
			parser: '@typescript-eslint/parser',
			extends: ['plugin:@typescript-eslint/recommended'],
			rules: {
				'@typescript-eslint/no-unused-vars': [
					'error',
					{ argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' }
				],
				'@typescript-eslint/no-non-null-assertion': 'off'
			}
		}
		// ...
	]
};
