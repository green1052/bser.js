# AGENTS.md

## Commands

```bash
bun install              # install deps
bun test                 # run all tests (integration, hits real API)
bun run build            # build dist/ (Bun.build + bun-plugin-dtsx)
tsc --noEmit             # typecheck (no typecheck script — run directly)
```

There is no lint or format command configured.

## Tests are integration tests, not unit tests

- All tests in `test/*.test.ts` hit the real Eternal Return API (`https://open-api.bser.io`).
- Set `BSER_API_KEY` env var (`.env` file works — Bun loads it automatically). Without it, all tests skip via `test.skipIf(!hasApiKey)`.
- Tests share state via `test/helpers.ts` `sharedState` (seasonId, nickname, userId, gameId). Files run alphabetically: client → data → match → ranking → user.
- `match.test.ts` is self-sufficient — its `beforeAll` fetches a gameId via ranking→user→games chain if not already set.
- No mocking is used. Do not add mocks unless the user explicitly asks.

## Build

- `build.ts` uses `bun-plugin-dtsx` (NOT `bun-plugin-dts` — that one has a `ts.sys` bug).
- `packages: "external"` — `ky` is not bundled into dist; consumers must install it.
- `src/` imports use `.ts` extensions (e.g. `./client.ts`). This is intentional — `tsconfig.json` has `allowImportingTsExtensions: true`, `noEmit: true`, `moduleResolution: "bundler"`. Do not remove `.ts` extensions.
- `tsconfig.json` is unchanged from Bun's default template. Do not add `outDir` or `emit` settings — build is handled by `build.ts`, not tsc.

## Package layout

- `src/index.ts` is barrel-only — re-exports from `client.ts`, `types.ts`, `constants.ts`, and module files. Module classes (`DataModule`, etc.) are type-only re-exports.
- `BserClient` lives in `src/client.ts` alongside `HttpClient`, `BserApiError`, `BserClientOptions`.
- `package.json` `exports` has three conditions: `types` (dist .d.ts), `import` (dist .js), `bun` (src/index.ts directly). The `bun` condition lets Bun consumers import source without building.
- `files: ["dist", "src"]` — both dist and src are published.

## CI / Publish

- `.github/workflows/ci.yml` triggers ONLY on tag push matching `*.*.*` (no branch triggers).
- Publish step writes `.npmrc` (in project root, not `~/.npmrc`) from `NPM_CONFIG_TOKEN` env secret, then runs `bun publish --access public`. `bun publish` does not read the env var directly — the `.npmrc` file is required.
- Secret name is `NPM_CONFIG_TOKEN` (not `NPM_TOKEN`).
- Release: `git tag 1.0.0 && git push --tags` (no `v` prefix).

## API quirks

- Response wrapper: `{ code, message, <payloadKey> }`. `HttpClient.request<T>` unwraps by finding the first non-`code`/`non-message` key. Do not assume the key is always `data`.
- HTTP errors (403, 404, 429) are caught and re-thrown as `BserApiError` with `code = response.status`.
- `User.userId` is a string (not a number — changed in API v11.0.0 for privacy). All UserModule methods take `userId: string`.
- `TopRanker.serverCode` and `serverRank` are optional — `getTopByServer` does not return them.