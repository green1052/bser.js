/**
 * Eternal Return Open API 응답 타입 정의.
 * @module
 */

// ──────────────────────────────────────────────
// 공통 래퍼
// ──────────────────────────────────────────────

/**
 * API 표준 응답 래퍼.
 * 모든 엔드포인트는 `{ code, message, data | <resourceKey> }` 형태로 응답합니다.
 * @template T - `data` 또는 리소스 키의 페이로드 타입
 */
export interface BserApiResponse<T> {
    /** HTTP 응답 코드 (200 = 정상). */
    code: number;
    /** 응답 메시지. */
    message: string;

    /** 페이로드. 키 이름은 엔드포인트에 따라 `data`, `user`, `userGames`, `userRank`, `userStats`, `teams`, `topRanks`, `result` 등으로 변합니다. */
    [resourceKey: string]: T | number | string;
}

// ──────────────────────────────────────────────
// User
// ──────────────────────────────────────────────

/** 닉네임 검색 결과. */
export interface User {
    /** 유저 고유 식별자(userId). 닉네임 변경 시 변경됩니다. */
    userId: string;
    /** 유저 닉네임. */
    nickname: string;
}

// ──────────────────────────────────────────────
// UserRank
// ──────────────────────────────────────────────

/** 유저 랭크 정보. */
export interface UserRank {
    /** 매칭 MMR. */
    mmr: number;
    /** 유저 닉네임. */
    nickname: string;
    /** 랭크 순위. */
    rank: number;
    /** 리전 서버 코드. {@link RegionServerCode} 참조. */
    serverCode: number;
    /** 서버 내 순위. */
    serverRank: number;
}

// ──────────────────────────────────────────────
// UserStats
// ──────────────────────────────────────────────

/** 캐릭터별 스탯 정보 (UserStats 내 characterStats 배열 요소). */
export interface CharacterStat {
    /** 캐릭터 코드. */
    characterCode: number;
    /** 해당 캐릭터로 플레이한 총 게임 수. */
    totalGames: number;
    /** 최대 처치 수. */
    maxKillings: number;
    /** 승리 수. */
    wins: number;
    /** Top 3 진입 횟수. */
    top3: number;
    /** 사용 횟수 (예시 응답에만 존재). */
    usages?: number;
    /** Top 3 비율 (예시 응답에만 존재). */
    top3Rate?: number;
    /** 평균 순위 (예시 응답에만 존재). */
    averageRank?: number;
}

/** 시즌/모드별 유저 통계. */
export interface UserStats {
    /** 시즌 ID. 0 = 일반(normal). */
    seasonId: number;
    /** 매칭 모드. {@link MatchingMode} 참조. */
    matchingMode: number;
    /** 매칭 팀 모드. {@link MatchingTeamMode} 참조. */
    matchingTeamMode: number;
    /** 매칭 MMR. */
    mmr: number;
    /** 유저 닉네임. */
    nickname: string;
    /** 랭크 순위. */
    rank: number;
    /** 랭크 사이즈(전체 유저 수). */
    rankSize: number;
    /** 총 게임 수. */
    totalGames: number;
    /** 총 승리 수. */
    totalWins: number;
    /** 팀 총 킬 수. */
    totalTeamKills: number;
    /** 총 사망 수. */
    totalDeaths: number;
    /** 탈출 횟수. */
    escapeCount: number;
    /** 랭크 백분율. */
    rankPercent: number;
    /** 평균 순위. */
    averageRank: number;
    /** 평균 어시스트. */
    averageAssistants: number;
    /** 평균 사냥 수. */
    averageHunts: number;
    /** 1위 횟수. */
    top1: number;
    /** 2위 횟수. */
    top2: number;
    /** 3위 횟수. */
    top3: number;
    /** Top 5 진입 횟수. */
    top5: number;
    /** Top 7 진입 횟수. */
    top7: number;
    /** 평균 킬 수 (예시 응답에만 존재). */
    averageKills?: number;
    /** 캐릭터별 스탯 배열. */
    characterStats: CharacterStat[];
}

// ──────────────────────────────────────────────
// UnionTeam
// ──────────────────────────────────────────────

