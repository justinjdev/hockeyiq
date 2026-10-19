# Hockey IQ

A static SvelteKit app for learning hockey positioning: step-through plays on a rink diagram, a quiz mode, lessons, and a glossary. No backend, no accounts; progress lives in `localStorage`.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server (includes the dev-only play editor) |
| `npm run check` | Type and Svelte checks |
| `npm run test:unit -- --run` | Unit tests |
| `npm run test:e2e` | Playwright suite against a production build |
| `npm run test:e2e:base` | Same suite built and served under `/hockeyiq`, catching base-path breakage |
| `npm run build` | Static build into `build/` |

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` builds with `BASE_PATH=/hockeyiq` and deploys on every push to `main` (or manually via workflow dispatch). In the repository settings, set Pages source to "GitHub Actions". `BASE_PATH` is empty by default, so local dev and tests serve from `/`. Internal links must go through `resolve()` from `$app/paths`.

## License

MIT, see [LICENSE](LICENSE).
