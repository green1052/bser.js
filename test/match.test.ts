/**
 * Match API integration tests.
 * Self-sufficient: fetches its own gameId via ranking → user → games chain.
 */

import {beforeAll, expect, test} from "bun:test";
import {MatchingTeamMode} from "../src";
import {client, hasApiKey, sharedState} from "./helpers.ts";

beforeAll(async () => {
    if (!hasApiKey || sharedState.gameId > 0) return;
    if (sharedState.nickname.length === 0) {
        const top = await client.ranking.getTop(sharedState.seasonId, MatchingTeamMode.Squad);
        if (top.length > 0 && top[0]) {
            sharedState.nickname = top[0].nickname;
        }
    }
    if (sharedState.userId.length === 0 && sharedState.nickname.length > 0) {
        const user = await client.user.getByNickname(sharedState.nickname);
        sharedState.userId = user.userId;
    }
    if (sharedState.gameId === 0 && sharedState.userId.length > 0) {
        const games = await client.user.getGames(sharedState.userId);
        if (games.length > 0 && games[0]?.gameId !== undefined) {
            sharedState.gameId = games[0].gameId;
        }
    }
});

test.skipIf(!hasApiKey)("getById — match battle results", async () => {
    expect(sharedState.gameId).toBeGreaterThan(0);
    const results = await client.match.getById(sharedState.gameId);
    expect(Array.isArray(results)).toBe(true);
    expect(results.length).toBeGreaterThan(0);
    const first = results[0];
    expect(first?.gameId).toBe(sharedState.gameId);
});