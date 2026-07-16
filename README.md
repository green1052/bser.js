# bser.js

[English](#english) | [한국어](#한국어)

---

<a id="english"></a>

# bser.js (English)

A TypeScript wrapper for the [Eternal Return Open API](https://developer.eternalreturn.io). Built with Bun + ky.

## Features

- **Full type safety** — all 11 endpoints and 284+ response fields typed
- **Bun-native, Node.js compatible** — ships ESM + d.ts; works in Bun, Node.js 18+, and bundlers
- **Zero runtime dependencies** — only `ky` for HTTP
- **JSDoc on every method** — inline IntelliSense without leaving your editor
- **Integration-tested** — real API test chain (data → ranking → user → match)
- **MIT licensed**

## Quick start

```bash
bun install
```

```ts
import { BserClient, Language, MatchingMode, MatchingTeamMode, RegionServerCode } from "@green1052/bser.js";

const client = new BserClient({ apiKey: "your-api-key" });

// Search user by nickname
const user = await client.user.getByNickname("nickname");

// Recent games (last 90 days)
const games = await client.user.getGames(user.uid);

// Top rankers
const top = await client.ranking.getTop(33, MatchingTeamMode.Squad);

// Language data download path
const { l10Path } = await client.data.getLanguage(Language.Korean);
```

## Installation

This package is published to **GitHub Packages**, not the npm registry. Configure your project to resolve `@green1052` scope from GitHub Packages:

**Step 1** — Create or edit `.npmrc` in your project root:

```ini
@green1052:registry=https://npm.pkg.github.com
```

**Step 2** — Authenticate with a [Personal Access Token](https://github.com/settings/tokens) (needs `read:packages` scope). For Node.js / npm:

```bash
npm login --scope=@green1052 --registry=https://npm.pkg.github.com
# Username: your-github-username
# Password: your-pat-with-read-packages-scope
# Email: your-email@example.com
```

For Bun, set the token via environment variable instead:

```bash
export BUN_CONFIG_TOKEN=your-pat-with-read-packages-scope
```

**Step 3** — Install:

```bash
bun add @green1052/bser.js
# or
npm install @green1052/bser.js
```

Get an API key from <https://developer.eternalreturn.io>.

## Configuration

| Option | Required | Default | Description |
| ------ | -------- | ------- | ----------- |
| `apiKey` | Yes | - | API key from developer.eternalreturn.io |
| `timeout` | No | `10000` | Request timeout in milliseconds |

## API surface

| Module | Methods |
| ------ | ------- |
| `client.data` | `getGameDataHash()`, `getGameData<T>(metaType)`, `getLanguage(language)`, `getWeaponRoutes(routeId?)`, `getWeaponRouteDesc(routeId)` |
| `client.ranking` | `getTop(seasonId, matchingTeamMode)`, `getTopByServer(seasonId, matchingTeamMode, serverCode)` |
| `client.user` | `getByNickname(nickname)`, `getGames(uid)`, `getRank(userId, seasonId, matchingTeamMode)`, `getStats(userId, seasonId, matchingMode)`, `getUnionTeam(userId, seasonId)` |
| `client.match` | `getById(gameId)` |

See the [API reference](./docs/api.md) for full details.

## Error handling

All methods throw `BserApiError` when the API returns a non-200 code:

```ts
import { BserApiError } from "bser.js";

try {
  const user = await client.user.getByNickname("nonexistent");
} catch (e) {
  if (e instanceof BserApiError) {
    console.log(e.code);       // 404
    console.log(e.apiMessage); // "..."
  }
}
```

| Code | Meaning |
| ---- | ------- |
| 200 | Success |
| 400 | Bad parameters |
| 403 | Forbidden / rate limit |
| 404 | Not found |
| 429 | Too many requests |
| 500 | Server error |

## Testing

```bash
# Unit tests (constants only — always run, no network)
bun test test/constants.test.ts

# Full suite (integration tests require BSER_API_KEY env var)
BSER_API_KEY=your-key bun test
```

Integration tests make real API requests in chain order: data → ranking → user → match.

## Building from source

```bash
bun install
bun run build      # outputs dist/ (index.js + index.d.ts)
bun run typecheck  # tsc --noEmit
```

## Documentation

- [API reference](./docs/api.md)
- [Types](./docs/types.md)
- [Constants](./docs/constants.md)

## License

MIT

---

<a id="한국어"></a>

# bser.js (한국어)

[이터널 리턴 Open API](https://developer.eternalreturn.io) 의 TypeScript 래퍼. Bun + ky 기반.

## 특징

- **완전한 타입 안전성** — 11개 엔드포인트, 284+ 응답 필드 모두 타입 정의
- **Bun 네이티브, Node.js 호환** — ESM + d.ts 제공; Bun, Node.js 18+, 번들러 모두 지원
- **런타임 의존성 최소** — HTTP 통신은 `ky` 하나뿐
- **모든 메서드에 JSDoc** — 에디터를 떠나지 않고 IntelliSense 확인
- **통합 테스트** — 실제 API 체인 테스트 (data → ranking → user → match)
- **MIT 라이선스**

## 빠른 시작

```bash
bun install
```

```ts
import { BserClient, Language, MatchingMode, MatchingTeamMode, RegionServerCode } from "@green1052/bser.js";

const client = new BserClient({ apiKey: "your-api-key" });

// 닉네임으로 유저 검색
const user = await client.user.getByNickname("닉네임");

// 최근 게임 기록 (최대 90일)
const games = await client.user.getGames(user.uid);

// 상위 랭커 조회
const top = await client.ranking.getTop(33, MatchingTeamMode.Squad);

// 언어 데이터 다운로드 경로
const { l10Path } = await client.data.getLanguage(Language.Korean);
```

## 설치

이 패키지는 **GitHub Packages** 에 배포됩니다 (npm 레지스트리가 아님). `@green1052` 스코프를 GitHub Packages에서 해석하도록 설정하세요:

**1단계** — 프로젝트 루트에 `.npmrc` 파일을 생성하거나 수정합니다:

```ini
@green1052:registry=https://npm.pkg.github.com
```

**2단계** — [Personal Access Token](https://github.com/settings/tokens) 으로 인증합니다 (`read:packages` 권한 필요). Node.js / npm의 경우:

```bash
npm login --scope=@green1052 --registry=https://npm.pkg.github.com
# Username: 본인 GitHub 사용자명
# Password: read:packages 권한이 있는 PAT
# Email: 본인 이메일
```

Bun의 경우 환경변수로 토큰을 설정합니다:

```bash
export BUN_CONFIG_TOKEN=read:packages-권한이-있는-PAT
```

**3단계** — 설치:

```bash
bun add @green1052/bser.js
# 또는
npm install @green1052/bser.js
```

API 키는 <https://developer.eternalreturn.io> 에서 발급받으세요.

## 옵션

| 옵션 | 필수 | 기본값 | 설명 |
| ---- | ---- | ------ | ---- |
| `apiKey` | 예 | - | API 키 |
| `timeout` | 아니오 | `10000` | 요청 타임아웃 (ms) |

## API 구성

| 모듈 | 메서드 |
| ---- | ------ |
| `client.data` | `getGameDataHash()`, `getGameData<T>(metaType)`, `getLanguage(language)`, `getWeaponRoutes(routeId?)`, `getWeaponRouteDesc(routeId)` |
| `client.ranking` | `getTop(seasonId, matchingTeamMode)`, `getTopByServer(seasonId, matchingTeamMode, serverCode)` |
| `client.user` | `getByNickname(nickname)`, `getGames(uid)`, `getRank(userId, seasonId, matchingTeamMode)`, `getStats(userId, seasonId, matchingMode)`, `getUnionTeam(userId, seasonId)` |
| `client.match` | `getById(gameId)` |

전체 내용은 [API 레퍼런스](./docs/api.md) 를 참조하세요.

## 에러 처리

모든 메서드는 API 응답 code가 200이 아닌 경우 `BserApiError` 를 throw 합니다:

```ts
import { BserApiError } from "bser.js";

try {
  const user = await client.user.getByNickname("존재하지_않는_닉네임");
} catch (e) {
  if (e instanceof BserApiError) {
    console.log(e.code);       // 404
    console.log(e.apiMessage); // "..."
  }
}
```

| Code | 의미 |
| ---- | ---- |
| 200 | 성공 |
| 400 | 파라미터 오류 |
| 403 | 금지 / 레이트 리밋 |
| 404 | 찾을 수 없음 |
| 429 | 요청 과다 |
| 500 | 서버 오류 |

## 테스트

```bash
# 단위 테스트 (상수만 — 항상 실행, 네트워크 없음)
bun test test/constants.test.ts

# 전체 (통합 테스트는 BSER_API_KEY 환경변수 필요)
BSER_API_KEY=your-key bun test
```

통합 테스트는 실제 API 요청을 보내며, data → ranking → user → match 순서로 체인 실행됩니다.

## 소스에서 빌드

```bash
bun install
bun run build      # dist/ 생성 (index.js + index.d.ts)
bun run typecheck  # tsc --noEmit
```

## 문서

- [API 레퍼런스](./docs/api.md)
- [타입](./docs/types.md)
- [상수](./docs/constants.md)

## 라이선스

MIT