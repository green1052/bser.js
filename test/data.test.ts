/**
 * 데이터 API 통합 테스트.
 * 체인: hash → Character → Season(seasonId 추출) → Korean → weaponRoutes
 */

import {expect, test} from "bun:test";
import {Language} from "../src";
import {client, hasApiKey, sharedState} from "./helpers.ts";

test.skipIf(!hasApiKey)("getGameDataHash — 해시 테이블 반환", async () => {
    const hash = await client.data.getGameDataHash();
    expect(typeof hash).toBe("object");
    expect(hash).not.toBeNull();
    // Character 같은 주요 키가 있어야 함
    expect("Character" in hash).toBe(true);
});

test.skipIf(!hasApiKey)("getGameData Character — 행 배열 반환", async () => {
    const characters = await client.data.getGameData("Character");
    expect(Array.isArray(characters)).toBe(true);
    expect(characters.length).toBeGreaterThan(0);
});

test.skipIf(!hasApiKey)("getGameData Season — seasonId 추출", async () => {
    const seasons = await client.data.getGameData<{ seasonId: number; seasonName: string }>("Season");
    expect(Array.isArray(seasons)).toBe(true);
    expect(seasons.length).toBeGreaterThan(0);
    // 가장 최근 시즌 ID를 sharedState에 저장
    const latest = seasons.reduce((a, b) => ((a.seasonId ?? 0) > (b.seasonId ?? 0) ? a : b));
    if (latest.seasonId) {
        sharedState.seasonId = latest.seasonId;
    }
    expect(typeof sharedState.seasonId).toBe("number");
});

test.skipIf(!hasApiKey)("getLanguage Korean — l10Path 반환", async () => {
    const data = await client.data.getLanguage(Language.Korean);
    expect(data).toBeDefined();
    expect(typeof data.l10Path).toBe("string");
    expect(data.l10Path.length).toBeGreaterThan(0);
});

test.skipIf(!hasApiKey)("getWeaponRoutes — 루트 배열 반환", async () => {
    const routes = await client.data.getWeaponRoutes();
    expect(Array.isArray(routes)).toBe(true);
});

test.skipIf(!hasApiKey)("getWeaponRoutes(routeId) — 특정 루트", async () => {
    const all = await client.data.getWeaponRoutes();
    if (all.length > 0 && all[0]) {
        const id = all[0].id;
        const specific = await client.data.getWeaponRoutes(id);
        expect(Array.isArray(specific)).toBe(true);
    }
});