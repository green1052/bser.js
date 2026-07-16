/**
 * 상수 단위 테스트 — 네트워크 없이 항상 실행.
 */

import {describe, expect, it} from "bun:test";
import {
    AreaCode,
    EquipmentSlot,
    GadgetSkillCode,
    GadgetSkillSearchKey,
    L10nPrefix,
    Language,
    MasteryCode,
    MatchingMode,
    MatchingTeamMode,
    RegionServerCode,
    TacticalSkillGroupCode,
    TacticalSkillSearchKey
} from "../src";

describe("RegionServerCode", () => {
    it("매핑이 올바르다", () => {
        expect(RegionServerCode.Asia).toBe(10);
        expect(RegionServerCode.NA).toBe(12);
        expect(RegionServerCode.Europe).toBe(13);
        expect(RegionServerCode.SouthAmerica).toBe(14);
        expect(RegionServerCode.Asia2).toBe(17);
        expect(RegionServerCode.Asia3).toBe(18);
    });
});

describe("MatchingMode", () => {
    it("매핑이 올바르다", () => {
        expect(MatchingMode.SquadNormal).toBe(2);
        expect(MatchingMode.SquadRanked).toBe(3);
        expect(MatchingMode.CobaltNormal).toBe(6);
        expect(MatchingMode.LoneWolf).toBe(9);
    });
});

describe("MatchingTeamMode", () => {
    it("매핑이 올바르다", () => {
        expect(MatchingTeamMode.LoneWolf).toBe(1);
        expect(MatchingTeamMode.Squad).toBe(3);
        expect(MatchingTeamMode.CobaltProtocol).toBe(4);
    });
});

describe("MasteryCode", () => {
    it("code 12는 스킵됨", () => {
        expect(12 in MasteryCode).toBe(false);
    });
    it("매핑이 올바르다", () => {
        expect(MasteryCode.Glove).toBe(1);
        expect(MasteryCode.Hammer).toBe(13);
        expect(MasteryCode.Hunt).toBe(202);
    });
});

describe("AreaCode", () => {
    it("매핑이 올바르다", () => {
        expect(AreaCode.Harbor).toBe(10);
        expect(AreaCode.Laboratory).toBe(1000);
    });
});

describe("EquipmentSlot", () => {
    it("매핑이 올바르다", () => {
        expect(EquipmentSlot.Weapon).toBe(0);
        expect(EquipmentSlot.Leg).toBe(4);
    });
});

describe("TacticalSkillGroupCode", () => {
    it("code 100은 스킵됨", () => {
        expect(100 in TacticalSkillGroupCode).toBe(false);
    });
    it("검색 키 매핑이 올바르다", () => {
        expect(TacticalSkillSearchKey[TacticalSkillGroupCode.Group30]).toBe(4000000);
        expect(TacticalSkillSearchKey[TacticalSkillGroupCode.Group150]).toBe(4108000);
    });
});

describe("GadgetSkillCode", () => {
    it("검색 키 매핑이 올바르다", () => {
        expect(GadgetSkillSearchKey[GadgetSkillCode.Gadget8300301]).toBe(8300300);
        expect(GadgetSkillSearchKey[GadgetSkillCode.Gadget8310501]).toBe(8310500);
    });
});

describe("L10nPrefix", () => {
    it("접두사가 올바르다", () => {
        expect(L10nPrefix.Monster).toBe("Monster/Name/");
        expect(L10nPrefix.Skill).toBe("Skill/Group/Name/");
        expect(L10nPrefix.Area).toBe("Area/Name/");
    });
});

describe("Language", () => {
    it("한국어/영어 매핑이 올바르다", () => {
        expect(Language.Korean as string).toBe("Korean");
        expect(Language.English as string).toBe("English");
    });
});