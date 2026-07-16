/**
 * Test helpers — shared state and client instance.
 * @module
 */

import {BserClient} from "../src";

/** API key (loaded from env). If empty, all integration tests are skipped. */
const apiKey = process.env.BSER_API_KEY ?? "";

/** Whether integration tests should run. */
export const hasApiKey = apiKey !== "";

/** Shared client instance. */
export const client = new BserClient({apiKey});

/** Shared state across the integration test chain. */
export const sharedState = {
    /** Season ID (extracted in data.test.ts, fallback 33). */
    seasonId: 33,
    /** Nickname (extracted in ranking.test.ts). */
    nickname: "",
    /** User ID (extracted in user.test.ts). */
    userId: "",
    /** Game ID (extracted in user.test.ts getGames). */
    gameId: 0
};