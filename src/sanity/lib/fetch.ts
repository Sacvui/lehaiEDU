import { client } from "@/sanity/lib/client";
import { type QueryParams } from "next-sanity";
import { projectId } from "../env";

export async function sanityFetch<QueryResponse>({
    query,
    params = {},
    tags,
}: {
    query: string;
    params?: QueryParams;
    tags?: string[];
}) {
    // If no project ID is set, return null to prevent crash
    if (!projectId) {
        console.warn("Sanity Project ID is missing. Returning null.");
        return null as unknown as QueryResponse;
    }

    try {
        return await client.fetch<QueryResponse>(query, params, {
            next: {
                revalidate: process.env.NODE_ENV === 'development' ? 30 : 60, // Reduced to 60s for faster updates
                tags,
            },
        });
    } catch (error) {
        console.error("Error fetching from Sanity:", error);
        return [] as unknown as QueryResponse;
    }
}
