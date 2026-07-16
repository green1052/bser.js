# API reference

## BserClient

Main entry point. Creates an HTTP client and exposes four modules.

### Constructor

```ts
new BserClient(options: BserClientOptions)
```

| Option | Type | Required | Default | Description |
| ------ | ---- | -------- | ------- | ----------- |
| `apiKey` | `string` | Yes | - | API key from developer.eternalreturn.io |
| `timeout` | `number` | No | `10000` | Request timeout in ms |

### Properties

| Property | Type | Description |
| -------- | ---- | ----------- |
| `client.data` | `DataModule` | Game data, L10N, weapon routes |
| `client.ranking` | `RankingModule` | Top rankers |
| `client.user` | `UserModule` | User search, games, rank, stats, union team |
| `client.match` | `MatchModule` | Match results by game ID |
| `client.http` | `HttpClient` | Low-level HTTP client (advanced) |

### Example

```ts
import { BserClient } from "bser.js";
const client = new BserClient({ apiKey: "your-key" });
```

---

## DataModule (`client.data`)

### `getGameDataHash()`

Returns hash codes for all game data tables. Use to detect table updates.

```ts
const hashes = await client.data.getGameDataHash();
// hashes["Character"] → 1234567890
```

**Returns:** `Promise<Record<string, number>>` — table name → hash code

---

### `getGameData<T>(metaType)`

Fetches a game data table by meta type.

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| `metaType` | `MetaType` | Yes | Table name: `"Character"`, `"Season"`, `"ItemWeapon"`, `"Monster"`, `"hash"`, etc. |

```ts
interface CharacterRow { code: number; name: string; }
const characters = await client.data.getGameData<CharacterRow>("Character");
```

**Returns:** `Promise<T[]>` — array of rows (generic, default `Record<string, unknown>`)

Notable meta types: `Character`, `CharacterLevelUpStat`, `CharacterMastery`, `CharacterModeModifier`, `WeaponTypeInfo`, `ItemSkillLinker`, `ItemSpawn`, `ItemWeapon`, `ItemArmor`, `ItemSpecial`, `ItemConsumable`, `Monster`, `MonsterLevelUpStat`, `MonsterDropGroup`, `DropGroup`, `VFCredit`, `Season`.

---

### `getLanguage(language)`

Gets the L10N download URL. The returned `l10Path` is a text file URL; file content uses `┃` separator with `key┃value` per line.

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| `language` | `string` | Yes | Language code. Use `Language` enum. |

```ts
const { l10Path } = await client.data.getLanguage(Language.Korean);
const text = await fetch(l10Path).then(r => r.text());
const dict = Object.fromEntries(text.trim().split("\n").map(l => l.split("┃")));
// dict["Monster/Name/1"] → "닭"
```

**Returns:** `Promise<LanguageData>` — `{ l10Path: string }`

---

### `getWeaponRoutes(routeId?)`

Gets recommended weapon routes.

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| `routeId` | `number` | No | Specific route ID. Omit for all routes. |

```ts
const routes = await client.data.getWeaponRoutes();
const specific = await client.data.getWeaponRoutes(123);
```

**Returns:** `Promise<RecommendWeaponRoute[]>`

---

### `getWeaponRouteDesc(routeId)`

Gets descriptions for a recommended weapon route.

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| `routeId` | `number` | Yes | Route ID |

```ts
const descs = await client.data.getWeaponRouteDesc(123);
```

**Returns:** `Promise<RecommendWeaponRouteDesc[]>`

---

## RankingModule (`client.ranking`)

### `getTop(seasonId, matchingTeamMode)`

Gets top rankers. Ranked matches only, squad mode only.

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| `seasonId` | `number` | Yes | Season ID |
| `matchingTeamMode` | `number` | Yes | Team mode. `MatchingTeamMode.Squad` (3) only. |

```ts
const top = await client.ranking.getTop(33, MatchingTeamMode.Squad);
console.log(top[0].nickname); // #1 nickname
```

