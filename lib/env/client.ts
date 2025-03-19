import { createEnv } from '@t3-oss/env-nuxt'
import { z } from 'zod'

export default createEnv({
  client: {
    NUXT_PUBLIC_AWKAWK: z.string().optional().default('TEST HEHE111'),
  },
})
