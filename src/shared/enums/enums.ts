export enum ESpecialization {
  OTOLARINGOLOGY = "otolaringology",
  CARDIOLOGY = "cardiology",
  NEUROLOGY = "neurology",
}

export enum ESpecializationRu {
  otolaringology = "отоларингология",
  cardiology = "кардиология",
  neurology = "неврология",
}

export enum EReception {
  STANDART = "standard",
  POOR_QUALITY = "poorQuality",
  SUBOPTIMAL = "suboptimal",
  UNVERIFIABLE = "unverifiable",
}

export enum EAppointment {
  Standard = "standard",
  Missing = "missing",
  Possible = "possible",
  Excess = "excess",
}

export enum EReceptionRu {
  standard = "соответствует стандарту",
  poorQuality = "не соответствует качество",
  suboptimal = "не оптимальное",
  unverifiable = "диагноза нет в базе",
}

export enum EDowloadingState {
  Loading = "loading",
  Loaded = "loaded",
  Error = "error",
  Nop = "nop",
  Canceled = "canceled",
}
