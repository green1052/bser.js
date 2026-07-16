/**
 * 테스트 헬퍼 — 공통 상태 및 클라이언트 인스턴스.
 * @module
 */

import { BserClient } from "../src/index.ts";

/** API 키 (환경 변수에서 로드). 없으면 모든 통합 테스트 skip. */
const apiKey = process.env.BSER_API_KEY ?? "";

/** 통합 테스트 skip 여부. */
export const hasApiKey = apiKey !== "";

/** 공유 클라이언트 인스턴스. */
export const client = new BserClient({ apiKey });

/** 통합 테스트 체인에서 공유되는 상태. */
export const sharedState = {
  /** 시즌 ID (data.test.ts에서 추출, fallback 33). */
  seasonId: 33,
  /** 닉네임 (ranking.test.ts에서 추출). */
  nickname: "",
  /** 유저 UID (user.test.ts에서 추출). */
  uid: 0,
  /** 게임 ID (user.test.ts getGames에서 추출). */
  gameId: 0,
};