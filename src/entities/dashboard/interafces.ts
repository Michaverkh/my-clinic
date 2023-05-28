export interface IDashBoardData {
  id: string;
  name: string;
  standard: number;
  poorQuality: number;
  suboptimal: number;
  unverifiable: number;
  date?: string;
}

export interface IDashBoardRenderData {
  name: string;
  "соответствует стандарту": number;
  "не соответствует качество": number;
  "не оптимальное": number;
  "диагноза нет в базе": number;
  date?: string;
}

export interface IDashBoardDataItems {
  items: IDashBoardData[];
}
