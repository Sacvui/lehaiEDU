import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '@/sanity/env'

export const client = projectId
    ? createClient({
        apiVersion,
        dataset,
        projectId,
        useCdn,
    })
    : { fetch: async () => null } as unknown as ReturnType<typeof createClient>
