/**
 * 공개 API 진입점 (barrel).
 * @module
 */

export {BserApiError, BserClient, type BserClientOptions} from "./client.ts";
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