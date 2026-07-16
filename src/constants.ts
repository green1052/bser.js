/**
 * Eternal Return Open API 참조 상수.
 * @module
 */

// ──────────────────────────────────────────────
// RegionServerCode
// ──────────────────────────────────────────────

/** 리전 서버 코드. */
export enum RegionServerCode {
    /** 아시아 서버. */
    Asia = 10,
    /** 북미 서버. */
    NA = 12,
    /** 유럽 서버. */
    Europe = 13,
    /** 남미 서버. */
    SouthAmerica = 14,
    /** 아시아2 서버. */
    Asia2 = 17,
    /** 아시아3 서버. */
    Asia3 = 18,
}

// ──────────────────────────────────────────────
// MatchingMode
// ──────────────────────────────────────────────

/** 매칭 모드 코드. */
export enum MatchingMode {
    /** 스쿼드 일반 매치. */
    SquadNormal = 2,
    /** 스쿼드 랭크 매치. */
    SquadRanked = 3,
    /** 코볼트 일반 매치. */
    CobaltNormal = 6,
    /** 론울프 매치. */
    LoneWolf = 9,
}

// ──────────────────────────────────────────────
// MatchingTeamMode
// ──────────────────────────────────────────────

/** 매칭 팀 모드 코드. */
export enum MatchingTeamMode {
    /** 론울프. */
    LoneWolf = 1,
    /** 스쿼드. */
    Squad = 3,
    /** 코볼트 프로토콜. */
    CobaltProtocol = 4,
}

// ──────────────────────────────────────────────
// MasteryCode
// ──────────────────────────────────────────────

/** 무기/행동 숙련도 코드. code 12는 스킵됨. */
export enum MasteryCode {
    /** 글러브. */
    Glove = 1,
    /** 톤파. */
    Tonfa = 2,
    /** 방망이. */
    Bat = 3,
    /** 채찍. */
    Whip = 4,
    /** 투척. */
    Throw = 5,
    /** 암기. */
    Shuriken = 6,
    /** 활. */
    Bow = 7,
    /** 석궁. */
    Crossbow = 8,
    /** 권총. */
    Pistol = 9,
    /** 돌격 소총. */
    AssaultRifle = 10,
    /** 저격총. */
    SniperRifle = 11,
    /** 망치. */
    Hammer = 13,
    /** 도끼. */
    Axe = 14,
    /** 단검. */
    Dagger = 15,
    /** 양손검. */
    TwoHandedSword = 16,
    /** 폴암. */
    Polearm = 17,
    /** 쌍검. */
    DualSwords = 18,
    /** 창. */
    Spear = 19,
    /** 쌍절곤. */
    Nunchaku = 20,
    /** 레이피어. */
    Rapier = 21,
    /** 기타. */
    Guitar = 22,
    /** 카메라. */
    Camera = 23,
    /** 아르카나. */
    Arcana = 24,
    /** VF의수. */
    VFProsthetics = 25,
    /** 제작. */
    Craft = 101,
    /** 탐색. */
    Search = 102,
    /** 이동. */
    Move = 103,
    /** 방어. */
    Defense = 201,
    /** 사냥. */
    Hunt = 202,
}

// ──────────────────────────────────────────────
// AreaCode
// ──────────────────────────────────────────────

/** 지역 번호. L10N 검색 키: `Area/Name/{영문명}`. */
export enum AreaCode {
    /** 항구. */
    Harbor = 10,
    /** 창고. */
    Warehouse = 20,
    /** 연못. */
    Pond = 30,
    /** 개울. */
    Stream = 40,
    /** 해변. */
    SandyBeach = 50,
    /** 고급주택가. */
    Uptown = 60,
    /** 골목길. */
    Alley = 70,
    /** 주유소. */
    GasStation = 80,
    /** 호텔. */
    Hotel = 90,
    /** 경찰서. */
    PoliceStation = 100,
    /** 소방서. */
    FireStation = 110,
    /** 병원. */
    Hospital = 120,
    /** 절. */
    Temple = 130,
    /** 양궁장. */
    Archery = 140,
    /** 묘지. */
    Cemetery = 150,
    /** 숲. */
    Forest = 160,
    /** 공장. */
    Factory = 170,
    /** 교회. */
    Church = 180,
    /** 학교. */
    School = 190,
    /** 연구소. */
    Laboratory = 1000,
}

