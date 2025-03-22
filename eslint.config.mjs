// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here,
  {
    ignores: ['components/ui/**/*.vue'],
    rules: {
      'max-lines': ['error', 80],
    },
  },
)