/** 유니온 팀 정보. 각 필드는 티어별 티켓/승리/승률 카운트입니다. */
export interface UnionTeam {
    /** 팀명. */
    tnm: string;
    /** 티어별 티켓 수. */
    ti: number;
    /** S+ 티어 총 게임 수. */
    sstt: number;
    /** S+ 티어 승리 수. */
    sstw: number;
    /** S+ 티어 승률(정수). */
    ssstt: number;
    /** S+ 티어 티켓 수(상세). */
    ssti: number;
    /** S 티어 총 게임 수. */
    stt: number;
    /** S 티어 승리 수. */
    stw: number;
    /** A 티어 총 게임 수. */
    tw: number;
    /** A 티어 승리 수. */
    atw: number;
    /** A+ 티어 총 게임 수. */
    aatw: number;
    /** A++ 티어 총 게임 수. */
    aaatw: number;
    /** B 티어 총 게임 수. */
    btw: number;
    /** B+ 티어 총 게임 수. */
    bbtw: number;
    /** B++ 티어 총 게임 수. */
    bbbtw: number;
    /** C 티어 총 게임 수. */
    ctw: number;
    /** C+ 티어 총 게임 수. */
    cctw: number;
    /** C++ 티어 총 게임 수. */
    ccctw: number;
    /** D 티어 총 게임 수. */
    dtw: number;
    /** D+ 티어 총 게임 수. */
    ddtw: number;
    /** D++ 티어 총 게임 수. */
    dddtw: number;
    /** E 티어 총 게임 수. */
    etw: number;
    /** F 티어 총 게임 수. */
    ftw: number;
    /** F+ 티어 총 게임 수. */
    fftw: number;
    /** F++ 티어 총 게임 수. */
    ffftw: number;
    /** 누적 일일 티켓 수. */
    cdt: number;
    /** 사용 가능한 일일 티켓 수. */
    udt: number;
}

// ──────────────────────────────────────────────
// TopRanker
// ──────────────────────────────────────────────

/** 상위 랭커 정보. */
export interface TopRanker {
    /** 유저 고유 식별자(userId). getTop 응답에만 존재. */
    uid?: string;
    /** 유저 닉네임. */
    nickname: string;
    /** 매칭 MMR. */
    mmr: number;
    /** 랭크 순위. */
    rank: number;
    /** 리전 서버 코드. {@link RegionServerCode} 참조. getTop 응답에만 존재. */
    serverCode?: number;
    /** 서버 내 순위. getTop 응답에만 존재. */
    serverRank?: number;
    /** 유저 엠블럼 배열. */
    userEmblems?: unknown[];
}

// ──────────────────────────────────────────────
// BattleUserResult (284 fields, all optional)
// ──────────────────────────────────────────────

/**
 * 매치 내 유저별 전투 결과.
 * 284개 필드로 구성되며, API가 항상 모든 필드를 반환하지는 않으므로 모든 필드는 optional입니다.
 */
