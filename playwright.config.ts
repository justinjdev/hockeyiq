import { defineConfig } from '@playwright/test';

// BASE_PATH (e.g. /hockeyiq) builds and serves the site as GitHub Pages does.
const base = process.env.BASE_PATH ?? '';

export default defineConfig({
	testDir: 'tests/e2e',
	testMatch: '**/*.spec.ts',
	use: { baseURL: `http://localhost:4173${base}/` },
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173,
		reuseExistingServer: false,
		timeout: 180_000
	}
});
