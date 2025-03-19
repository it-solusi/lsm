import { createEnv } from '@t3-oss/env-nuxt'
import { z } from 'zod'

export default createEnv({
  server: {
    AWKAWK1: z.string().optional().default('TEST HEHE1'),
  },
})
