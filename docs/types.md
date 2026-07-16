# 타입 레퍼런스

## 공통

### BserApiResponse\<T\>

API 표준 응답 래퍼. 모든 엔드포인트는 `{ code, message, data | <resourceKey> }` 형태로 응답합니다.

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `code` | `number` | HTTP 응답 코드 (200 = 정상) |
| `message` | `string` | 응답 메시지 |
| `[resourceKey]` | `T \| number \| string` | 페이로드. 키 이름은 엔드포인트에 따라 `data`, `user`, `userGames`, `userRank`, `userStats`, `teams`, `topRanks`, `result` 등으로 변함 |

> `HttpClient.request<T>()`가 자동으로 언랩하여 페이로드만 반환하므로, 사용자가 직접 다룰 일은 없습니다.

---

## User

닉네임 검색 결과. `getByNickname` 응답.

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `userId` | `string` | 유저 고유 식별자. 닉네임 변경 시 변경됨 |
| `nickname` | `string` | 유저 닉네임 |

---

## UserRank

유저 랭크 정보. `getRank` 응답.

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `mmr` | `number` | 매칭 MMR |
| `nickname` | `string` | 유저 닉네임 |
| `rank` | `number` | 랭크 순위 |
| `serverCode` | `number` | 리전 서버 코드. {@link RegionServerCode} 참조 |
| `serverRank` | `number` | 서버 내 순위 |

---

## UserStats

시즌/모드별 유저 통계. `getStats` 응답.

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `seasonId` | `number` | 시즌 ID. 0 = 일반(normal) |
| `matchingMode` | `number` | 매칭 모드. {@link MatchingMode} 참조 |
| `matchingTeamMode` | `number` | 매칭 팀 모드. {@link MatchingTeamMode} 참조 |
| `mmr` | `number` | 매칭 MMR |
| `nickname` | `string` | 유저 닉네임 |
| `rank` | `number` | 랭크 순위 |
| `rankSize` | `number` | 랭크 사이즈 (전체 유저 수) |
| `totalGames` | `number` | 총 게임 수 |
| `totalWins` | `number` | 총 승리 수 |
| `totalTeamKills` | `number` | 팀 총 킬 수 |
| `totalDeaths` | `number` | 총 사망 수 |
| `escapeCount` | `number` | 탈출 횟수 |
| `rankPercent` | `number` | 랭크 백분율 |
| `averageRank` | `number` | 평균 순위 |
| `averageAssistants` | `number` | 평균 어시스트 |
| `averageHunts` | `number` | 평균 사냥 수 |
| `top1` | `number` | 1위 횟수 |
| `top2` | `number` | 2위 횟수 |
| `top3` | `number` | 3위 횟수 |
| `top5` | `number` | Top 5 진입 횟수 |
| `top7` | `number` | Top 7 진입 횟수 |
| `averageKills` | `number?` | 평균 킬 수 (예시 응답에만 존재) |
| `characterStats` | `CharacterStat[]` | 캐릭터별 스탯 배열 |

### CharacterStat

`UserStats.characterStats` 배열 요소.

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `characterCode` | `number` | 캐릭터 코드 |
| `totalGames` | `number` | 해당 캐릭터로 플레이한 총 게임 수 |
| `maxKillings` | `number` | 최대 처치 수 |
| `wins` | `number` | 승리 수 |
| `top3` | `number` | Top 3 진입 횟수 |
| `usages` | `number?` | 사용 횟수 (예시 응답에만 존재) |
| `top3Rate` | `number?` | Top 3 비율 (예시 응답에만 존재) |
| `averageRank` | `number?` | 평균 순위 (예시 응답에만 존재) |

---

## TopRanker

