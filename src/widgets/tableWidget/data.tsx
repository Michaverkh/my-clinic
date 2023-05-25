import { Status } from "features";
import { Data, HeadCell } from "features/Table/interfaces";

export enum EReceptions {
  Standart = "standard",
  PoorQuality = "poorQuality",
  SubOptimal = "suboptimal",
  Unverifiable = "unverifiable",
}

function createData(
  date: string,
  spec: string,
  doctor: string,
  code: number,
  nazn: number,
  type: EReceptions[]
): Data {
  return {
    date,
    spec,
    doctor,
    code,
    nazn,
    type: <Status status={type} />,
  };
}

export const rows = [
  createData("2023.02.17", "Кардиология", "Иванов И.И.", 67, 4, [
    EReceptions.Standart,
    EReceptions.PoorQuality,
    EReceptions.SubOptimal,
    EReceptions.Unverifiable,
  ]),
  createData("2023.02.18", "ЛОР", "Петров И.И.", 67, 4, [
    EReceptions.Unverifiable,
  ]),
  createData("2023.02.15", "Кардиология", "Иванов И.И.", 67, 4, [
    EReceptions.Standart,
    EReceptions.PoorQuality,
  ]),
  createData("2023.02.20", "Кардиология", "Иванов И.И.", 67, 4, [
    EReceptions.SubOptimal,
  ]),
];

export const headCells: readonly HeadCell[] = [
  {
    id: "date",
    numeric: false,
    disablePadding: true,
    label: "Дата приема",
  },
  {
    id: "spec",
    numeric: false,
    disablePadding: false,
    label: "Специализация",
  },
  {
    id: "doctor",
    numeric: false,
    disablePadding: false,
    label: "Врач",
  },
  {
    id: "code",
    numeric: true,
    disablePadding: false,
    label: "Код заболевания",
  },
  {
    id: "nazn",
    numeric: true,
    disablePadding: false,
    label: "Назначений",
  },
  {
    id: "type",
    numeric: true,
    disablePadding: false,
    label: "Тип отклонений",
  },
];
