import { Status } from "features";
import { Data, HeadCell } from "features/Table/interfaces";

export const createData = (
  id: string,
  date: string,
  spec: string,
  doctor: string,
  code: number,
  nazn: number,
  type: string[]
): Data => ({
  id,
  date,
  spec,
  doctor,
  code,
  nazn,
  type: <Status status={type} />,
});

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