상위 랭커 정보. `getTop` / `getTopByServer` 응답.

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `uid` | `string?` | 유저 고유 식별자. `getTop` 응답에만 존재 |
| `nickname` | `string` | 유저 닉네임 |
| `mmr` | `number` | 매칭 MMR |
| `rank` | `number` | 랭크 순위 |
| `serverCode` | `number?` | 리전 서버 코드. `getTop` 응답에만 존재 |
| `serverRank` | `number?` | 서버 내 순위. `getTop` 응답에만 존재 |
| `userEmblems` | `unknown[]?` | 유저 엠블럼 배열 |

> **참고**: `getTopByServer` 응답에는 `uid`/`serverCode`/`serverRank`가 포함되지 않습니다 (API v11.0.0).

---

## UnionTeam

유니온 팀 정보. `getUnionTeam` 응답. 각 필드는 티어별 티켓/승리/승률 카운트입니다.

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `tnm` | `string` | 팀명 |
| `ti` | `number` | 티어별 티켓 수 |
| `sstt` | `number` | S+ 티어 총 게임 수 |
| `sstw` | `number` | S+ 티어 승리 수 |
| `ssstt` | `number` | S+ 티어 승률 (정수) |
| `ssti` | `number` | S+ 티어 티켓 수 (상세) |
| `stt` | `number` | S 티어 총 게임 수 |
| `stw` | `number` | S 티어 승리 수 |
| `tw` | `number` | A 티어 총 게임 수 |
| `atw` | `number` | A 티어 승리 수 |
| `aatw` | `number` | A+ 티어 총 게임 수 |
| `aaatw` | `number` | A++ 티어 총 게임 수 |
| `btw` | `number` | B 티어 총 게임 수 |
| `bbtw` | `number` | B+ 티어 총 게임 수 |
| `bbbtw` | `number` | B++ 티어 총 게임 수 |
| `ctw` | `number` | C 티어 총 게임 수 |
| `cctw` | `number` | C+ 티어 총 게임 수 |
| `ccctw` | `number` | C++ 티어 총 게임 수 |
| `dtw` | `number` | D 티어 총 게임 수 |
| `ddtw` | `number` | D+ 티어 총 게임 수 |
| `dddtw` | `number` | D++ 티어 총 게임 수 |
| `etw` | `number` | E 티어 총 게임 수 |
| `ftw` | `number` | F 티어 총 게임 수 |
| `fftw` | `number` | F+ 티어 총 게임 수 |
| `ffftw` | `number` | F++ 티어 총 게임 수 |
| `cdt` | `number` | 누적 일일 티켓 수 |
| `udt` | `number` | 사용 가능한 일일 티켓 수 |

---

## BattleUserResult

매치 내 유저별 전투 결과. `getGames` / `getById` 응답. **284개 필드**, API가 항상 모든 필드를 반환하지는 않으므로 모든 필드는 optional입니다.

### 주요 필드

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `nickname` | `string?` | 플레이어 닉네임 |
| `gameId` | `number?` | 게임 고유 번호 |
| `matchingMode` | `number?` | 매칭 모드. {@link MatchingMode} 참조 |
| `matchingTeamMode` | `number?` | 팀 매칭 모드. {@link MatchingTeamMode} 참조 |
| `seasonId` | `number?` | 시즌 ID |
| `characterNum` | `number?` | 캐릭터 코드 |
| `skinCode` | `number?` | 스킨 코드 |
| `characterLevel` | `number?` | 사망/승리 시점 레벨 |
| `gameRank` | `number?` | 최종 순위 |
| `playerKill` | `number?` | 처치 수 |
| `playerAssistant` | `number?` | 어시스트 수 |
| `monsterKill` | `number?` | 야생 동물 처치 수 |
| `bestWeapon` | `number?` | 최고 무기 숙련도 ID |
| `bestWeaponLevel` | `number?` | 최고 무기 숙련도 레벨 |
| `masteryLevel` | `Record<number, number>?` | 숙련도 ID→레벨 매핑 |
| `equipment` | `Record<number, number>?` | 장비 슬롯→아이템 코드 |
| `versionSeason` | `number?` | 메인 시즌 식별자 |
| `skillLevelInfo` | `Record<number, number>?` | 스킬 ID→레벨 |
| `skillOrderInfo` | `Record<number, number>?` | 스킬 레벨업 순서 |
| `serverName` | `string?` | 전투 서버 위치 |

