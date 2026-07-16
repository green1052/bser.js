# Constants

Reference constants from the Eternal Return Open API docs. See `src/constants.ts` for the authoritative JSDoc-annotated source.

## RegionServerCode

Region server codes used in `getTopByServer`.

| Enum | Code | Region |
| ---- | ---- | ------ |
| `Asia` | 10 | Asia |
| `NA` | 12 | North America |
| `Europe` | 13 | Europe |
| `SouthAmerica` | 14 | South America |
| `Asia2` | 17 | Asia 2 |
| `Asia3` | 18 | Asia 3 |

---

## MatchingMode

Derived from game mode + match type combination.

| Enum | Code | Mode |
| ---- | ---- | ---- |
| `SquadNormal` | 2 | Squad normal |
| `SquadRanked` | 3 | Squad ranked |
| `CobaltNormal` | 6 | Cobalt normal |
| `LoneWolf` | 9 | Lone wolf |

---

## MatchingTeamMode

| Enum | Code | Mode |
| ---- | ---- | ---- |
| `LoneWolf` | 1 | Lone wolf |
| `Squad` | 3 | Squad |
| `CobaltProtocol` | 4 | Cobalt protocol |

---

## MasteryCode

Weapon/action mastery codes. Note: code 12 is skipped.

| Enum | Code | Name |
| ---- | ---- | ---- |
| `Glove` | 1 | Glove |
| `Tonfa` | 2 | Tonfa |
| `Bat` | 3 | Bat |
| `Whip` | 4 | Whip |
| `Throw` | 5 | Throw |
| `Shuriken` | 6 | Shuriken |
| `Bow` | 7 | Bow |
| `Crossbow` | 8 | Crossbow |
| `Pistol` | 9 | Pistol |
| `AssaultRifle` | 10 | Assault Rifle |
| `SniperRifle` | 11 | Sniper Rifle |
| `Hammer` | 13 | Hammer |
| `Axe` | 14 | Axe |
| `Dagger` | 15 | Dagger |
| `TwoHandedSword` | 16 | Two-handed Sword |
| `Polearm` | 17 | Polearm |
| `DualSwords` | 18 | Dual Swords |
| `Spear` | 19 | Spear |
| `Nunchaku` | 20 | Nunchaku |
| `Rapier` | 21 | Rapier |
| `Guitar` | 22 | Guitar |
| `Camera` | 23 | Camera |
| `Arcana` | 24 | Arcana |
| `VFProsthetics` | 25 | VF Prosthetics |
| `Craft` | 101 | Craft |
| `Search` | 102 | Search |
| `Move` | 103 | Move |
| `Defense` | 201 | Defense |
| `Hunt` | 202 | Hunt |

---

## AreaCode

Map area codes. L10N lookup key: `Area/Name/{EnglishName}`.

| Enum | Code | Name (Korean) |
| ---- | ---- | ------------- |
| `Harbor` | 10 | 항구 |
| `Warehouse` | 20 | 창고 |
| `Pond` | 30 | 연못 |
| `Stream` | 40 | 개울 |
| `SandyBeach` | 50 | 해변 |
| `Uptown` | 60 | 고급주택가 |
| `Alley` | 70 | 골목길 |
| `GasStation` | 80 | 주유소 |
| `Hotel` | 90 | 호텔 |
| `PoliceStation` | 100 | 경찰서 |
| `FireStation` | 110 | 소방서 |
| `Hospital` | 120 | 병원 |
| `Temple` | 130 | 절 |
| `Archery` | 140 | 양궁장 |
| `Cemetery` | 150 | 묘지 |
| `Forest` | 160 | 숲 |
| `Factory` | 170 | 공장 |
| `Church` | 180 | 교회 |
| `School` | 190 | 학교 |
| `Laboratory` | 1000 | 연구소 |

---

## EquipmentSlot

| Enum | Code | Slot |
| ---- | ---- | ---- |
| `Weapon` | 0 | Weapon |
| `Chest` | 1 | Chest |
| `Head` | 2 | Head |
| `Arm` | 3 | Arm |
| `Leg` | 4 | Leg |

---

## TacticalSkillGroupCode

