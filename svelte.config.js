import adapter from '@sveltejs/adapter-static';

const config = {
    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),
        paths: {
            base: "/hackathon-2",
        },
    }
};


export default config;