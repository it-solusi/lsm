import env from './lib/env'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/icon',
		'@nuxt/image',
		'@nuxt/scripts',
		'@nuxt/test-utils',
		'shadcn-nuxt',
		'@nuxtjs/tailwindcss',
		'nuxt-vuefire',
	],
	devtools: {
		enabled: true,
	},

	css: ['~/assets/css/tailwind.css'],
	compatibilityDate: '2024-11-01',
	eslint: {
		config: {
			standalone: false,
		},
	},
	vuefire: {
		config: env.FIREBASE_APP_CONFIG,
		auth: {
			enabled: true,
			sessionCookie: false,
		},
	},
})
