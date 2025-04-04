// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
	ignores: ['components/ui/*'],
}).append(antfu({
	stylistic: {
		indent: 'tab',
	},
})).append({
	rules: {
		'no-console': 'off',
		'antfu/consistent-chaining': 'error',
	},
})