### 스탯 필드

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `maxHp` | `number?` | 최대 체력 |
| `maxSp` | `number?` | 최대 스태미너 |
| `attackPower` | `number?` | 공격력 |
| `moveSpeed` | `number?` | 이동 속도 |
| `defense` | `number?` | 방어력 |
| `hpRegen` | `number?` | 체력 재생 |
| `spRegen` | `number?` | 스태미너 재생 |
| `attackSpeed` | `number?` | 공격 속도 |
| `outOfCombatMoveSpeed` | `number?` | 비전투 시 이동 속도 |
| `sightRange` | `number?` | 시야 범위 |
| `attackRange` | `number?` | 기본 공격 사거리 |
| `criticalStrikeChance` | `number?` | 치명타 확률 |
| `criticalStrikeDamage` | `number?` | 치명타 피해 배율 |
| `coolDownReduction` | `number?` | 쿨다운 감소 |
| `lifeSteal` | `number?` | 오므니사이폰 |
| `normalLifeSteal` | `number?` | 일반 유형 피해 흡혈 |
| `skillLifeSteal` | `number?` | 스킬 유형 피해 흡혈 |
| `amplifierToMonster` | `number?` | 몬스터 피해 증폭 |
| `trapDamage` | `number?` | 함정 피해 증폭 |
| `adaptiveForce` | `number?` | 적응력 |
| `adaptiveForceAttack` | `number?` | 적응력→추가 공격력 |
| `adaptiveForceAmplify` | `number?` | 적응력→추가 스킬 증폭 |
| `skillAmp` | `number?` | 스킬 증폭 |

### MMR 필드

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `mmrBefore` | `number?` | 매치 시작 전 MMR |
| `mmrGain` | `number?` | MMR 변화량 |
| `mmrAfter` | `number?` | 신규 MMR |
| `mmrAvg` | `number?` | 팀 평균 MMR |
| `mmrGainInGame` | `number?` | 게임 내 랭크 포인트 증가량 |
| `mmrLossEntryCost` | `number?` | 입장 비용으로 인한 랭크 포인트 손실 |

### 크레딧 필드

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `totalVFCredit` | `number[]?` | 획득 크레딧 (1분마다 누적) |
| `totalGainVFCredit` | `number?` | 총 획득 크레딧 |
| `totalUseVFCredit` | `number?` | 총 사용 크레딧 |
| `creditSource` | `Record<string, number>?` | 출처별 크레딧 누적 |
| `usedVFCredit` | `number[]?` | 사용 크레딧 (1분마다 누적) |

### 전투 필드

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `damageToPlayer` | `number?` | 플레이어에게 가한 총 피해 |
| `damageToPlayer_basic` | `number?` | 기본 공격 피해 |
| `damageToPlayer_skill` | `number?` | 스킬 피해 |
| `damageToPlayer_itemSkill` | `number?` | 아이템 스킬 피해 |
| `damageToPlayer_direct` | `number?` | 직접 피해 |
| `damageToPlayer_uniqueSkill` | `number?` | 고유 스킬 피해 |
| `damageToPlayer_trap` | `number?` | 함정 피해 |
| `damageFromPlayer` | `number?` | 플레이어에게 받은 총 피해 |
| `damageFromPlayer_basic` | `number?` | 받은 기본 공격 피해 |
| `damageFromPlayer_skill` | `number?` | 받은 스킬 피해 |
| `damageToMonster` | `number?` | 몬스터에게 가한 총 피해 |
| `damageFromMonster` | `number?` | 몬스터에게 받은 총 피해 |
| `damageToPlayer_Shield` | `number?` | 보호막에 가한 피해 |
| `damageOffsetedByShield_Player` | `number?` | 보호막이 흡수한 플레이어 피해 |
| `damageOffsetedByShield_Monster` | `number?` | 보호막이 흡수한 몬스터 피해 |
| `healAmount` | `number?` | 총 회복량 |
| `teamRecover` | `number?` | 아군 제공 회복량 |
| `protectAbsorb` | `number?` | 보호막 흡수량 |
| `ccTimeToPlayer` | `number?` | 가한 총 CC 시간 |

