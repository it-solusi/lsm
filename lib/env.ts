import { createEnv } from '@t3-oss/env-nuxt'
import { z } from 'zod'

const env = createEnv({
	shared: {
		FIREBASE_APP_CONFIG: z.string().refine(arg => typeof JSON.parse(arg) === 'object').transform(arg => JSON.parse(arg) as Record<string, unknown>),
	},
	emptyStringAsUndefined: true,
})

export default env
