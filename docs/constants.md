# 상수 레퍼런스

## RegionServerCode

리전 서버 코드. `getTopByServer`의 `serverCode` 파라미터에 사용.

| 이름 | 값 | 설명 |
| ---- | ---- | ---- |
| `Asia` | `10` | 아시아 서버 |
| `NA` | `12` | 북미 서버 |
| `Europe` | `13` | 유럽 서버 |
| `SouthAmerica` | `14` | 남미 서버 |
| `Asia2` | `17` | 아시아2 서버 |
| `Asia3` | `18` | 아시아3 서버 |

```ts
import { RegionServerCode } from "bser.js";
client.ranking.getTopByServer(33, MatchingTeamMode.Squad, RegionServerCode.Asia);
```

---

## MatchingMode

매칭 모드 코드. `getStats`의 `matchingMode` 파라미터에 사용.

| 이름 | 값 | 설명 |
| ---- | ---- | ---- |
| `SquadNormal` | `2` | 스쿼드 일반 매치 |
| `SquadRanked` | `3` | 스쿼드 랭크 매치 |
| `CobaltNormal` | `6` | 코볼트 일반 매치 |
| `LoneWolf` | `9` | 론울프 매치 |

---

## MatchingTeamMode

매칭 팀 모드 코드. `getTop`/`getRank`의 `matchingTeamMode` 파라미터에 사용.

| 이름 | 값 | 설명 |
| ---- | ---- | ---- |
| `LoneWolf` | `1` | 론울프 |
| `Squad` | `3` | 스쿼드 |
| `CobaltProtocol` | `4` | 코볼트 프로토콜 |

> **참고**: 랭킹 API는 현재 `Squad`(3)만 지원합니다.

---

## MasteryCode

무기/행동 숙련도 코드. code 12는 스킵됨.

| 이름 | 값 | 설명 |
| ---- | ---- | ---- |
| `Glove` | `1` | 글러브 |
| `Tonfa` | `2` | 톤파 |
| `Bat` | `3` | 방망이 |
| `Whip` | `4` | 채찍 |
| `Throw` | `5` | 투척 |
| `Shuriken` | `6` | 암기 |
| `Bow` | `7` | 활 |
| `Crossbow` | `8` | 석궁 |
| `Pistol` | `9` | 권총 |
| `AssaultRifle` | `10` | 돌격 소총 |
| `SniperRifle` | `11` | 저격총 |
| `Hammer` | `13` | 망치 |
| `Axe` | `14` | 도끼 |
| `Dagger` | `15` | 단검 |
| `TwoHandedSword` | `16` | 양손검 |
| `Polearm` | `17` | 폴암 |
| `DualSwords` | `18` | 쌍검 |
| `Spear` | `19` | 창 |
| `Nunchaku` | `20` | 쌍절곤 |
| `Rapier` | `21` | 레이피어 |
| `Guitar` | `22` | 기타 |
| `Camera` | `23` | 카메라 |
| `Arcana` | `24` | 아르카나 |
| `VFProsthetics` | `25` | VF의수 |
| `Craft` | `101` | 제작 |
| `Search` | `102` | 탐색 |
| `Move` | `103` | 이동 |
| `Defense` | `201` | 방어 |
| `Hunt` | `202` | 사냥 |

---

## AreaCode

지역 번호. L10N 검색 키: `Area/Name/{영문명}`.

| 이름 | 값 | 설명 |
| ---- | ---- | ---- |
| `Harbor` | `10` | 항구 |
| `Warehouse` | `20` | 창고 |
| `Pond` | `30` | 연못 |
| `Stream` | `40` | 개울 |
| `SandyBeach` | `50` | 해변 |
| `Uptown` | `60` | 고급주택가 |
| `Alley` | `70` | 골목길 |
| `GasStation` | `80` | 주유소 |
| `Hotel` | `90` | 호텔 |
| `PoliceStation` | `100` | 경찰서 |
| `FireStation` | `110` | 소방서 |
| `Hospital` | `120` | 병원 |
| `Temple` | `130` | 절 |
| `Archery` | `140` | 양궁장 |
| `Cemetery` | `150` | 묘지 |
| `Forest` | `160` | 숲 |
| `Factory` | `170` | 공장 |
| `Church` | `180` | 교회 |
| `School` | `190` | 학교 |
| `Laboratory` | `1000` | 연구소 |

---

## EquipmentSlot

장비 슬롯 코드.

| 이름 | 값 | 설명 |
| ---- | ---- | ---- |
| `Weapon` | `0` | 무기 |
| `Chest` | `1` | 가슴 |
| `Head` | `2` | 머리 |
| `Arm` | `3` | 팔 |
| `Leg` | `4` | 다리 |

---

## TacticalSkillGroupCode

전술 스킬 그룹 코드. code 100은 스킵됨. L10N 검색 키: `Skill/Group/Name/{searchKey}`.

