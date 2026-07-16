/**
 * Eternal Return Open API 클라이언트.
 *
 * @example
 * ```ts
 * import { BserClient, Language, MatchingMode, MatchingTeamMode, RegionServerCode } from "bser.js";
 *
 * const client = new BserClient({ apiKey: "your-api-key" });
 *
 * // 닉네임으로 유저 검색
 * const user = await client.user.getByNickname("닉네임");
 *
 * // 최근 게임 기록
 * const games = await client.user.getGames(user.uid);
 *
 * // 랭커 조회
 * const top = await client.ranking.getTop(33, MatchingTeamMode.Squad);
 *
 * // 언어 데이터 다운로드 경로
 * const { l10Path } = await client.data.getLanguage(Language.Korean);
 * ```
 *
 * @module
 */

import {type BserClientOptions, HttpClient} from "./client.ts";
import {DataModule} from "./modules/data.ts";
import {RankingModule} from "./modules/ranking.ts";
import {UserModule} from "./modules/user.ts";
import {MatchModule} from "./modules/match.ts";

/**
 * Eternal Return Open API 클라이언트.
 * 모든 API 엔드포인트에 대한 접근을 제공합니다.
 */
export class BserClient {
    /** 데이터 API: 게임 데이터, L10N, 추천 무기 루트. */
    readonly data: DataModule;
    /** 랭킹 API: 상위 랭커 조회. */
    readonly ranking: RankingModule;
    /** 유저 API: 닉네임 검색, 게임 기록, 랭크, 스탯, 유니온 팀. */
    readonly user: UserModule;
    /** 매치 API: 게임 ID로 매치 조회. */
    readonly match: MatchModule;
    /** HTTP 클라이언트 (고급 사용자용). */
    readonly http: HttpClient;

    /**
     * @param options - 클라이언트 옵션
     * @param options.apiKey - API 키. https://developer.eternalreturn.io 에서 발급.
     * @param options.timeout - 타임아웃 (ms). 기본값 10_000.
     * @example
     * ```ts
     * const client = new BserClient({ apiKey: "your-api-key" });
     * ```
     */
    constructor(options: BserClientOptions) {
        this.http = new HttpClient(options);
        this.data = new DataModule(this.http);
        this.ranking = new RankingModule(this.http);
        this.user = new UserModule(this.http);
        this.match = new MatchModule(this.http);
    }
}

// ──────────────────────────────────────────────
// Re-exports
// ──────────────────────────────────────────────

export {BserApiError, type BserClientOptions} from "./client.ts";
export type {
    BattleUserResult,
    CharacterStat,
    LanguageData,
    RecommendWeaponRoute,
    RecommendWeaponRouteDesc,
    TopRanker,
    UnionTeam,
    User,
    UserRank,
    UserStats
} from "./types.ts";
export {
    AreaCode,
    EquipmentSlot,
    GadgetSkillCode,
    GadgetSkillSearchKey,
    Language,
    L10nPrefix,
    MasteryCode,
    MatchingMode,
    MatchingTeamMode,
    RegionServerCode,
    TacticalSkillGroupCode,
    TacticalSkillSearchKey,
    type MetaType
} from "./constants.ts";
export type {DataModule} from "./modules/data.ts";
export type {RankingModule} from "./modules/ranking.ts";
export type {UserModule} from "./modules/user.ts";
export type {MatchModule} from "./modules/match.ts";