// ──────────────────────────────────────────────
// EquipmentSlot
// ──────────────────────────────────────────────

/** 장비 슬롯 코드. */
export enum EquipmentSlot {
    /** 무기. */
    Weapon = 0,
    /** 가슴. */
    Chest = 1,
    /** 머리. */
    Head = 2,
    /** 팔. */
    Arm = 3,
    /** 다리. */
    Leg = 4,
}

// ──────────────────────────────────────────────
// TacticalSkillGroupCode
// ──────────────────────────────────────────────

/** 전술 스킬 그룹 코드. code 100은 스킵됨. L10N 검색 키: `Skill/Group/Name/{skillId}`. */
export enum TacticalSkillGroupCode {
    /** 검색 키: Skill/Group/Name/4000000. */
    Group30 = 30,
    /** 검색 키: Skill/Group/Name/4001000. */
    Group40 = 40,
    /** 검색 키: Skill/Group/Name/4101000. */
    Group50 = 50,
    /** 검색 키: Skill/Group/Name/4102000. */
    Group60 = 60,
    /** 검색 키: Skill/Group/Name/4103000. */
    Group70 = 70,
    /** 검색 키: Skill/Group/Name/4104000. */
    Group80 = 80,
    /** 검색 키: Skill/Group/Name/4105000. */
    Group90 = 90,
    /** 검색 키: Skill/Group/Name/4107000. */
    Group110 = 110,
    /** 검색 키: Skill/Group/Name/4110000. */
    Group120 = 120,
    /** 검색 키: Skill/Group/Name/4112000. */
    Group130 = 130,
    /** 검색 키: Skill/Group/Name/4113000. */
    Group140 = 140,
    /** 검색 키: Skill/Group/Name/4108000. */
    Group150 = 150,
}

/** 전술 스킬 그룹 코드 → L10N 검색 키 매핑. */
export const TacticalSkillSearchKey: Record<TacticalSkillGroupCode, number> = {
    [TacticalSkillGroupCode.Group30]: 4000000,
    [TacticalSkillGroupCode.Group40]: 4001000,
    [TacticalSkillGroupCode.Group50]: 4101000,
    [TacticalSkillGroupCode.Group60]: 4102000,
    [TacticalSkillGroupCode.Group70]: 4103000,
    [TacticalSkillGroupCode.Group80]: 4104000,
    [TacticalSkillGroupCode.Group90]: 4105000,
    [TacticalSkillGroupCode.Group110]: 4107000,
    [TacticalSkillGroupCode.Group120]: 4110000,
    [TacticalSkillGroupCode.Group130]: 4112000,
    [TacticalSkillGroupCode.Group140]: 4113000,
    [TacticalSkillGroupCode.Group150]: 4108000
} as const;

// ──────────────────────────────────────────────
// GadgetSkillCode
// ──────────────────────────────────────────────

/** 가젯 스킬 코드 → L10N 검색 키 매핑. L10N 검색 키: `Skill/Group/Name/{searchKey}`. */
export enum GadgetSkillCode {
    /** 검색 키: Skill/Group/Name/8300300. */
    Gadget8300301 = 8300301,
    /** 검색 키: Skill/Group/Name/8300100. */
    Gadget8300101 = 8300101,
    /** 검색 키: Skill/Group/Name/8300200. */
    Gadget8300201 = 8300201,
    /** 검색 키: Skill/Group/Name/8300400. */
    Gadget8300401 = 8300401,
    /** 검색 키: Skill/Group/Name/8310200. */
    Gadget8310201 = 8310201,
    /** 검색 키: Skill/Group/Name/8310300. */
    Gadget8310301 = 8310301,
    /** 검색 키: Skill/Group/Name/8310500. */
    Gadget8310501 = 8310501,
}