export interface BattleUserResult {
    /** 플레이어 닉네임. */
    nickname?: string;
    /** 게임을 식별하는 고유 번호. */
    gameId?: number;
    /** 게임의 매칭 모드. {@link MatchingMode} 참조. */
    matchingMode?: number;
    /** 게임의 팀 매칭 모드. {@link MatchingTeamMode} 참조. */
    matchingTeamMode?: number;
    /** 시즌 ID. */
    seasonId?: number;
    /** 플레이어 캐릭터 코드. */
    characterNum?: number;
    /** 플레이어 캐릭터의 스킨 코드. */
    skinCode?: number;
    /** 사망/승리 시점의 캐릭터 레벨. */
    characterLevel?: number;
    /** 플레이어의 최종 순위. */
    gameRank?: number;
    /** 플레이어의 매치 중 처치 수. */
    playerKill?: number;
    /** 플레이어의 매치 중 어시스트 수. */
    playerAssistant?: number;
    /** 플레이어가 매치 중 처치한 야생 동물 수. */
    monsterKill?: number;
    /** 매치 종료 시 가장 레벨이 높은 무기 숙련도의 ID. */
    bestWeapon?: number;
    /** 매치 종료 시 가장 레벨이 높은 무기 숙련도의 레벨. */
    bestWeaponLevel?: number;
    /** 매치 종료 시점의 숙련도 ID와 숙련도 레벨 매핑. */
    masteryLevel?: Record<number, number>;
    /** 매치 종료 시 장착된 아이템 ID 딕셔너리. 키=장비 슬롯, 값=아이템 코드. */
    equipment?: Record<number, number>;
    /** 메인 시즌 식별자. */
    versionSeason?: number;
    /** 게임 버전 (major). */
    versionMajor?: number;
    /** 게임 버전 (minor). */
    versionMinor?: number;
    /** 현재 플레이어 언어. */
    language?: string;
    /** 매치 종료 시점의 스킬 ID와 레벨 딕셔너리. */
    skillLevelInfo?: Record<number, number>;
    /** 매치 중 스킬 레벨업 순서 기록 딕셔너리. */
    skillOrderInfo?: Record<number, number>;
    /** 전투 서버 위치. */
    serverName?: string;
    /** 스탯. 최대 체력. */
    maxHp?: number;
    /** 스탯. 최대 스태미너. */
    maxSp?: number;
    /** 스탯. 공격력. */
    attackPower?: number;
    /** 스탯. 이동 속도. */
    moveSpeed?: number;
    /** 스탯. 방어력. */
    defense?: number;
    /** 스탯. 체력 재생. */
    hpRegen?: number;
    /** 스탯. 스태미너 재생. */
    spRegen?: number;
    /** 스탯. 공격 속도. */
    attackSpeed?: number;
    /** 스탯. 비전투 시 이동 속도. */
    outOfCombatMoveSpeed?: number;
    /** 스탯. 시야 범위. */
    sightRange?: number;
    /** 스탯. 기본 공격 사거리. */
    attackRange?: number;
    /** 스탯. 추가 치명타 확률. */
    criticalStrikeChance?: number;
    /** 스탯. 추가 치명타 피해 배율. */
    criticalStrikeDamage?: number;
    /** 스탯. 쿨다운 감소. */
    coolDownReduction?: number;
    /** 스탯. 오므니사이폰. */
    lifeSteal?: number;
    /** 스탯. 일반 유형 피해 흡혈. */
    normalLifeSteal?: number;
    /** 스탯. 스킬 유형 피해 흡혈. */
    skillLifeSteal?: number;
    /** 스탯. 몬스터에 대한 피해 증폭. */
    amplifierToMonster?: number;
    /** 스탯. 함정 피해 증폭. */
    trapDamage?: number;
    /** 매치 종료 후 계정이 획득한 경험치. */
    gainExp?: number;
    /** 매치 시작 시 서버 시간. */
    startDtm?: string;
    /** 매치 종료 시 서버 프레임 시간. */
    duration?: number;
    /** 매치 시작 전 플레이어의 MMR. */
    mmrBefore?: number;
    /** 해당 매치의 MMR 변화량. */
    mmrGain?: number;
    /** 플레이어의 신규 MMR. */
    mmrAfter?: number;
    /** 플레이어 기준 매치 종료까지 경과한 시간(초). */
    playTime?: number;
    /** 관전 시간(초). */
    watchTime?: number;
    /** 플레이 시간과 관전 시간의 합. */
    totalTime?: number;
    /** 매치에 추가된 AI 봇 수. */
    botAdded?: number;
    /** 플레이어 기준 매치 종료 시 남아 있던 AI 봇 수. */
    botRemain?: number;
    /** 인원수가 부족하여 금지 구역이 추가로 발행된 횟수. */
    restrictedAreaAccelerated?: number;
    /** 플레이어 기준 매치 종료 시 남은 지역 수. */
    safeAreas?: number;
    /** 플레이어의 팀 번호. */
    teamNumber?: number;
    /** 팀 인원 수. */
    preMade?: number;
    /** 이벤트 미션 ID와 목표 누적 횟수의 딕셔너리. */
    eventMissionResult?: Record<number, number>;
    /** 플레이어에게 부여된 MMR의 신뢰도. */
    gainedNormalMmrKFactor?: number;
    /** 승리 여부. */
    victory?: number;
    /** 제작한 언커먼 등급 아이템 수. */
    craftUncommon?: number;
    /** 제작한 레어 등급 아이템 수. */
    craftRare?: number;
    /** 제작한 에픽 등급 아이템 수. */
    craftEpic?: number;
    /** 제작한 레전더리 등급 아이템 수. */
    craftLegend?: number;
    /** 플레이어가 다른 플레이어 캐릭터에게 가한 총 피해량. */
    damageToPlayer?: number;
    /** 플레이어가 다른 플레이어 캐릭터에게 가한 함정 피해량. */
    damageToPlayer_trap?: number;
    /** 플레이어가 다른 플레이어 캐릭터에게 가한 기본 공격 유형 피해량. */
    damageToPlayer_basic?: number;
    /** 플레이어가 다른 플레이어 캐릭터에게 가한 스킬 유형 피해량. */
    damageToPlayer_skill?: number;
    /** 플레이어가 다른 플레이어 캐릭터에게 가한 아이템 스킬 유형 피해량. */
    damageToPlayer_itemSkill?: number;
    /** 플레이어가 다른 플레이어 캐릭터에게 가한 직접 유형 피해량. */
    damageToPlayer_direct?: number;
    /** 플레이어가 다른 플레이어 캐릭터에게 가한 고유 스킬 유형 피해량. */
    damageToPlayer_uniqueSkill?: number;
    /** 플레이어가 다른 플레이어 캐릭터에게 받은 총 피해량. */
    damageFromPlayer?: number;
    /** 플레이어가 다른 플레이어 캐릭터에게 받은 함정 피해량. */
    damageFromPlayer_trap?: number;
    /** 플레이어가 다른 플레이어 캐릭터에게 받은 기본 공격 유형 피해량. */
    damageFromPlayer_basic?: number;
    /** 플레이어가 다른 플레이어 캐릭터에게 받은 스킬 유형 피해량. */
    damageFromPlayer_skill?: number;
    /** 플레이어가 다른 플레이어 캐릭터에게 받은 아이템 스킬 유형 피해량. */
    damageFromPlayer_itemSkill?: number;
    /** 플레이어가 다른 플레이어 캐릭터에게 받은 직접 유형 피해량. */
    damageFromPlayer_direct?: number;
    /** 플레이어가 다른 플레이어 캐릭터에게 받은 고유 스킬 유형 피해량. */
    damageFromPlayer_uniqueSkill?: number;
    /** 플레이어가 몬스터에게 가한 총 피해량. */
    damageToMonster?: number;
    /** 플레이어가 몬스터에게 가한 함정 피해량. */
    damageToMonster_trap?: number;
    /** 플레이어가 몬스터에게 가한 일반 피해량. */
    damageToMonster_basic?: number;
    /** 플레이어가 몬스터에게 가한 스킬 피해량. */
    damageToMonster_skill?: number;
    /** 플레이어가 몬스터에게 가한 아이템 스킬 피해량. */
    damageToMonster_itemSkill?: number;
    /** 플레이어가 몬스터에게 가한 직접 피해량. */
    damageToMonster_direct?: number;
    /** 플레이어가 몬스터에게 가한 고유 스킬 피해량. */
    damageToMonster_uniqueSkill?: number;
    /** 플레이어가 몬스터에게 받은 총 피해량. */
    damageFromMonster?: number;
    /** 플레이어가 다른 플레이어 캐릭터의 보호막에 가한 피해량. */
    damageToPlayer_Shield?: number;
    /** 플레이어가 보호막으로 흡수한 다른 플레이어 캐릭터로부터의 피해량. */
    damageOffsetedByShield_Player?: number;
    /** 플레이어가 보호막으로 흡수한 야생 동물로부터의 피해량. */
    damageOffsetedByShield_Monster?: number;
    /** 몬스터 ID와 플레이어의 처치 수 딕셔너리. */
    killMonsters?: Record<number, number>;
    /** 플레이어의 총 회복량. */
    healAmount?: number;
    /** 다른 플레이어 캐릭터에게 제공한 총 회복량. */
    teamRecover?: number;
    /** 보호막이 흡수/방어한 피해량. */
    protectAbsorb?: number;
    /** 플레이어가 설치한 감시 카메라 수. */
    addSurveillanceCamera?: number;
    /** 플레이어가 설치한 망원 카메라 수. */
    addTelephotoCamera?: number;
    /** 플레이어가 파괴한 감시 카메라 수. */
    removeSurveillanceCamera?: number;
    /** 플레이어가 파괴한 망원 카메라 수. */
    removeTelephotoCamera?: number;
    /** 플레이어의 하이퍼루프 사용 횟수. */
    useHyperLoop?: number;
    /** 플레이어의 보안 콘솔 사용 횟수. */
    useSecurityConsole?: number;
    /** 기권 여부. */
    giveUp?: number;
    /** 플레이어가 매치를 관전 중인지 여부. */
    teamSpectator?: number;
    /** 플레이어가 매치 시작 시 선택한 경로 ID. */
    routeIdOfStart?: number;
    /** 선택한 경로의 슬롯 ID. */
    routeSlotId?: number;
    /** 플레이어가 선택한 시작 지역. */
    placeOfStart?: number;
    /** 팀의 평균 MMR. */
    mmrAvg?: number;
    /** 플레이어 기준 매치 종료 시 팀의 총 처치 수. */
    teamKill?: number;
    /** 현재 계정 레벨. */
    accountLevel?: number;
    /** 플레이어를 처치한 플레이어의 고유 번호 식별자. */
    killerUserNum?: number;
    /** 처치한 상대의 식별자. */
    killer?: string;
    /** 플레이어를 처치한 플레이어의 닉네임. 레거시 값. */
    killDetail?: string;
    /** 플레이어를 처치한 플레이어의 캐릭터 이름. 레거시 값. */
    killerCharacter?: string;
    /** 플레이어를 처치한 플레이어의 무기. 레거시 값. */
    killerWeapon?: string;
    /** 플레이어의 사망을 유발한 스킬 또는 오브젝트 이름. 레거시 값. */
    causeOfDeath?: string;
    /** 플레이어가 사망한 지역의 ID. 레거시 값. */
    placeOfDeath?: string;
    /** 플레이어가 매치 중 수행한 낚시 횟수. */
    fishingCount?: number;
    /** 플레이어가 매치 중 사용한 이모트 횟수. */
    useEmoticonCount?: number;
    /** 첫 번째 코어 증강 코드. */
    traitFirstCore?: number;
    /** 첫 번째 두 개의 서브 슬롯 증강 코드. */
    traitFirstSub?: number[];
    /** 두 번째 서브 슬롯 증강 코드 (코볼트 모드에서는 최대 3개). */
    traitSecondSub?: number[];
    /** 플레이어가 획득한 크레딧 양. 1분마다 별도 인덱스로 누적. */
    totalVFCredit?: number[];
    /** 출처별로 분류된 크레딧 누적량. */
    creditSource?: Record<string, number>;
    /** 플레이어가 사용한 크레딧 양. 1분마다 별도 인덱스로 누적. */
    usedVFCredit?: number[];
    /** 플레이어가 전송 콘솔을 통해 요청한 아이템의 코드. */
    itemTransferredConsole?: number[];
    /** 플레이어가 전송 드론을 통해 요청한 아이템의 코드. */
    itemTransferredDrone?: number[];
    /** 제작한 신화 등급 아이템 수. */
    craftMythic?: number;
    /** 플레이어의 사망 횟수. */
    playerDeaths?: number;
    /** 감마 처치 여부. */
    killGamma?: boolean;
    /** 플레이어가 처치한 캐릭터의 딕셔너리. */
    killDetails?: Record<number, number>;
    /** 플레이어를 처치한 캐릭터의 딕셔너리. */
    deathDetails?: Record<number, number>;
    /** 플레이어가 가한 총 CC(군중 제어) 시간. */
    ccTimeToPlayer?: number;
    /** 등급별 조리 음식 총량. */
    foodCraftCount?: Record<number, number>;
    /** 등급별 제작 음료 총량. */
    beverageCraftCount?: Record<number, number>;
    /** 개봉한 공중 보급 상자 총량. */
    airSupplyOpenCount?: Record<number, number>;
    /** 탈출 상태. 1=(2 이외의 사유로) 탈출 실패, 2=적에 의해 탈출 실패, 3=탈출 성공. */
    escapeState?: number;
    /** 수집한 수집품 개수 배열. */
    collectItemForLog?: number[];
    /** 최상위 무기 아이템 코드. 키=장비 슬롯, 값=아이템 코드 목록. */
    equipFirstItemForLog?: Record<number, number[]>;
    /** 더블 킬 달성 횟수. */
    totalDoubleKill?: number;
    /** 트리플 킬 달성 횟수. */
    totalTripleKill?: number;
    /** 쿼드라 킬 달성 횟수. */
    totalQuadraKill?: number;
    /** 5연속 이상 처치 달성 횟수. */
    totalExtraKill?: number;
    /** 전술 스킬의 그룹 코드. */
    tacticalSkillGroup?: number;
    /** 전술 스킬의 최종 레벨. */
    tacticalSkillLevel?: number;
    /** 총 획득 크레딧. */
    totalGainVFCredit?: number;
    /** 다른 플레이어 처치로 획득한 크레딧. */
    killPlayerGainVFCredit?: number;
    /** 닭 처치로 획득한 크레딧. */
    killChickenGainVFCredit?: number;
    /** 멧돼지 처치로 획득한 크레딧. */
    killBoarGainVFCredit?: number;
    /** 들개 처치로 획득한 크레딧. */
    killWildDogGainVFCredit?: number;
    /** 늑대 처치로 획득한 크레딧. */
    killWolfGainVFCredit?: number;
    /** 곰 처치로 획득한 크레딧. */
    killBearGainVFCredit?: number;
    /** 오메가 처치로 획득한 크레딧. */
    killOmegaGainVFCredit?: number;
    /** 박쥐 처치로 획득한 크레딧. */
    killBatGainVFCredit?: number;
    /** 위클라인 처치로 획득한 크레딧. */
    killWicklineGainVFCredit?: number;
    /** 알파 처치로 획득한 크레딧. */
    killAlphaGainVFCredit?: number;
    /** 플레이어 현상금 처치로 획득한 크레딧. */
    killItemBountyGainVFCredit?: number;
    /** 드론 파괴로 획득한 크레딧. */
    killDroneGainVFCredit?: number;
    /** 감마 처치로 획득한 크레딧. */
    killGammaGainVFCredit?: number;
    /** 포탑 파괴로 획득한 크레딧. */
    killTurretGainVFCredit?: number;
    /** 아이템 판매로 획득한 크레딧. */
    itemShredderGainVFCredit?: number;
    /** 플레이어가 사용한 크레딧. */
    totalUseVFCredit?: number;
    /** 원격 드론 전송(자기 사용)으로 사용한 크레딧. */
    remoteDroneUseVFCreditMySelf?: number;
    /** 원격 드론 전송(아군에게)으로 사용한 크레딧. */
    remoteDroneUseVFCreditAlly?: number;
    /** 전송 콘솔에서 사용한 크레딧 (루트키 제외). */
    transferConsoleFromMaterialUseVFCredit?: number;
    /** 전송 콘솔에서 루트키 구매에 사용한 크레딧. */
    transferConsoleFromEscapeKeyUseVFCredit?: number;
    /** 전송 콘솔에서 부활에 사용한 크레딧. */
    transferConsoleFromRevivalUseVFCredit?: number;
    /** 전술 스킬 레벨업에 사용한 크레딧. */
    tacticalSkillUpgradeUseVFCredit?: number;
    /** 팀이 적을 처치한 횟수. */
    teamElimination?: number;
    /** 팀이 적을 다운시킨 횟수. */
    teamDown?: number;
    /** 팀이 전투 지역에서 적을 다운시킨 횟수. */
    teamBattleZoneDown?: number;
    /** 팀이 동일 적을 반복적으로 다운시킨 횟수. */
    teamRepeatDown?: number;
    /** 스탯. 플레이어의 최종 적응력. */
    adaptiveForce?: number;
    /** 적응력으로 전환된 추가 공격력. */
    adaptiveForceAttack?: number;
    /** 적응력으로 전환된 추가 스킬 증폭. */
    adaptiveForceAmplify?: number;
    /** 스탯. 플레이어의 최종 스킬 증폭. */
    skillAmp?: number;
    /** 모닥불에서 제작한 언커먼 등급 음식 수. */
    campFireCraftUncommon?: number;
    /** 모닥불에서 제작한 레어 등급 음식 수. */
    campFireCraftRare?: number;
    /** 모닥불에서 제작한 에픽 등급 음식 수. */
    campFireCraftEpic?: number;
    /** 모닥불에서 제작한 레전더리 등급 음식 수. */
    campFireCraftLegendary?: number;
    /** 전술 스킬 사용 횟수. */
    tacticalSkillUseCount?: number;
    /** 전송 콘솔을 통해 부활한 횟수. */
    creditRevivalCount?: number;
    /** 전송 콘솔을 통해 아군을 부활시킨 횟수. */
    creditRevivedOthersCount?: number;
    /** 브리핑 룸에서 보낸 시간. */
    timeSpentInBriefingRoom?: number;
    /** 크레딧 부활이 불가능해지기 전에 게임을 나갔는지 여부. */
    IsLeavingBeforeCreditRevivalTerminate?: boolean;
    /** 야생 동물 처치로 획득한 총 크레딧. */
    crGetAnimal?: number;
    /** 돌연변이 동물 처치로 획득한 총 크레딧. */
    crGetMutant?: number;
    /** 페이즈 변경으로 획득한 총 크레딧. */
    crGetPhaseStart?: number;
    /** 다른 플레이어 처치로 획득한 총 크레딧. */
    crGetKill?: number;
    /** 아군의 플레이어 처치 지원으로 획득한 총 크레딧. */
    crGetAssist?: number;
    /** 시간 경과로 획득한 총 크레딧. */
    crGetTimeElapsed?: number;
    /** 크레딧이 가장 적은 플레이어에게 지급된 총 보정 크레딧. */
    crGetCreditBonus?: number;
    /** 원격 드론이 사용한 총 크레딧. */
    crUseRemoteDrone?: number;
    /** 전술 스킬 업그레이드에 사용한 총 크레딧. */
    crUseUpgradeTacticalSkill?: number;
    /** 생명의 나무 구매에 사용한 총 크레딧. */
    crUseTreeOfLife?: number;
    /** 미스릴 구매에 사용한 총 크레딧. */
    crUseMythril?: number;
    /** 포스 코어 구매에 사용한 총 크레딧. */
    crUseForceCore?: number;
    /** VF 혈액 샘플 구매에 사용한 총 크레딧. */
    crUseVFBloodSample?: number;
    /** 루트키트 구매에 사용한 총 크레딧. */
    crUseRootkit?: number;
    /** 게임 내 랭크 포인트 증가량. */
    mmrGainInGame?: number;
    /** 게임 입장(참가 비용)으로 인한 랭크 포인트 손실. */
    mmrLossEntryCost?: number;
    /** 게임에서 사용된 매칭 유형. 0=1~3인 모두, 1=1~2인만, 2=3인만. */
    premadeMatchingType?: number;
    /** 시야 기여도 점수 합계. */
    viewContribution?: number;
    /** 정찰 드론 사용 횟수. */
    useReconDrone?: number;
    /** EMP 드론 사용 횟수. */
    useEmpDrone?: number;
    /** 2인 사전구성 팀과 매칭 거부. */
    exceptPreMadeTeam?: number;
    /** 터미네이트 시킨 팀 수. */
    terminateCount?: number;
    /** 클러치 달성 횟수. */
    clutchCount?: number;
    /** 마무리되지 않은 다운 적 수. (토너먼트용) */
    unknownKill?: number;
    /** 이 게임의 주요 날씨 효과. */
    mainWeather?: number;
    /** 이 게임의 보조 날씨 효과. */
    subWeather?: number;
    /** 게임에서 사용된 환경변수의 사용 횟수. */
    activeInstallation?: Record<number, number>;
    /** 루미에 채널링한 횟수. */
    useGuideRobot?: number;
    /** 루미에서 라디얼 등급 아이템 구매에 사용한 크레딧. */
    guideRobotRadial?: number;
    /** 루미에서 플래그십 등급 아이템 구매에 사용한 크레딧. */
    guideRobotFlagShip?: number;
    /** 루미에서 시그니처 등급 아이템 구매에 사용한 크레딧. */
    guideRobotSignature?: number;
    /** 전투 모드에서 루미에게 획득한 크레딧. */
    crGetByGuideRobot?: number;
    /** 루미에게 가한 피해량. */
    damageToGuideRobot?: number;
    /** 획득한 선혈 큐브 횟수. */
    getBuffCubeRed?: number;
    /** 획득한 우주 큐브 횟수. */
    getBuffCubePurple?: number;
    /** 획득한 생명 큐브 횟수. */
    getBuffCubeGreen?: number;
    /** 획득한 풍요 큐브 횟수. */
    getBuffCubeGold?: number;
    /** 획득한 바람 큐브 횟수. */
    getBuffCubeSkyBlue?: number;
    /** 수집한 모든 큐브의 총합. */
    sumGetBuffCube?: number;
    /** 전멸 방지 페이즈 동안의 처치 수. */
    teamDownCanNotEliminate?: number;
    /** 전멸 방지 페이즈가 아닐 때의 처치 수. */
    teamDownCanEliminate?: number;
    /** 전멸 방지 페이즈 동안의 반복 처치 수. */
    teamRepeatDownCanNotEliminate?: number;
    /** 전멸 방지 페이즈가 아닐 때의 반복 처치 수. */
    teamRepeatDownCanEliminate?: number;
    /** 균열(일반/강화)에 진입한 횟수. */
    enterDimensionRift?: number;
    /** 균열(강화)에 진입한 횟수. */
    enterDimensionEmpoweredRift?: number;
    /** 균열(일반/강화) 전투 승리 횟수. */
    winFromDimensionRift?: number;
    /** 균열(강화) 전투 승리 횟수. */
    winFromDimensionEmpoweredRift?: number;
    /** 난류 진입 횟수. */
    enterTurbulentRift?: number;
    /** 특정 가젯 스킬 사용 횟수. */
    useGadget?: Record<number, number>;
    /** 보리 처치 시 드롭되는 아이템 상자의 등급. */
    getBoriReward?: Record<number, number>;
    /** 키오스크 및 루미에서 교환한 아이템으로 획득한 크레딧. */
    kioskExchangeCredit?: number;
    /** 생명의 나무가 생성된 지역 코드 배열 (시간순 정렬). */
    treeOfLifeSpawn?: number[];
    /** 사과나무를 공격하여 사과를 떨어트린 횟수. */
    gimmickAppleDropped?: number;
    /** 드럼통을 공격하여 활성화시킨 횟수. */
    gimmickDrumUseCount?: number;
    /** 드럼통을 통해 적 실험체를 피격한 횟수. */
    gimmickDrumAttackCount?: number;
    /** 하늘에서 떨어진 드럼통에 맞은 횟수. */
    gimmickDrumDroppedHitCount?: number;
    /** 증거품 상자에서 획득한 등급별 아이템 개수. */
    gimmickEvidenceLockerCount?: string;
    /** 증거품 상자에서 획득한 모든 아이템의 코드. */
    gimmickEvidenceLockerItem?: number[];
    /** 병원 키오스크를 통해 할인받은 총 크레딧. */
    gimmickHospitalDiscountRate?: number;
    /** 괘종시계를 사용한 횟수. */
    gimmickGrandfatherClockUseCount?: number;
    /** [COBALT 전용] 증폭기 점령에 성공한 총 횟수. */
    totalTurbineTakeover?: number;
    /** [COBALT 전용] 처음 획득한 아이템 세트. */
    StartingItems?: number[];
    /** [COBALT 전용] 일반 회복 팩 사용량. */
    usedNormalHealPack?: number;
    /** [COBALT 전용] 강화 회복 팩 사용량. */
    usedReinforcedHealPack?: number;
    /** [COBALT 전용] 일반 보호막 팩 사용량. */
    usedNormalShiedPack?: number;
    /** [COBALT 전용] 강화 보호막 팩 사용량. */
    usedReinforcedShieldPack?: number;
    /** [COBALT 전용] 인퓨전 상품과 구매 횟수 딕셔너리. */
    boughtInfusion?: Record<number, number>;
    /** [COBALT 전용] 최종적으로 보유한 3개의 특성 인퓨전. */
    finalInfusion?: number[];
    /** [COBALT 전용] 획득한 점수. 1분마다 누적. */
    scoredPoint?: number[];
    /** [COBALT 전용] 페이즈 1 처치 수. */
    killsPhaseOne?: number;
    /** [COBALT 전용] 페이즈 2 처치 수. */
    killsPhaseTwo?: number;
    /** [COBALT 전용] 페이즈 3 처치 수. */
    killsPhaseThree?: number;
    /** [COBALT 전용] 페이즈 1 사망 수. */
    deathsPhaseOne?: number;
    /** [COBALT 전용] 페이즈 2 사망 수. */
    deathsPhaseTwo?: number;
    /** [COBALT 전용] 페이즈 3 사망 수. */
    deathsPhaseThree?: number;
    /** [COBALT 전용] 인퓨전 리롤에 사용한 크레딧. */
    infusionReRollUseVFCredit?: number;
    /** [COBALT 전용] 인퓨전 특성 구매에 사용한 크레딧. */
    infusionTraitUseVFCredit?: number;
    /** [COBALT 전용] 인퓨전 유물 구매에 사용한 크레딧. */
    infusionRelicUseVFCredit?: number;
    /** [COBALT 전용] 인퓨전 아이템 구매에 사용한 크레딧. */
    infusionStoreUseVFCredit?: number;
    /** [스쿼드 럼블 전용] 현재 스쿼드 럼블 랭크. */
    squadRumbleRank?: number;
    /** @deprecated 사용 중단. */
    battleZone1AreaCode?: number;
    /** @deprecated 사용 중단. */
    battleZone1BattleMark?: number;
    /** @deprecated 사용 중단. */
    battleZone1ItemCode?: number[];
    /** @deprecated 사용 중단. */
    battleZone2AreaCode?: number;
    /** @deprecated 사용 중단. */
    battleZone2BattleMark?: number;
    /** @deprecated 사용 중단. */
    battleZone2ItemCode?: number[];
    /** @deprecated 사용 중단. */
    battleZone3AreaCode?: number;
    /** @deprecated 사용 중단. */
    battleZone3BattleMark?: number;
    /** @deprecated 사용 중단. */
    battleZone3ItemCode?: number[];
    /** @deprecated 사용 중단. */
    battleZonePlayerKillCount?: number;
    /** @deprecated 사용 중단. */
    battleZonePlayerDeathCount?: number;
    /** @deprecated 사용 중단. */
    battleZone1Winner?: number;
    /** @deprecated 사용 중단. */
    battleZone2Winner?: number;
    /** @deprecated 사용 중단. */
    battleZone3Winner?: number;
    /** @deprecated 사용 중단. */
    battleZone1BattleMarkCount?: number;
    /** @deprecated 사용 중단. */
    battleZone2BattleMarkCount?: number;
    /** @deprecated 사용 중단. */
    battleZone3BattleMarkCount?: number;
    /** @deprecated 사용 중단. */
    teamDownInAutoResurrection?: number;
    /** @deprecated 사용 중단. */
    teamDownDeactiveAutoResurrection?: number;
    /** @deprecated 사용 중단. */
    teamRepeatDownInAutoResurrection?: number;
    /** @deprecated 사용 중단. */
    teamRepeatDownDeactiveAutoResurrection?: number;
    /** @deprecated 사용 중단. */
    cobaltRandomPickRemoveCharacter?: number;
}

