export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","img/404.jpg","img/blog.png","img/blog1.png","img/V.png","shiba/license.txt","shiba/scene.bin","shiba/scene.gltf","shiba/textures/default_baseColor.png","Vow.mp3"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain",".bin":"application/octet-stream",".gltf":"model/gltf+json",".mp3":"audio/mpeg"},
	_: {
		entry: {"file":"_app/immutable/start-8017b9e1.js","imports":["_app/immutable/start-8017b9e1.js","_app/immutable/chunks/index-c9644a95.js","_app/immutable/chunks/index-2856565c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog/[id]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
