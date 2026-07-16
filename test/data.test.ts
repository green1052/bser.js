/**
 * Data API integration tests.
 * Chain: hash → Character → Season(extract seasonId) → Korean → weaponRoutes
 */

import {expect, test} from "bun:test";
import {Language} from "../src";
import {client, hasApiKey, sharedState} from "./helpers.ts";

test.skipIf(!hasApiKey)("getGameDataHash — returns hash table", async () => {
    const hash = await client.data.getGameDataHash();
    expect(typeof hash).toBe("object");
    expect(hash).not.toBeNull();
    expect("Character" in hash).toBe(true);
});

test.skipIf(!hasApiKey)("getGameData Character — returns row array", async () => {
    const characters = await client.data.getGameData("Character");
    expect(Array.isArray(characters)).toBe(true);
    expect(characters.length).toBeGreaterThan(0);
});

test.skipIf(!hasApiKey)("getGameData Season — extract seasonId", async () => {
    const seasons = await client.data.getGameData<{ seasonId: number; seasonName: string }>("Season");
    expect(Array.isArray(seasons)).toBe(true);
    expect(seasons.length).toBeGreaterThan(0);
    const latest = seasons.reduce((a, b) => ((a.seasonId ?? 0) > (b.seasonId ?? 0) ? a : b));
    if (latest.seasonId) {
        sharedState.seasonId = latest.seasonId;
    }
    expect(typeof sharedState.seasonId).toBe("number");
});

test.skipIf(!hasApiKey)("getLanguage Korean — returns l10Path", async () => {
    const data = await client.data.getLanguage(Language.Korean);
    expect(data).toBeDefined();
    expect(typeof data.l10Path).toBe("string");
    expect(data.l10Path.length).toBeGreaterThan(0);
});

test.skipIf(!hasApiKey)("getWeaponRoutes — returns route array", async () => {
    const routes = await client.data.getWeaponRoutes();
    expect(Array.isArray(routes)).toBe(true);
});

test.skipIf(!hasApiKey)("getWeaponRoutes(routeId) — specific route", async () => {
    const all = await client.data.getWeaponRoutes();
    if (all.length > 0 && all[0]) {
        const id = all[0].id;
        const specific = await client.data.getWeaponRoutes(id);
        expect(Array.isArray(specific)).toBe(true);
    }
});