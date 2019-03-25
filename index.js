module.exports = {
	"parser": "babel-eslint",
	"parserOptions": {
		"sourceType": "module",
		"allowImportExportEverywhere": true
	},
	"env": {
		"browser": true,
		"node": true
	},
	"plugins": [
		"import",	// https://github.com/benmosher/eslint-plugin-import
		"promise",	// https://github.com/xjamundx/eslint-plugin-promise
	],
	"rules": {
		// Javascript
		"quotes": ["error", "single"],
		"indent": ["error", "tab", { "SwitchCase": 1 }],
		"arrow-parens": ["off"],
		"consistent-return": "off",
		"comma-dangle": "off",
		"no-console": "off",
		"space-in-parens": ["error", "always"],
		"curly" : ["error", "all"],
		"semi": ["error", "always"],
		
		// Promises
		"promise/param-names": "error",
		"promise/always-return": "off",
		"promise/catch-or-return": "error",
		"promise/no-native": "off",
	}
}
