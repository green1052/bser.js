/**
 * 유저 관련 API 엔드포인트.
 * @module
 */

import type { HttpClient } from "../client.ts";
import type { BattleUserResult, UnionTeam, User, UserRank, UserStats } from "../types.ts";

/** 유저 모듈. 닉네임 검색, 게임 기록, 랭크, 스탯, 유니온 팀 조회. */
export class UserModule {
  /** HTTP 클라이언트. */
  private readonly http: HttpClient;

  /** @internal */
  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * 닉네임으로 유저를 검색합니다.
   * 반환된 `uid`는 닉네임 변경 시 변경되는 임시 식별자입니다.
   * @param nickname - 검색할 닉네임
   * @returns 유저 정보 (`uid`, `nickname`)
   * @throws {BserApiError} 존재하지 않는 닉네임인 경우 (404)
   * @example
   * ```ts
   * const { uid } = await client.user.getByNickname("닉네임");
   * ```
   */
  async getByNickname(nickname: string): Promise<User> {
    return this.http.request<User>("v1/user/nickname", { query: nickname });
  }

  /**
   * 유저의 최근 게임 기록을 조회합니다.
   * 최대 90일치 데이터이며, 닉네임 변경 이전의 게임은 제외됩니다.
   * @param uid - 유저 UID
   * @returns 전투 결과 배열
   * @throws {BserApiError} API 오류 시
   * @example
   * ```ts
   * const games = await client.user.getGames(uid);
   * console.log(games[0].gameId);
   * ```
   */
  async getGames(uid: number): Promise<BattleUserResult[]> {
    return this.http.request<BattleUserResult[]>("v1/user/games/uid/" + uid);
  }

  /**
   * 유저의 랭크 정보를 조회합니다.
   * @param userId - 유저 ID (UID)
   * @param seasonId - 시즌 ID
   * @param matchingTeamMode - 매칭 팀 모드. {@link MatchingTeamMode} 참조. (3=스쿼드만 지원)
   * @returns 랭크 정보
   * @throws {BserApiError} API 오류 시
   * @example
   * ```ts
   * const rank = await client.user.getRank(uid, 33, MatchingTeamMode.Squad);
   * ```
   */
  async getRank(userId: number, seasonId: number, matchingTeamMode: number): Promise<UserRank> {
    return this.http.request<UserRank>(
      "v1/rank/uid/" + userId + "/" + seasonId + "/" + matchingTeamMode,
    );
  }

  /**
   * 유저의 시즌/모드별 스탯을 조회합니다.
   * @param userId - 유저 ID (UID)
   * @param seasonId - 시즌 ID. 0 = 일반(normal).
   * @param matchingMode - 매칭 모드. {@link MatchingMode} 참조. (2=일반, 3=랭크)
   * @returns 스탯 배열
   * @throws {BserApiError} API 오류 시
   * @example
   * ```ts
   * const normalStats = await client.user.getStats(uid, 0, MatchingMode.SquadNormal);
   * const rankedStats = await client.user.getStats(uid, 33, MatchingMode.SquadRanked);
   * ```
   */
  async getStats(userId: number, seasonId: number, matchingMode: number): Promise<UserStats[]> {
    return this.http.request<UserStats[]>(
      "v2/user/stats/uid/" + userId + "/" + seasonId + "/" + matchingMode,
    );
  }

  /**
   * 유저의 유니온 팀 정보를 조회합니다.
   * @param userId - 유저 ID (UID)
   * @param seasonId - 시즌 ID
   * @returns 유니온 팀 배열
   * @throws {BserApiError} API 오류 시
   * @example
   * ```ts
   * const teams = await client.user.getUnionTeam(uid, 33);
   * ```
   */
  async getUnionTeam(userId: number, seasonId: number): Promise<UnionTeam[]> {
    return this.http.request<UnionTeam[]>("v1/unionTeam/uid/" + userId + "/" + seasonId);
  }
}