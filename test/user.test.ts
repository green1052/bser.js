/**
 * 유저 API 통합 테스트.
 * 체인: nickname → uid → games(gameId) → rank/stats/unionTeam + 에러 경로
 */

import {expect, test} from "bun:test";
import {BserApiError, MatchingMode, MatchingTeamMode} from "../src";
import {client, hasApiKey, sharedState} from "./helpers.ts";

test.skipIf(!hasApiKey)("getByNickname — 유저 조회 및 uid 추출", async () => {
    expect(sharedState.nickname.length).toBeGreaterThan(0);
    const user = await client.user.getByNickname(sharedState.nickname);
    expect(user).toBeDefined();
    expect(typeof user.uid).toBe("number");
    expect(user.nickname).toBe(sharedState.nickname);
    sharedState.uid = user.uid;
});

test.skipIf(!hasApiKey)("getByNickname — 존재하지 않는 닉네임 BserApiError", async () => {
    try {
        await client.user.getByNickname("___존재하지_않는_닉네임___");
        expect.unreachable("should have thrown");
    } catch (e) {
        expect(e).toBeInstanceOf(BserApiError);
    }
});

test.skipIf(!hasApiKey)("getGames — 최근 게임 기록 및 gameId 추출", async () => {
    expect(sharedState.uid).toBeGreaterThan(0);
    const games = await client.user.getGames(sharedState.uid);
    expect(Array.isArray(games)).toBe(true);
    if (games.length > 0 && games[0]) {
        const gid = games[0].gameId;
        if (gid !== undefined) {
            sharedState.gameId = gid;
        }
    }
});

test.skipIf(!hasApiKey)("getRank — 랭크 정보", async () => {
    expect(sharedState.uid).toBeGreaterThan(0);
    const rank = await client.user.getRank(sharedState.uid, sharedState.seasonId, MatchingTeamMode.Squad);
    expect(rank).toBeDefined();
    expect(typeof rank.mmr).toBe("number");
});

test.skipIf(!hasApiKey)("getStats normal (seasonId=0) — 일반 스탯", async () => {
    expect(sharedState.uid).toBeGreaterThan(0);
    const stats = await client.user.getStats(sharedState.uid, 0, MatchingMode.SquadNormal);
    expect(Array.isArray(stats)).toBe(true);
});

test.skipIf(!hasApiKey)("getStats ranked — 랭크 스탯", async () => {
    expect(sharedState.uid).toBeGreaterThan(0);
    const stats = await client.user.getStats(sharedState.uid, sharedState.seasonId, MatchingMode.SquadRanked);
    expect(Array.isArray(stats)).toBe(true);
});

test.skipIf(!hasApiKey)("getUnionTeam — 유니온 팀", async () => {
    expect(sharedState.uid).toBeGreaterThan(0);
    const teams = await client.user.getUnionTeam(sharedState.uid, sharedState.seasonId);
    expect(Array.isArray(teams)).toBe(true);
});