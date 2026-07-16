/**
 * 랭킹 API 통합 테스트.
 * 체인: getTop → nickname 추출 → getTopByServer(Asia)
 */

import {expect, test} from "bun:test";
import {MatchingTeamMode, RegionServerCode} from "../src";
import {client, hasApiKey, sharedState} from "./helpers.ts";

test.skipIf(!hasApiKey)("getTop — 상위 랭커 반환", async () => {
    const top = await client.ranking.getTop(sharedState.seasonId, MatchingTeamMode.Squad);
    expect(Array.isArray(top)).toBe(true);
    expect(top.length).toBeGreaterThan(0);
    // 상위 랭커에서 닉네임 추출하여 sharedState에 저장
    if (top[0]?.nickname) {
        sharedState.nickname = top[0].nickname;
    }
    expect(typeof sharedState.nickname).toBe("string");
    expect(sharedState.nickname.length).toBeGreaterThan(0);
});

test.skipIf(!hasApiKey)("getTopByServer Asia — 아시아 서버 상위 랭커", async () => {
    const top = await client.ranking.getTopByServer(
        sharedState.seasonId,
        MatchingTeamMode.Squad,
        RegionServerCode.Asia
    );
    expect(Array.isArray(top)).toBe(true);
    expect(top.length).toBeGreaterThan(0);
    // 반환된 랭커의 serverCode가 Asia여야 함
    expect(top[0]?.serverCode).toBe(RegionServerCode.Asia);
});