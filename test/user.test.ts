/**
 * User API integration tests.
 * Chain: nickname → userId → games(gameId) → rank/stats/unionTeam + error path
 */

import {expect, test} from "bun:test";
import {BserApiError, MatchingMode, MatchingTeamMode} from "../src";
import {client, hasApiKey, sharedState} from "./helpers.ts";

test.skipIf(!hasApiKey)("getByNickname — lookup user and extract userId", async () => {
    expect(sharedState.nickname.length).toBeGreaterThan(0);
    const user = await client.user.getByNickname(sharedState.nickname);
    expect(user).toBeDefined();
    expect(typeof user.userId).toBe("string");
    expect(user.nickname).toBe(sharedState.nickname);
    sharedState.userId = user.userId;
});

test.skipIf(!hasApiKey)("getByNickname — non-existent nickname throws BserApiError", async () => {
    try {
        await client.user.getByNickname("___존재하지_않는_닉네임___");
        expect.unreachable("should have thrown");
    } catch (e) {
        expect(e).toBeInstanceOf(BserApiError);
    }
});

test.skipIf(!hasApiKey)("getGames — recent games and extract gameId", async () => {
    expect(sharedState.userId.length).toBeGreaterThan(0);
    const games = await client.user.getGames(sharedState.userId);
    expect(Array.isArray(games)).toBe(true);
    if (games.length > 0 && games[0]) {
        const gid = games[0].gameId;
        if (gid !== undefined) {
            sharedState.gameId = gid;
        }
    }
});

test.skipIf(!hasApiKey)("getRank — rank info", async () => {
    expect(sharedState.userId.length).toBeGreaterThan(0);
    const rank = await client.user.getRank(sharedState.userId, sharedState.seasonId, MatchingTeamMode.Squad);
    expect(rank).toBeDefined();
    expect(typeof rank.mmr).toBe("number");
});

test.skipIf(!hasApiKey)("getStats normal (seasonId=0) — normal stats", async () => {
    expect(sharedState.userId.length).toBeGreaterThan(0);
    const stats = await client.user.getStats(sharedState.userId, 0, MatchingMode.SquadNormal);
    expect(Array.isArray(stats)).toBe(true);
});

test.skipIf(!hasApiKey)("getStats ranked — ranked stats", async () => {
    expect(sharedState.userId.length).toBeGreaterThan(0);
    const stats = await client.user.getStats(sharedState.userId, sharedState.seasonId, MatchingMode.SquadRanked);
    expect(Array.isArray(stats)).toBe(true);
});

test.skipIf(!hasApiKey)("getUnionTeam — union team", async () => {
    expect(sharedState.userId.length).toBeGreaterThan(0);
    const teams = await client.user.getUnionTeam(sharedState.userId, sharedState.seasonId);
    expect(Array.isArray(teams)).toBe(true);
});