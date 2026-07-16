/**
 * Ranking API integration tests.
 * Chain: getTop → extract nickname → getTopByServer(Asia)
 */

import {expect, test} from "bun:test";
import {MatchingTeamMode, RegionServerCode} from "../src";
import {client, hasApiKey, sharedState} from "./helpers.ts";

test.skipIf(!hasApiKey)("getTop — returns top rankers", async () => {
    const top = await client.ranking.getTop(sharedState.seasonId, MatchingTeamMode.Squad);
    expect(Array.isArray(top)).toBe(true);
    expect(top.length).toBeGreaterThan(0);
    if (top[0]?.nickname) {
        sharedState.nickname = top[0].nickname;
    }
    expect(typeof sharedState.nickname).toBe("string");
    expect(sharedState.nickname.length).toBeGreaterThan(0);
});

test.skipIf(!hasApiKey)("getTopByServer Asia — Asia server top rankers", async () => {
    const top = await client.ranking.getTopByServer(
        sharedState.seasonId,
        MatchingTeamMode.Squad,
        RegionServerCode.Asia
    );
    expect(Array.isArray(top)).toBe(true);
    expect(top.length).toBeGreaterThan(0);
    expect(top[0]?.nickname).toBeDefined();
});