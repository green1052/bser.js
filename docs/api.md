# API 레퍼런스

## BserClient

Eternal Return Open API 클라이언트. 모든 API 엔드포인트에 대한 접근을 제공합니다.

### 생성자

```ts
new BserClient(options
:
BserClientOptions
)
```

| 옵션      | 타입                                      | 필수   | 기본값  | 설명                                                                                         |
|-----------|-------------------------------------------|--------|---------|----------------------------------------------------------------------------------------------|
| `apiKey`  | `string`                                  | 예     | -       | API 키. [developer.eternalreturn.io](https://developer.eternalreturn.io) 에서 발급.          |
| `timeout` | `number`                                  | 아니오 | `10000` | 요청 타임아웃 (ms).                                                                          |
| `ky`      | `Omit<KyOptions, "baseUrl" \| "headers">` | 아니오 | -       | ky에 전달할 추가 옵션 (`retry`, `hooks`, `fetch` 등). `baseUrl`과 `headers`는 내부에서 고정. |

```ts
import {BserClient} from "bser.js";

const client = new BserClient({apiKey: "your-api-key"});

// 재시도 설정
const client2 = new BserClient({
    apiKey: "key",
    ky: {retry: {limit: 5}}
});
```

### 프로퍼티

| 프로퍼티         | 타입            | 설명                                                     |
|------------------|-----------------|----------------------------------------------------------|
| `client.data`    | `DataModule`    | 데이터 API (게임 데이터, L10N, 추천 무기 루트)           |
| `client.ranking` | `RankingModule` | 랭킹 API (상위 랭커 조회)                                |
| `client.user`    | `UserModule`    | 유저 API (닉네임 검색, 게임 기록, 랭크, 스탯, 유니온 팀) |
| `client.match`   | `MatchModule`   | 매치 API (게임 ID로 매치 조회)                           |
| `client.http`    | `HttpClient`    | HTTP 클라이언트 (고급 사용자용)                          |

---

## DataModule

`client.data` — 게임 데이터, L10N, 추천 무기 루트.

### getGameDataHash ()

모든 게임 데이터 테이블의 해시코드를 조회합니다. 해시코드가 변경되면 해당 테이블이 업데이트되었음을 의미합니다.

```ts
async
getGameDataHash()
:
Promise<Record<string, number>>
```

**엔드포인트**: `GET /v2/data/hash`

```ts
const hashes = await client.data.getGameDataHash();
console.log(hashes["Character"]); // 예: 1234567890
```

### getGameData (metaType)

특정 메타 타입의 게임 데이터를 조회합니다.

```ts
async
getGameData<T = Record<string, unknown>>(metaType
:
MetaType
):
Promise<T[]>
```

**엔드포인트**: `GET /v2/data/{metaType}`

| 파라미터   | 타입       | 설명                                                     |
|------------|------------|----------------------------------------------------------|
| `metaType` | `MetaType` | 메타 타입. `"Character"`, `"Season"`, `"ItemWeapon"` 등. |

```ts
const seasons = await client.data.getGameData<{ seasonId: number; seasonName: string }>("Season");
const characters = await client.data.getGameData("Character");
```

### getLanguage (language)

언어 데이터 (L10N) 다운로드 경로를 조회합니다. 반환된 `l10Path`는 텍스트 파일 URL이며, 파일 내용은 `┃` 구분자로 `key┃value` 형식입니다.

```ts
async
getLanguage(language
:
string
):
Promise<LanguageData>
```

**엔드포인트**: `GET /v1/l10n/{language}`

| 파라미터   | 타입     | 설명                              |
|------------|----------|-----------------------------------|
| `language` | `string` | 언어 코드. {@link Language} 참조. |

```ts
const {l10Path} = await client.data.getLanguage(Language.Korean);
const text = await fetch(l10Path).then(r => r.text());
```

### getWeaponRoutes (routeId?)

추천 무기 루트 목록을 조회합니다.

```ts
async
getWeaponRoutes(routeId ? : number)
:
Promise<RecommendWeaponRoute[]>
```

**엔드포인트**: `GET /v1/weaponRoutes/recommend`

| 파라미터  | 타입      | 설명                             |
|-----------|-----------|----------------------------------|
| `routeId` | `number?` | 특정 루트 ID. 생략 시 전체 목록. |

```ts
const routes = await client.data.getWeaponRoutes();
const specific = await client.data.getWeaponRoutes(123);
```

### getWeaponRouteDesc (routeId)

추천 무기 루트의 설명을 조회합니다.

```ts
async
getWeaponRouteDesc(routeId
:
number
):
Promise<RecommendWeaponRouteDesc[]>
```

**엔드포인트**: `GET /v1/weaponRoutes/recommend`

| 파라미터  | 타입     | 설명     |
|-----------|----------|----------|
| `routeId` | `number` | 루트 ID. |

```ts
const descs = await client.data.getWeaponRouteDesc(123);
```

---

## RankingModule

`client.ranking` — 상위 랭커 조회.

### getTop (seasonId, matchingTeamMode)

전체 상위 랭커를 조회합니다. 랭크 매치만 해당하며, 스쿼드 모드만 지원합니다.

```ts
async
getTop(seasonId
:
number, matchingTeamMode
:
number
):
Promise<TopRanker[]>
```

**엔드포인트**: `GET /v1/rank/top/{seasonId}/{matchingTeamMode}`

| 파라미터           | 타입     | 설명                                                           |
|--------------------|----------|----------------------------------------------------------------|
| `seasonId`         | `number` | 시즌 ID.                                                       |
| `matchingTeamMode` | `number` | 매칭 팀 모드. {@link MatchingTeamMode} 참조. (3=스쿼드만 지원) |

```ts
const top = await client.ranking.getTop(33, MatchingTeamMode.Squad);
console.log(top[0].nickname); // 1위 닉네임
```

### getTopByServer (seasonId, matchingTeamMode, serverCode)

특정 리전 서버의 상위 랭커를 조회합니다.

```ts
async
getTopByServer(seasonId
:
number, matchingTeamMode
:
number, serverCode
:
number
):
Promise<TopRanker[]>
```

**엔드포인트**: `GET /v1/rank/top/{seasonId}/{matchingTeamMode}/{serverCode}`

| 파라미터           | 타입     | 설명                                           |
|--------------------|----------|------------------------------------------------|
| `seasonId`         | `number` | 시즌 ID.                                       |
| `matchingTeamMode` | `number` | 매칭 팀 모드. (3=스쿼드만 지원)                |
| `serverCode`       | `number` | 리전 서버 코드. {@link RegionServerCode} 참조. |

```ts
const asiaTop = await client.ranking.getTopByServer(33, MatchingTeamMode.Squad, RegionServerCode.Asia);
```

> **참고**: `getTopByServer` 응답에는 `serverCode`/`serverRank`가 포함되지 않습니다 (API v11.0.0).

---

## UserModule

`client.user` — 닉네임 검색, 게임 기록, 랭크, 스탯, 유니온 팀.

### getByNickname (nickname)

닉네임으로 유저를 검색합니다. 반환된 `userId`는 닉네임 변경 시 변경되는 임시 식별자입니다.

```ts
async
getByNickname(nickname
:
string
):
Promise<User>
```

**엔드포인트**: `GET /v1/user/nickname?query={nickname}`

| 파라미터   | 타입     | 설명           |
|------------|----------|----------------|
| `nickname` | `string` | 검색할 닉네임. |

```ts
const {userId} = await client.user.getByNickname("닉네임");
```

### getGames (userId)

유저의 최근 게임 기록을 조회합니다. 최대 90일치 데이터이며, 닉네임 변경 이전의 게임은 제외됩니다.

```ts
async
getGames(userId
:
string
):
Promise<BattleUserResult[]>
```

**엔드포인트**: `GET /v1/user/games/uid/{userId}`

| 파라미터 | 타입     | 설명                               |
|----------|----------|------------------------------------|
| `userId` | `string` | 유저 ID. `getByNickname`으로 획득. |

```ts
const games = await client.user.getGames(userId);
console.log(games[0].gameId);
```

### getRank (userId, seasonId, matchingTeamMode)

유저의 랭크 정보를 조회합니다.

```ts
async
getRank(userId
:
string, seasonId
:
number, matchingTeamMode
:
number
):
Promise<UserRank>
```

**엔드포인트**: `GET /v1/rank/uid/{userId}/{seasonId}/{matchingTeamMode}`

| 파라미터           | 타입     | 설명                            |
|--------------------|----------|---------------------------------|
| `userId`           | `string` | 유저 ID.                        |
| `seasonId`         | `number` | 시즌 ID.                        |
| `matchingTeamMode` | `number` | 매칭 팀 모드. (3=스쿼드만 지원) |

```ts
const rank = await client.user.getRank(userId, 33, MatchingTeamMode.Squad);
```

### getStats (userId, seasonId, matchingMode)

유저의 시즌/모드별 스탯을 조회합니다.

```ts
async
getStats(userId
:
string, seasonId
:
number, matchingMode
:
number
):
Promise<UserStats[]>
```

**엔드포인트**: `GET /v2/user/stats/uid/{userId}/{seasonId}/{matchingMode}`

| 파라미터       | 타입     | 설명                                                   |
|----------------|----------|--------------------------------------------------------|
| `userId`       | `string` | 유저 ID.                                               |
| `seasonId`     | `number` | 시즌 ID. `0` = 일반(normal).                           |
| `matchingMode` | `number` | 매칭 모드. {@link MatchingMode} 참조. (2=일반, 3=랭크) |

```ts
const normalStats = await client.user.getStats(userId, 0, MatchingMode.SquadNormal);
const rankedStats = await client.user.getStats(userId, 33, MatchingMode.SquadRanked);
```

### getUnionTeam (userId, seasonId)

유저의 유니온 팀 정보를 조회합니다.

```ts
async
getUnionTeam(userId
:
string, seasonId
:
number
):
Promise<UnionTeam[]>
```

**엔드포인트**: `GET /v1/unionTeam/uid/{userId}/{seasonId}`

| 파라미터   | 타입     | 설명     |
|------------|----------|----------|
| `userId`   | `string` | 유저 ID. |
| `seasonId` | `number` | 시즌 ID. |

```ts
const teams = await client.user.getUnionTeam(userId, 33);
```

---

## MatchModule

`client.match` — 게임 ID로 매치 조회.

### getById (gameId)

특정 게임 (매치)의 모든 플레이어 전투 결과를 조회합니다.

```ts
async
getById(gameId
:
number
):
Promise<BattleUserResult[]>
```

**엔드포인트**: `GET /v1/games/{gameId}`

| 파라미터 | 타입     | 설명                        |
|----------|----------|-----------------------------|
| `gameId` | `number` | 게임 ID. `getGames`로 획득. |

```ts
const results = await client.match.getById(gameId);
console.log(results.length); // 참여 플레이어 수
```

---

## 에러 처리

모든 메서드는 API 응답 `code`가 200이 아닌 경우, 또는 HTTP 오류 (403 Forbidden 등) 발생 시 `BserApiError`를 throw 합니다.

```ts
import {BserApiError} from "bser.js";

try {
    const user = await client.user.getByNickname("존재하지_않는_닉네임");
} catch (e) {
    if (e instanceof BserApiError) {
        console.log(e.code);       // 404
        console.log(e.apiMessage); // "..."
    }
}
```

### BserApiError

| 프로퍼티     | 타입     | 설명                                       |
|--------------|----------|--------------------------------------------|
| `code`       | `number` | API 응답 코드 (400, 403, 404, 429, 500 등) |
| `apiMessage` | `string` | API 응답 메시지                            |
| `name`       | `string` | `"BserApiError"`                           |
| `message`    | `string` | `BSER API error {code}: {message}`         |

### 에러 코드

| Code | 의미               |
|------|--------------------|
| 200  | 성공               |
| 400  | 파라미터 오류      |
| 403  | 금지 / 레이트 리밋 |
| 404  | 찾을 수 없음       |
| 429  | 요청 과다          |
| 500  | 서버 오류          |