**Returns:** `Promise<TopRanker[]>`

---

### `getTopByServer(seasonId, matchingTeamMode, serverCode)`

Gets top rankers for a specific region server.

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| `seasonId` | `number` | Yes | Season ID |
| `matchingTeamMode` | `number` | Yes | Team mode. `MatchingTeamMode.Squad` (3) only. |
| `serverCode` | `number` | Yes | Region server code. Use `RegionServerCode` enum. |

```ts
const asiaTop = await client.ranking.getTopByServer(33, MatchingTeamMode.Squad, RegionServerCode.Asia);
```

**Returns:** `Promise<TopRanker[]>`

---

## UserModule (`client.user`)

### `getByNickname(nickname)`

Searches a user by nickname. The returned `uid` is temporary and changes on rename.

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| `nickname` | `string` | Yes | Nickname to search |

```ts
const { uid, nickname } = await client.user.getByNickname("닉네임");
```

**Returns:** `Promise<User>` — `{ uid: number, nickname: string }`

**Throws:** `BserApiError` (code 404) if not found

---

### `getGames(uid)`

Gets a user's recent game records. Max 90 days; games before a rename are excluded.

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| `uid` | `number` | Yes | User UID (from `getByNickname`) |

```ts
const games = await client.user.getGames(uid);
console.log(games[0].gameId);
```

**Returns:** `Promise<BattleUserResult[]>`

---

### `getRank(userId, seasonId, matchingTeamMode)`

Gets a user's rank info.

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| `userId` | `number` | Yes | User ID (UID) |
| `seasonId` | `number` | Yes | Season ID |
| `matchingTeamMode` | `number` | Yes | Team mode. `MatchingTeamMode.Squad` (3) only. |

```ts
const rank = await client.user.getRank(uid, 33, MatchingTeamMode.Squad);
```

**Returns:** `Promise<UserRank>`

---

### `getStats(userId, seasonId, matchingMode)`

Gets a user's season/mode stats.

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| `userId` | `number` | Yes | User ID (UID) |
| `seasonId` | `number` | Yes | Season ID. `0` = normal (non-ranked). |
| `matchingMode` | `number` | Yes | Matching mode. `MatchingMode.SquadNormal` (2) or `MatchingMode.SquadRanked` (3). |

```ts
const normalStats = await client.user.getStats(uid, 0, MatchingMode.SquadNormal);
const rankedStats = await client.user.getStats(uid, 33, MatchingMode.SquadRanked);
```

**Returns:** `Promise<UserStats[]>`

---

### `getUnionTeam(userId, seasonId)`

Gets a user's union team info.

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| `userId` | `number` | Yes | User ID (UID) |
| `seasonId` | `number` | Yes | Season ID |

```ts
const teams = await client.user.getUnionTeam(uid, 33);
```

**Returns:** `Promise<UnionTeam[]>`

---

## MatchModule (`client.match`)

### `getById(gameId)`

Gets all players' battle results for a specific match.

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| `gameId` | `number` | Yes | Game ID |

```ts
const results = await client.match.getById(gameId);
console.log(results.length); // player count
```

**Returns:** `Promise<BattleUserResult[]>`

**Throws:** `BserApiError` (code 404) if game not found

---

## BserApiError

Thrown when API returns `code !== 200`.

```ts
class BserApiError extends Error {
  readonly code: number;       // API response code (400, 403, 404, 429, 500)
  readonly apiMessage: string; // API response message
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

---

## HttpClient (advanced)

Low-level wrapper. Exposed as `client.http` for custom requests.

### `request<T>(path, searchParams?)`

```ts
const user = await client.http.request<User>("v1/user/nickname", { query: "닉네임" });
```

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| `path` | `string` | Yes | API path without leading slash (e.g. `"v1/user/nickname"`) |
| `searchParams` | `Record<string, string \| number>` | No | Query parameters |

**Returns:** `Promise<T>` — unwrapped payload (extracts first key after `code`/`message`)

**Throws:** `BserApiError` when `code !== 200`