| 이름 | 값 | L10N 검색 키 |
| ---- | ---- | ------------- |
| `Group30` | `30` | `Skill/Group/Name/4000000` |
| `Group40` | `40` | `Skill/Group/Name/4001000` |
| `Group50` | `50` | `Skill/Group/Name/4101000` |
| `Group60` | `60` | `Skill/Group/Name/4102000` |
| `Group70` | `70` | `Skill/Group/Name/4103000` |
| `Group80` | `80` | `Skill/Group/Name/4104000` |
| `Group90` | `90` | `Skill/Group/Name/4105000` |
| `Group110` | `110` | `Skill/Group/Name/4107000` |
| `Group120` | `120` | `Skill/Group/Name/4110000` |
| `Group130` | `130` | `Skill/Group/Name/4112000` |
| `Group140` | `140` | `Skill/Group/Name/4113000` |
| `Group150` | `150` | `Skill/Group/Name/4108000` |

### TacticalSkillSearchKey

전술 스킬 그룹 코드 → L10N 검색 키 매핑.

```ts
import { TacticalSkillSearchKey, TacticalSkillGroupCode } from "bser.js";
TacticalSkillSearchKey[TacticalSkillGroupCode.Group30]; // 4000000
```

---

## GadgetSkillCode

가젯 스킬 코드. L10N 검색 키: `Skill/Group/Name/{searchKey}`.

| 이름 | 값 | L10N 검색 키 |
| ---- | ---- | ------------- |
| `Gadget8300301` | `8300301` | `Skill/Group/Name/8300300` |
| `Gadget8300101` | `8300101` | `Skill/Group/Name/8300100` |
| `Gadget8300201` | `8300201` | `Skill/Group/Name/8300200` |
| `Gadget8300401` | `8300401` | `Skill/Group/Name/8300400` |
| `Gadget8310201` | `8310201` | `Skill/Group/Name/8310200` |
| `Gadget8310301` | `8310301` | `Skill/Group/Name/8310300` |
| `Gadget8310501` | `8310501` | `Skill/Group/Name/8310500` |

### GadgetSkillSearchKey

가젯 스킬 코드 → L10N 검색 키 매핑.

---

## L10nPrefix

L10N 검색 키 접두사.

| 이름 | 값 | 형식 |
| ---- | ---- | ---- |
| `Monster` | `"Monster/Name/"` | `Monster/Name/{code}` |
| `Skill` | `"Skill/Group/Name/"` | `Skill/Group/Name/{code}` |
| `Area` | `"Area/Name/"` | `Area/Name/{영문명}` |
| `Weather` | `"Weather/Name/"` | `Weather/Name/{code}` |
| `Installation` | `"Installation/Name/"` | `Installation/Name/{code}` |

---

## Language

L10N 언어 코드. `getLanguage`의 `language` 파라미터에 사용.

| 이름 | 값 | 설명 |
| ---- | ---- | ---- |
| `Korean` | `"Korean"` | 한국어 |
| `English` | `"English"` | 영어 |
| `Japanese` | `"Japanese"` | 일본어 |
| `ChineseSimplified` | `"ChineseSimplified"` | 중국어 간체 |
| `ChineseTraditional` | `"ChineseTraditional"` | 중국어 번체 |
| `French` | `"French"` | 프랑스어 (부분 지원) |
| `Spanish` | `"Spanish"` | 스페인어 (부분 지원) |
| `SpanishLatin` | `"SpanishLatin"` | 라틴 스페인어 (부분 지원) |
| `Portuguese` | `"Portuguese"` | 포르투갈어 (부분 지원) |
| `PortugueseLatin` | `"PortugueseLatin"` | 라틴 포르투갈어 (부분 지원) |
| `Indonesian` | `"Indonesian"` | 인도네시아어 (부분 지원) |
| `German` | `"German"` | 독일어 (부분 지원) |
| `Russian` | `"Russian"` | 러시아어 (부분 지원) |
| `Thai` | `"Thai"` | 태국어 (부분 지원) |
| `Vietnamese` | `"Vietnamese"` | 베트남어 (부분 지원) |
| `Italian` | `"Italian"` | 이탈리아어 (부분 지원) |
| `Polish` | `"Polish"` | 폴란드어 (부분 지원) |

---

## MetaType

게임 데이터 메타 타입. `getGameData`의 `metaType` 파라미터에 사용.

```ts
type MetaType =
  | "hash"
  | "Character"
  | "CharacterLevelUpStat"
  | "CharacterMastery"
  | "CharacterModeModifier"
  | "WeaponTypeInfo"
  | "ItemSkillLinker"
  | "ItemSpawn"
  | "ItemWeapon"
  | "ItemArmor"
  | "ItemSpecial"
  | "ItemConsumable"
  | "Monster"
  | "MonsterLevelUpStat"
  | "MonsterDropGroup"
  | "DropGroup"
  | "VFCredit"
  | "Season"
  | (string & {});
```

> `metaType === "hash"`인 경우 `getGameDataHash()`와 동일합니다. `(string & {})`는 임의 문자열을 허용합니다.