### 킬 필드

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `killMonsters` | `Record<number, number>?` | 몬스터 ID→처치 수 |
| `killDetails` | `Record<number, number>?` | 처치한 캐릭터 딕셔너리 |
| `deathDetails` | `Record<number, number>?` | 처치당한 캐릭터 딕셔너리 |
| `killGamma` | `boolean?` | 감마 처치 여부 |
| `totalDoubleKill` | `number?` | 더블 킬 횟수 |
| `totalTripleKill` | `number?` | 트리플 킬 횟수 |
| `totalQuadraKill` | `number?` | 쿼드라 킬 횟수 |
| `totalExtraKill` | `number?` | 5연속 처치 이상 횟수 |
| `killer` | `string?` | 처치한 상대 식별자 |
| `killerCharacter` | `string?` | 처치한 플레이어 캐릭터 (레거시) |
| `killerWeapon` | `string?` | 처치한 플레이어 무기 (레거시) |
| `causeOfDeath` | `string?` | 사망 유발 스킬/오브젝트 (레거시) |
| `placeOfDeath` | `string?` | 사망 지역 ID (레거시) |

### 게임 정보 필드

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `startDtm` | `string?` | 매치 시작 서버 시간 |
| `duration` | `number?` | 매치 종료 시 서버 프레임 시간 |
| `playTime` | `number?` | 경과 시간 (초) |
| `watchTime` | `number?` | 관전 시간 (초) |
| `totalTime` | `number?` | 플레이+관전 시간 |
| `teamNumber` | `number?` | 팀 번호 |
| `preMade` | `number?` | 팀 인원 수 |
| `victory` | `number?` | 승리 여부 |
| `giveUp` | `number?` | 기권 여부 |
| `escapeState` | `number?` | 탈출 상태 (1=실패, 2=적에 의해 실패, 3=성공) |
| `botAdded` | `number?` | 추가된 AI 봇 수 |
| `botRemain` | `number?` | 남은 AI 봇 수 |
| `routeIdOfStart` | `number?` | 선택한 경로 ID |
| `routeSlotId` | `number?` | 경로 슬롯 ID |
| `placeOfStart` | `number?` | 선택한 시작 지역 |
| `accountLevel` | `number?` | 계정 레벨 |
| `language` | `string?` | 플레이어 언어 |

### 제작 필드

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `craftUncommon` | `number?` | 제작한 언커먼 아이템 수 |
| `craftRare` | `number?` | 제작한 레어 아이템 수 |
| `craftEpic` | `number?` | 제작한 에픽 아이템 수 |
| `craftLegend` | `number?` | 제작한 레전더리 아이템 수 |
| `craftMythic` | `number?` | 제작한 신화 아이템 수 |
| `foodCraftCount` | `Record<number, number>?` | 등급별 조리 음식 수량 |
| `beverageCraftCount` | `Record<number, number>?` | 등급별 음료 수량 |

### 트레이트 필드

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `traitFirstCore` | `number?` | 첫 번째 코어 증강 코드 |
| `traitFirstSub` | `number[]?` | 첫 번째 서브 슬롯 증강 코드 |
| `traitSecondSub` | `number[]?` | 두 번째 서브 슬롯 증강 코드 |

### 전술 스킬 필드

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `tacticalSkillGroup` | `number?` | 전술 스킬 그룹 코드 |
| `tacticalSkillLevel` | `number?` | 전술 스킬 최종 레벨 |
| `tacticalSkillUseCount` | `number?` | 전술 스킬 사용 횟수 |

