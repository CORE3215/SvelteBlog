import { getBlog } from "$lib/server/db";
import type { PageServerLoad } from "./$types"

export const load = (({params}) => {
    const texts = getBlog();
    return{
        texts,
        params
    };
}) satisfies PageServerLoad;

