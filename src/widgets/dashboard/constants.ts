import { EReception, ESpecialization } from "shared/enums/enums";

export const dashboardMockData = [
  {
    name: ESpecialization.OTOLARINGOLOGY,
    [EReception.STANDART]: 26,
    [EReception.POOR_QUALITY]: 5,
    [EReception.SUBOPTIMAL]: 10,
    [EReception.UNVERIFIABLE]: 2,
  },
  {
    name: ESpecialization.CARDIOLOGY,
    [EReception.STANDART]: 34,
    [EReception.POOR_QUALITY]: 7,
    [EReception.SUBOPTIMAL]: 0,
    [EReception.UNVERIFIABLE]: 16,
  },
  {
    name: ESpecialization.NEUROLOGY,
    [EReception.STANDART]: 54,
    [EReception.POOR_QUALITY]: 5,
    [EReception.SUBOPTIMAL]: 1,
    [EReception.UNVERIFIABLE]: 8,
  },
];

export const dashbordKeys = [
  EReception.STANDART,
  EReception.POOR_QUALITY,
  EReception.SUBOPTIMAL,
  EReception.UNVERIFIABLE,
];
