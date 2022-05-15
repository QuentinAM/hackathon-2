export const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","favicon.ico","images/CDFI.jpg","images/CDFI_bg.png","images/DEFY_bg.jpg","images/ECOREAL.png","images/ECOREAL_bg.png","images/GAL.png","images/GAL_bg.jpg","images/GAL_bg.png","images/ICOM.jpg","images/ICOM_bg.jpg","images/LBLOCK.png","images/LBLOCK_bg.png","images/RAT.png","images/RAT_bg.png","images/SCOP.png","images/SCOP_bg.jpeg","images/ZKS.png","images/ZKS_bg.jpeg","images/bg1.png"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".jpg":"image/jpeg",".png":"image/png",".jpeg":"image/jpeg"},
	_: {
		entry: {"file":"start-7fd5a83a.js","js":["start-7fd5a83a.js","chunks/index-2be7077c.js","chunks/index-dcc45296.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/8.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "account",
				pattern: /^\/account\/?$/,
				names: [],
				types: [],
				path: "/account",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "ico",
				pattern: /^\/ico\/?$/,
				names: [],
				types: [],
				path: "/ico",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "ido",
				pattern: /^\/ido\/?$/,
				names: [],
				types: [],
				path: "/ido",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "ieo",
				pattern: /^\/ieo\/?$/,
				names: [],
				types: [],
				path: "/ieo",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "project",
				pattern: /^\/project\/?$/,
				names: [],
				types: [],
				path: "/project",
				shadow: null,
				a: [0,8],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