// ──────────────────────────────────────────────
// RecommendWeaponRoute
// ──────────────────────────────────────────────

/** 추천 무기 루트 정보. */
export interface RecommendWeaponRoute {
    /** 루트에 지급되는 고유 번호. */
    id: number;
    /** 유저가 설정한 루트 이름. */
    title: string;
    /** 수정한 유저의 닉네임. */
    userNickname: string;
    /** 지정된 루트의 캐릭터 번호. */
    characterCode: number;
    /** 제작자의 슬롯 번호. */
    slotId: number;
    /** 무기 타입. {@link MasteryCode} 참조. */
    weaponType: number;
    /** 루트에 지정된 초기 목표 아이템 정보 (JSON 문자열 배열). */
    weaponCodes: string;
    /** 루트에 지정된 초기 특성 정보 (JSON 문자열 배열). */
    traitCodes: string;
    /** 루트에 지정된 후반 아이템 목록 (JSON 문자열 딕셔너리). */
    lateGameItemCodes: string;
    /** 원격 드론으로 구매가 필요한 아이템 목록 (JSON 문자열 배열). */
    remoteTransferItemCodes: string;
    /** 루트에 포함된 전술 스킬 코드. {@link TacticalSkillGroupCode} 참조. */
    tacticalSkillGroupCode: number;
    /** 루트에 지정된 방문 지역 목록 (JSON 문자열 배열). {@link AreaCode} 참조. */
    paths: string;
    /** 루트가 공유된 횟수. */
    count: number;
    /** 클라이언트의 버전. */
    version: string;
    /** 솔로/듀오/스쿼드 구분. 현재는 0으로 고정. */
    teamMode: number;
    /** 제작자의 언어 코드. */
    languageCode: string;
    /** 루트의 버전 정보. */
    routeVersion: number;
    /** 루트의 공유 여부. */
    share: boolean;
    /** 최종 업데이트 일자 (Epoch Time). */
    updateDtm: number;
    /** 현재 시즌에 받은 추천 수. */
    v2Like: number;
    /** 현재 시즌에 기록된 승률. */
    v2WinRate: number;
    /** 현재 시즌 번호. */
    v2SeasonId: number;
    /** 누적 추천 수. */
    v2AccumulateLike: number;
    /** 누적 승률. */
    v2AccumulateWinRate: number;
    /** 미사용 데이터. */
    v2AccumulateSeasonId: number;
}

/** 추천 무기 루트 설명. */
export interface RecommendWeaponRouteDesc {
    /** 연결된 루트 ID. */
    recommendWeaponRouteId: number;
    /** 쉼표로 구분된 스킬 오더 (예: q,w,w,q,q,w,q). */
    skillPath: string;
    /** 루트에 포함된 설명 문자열. */
    desc: string;
}

// ──────────────────────────────────────────────
// Data / L10N
// ──────────────────────────────────────────────

/** L10N 언어 데이터 다운로드 응답. */
export interface LanguageData {
    /** 다운로드 URL 경로. 텍스트 파일은 `┃` 구분자로 `key┃value` 형식. */
    l10Path: string;
}