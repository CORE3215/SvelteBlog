import * as server from '../entries/pages/blog/_page.server.ts.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/blog/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/blog/_page.svelte-db460489.js';
export { server };
export const server_id = "src/routes/blog/+page.server.ts";
export const imports = ["_app/immutable/components/pages/blog/_page.svelte-db460489.js","_app/immutable/chunks/index-c9644a95.js"];
export const stylesheets = ["_app/immutable/assets/_page-acff1a3e.css"];
export const fonts = [];
