import * as server from '../entries/pages/blog/_id_/_page.server.ts.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/blog/_id_/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/blog/_id_/_page.svelte-2e20e92d.js';
export { server };
export const server_id = "src/routes/blog/[id]/+page.server.ts";
export const imports = ["_app/immutable/components/pages/blog/_id_/_page.svelte-2e20e92d.js","_app/immutable/chunks/index-c9644a95.js","_app/immutable/chunks/index-2856565c.js"];
export const stylesheets = ["_app/immutable/assets/_page-bbca9067.css"];
export const fonts = [];
