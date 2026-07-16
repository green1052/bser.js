/**
 * Client error handling tests.
 * Verifies BserApiError on invalid API key.
 */

import {describe, expect, it, test} from "bun:test";
import {BserApiError, BserClient} from "../src";
import {hasApiKey} from "./helpers";

test.skipIf(!hasApiKey)("invalid API key throws BserApiError", async () => {
    const badClient = new BserClient({apiKey: "invalid-key-xxxx"});
    try {
        await badClient.data.getGameDataHash();
        expect.unreachable("should have thrown");
    } catch (e) {
        expect(e).toBeInstanceOf(BserApiError);
    }
});

test.skipIf(!hasApiKey)("BserApiError contains code and message", async () => {
    const badClient = new BserClient({apiKey: "invalid-key-xxxx"});
    try {
        await badClient.data.getGameDataHash();
        expect.unreachable("should have thrown");
    } catch (e) {
        expect(e).toBeInstanceOf(BserApiError);
        if (e instanceof BserApiError) {
            expect(typeof e.code).toBe("number");
            expect(typeof e.apiMessage).toBe("string");
        }
    }
});

describe("BserApiError", () => {
    it("name is BserApiError", () => {
        const err = new BserApiError(403, "forbidden");
        expect(err.name).toBe("BserApiError");
        expect(err.code).toBe(403);
        expect(err.apiMessage).toBe("forbidden");
    });
});