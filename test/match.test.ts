/**
 * 매치 API 통합 테스트.
 * 체인: getById(gameId) — user.test.ts에서 추출한 gameId 사용
 */

import {expect, test} from "bun:test";
import {client, hasApiKey, sharedState} from "./helpers.ts";

test.skipIf(!hasApiKey)("getById — 매치 전투 결과", async () => {
    expect(sharedState.gameId).toBeGreaterThan(0);
    const results = await client.match.getById(sharedState.gameId);
    expect(Array.isArray(results)).toBe(true);
    expect(results.length).toBeGreaterThan(0);
    // gameId가 일치해야 함
    const first = results[0];
    expect(first?.gameId).toBe(sharedState.gameId);
});