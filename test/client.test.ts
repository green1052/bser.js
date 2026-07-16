/**
 * 클라이언트 에러 처리 테스트.
 * 잘못된 API 키로 BserApiError 발생 확인.
 */

import { describe, expect, it, test } from "bun:test";
import { BserClient, BserApiError } from "../src/index.ts";
import { hasApiKey } from "./helpers.ts";

test.skipIf(!hasApiKey)("잘못된 API 키로 BserApiError 발생", async () => {
  const badClient = new BserClient({ apiKey: "invalid-key-xxxx" });
  await expect(badClient.data.getGameDataHash()).rejects.toThrow(BserApiError);
});

test.skipIf(!hasApiKey)("BserApiError에 code와 message가 포함됨", async () => {
  const badClient = new BserClient({ apiKey: "invalid-key-xxxx" });
  try {
    await badClient.data.getGameDataHash();
    throw new Error("should not reach");
  } catch (e) {
    expect(e).toBeInstanceOf(BserApiError);
    if (e instanceof BserApiError) {
      expect(typeof e.code).toBe("number");
      expect(typeof e.apiMessage).toBe("string");
    }
  }
});

describe("BserApiError", () => {
  it("name이 BserApiError", () => {
    const err = new BserApiError(403, "forbidden");
    expect(err.name).toBe("BserApiError");
    expect(err.code).toBe(403);
    expect(err.apiMessage).toBe("forbidden");
  });
});