Tactical skill group codes. Note: code 100 is skipped. L10N lookup key: `Skill/Group/Name/{skillId}`.

| Enum | Code | Search Key |
| ---- | ---- | ---------- |
| `Group30` | 30 | Skill/Group/Name/4000000 |
| `Group40` | 40 | Skill/Group/Name/4001000 |
| `Group50` | 50 | Skill/Group/Name/4101000 |
| `Group60` | 60 | Skill/Group/Name/4102000 |
| `Group70` | 70 | Skill/Group/Name/4103000 |
| `Group80` | 80 | Skill/Group/Name/4104000 |
| `Group90` | 90 | Skill/Group/Name/4105000 |
| `Group110` | 110 | Skill/Group/Name/4107000 |
| `Group120` | 120 | Skill/Group/Name/4110000 |
| `Group130` | 130 | Skill/Group/Name/4112000 |
| `Group140` | 140 | Skill/Group/Name/4113000 |
| `Group150` | 150 | Skill/Group/Name/4108000 |

`TacticalSkillSearchKey` — Record mapping each `TacticalSkillGroupCode` to its skill ID.

---

## GadgetSkillCode

Gadget skill codes. L10N lookup key: `Skill/Group/Name/{searchKey}`.

| Enum | Code | Search Key |
| ---- | ---- | ---------- |
| `Gadget8300301` | 8300301 | Skill/Group/Name/8300300 |
| `Gadget8300101` | 8300101 | Skill/Group/Name/8300100 |
| `Gadget8300201` | 8300201 | Skill/Group/Name/8300200 |
| `Gadget8300401` | 8300401 | Skill/Group/Name/8300400 |
| `Gadget8310201` | 8310201 | Skill/Group/Name/8310200 |
| `Gadget8310301` | 8310301 | Skill/Group/Name/8310300 |
| `Gadget8310501` | 8310501 | Skill/Group/Name/8310500 |

`GadgetSkillSearchKey` — Record mapping each `GadgetSkillCode` to its search key.

---

## L10nPrefix

Key prefixes for L10N dynamic lookups.

| Property | Prefix | Usage |
| -------- | ------ | ----- |
| `Monster` | `Monster/Name/` | `Monster/Name/{code}` |
| `Skill` | `Skill/Group/Name/` | `Skill/Group/Name/{code}` |
| `Area` | `Area/Name/` | `Area/Name/{EnglishName}` |
| `Weather` | `Weather/Name/` | `Weather/Name/{code}` |
| `Installation` | `Installation/Name/` | `Installation/Name/{code}` |

Monster and skill names are not in static tables — resolve them via L10N lookup.

---

## Language

L10N language codes. Korean/English/Japanese/ChineseSimplified/ChineseTraditional are fully supported; others are partial.

| Enum | Language |
| ---- | -------- |
| `Korean` | Korean |
| `English` | English |
| `Japanese` | Japanese |
| `ChineseSimplified` | Chinese (Simplified) |
| `ChineseTraditional` | Chinese (Traditional) |
| `French` | French (partial) |
| `Spanish` | Spanish (partial) |
| `SpanishLatin` | Spanish Latin (partial) |
| `Portuguese` | Portuguese (partial) |
| `PortugueseLatin` | Portuguese Latin (partial) |
| `Indonesian` | Indonesian (partial) |
| `German` | German (partial) |
| `Russian` | Russian (partial) |
| `Thai` | Thai (partial) |
| `Vietnamese` | Vietnamese (partial) |
| `Italian` | Italian (partial) |
| `Polish` | Polish (partial) |

---

## MetaType

String union for `getGameData(metaType)`.

```
"hash" | "Character" | "CharacterLevelUpStat" | "CharacterMastery" | "CharacterModeModifier"
| "WeaponTypeInfo" | "ItemSkillLinker" | "ItemSpawn" | "ItemWeapon" | "ItemArmor"
| "ItemSpecial" | "ItemConsumable" | "Monster" | "MonsterLevelUpStat" | "MonsterDropGroup"
| "DropGroup" | "VFCredit" | "Season" | (string & {})
```

The `(string & {})` allows custom meta types while keeping autocomplete for known values.