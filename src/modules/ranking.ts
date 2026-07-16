/**
 * 랭킹 관련 API 엔드포인트.
 * @module
 */

import type { HttpClient } from "../client.ts";
import type { TopRanker } from "../types.ts";

/** 랭킹 모듈. `/v1/rank/top` 엔드포인트 래퍼. */
export class RankingModule {
  /** HTTP 클라이언트. */
  private readonly http: HttpClient;

  /** @internal */
  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * 전체 상위 랭커를 조회합니다.
   * 랭크 매치만 해당하며, 스쿼드 모드만 지원합니다.
   * @param seasonId - 시즌 ID
   * @param matchingTeamMode - 매칭 팀 모드. {@link MatchingTeamMode} 참조. (3=스쿼드만 지원)
   * @returns 상위 랭커 배열
   * @throws {BserApiError} API 오류 시
   * @example
   * ```ts
   * const top = await client.ranking.getTop(33, MatchingTeamMode.Squad);
   * console.log(top[0].nickname); // 1위 닉네임
   * ```
   */
  async getTop(seasonId: number, matchingTeamMode: number): Promise<TopRanker[]> {
    return this.http.request<TopRanker[]>("v1/rank/top/" + seasonId + "/" + matchingTeamMode);
  }

  /**
   * 특정 리전 서버의 상위 랭커를 조회합니다.
   * @param seasonId - 시즌 ID
   * @param matchingTeamMode - 매칭 팀 모드. (3=스쿼드만 지원)
   * @param serverCode - 리전 서버 코드. {@link RegionServerCode} 참조.
   * @returns 상위 랭커 배열
   * @throws {BserApiError} API 오류 시
   * @example
   * ```ts
   * const asiaTop = await client.ranking.getTopByServer(33, MatchingTeamMode.Squad, RegionServerCode.Asia);
   * ```
   */
  async getTopByServer(
    seasonId: number,
    matchingTeamMode: number,
    serverCode: number,
  ): Promise<TopRanker[]> {
    return this.http.request<TopRanker[]>(
      "v1/rank/top/" + seasonId + "/" + matchingTeamMode + "/" + serverCode,
    );
  }
}