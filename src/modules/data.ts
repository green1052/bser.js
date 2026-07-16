/**
 * 데이터 관련 API 엔드포인트.
 * @module
 */

import type {HttpClient} from "../client.ts";
import type {LanguageData, RecommendWeaponRoute, RecommendWeaponRouteDesc} from "../types.ts";
import type {MetaType} from "../constants.ts";

/** 데이터 모듈. `/v2/data`, `/v1/l10n`, `/v1/weaponRoutes` 엔드포인트 래퍼. */
export class DataModule {
    /** HTTP 클라이언트. */
    private readonly http: HttpClient;

    /** @internal */
    constructor(http: HttpClient) {
        this.http = http;
    }

    /**
     * 모든 게임 데이터 테이블의 해시코드를 조회합니다.
     * 메타 타입 `hash` 에 해당하며, 테이블명→해시코드 매핑을 반환합니다.
     * 해시코드가 변경되면 해당 테이블의 데이터가 업데이트되었음을 의미합니다.
     * @returns 테이블명→해시코드 매핑
     * @throws {BserApiError} API 오류 시
     * @example
     * ```ts
     * const hashes = await client.data.getGameDataHash();
     * console.log(hashes["Character"]); // 예: 1234567890
     * ```
     */
    async getGameDataHash(): Promise<Record<string, number>> {
        return this.http.request<Record<string, number>>("v2/data/hash");
    }

    /**
     * 특정 메타 타입의 게임 데이터를 조회합니다.
     * `metaType === "hash"` 인 경우 {@link getGameDataHash} 와 동일합니다.
     * 그 외에는 해당 테이블의 행 배열을 반환합니다.
     * @template T - 행 타입 (기본값 `Record<string, unknown>`)
     * @param metaType - 메타 타입. `"Character"`, `"Season"`, `"ItemWeapon"` 등. `"hash"` 도 가능.
     * @returns 행 배열 (또는 `metaType === "hash"` 인 경우 해시 매핑)
     * @throws {BserApiError} API 오류 시
     * @example
     * ```ts
     * const seasons = await client.data.getGameData<SeasonRow>("Season");
     * const characters = await client.data.getGameData<CharacterRow>("Character");
     * ```
     */
    async getGameData<T = Record<string, unknown>>(metaType: MetaType): Promise<T[]> {
        return this.http.request<T[]>("v2/data/" + metaType);
    }

    /**
     * 언어 데이터(L10N) 다운로드 경로를 조회합니다.
     * 반환된 `l10Path` 는 텍스트 파일 URL이며, 파일 내용은 `┃` 구분자로 `key┃value` 형식입니다.
     * @param language - 언어 코드
     * @returns 다운로드 경로 정보
     * @throws {BserApiError} API 오류 시
     * @example
     * ```ts
     * const { l10Path } = await client.data.getLanguage(Language.Korean);
     * const text = await fetch(l10Path).then(r => r.text());
     * const dict = Object.fromEntries(text.trim().split("\n").map(l => l.split("┃")));
     * ```
     */
    async getLanguage(language: string): Promise<LanguageData> {
        return this.http.request<LanguageData>("v1/l10n/" + language);
    }

    /**
     * 추천 무기 루트 목록을 조회합니다.
     * @param routeId - 특정 루트 ID (optional). 지정 시 해당 루트만 반환.
     * @returns 추천 무기 루트 배열 (설명 포함)
     * @throws {BserApiError} API 오류 시
     * @example
     * ```ts
     * const routes = await client.data.getWeaponRoutes();
     * const specific = await client.data.getWeaponRoutes(123);
     * ```
     */
    async getWeaponRoutes(routeId?: number): Promise<RecommendWeaponRoute[]> {
        const params = routeId !== undefined ? {routeId: String(routeId)} : undefined;
        return this.http.request<RecommendWeaponRoute[]>("v1/weaponRoutes/recommend", params);
    }

    /**
     * 추천 무기 루트 설명을 조회합니다.
     * @param routeId - 루트 ID
     * @returns 루트 설명 배열
     * @throws {BserApiError} API 오류 시
     * @example
     * ```ts
     * const descs = await client.data.getWeaponRouteDesc(123);
     * ```
     */
    async getWeaponRouteDesc(routeId: number): Promise<RecommendWeaponRouteDesc[]> {
        return this.http.request<RecommendWeaponRouteDesc[]>("v1/weaponRoutes/recommend", {
            routeId: String(routeId)
        });
    }
}