import { getBlog } from "$lib/server/db";
import type { PageServerLoad } from "./$types"

export const load = (() => {
    const texts = getBlog();
    return{
        texts
    };
}) satisfies PageServerLoad;

