
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	paths:{
		base: '/hackathon-2'
	},
	prerender:{
		default: true
	}
};

export default config;
