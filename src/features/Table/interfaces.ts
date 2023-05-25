import { ReactNode } from "react";

export type Order = "asc" | "desc";

export interface Data {
  date: string;
  spec: string;
  doctor: string;
  code: number;
  nazn: number;
  type: ReactNode;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}