/** 가젯 스킬 코드 → L10N 검색 키 매핑. */
export const GadgetSkillSearchKey: Record<GadgetSkillCode, number> = {
    [GadgetSkillCode.Gadget8300301]: 8300300,
    [GadgetSkillCode.Gadget8300101]: 8300100,
    [GadgetSkillCode.Gadget8300201]: 8300200,
    [GadgetSkillCode.Gadget8300401]: 8300400,
    [GadgetSkillCode.Gadget8310201]: 8310200,
    [GadgetSkillCode.Gadget8310301]: 8310300,
    [GadgetSkillCode.Gadget8310501]: 8310500
} as const;

// ──────────────────────────────────────────────
// L10N key prefixes
// ──────────────────────────────────────────────

/** L10N 검색 키 접두사. */
export const L10nPrefix = {
    /** 몬스터 이름: `Monster/Name/{code}`. */
    Monster: "Monster/Name/",
    /** 스킬 이름: `Skill/Group/Name/{code}`. */
    Skill: "Skill/Group/Name/",
    /** 지역 이름: `Area/Name/{영문명}`. */
    Area: "Area/Name/",
    /** 날씨 이름: `Weather/Name/{code}`. */
    Weather: "Weather/Name/",
    /** 환경 변수 이름: `Installation/Name/{code}`. */
    Installation: "Installation/Name/"
} as const;

// ──────────────────────────────────────────────
// Language
// ──────────────────────────────────────────────

/** L10N 언어 코드. */
export enum Language {
    /** 한국어. */
    Korean = "Korean",
    /** 영어. */
    English = "English",
    /** 일본어. */
    Japanese = "Japanese",
    /** 중국어 간체. */
    ChineseSimplified = "ChineseSimplified",
    /** 중국어 번체. */
    ChineseTraditional = "ChineseTraditional",
    /** 프랑스어 (부분 지원). */
    French = "French",
    /** 스페인어 (부분 지원). */
    Spanish = "Spanish",
    /** 라틴 스페인어 (부분 지원). */
    SpanishLatin = "SpanishLatin",
    /** 포르투갈어 (부분 지원). */
    Portuguese = "Portuguese",
    /** 라틴 포르투갈어 (부분 지원). */
    PortugueseLatin = "PortugueseLatin",
    /** 인도네시아어 (부분 지원). */
    Indonesian = "Indonesian",
    /** 독일어 (부분 지원). */
    German = "German",
    /** 러시아어 (부분 지원). */
    Russian = "Russian",
    /** 태국어 (부분 지원). */
    Thai = "Thai",
    /** 베트남어 (부분 지원). */
    Vietnamese = "Vietnamese",
    /** 이탈리아어 (부분 지원). */
    Italian = "Italian",
    /** 폴란드어 (부분 지원). */
    Polish = "Polish",
}

// ──────────────────────────────────────────────
// MetaType (for /v2/data/{metaType})
// ──────────────────────────────────────────────

/** 게임 데이터 메타 타입. `getGameData("hash")` 사용 시 해시 테이블 조회. */
export type MetaType =
    | "hash"
    | "Character"
    | "CharacterLevelUpStat"
    | "CharacterMastery"
    | "CharacterModeModifier"
    | "WeaponTypeInfo"
    | "ItemSkillLinker"
    | "ItemSpawn"
    | "ItemWeapon"
    | "ItemArmor"
    | "ItemSpecial"
    | "ItemConsumable"
    | "Monster"
    | "MonsterLevelUpStat"
    | "MonsterDropGroup"
    | "DropGroup"
    | "VFCredit"
    | "Season"
    | (string & {});