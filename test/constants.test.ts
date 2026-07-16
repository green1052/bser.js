/**
 * Constants unit tests — no network, always runs.
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
    it("mapping is correct", () => {
        expect(RegionServerCode.Asia).toBe(10);
        expect(RegionServerCode.NA).toBe(12);
        expect(RegionServerCode.Europe).toBe(13);
        expect(RegionServerCode.SouthAmerica).toBe(14);
        expect(RegionServerCode.Asia2).toBe(17);
        expect(RegionServerCode.Asia3).toBe(18);
    });
});

describe("MatchingMode", () => {
    it("mapping is correct", () => {
        expect(MatchingMode.SquadNormal).toBe(2);
        expect(MatchingMode.SquadRanked).toBe(3);
        expect(MatchingMode.CobaltNormal).toBe(6);
        expect(MatchingMode.LoneWolf).toBe(9);
    });
});

describe("MatchingTeamMode", () => {
    it("mapping is correct", () => {
        expect(MatchingTeamMode.LoneWolf).toBe(1);
        expect(MatchingTeamMode.Squad).toBe(3);
        expect(MatchingTeamMode.CobaltProtocol).toBe(4);
    });
});

describe("MasteryCode", () => {
    it("code 12 is skipped", () => {
        expect(12 in MasteryCode).toBe(false);
    });
    it("mapping is correct", () => {
        expect(MasteryCode.Glove).toBe(1);
        expect(MasteryCode.Hammer).toBe(13);
        expect(MasteryCode.Hunt).toBe(202);
    });
});

describe("AreaCode", () => {
    it("mapping is correct", () => {
        expect(AreaCode.Harbor).toBe(10);
        expect(AreaCode.Laboratory).toBe(1000);
    });
});

describe("EquipmentSlot", () => {
    it("mapping is correct", () => {
        expect(EquipmentSlot.Weapon).toBe(0);
        expect(EquipmentSlot.Leg).toBe(4);
    });
});

describe("TacticalSkillGroupCode", () => {
    it("code 100 is skipped", () => {
        expect(100 in TacticalSkillGroupCode).toBe(false);
    });
    it("search key mapping is correct", () => {
        expect(TacticalSkillSearchKey[TacticalSkillGroupCode.Group30]).toBe(4000000);
        expect(TacticalSkillSearchKey[TacticalSkillGroupCode.Group150]).toBe(4108000);
    });
});

describe("GadgetSkillCode", () => {
    it("search key mapping is correct", () => {
        expect(GadgetSkillSearchKey[GadgetSkillCode.Gadget8300301]).toBe(8300300);
        expect(GadgetSkillSearchKey[GadgetSkillCode.Gadget8310501]).toBe(8310500);
    });
});

describe("L10nPrefix", () => {
    it("prefix is correct", () => {
        expect(L10nPrefix.Monster).toBe("Monster/Name/");
        expect(L10nPrefix.Skill).toBe("Skill/Group/Name/");
        expect(L10nPrefix.Area).toBe("Area/Name/");
    });
});

describe("Language", () => {
    it("Korean/English mapping is correct", () => {
        expect(Language.Korean as string).toBe("Korean");
        expect(Language.English as string).toBe("English");
    });
});