import { IOption } from "shared/interfaces";
import { IDashboardFiltersValues } from "./interfaces";
import { ESpecialization } from "shared/enums/enums";
import * as yup from "yup";

export const specializationOptions: IOption[] = [
  {
    label: "отоларинголог",
    value: ESpecialization.OTOLARINGOLOGY,
  },
  {
    label: "кардиолог",
    value: ESpecialization.CARDIOLOGY,
  },
  {
    label: "невролог",
    value: ESpecialization.NEUROLOGY,
  },
];

export const sectionOptions: IOption[] = [
  {
    label: "специализация",
    value: "specialization",
  },
  {
    label: "временной интервал",
    value: "date",
  },
];

export const dashboardInitialValues: IDashboardFiltersValues = {
  section: sectionOptions[0].value,
  specialization: [],
  dateFrom: null,
  dateTo: null,
};

export const dashboardFiltersSchema = yup.object().shape({
  dateFrom: yup.date().typeError("Ведите диапазон").required("Ведите диапазон"),
  dateTo: yup
    .date()
    .typeError("Ведите диапазон")
    .required("Ведите диапазон")
    .min(yup.ref("dateFrom"), "начальная дата превышает конечную"),
});