### 팀 필드

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `teamKill` | `number?` | 팀 총 처치 수 |
| `teamElimination` | `number?` | 팀 적 처치 횟수 |
| `teamDown` | `number?` | 팀 적 다운 횟수 |
| `teamBattleZoneDown` | `number?` | 전투 지역 적 다운 횟수 |
| `teamRepeatDown` | `number?` | 동일 적 반복 다운 횟수 |

### 큐브 필드

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `getBuffCubeRed` | `number?` | 선혈 큐브 획득 수 |
| `getBuffCubePurple` | `number?` | 우주 큐브 획득 수 |
| `getBuffCubeGreen` | `number?` | 생명 큐브 획득 수 |
| `getBuffCubeGold` | `number?` | 풍요 큐브 획득 수 |
| `getBuffCubeSkyBlue` | `number?` | 바람 큐브 획득 수 |
| `sumGetBuffCube` | `number?` | 모든 큐브 총합 |

### 균열 필드

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `enterDimensionRift` | `number?` | 균열 진입 횟수 |
| `enterDimensionEmpoweredRift` | `number?` | 강화 균열 진입 횟수 |
| `winFromDimensionRift` | `number?` | 균열 승리 횟수 |
| `winFromDimensionEmpoweredRift` | `number?` | 강화 균열 승리 횟수 |
| `enterTurbulentRift` | `number?` | 난류 진입 횟수 |

### COBALT 전용 필드

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `totalTurbineTakeover` | `number?` | 증폭기 점령 성공 횟수 |
| `StartingItems` | `number[]?` | 첫 획득 아이템 세트 |
| `usedNormalHealPack` | `number?` | 일반 회복 팩 사용량 |
| `usedReinforcedHealPack` | `number?` | 강화 회복 팩 사용량 |
| `usedNormalShiedPack` | `number?` | 일반 보호막 팩 사용량 |
| `usedReinforcedShieldPack` | `number?` | 강화 보호막 팩 사용량 |
| `boughtInfusion` | `Record<number, number>?` | 인퓨전 상품 구매 횟수 |
| `finalInfusion` | `number[]?` | 최종 보유 특성 인퓨전 |
| `scoredPoint` | `number[]?` | 획득 점수 (1분마다 누적) |
| `killsPhaseOne` | `number?` | 페이즈 1 처치 수 |
| `killsPhaseTwo` | `number?` | 페이즈 2 처치 수 |
| `killsPhaseThree` | `number?` | 페이즈 3 처치 수 |
| `deathsPhaseOne` | `number?` | 페이즈 1 사망 수 |
| `deathsPhaseTwo` | `number?` | 페이즈 2 사망 수 |
| `deathsPhaseThree` | `number?` | 페이즈 3 사망 수 |

