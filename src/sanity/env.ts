export const apiVersion =
    process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Sanity Project ID - configured for lehaiEDU Blog
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '58r14tlr'

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
    // Warn instead of throw to allow build to pass without env vars
    if (v === undefined) {
        console.warn(errorMessage)
        return '' as unknown as T
    }
    return v
}
