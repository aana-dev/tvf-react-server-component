import { serve } from '@hono/node-server';
import { build as esbuild } from 'esbuild';
import { Hono } from 'hono';
import { fileURLToPath } from 'node:url';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
const app = new Hono();

app.get('/', async (c) => {
	const Page = await import('./build/page.js');

	// renders React element to a static HTML string on the server
	const html = renderToString(createElement(Page.default));
	return c.html(html);
});

serve(app, async (info) => {
	// Build the RSC bundle before starting the server
	await build();
	console.log(`Server running at http://localhost:${info.port}`);
});

async function build() {
	await esbuild({
		bundle: true,
		// ES modules
		format: 'esm',
		logLevel: 'error',
		packages: 'external',
		entryPoints: [resolveApp('page.jsx')],
		outdir: resolveBuild()
	});
}

const appDir = new URL('./app/', import.meta.url);
const buildDir = new URL('./build/', import.meta.url);

function resolveApp(path = '') {
	return fileURLToPath(new URL(path, appDir));
}
function resolveBuild(path = '') {
	return fileURLToPath(new URL(path, buildDir));
}