### 기타

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `fishingCount` | `number?` | 낚시 횟수 |
| `useEmoticonCount` | `number?` | 이모트 사용 횟수 |
| `useHyperLoop` | `number?` | 하이퍼루프 사용 횟수 |
| `useSecurityConsole` | `number?` | 보안 콘솔 사용 횟수 |
| `useReconDrone` | `number?` | 정찰 드론 사용 횟수 |
| `useEmpDrone` | `number?` | EMP 드론 사용 횟수 |
| `useGuideRobot` | `number?` | 루미 채널링 횟수 |
| `addSurveillanceCamera` | `number?` | 감시 카메라 설치 수 |
| `addTelephotoCamera` | `number?` | 망원 카메라 설치 수 |
| `removeSurveillanceCamera` | `number?` | 감시 카메라 파괴 수 |
| `removeTelephotoCamera` | `number?` | 망원 카메라 파괴 수 |
| `airSupplyOpenCount` | `Record<number, number>?` | 공중 보급 상자 개봉 수 |
| `collectItemForLog` | `number[]?` | 수집품 개수 배열 |
| `equipFirstItemForLog` | `Record<number, number[]>?` | 최상위 무기 아이템 코드 |
| `eventMissionResult` | `Record<number, number>?` | 이벤트 미션 ID→목표 누적 횟수 |
| `activeInstallation` | `Record<number, number>?` | 환경변수 사용 횟수 |
| `useGadget` | `Record<number, number>?` | 가젯 스킬 사용 횟수 |
| `mainWeather` | `number?` | 주요 날씨 효과 |
| `subWeather` | `number?` | 보조 날씨 효과 |
| `restrictedAreaAccelerated` | `number?` | 추가 금지 구역 발행 횟수 |
| `safeAreas` | `number?` | 남은 지역 수 |
| `gainedNormalMmrKFactor` | `number?` | MMR 신뢰도 |
| `premadeMatchingType` | `number?` | 매칭 유형 (0=모두, 1=1~2인, 2=3인) |
| `viewContribution` | `number?` | 시야 기여도 점수 |
| `exceptPreMadeTeam` | `number?` | 2인 사전구성 매칭 거부 |
| `terminateCount` | `number?` | 터미네이트 팀 수 |
| `clutchCount` | `number?` | 클러치 달성 횟수 |
| `squadRumbleRank` | `number?` | 스쿼드 럼블 랭크 |

---

## RecommendWeaponRoute

추천 무기 루트 정보. `getWeaponRoutes` 응답.

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `id` | `number` | 루트 고유 번호 |
| `title` | `string` | 루트 이름 |
| `userNickname` | `string` | 수정한 유저 닉네임 |
| `characterCode` | `number` | 캐릭터 번호 |
| `slotId` | `number` | 제작자 슬롯 번호 |
| `weaponType` | `number` | 무기 타입. {@link MasteryCode} 참조 |
| `weaponCodes` | `string` | 초기 목표 아이템 (JSON 문자열 배열) |
| `traitCodes` | `string` | 초기 특성 (JSON 문자열 배열) |
| `lateGameItemCodes` | `string` | 후반 아이템 (JSON 문자열) |
| `remoteTransferItemCodes` | `string` | 원격 드론 아이템 (JSON 문자열 배열) |
| `tacticalSkillGroupCode` | `number` | 전술 스킬 코드. {@link TacticalSkillGroupCode} 참조 |
| `paths` | `string` | 방문 지역 (JSON 문자열 배열). {@link AreaCode} 참조 |
| `count` | `number` | 공유 횟수 |
| `version` | `string` | 클라이언트 버전 |
| `teamMode` | `number` | 솔로/듀오/스쿼드 (현재 0 고정) |
| `languageCode` | `string` | 제작자 언어 코드 |
| `routeVersion` | `number` | 루트 버전 |
| `share` | `boolean` | 공유 여부 |
| `updateDtm` | `number` | 최종 업데이트 (Epoch Time) |
| `v2Like` | `number` | 현재 시즌 추천 수 |
| `v2WinRate` | `number` | 현재 시즌 승률 |
| `v2SeasonId` | `number` | 현재 시즌 번호 |
| `v2AccumulateLike` | `number` | 누적 추천 수 |
| `v2AccumulateWinRate` | `number` | 누적 승률 |
| `v2AccumulateSeasonId` | `number` | 미사용 데이터 |

## RecommendWeaponRouteDesc

추천 무기 루트 설명. `getWeaponRouteDesc` 응답.

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `recommendWeaponRouteId` | `number` | 연결된 루트 ID |
| `skillPath` | `string` | 스킬 오더 (예: `q,w,w,q,q,w,q`) |
| `desc` | `string` | 루트 설명 |

---

## LanguageData

L10N 언어 데이터 다운로드 응답. `getLanguage` 응답.

| 필드 | 타입 | 설명 |
| ---- | ---- | ---- |
| `l10Path` | `string` | 다운로드 URL. 텍스트 파일은 `┃` 구분자로 `key┃value` 형식 |