/**
 * Eternal Return Open API HTTP 클라이언트.
 * @module
 */

import ky, { type KyInstance } from "ky";

import type { BserApiResponse } from "./types.ts";

/**
 * API 기본 URL.
 * @internal
 */
const BASE_URL = "https://open-api.bser.io";

/**
 * Eternal Return Open API 호출 시 발생하는 에러.
 * `code !== 200` 응답을 받았을 때 throw 됩니다.
 */
export class BserApiError extends Error {
  /** API 응답 코드 (400, 403, 404, 429, 500 등). */
  readonly code: number;
  /** API 응답 메시지. */
  readonly apiMessage: string;

  /**
   * @param code - API 응답 코드
   * @param message - API 응답 메시지
   */
  constructor(code: number, message: string) {
    super(`BSER API error ${code}: ${message}`);
    this.name = "BserApiError";
    this.code = code;
    this.apiMessage = message;
  }
}

/**
 * BSER API 클라이언트 옵션.
 */
export interface BserClientOptions {
  /** API 키. https://developer.eternalreturn.io 에서 발급. */
  apiKey: string;
  /** 타임아웃 (ms). 기본값 10_000. */
  timeout?: number;
}

/**
 * ky 인스턴스 생성.
 * @param apiKey - API 키
 * @param timeout - 타임아웃 (ms)
 * @returns ky 인스턴스
 * @internal
 */
function createKyInstance(apiKey: string, timeout: number): KyInstance {
  return ky.create({
    baseUrl: BASE_URL + "/",
    timeout,
    headers: {
      "x-api-key": apiKey,
    },
  });
}

/**
 * API HTTP 클라이언트 래퍼.
 * 표준 응답 `{ code, message, data | <resourceKey> }` 를 언랩하여 페이로드만 반환합니다.
 * `code !== 200` 인 경우 {@link BserApiError} throw.
 */
export class HttpClient {
  /** ky 인스턴스. */
  private readonly ky: KyInstance;

  /**
   * @param options - 클라이언트 옵션
   */
  constructor(options: BserClientOptions) {
    this.ky = createKyInstance(options.apiKey, options.timeout ?? 10_000);
  }

  /**
   * GET 요청 후 페이로드를 언랩하여 반환합니다.
   * @template T - 페이로드 타입
   * @param path - API 경로 (`/v1/...` 또는 `/v2/...`, 선행 슬래시 없이)
   * @param searchParams - 쿼리 파라미터 (optional)
   * @returns 페이로드 (`data` 또는 리소스 키 값)
   * @throws {BserApiError} `code !== 200` 인 경우
   * @example
   * ```ts
   * const user = await client.request<User>("v1/user/nickname", { query: "닉네임" });
   * ```
   */
  async request<T>(path: string, searchParams?: Record<string, string | number>): Promise<T> {
    const response = await this.ky.get(path, { searchParams }).json<BserApiResponse<T>>();
    if (response.code !== 200) {
      throw new BserApiError(response.code, response.message);
    }
    // `data` | `user` | `userGames` | `userRank` | `userStats` | `teams` | `topRanks` | `result` | `l10Path` 등
    // code/message 외의 첫 번째 키를 페이로드로 간주.
    const payloadKey = Object.keys(response).find((k) => k !== "code" && k !== "message");
    if (payloadKey === undefined) {
      // 페이로드 키가 없는 경우(예: 빈 응답) - undefined 반환
      return undefined as unknown as T;
    }
    return response[payloadKey] as T;
  }
}