# Types

All response types. See `src/types.ts` for the authoritative JSDoc-annotated source.

## BserApiResponse<T>

Generic API response wrapper. The payload key varies by endpoint.

```ts
interface BserApiResponse<T> {
  code: number;              // 200 = success
  message: string;
  [resourceKey: string]: T | number | string;
  // resourceKey: "data" | "user" | "userGames" | "userRank" | "userStats" | "teams" | "topRanks" | "result"
}
```

bser.js auto-unwraps this — you receive the payload directly, never the wrapper.

---

## User

```ts
interface User {
  uid: number;      // temporary identifier, changes on rename
  nickname: string;
}
```

---

## UserRank

```ts
interface UserRank {
  mmr: number;
  nickname: string;
  rank: number;
  serverCode: number;  // see RegionServerCode
  serverRank: number;
}
```

---

## CharacterStat

```ts
interface CharacterStat {
  characterCode: number;
  totalGames: number;
  maxKillings: number;
  wins: number;
  top3: number;
  usages?: number;       // example response only
  top3Rate?: number;     // example response only
  averageRank?: number;  // example response only
}
```

---

## UserStats

```ts
interface UserStats {
  seasonId: number;
  matchingMode: number;
  matchingTeamMode: number;
  mmr: number;
  nickname: string;
  rank: number;
  rankSize: number;
  totalGames: number;
  totalWins: number;
  totalTeamKills: number;
  totalDeaths: number;
  escapeCount: number;
  rankPercent: number;
  averageRank: number;
  averageAssistants: number;
  averageHunts: number;
  top1: number;
  top2: number;
  top3: number;
  top5: number;
  top7: number;
  averageKills?: number;    // example response only
  characterStats: CharacterStat[];
}
```

---

## UnionTeam

26 fields — tier/ticket/win counts per tier.

```ts
interface UnionTeam {
  tnm: string;     // team name
  ti: number;
  sstt: number;    // S+ tier total games
  sstw: number;    // S+ tier wins
  ssstt: number;   // S+ tier win rate
  ssti: number;
  stt: number;     // S tier total games
  stw: number;     // S tier wins
  tw: number;      // A tier total games
  atw: number;     // A tier wins
  aatw: number;    // A+ tier total games
  aaatw: number;   // A++ tier total games
  btw: number;     // B tier total games
  bbtw: number;    // B+ tier total games
  bbbtw: number;   // B++ tier total games
  ctw: number;     // C tier total games
  cctw: number;    // C+ tier total games
  ccctw: number;   // C++ tier total games
  dtw: number;     // D tier total games
  ddtw: number;    // D+ tier total games
  dddtw: number;   // D++ tier total games
  etw: number;     // E tier total games
  ftw: number;     // F tier total games
  fftw: number;    // F+ tier total games
  ffftw: number;   // F++ tier total games
  cdt: number;     // cumulative daily tickets
  udt: number;     // available daily tickets
}
```

---

## TopRanker

```ts
interface TopRanker {
  nickname: string;
  mmr: number;
  rank: number;
  serverCode: number;  // see RegionServerCode
  serverRank: number;
}
```

---

## BattleUserResult

284 fields, all optional. The API may not return all fields for every match.

Key fields (full list in `src/types.ts`):

| Field | Type | Description |
| ----- | ---- | ----------- |
| `nickname` | `string` | Player nickname |
| `gameId` | `number` | Unique game ID |
| `matchingMode` | `number` | Match mode |
| `matchingTeamMode` | `number` | Team mode |
| `seasonId` | `number` | Season ID |
| `characterNum` | `number` | Character code |
| `gameRank` | `number` | Final placement |
| `playerKill` | `number` | Kills |
| `playerAssistant` | `number` | Assists |
| `monsterKill` | `number` | Monster kills |
| `masteryLevel` | `Record<number, number>` | Mastery ID → level |
| `equipment` | `Record<number, number>` | Slot ID → item ID |
| `damageToPlayer` | `number` | Total damage to players |
| `damageFromPlayer` | `number` | Total damage from players |
| `killMonsters` | `Record<number, number>` | Monster ID → kill count |
| `victory` | `number` | Win (boolean as int) |
| `killDetails` | `Record<number, number>` | Character code → kill count |
| `deathDetails` | `Record<number, number>` | Character code → death count |
| `totalVFCredit` | `number[]` | Credits earned per minute (20 slots) |
| `usedVFCredit` | `number[]` | Credits used per minute (20 slots) |
| `tacticalSkillGroup` | `number` | Tactical skill group code |
| `tacticalSkillLevel` | `number` | Tactical skill final level |
| `traitFirstCore` | `number` | First core augmentation code |
| `traitFirstSub` | `number[]` | First sub-slot augmentation codes (2) |
| `traitSecondSub` | `number[]` | Second sub-slot augmentation codes (3) |

Plus 260+ more fields covering: stats, damage breakdowns, crafting, gadgets, credit economy, COBALT-exclusive fields, and deprecated `battleZone*`/`teamDown*AutoResurrection` fields.

---

## RecommendWeaponRoute

25 fields.

```ts
interface RecommendWeaponRoute {
  id: number;
  title: string;
  userNickname: string;
  characterCode: number;
  slotId: number;
  weaponType: number;
  weaponCodes: string;           // JSON array string: "[100242, 100420, ...]"
  traitCodes: string;            // JSON array string
  lateGameItemCodes: string;     // JSON dict string
  remoteTransferItemCodes: string; // JSON array string
  tacticalSkillGroupCode: number;
  paths: string;                 // JSON array string of area codes: "[70, 110, 120, 180]"
  count: number;
  version: string;
  teamMode: number;             // always 0
  languageCode: string;
  routeVersion: number;
  share: boolean;
  updateDtm: number;            // epoch time
  v2Like: number;
  v2WinRate: number;
  v2SeasonId: number;
  v2AccumulateLike: number;
  v2AccumulateWinRate: number;
  v2AccumulateSeasonId: number;
}
```

---

## RecommendWeaponRouteDesc

```ts
interface RecommendWeaponRouteDesc {
  recommendWeaponRouteId: number;
  skillPath: string;  // comma-separated skill order: "q,w,w,q,q,w,q"
  desc: string;
}
```

---

## LanguageData

```ts
interface LanguageData {
  l10Path: string;  // download URL for L10N text file
}
```