/**
 * 매치 관련 API 엔드포인트.
 * @module
 */

import type { HttpClient } from "../client.ts";
import type { BattleUserResult } from "../types.ts";

/** 매치 모듈. 게임 ID로 매치 내 모든 플레이어의 전투 결과 조회. */
export class MatchModule {
  /** HTTP 클라이언트. */
  private readonly http: HttpClient;

  /** @internal */
  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * 특정 게임(매치)의 모든 플레이어 전투 결과를 조회합니다.
   * @param gameId - 게임 ID
   * @returns 전투 결과 배열 (매치 내 모든 플레이어)
   * @throws {BserApiError} 존재하지 않는 게임인 경우 (404)
   * @example
   * ```ts
   * const results = await client.match.getById(gameId);
   * console.log(results.length); // 참여 플레이어 수
   * ```
   */
  async getById(gameId: number): Promise<BattleUserResult[]> {
    return this.http.request<BattleUserResult[]>("v1/games/" + gameId);
  }
}