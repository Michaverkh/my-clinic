import { IOption } from "shared/interfaces";
import { IReceptionFiltersValues } from "./interfaces";
import * as yup from "yup";
import { ESpecialization } from "shared/enums/enums";

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

export const receptionInitialValues: IReceptionFiltersValues = {
  client: 0,
  specialization: [],
  dateFrom: null,
  dateTo: null,
};

export const receptionFiltersSchema = yup.object().shape({
  client: yup.number().typeError("Неверный формат"),
  dateFrom: yup.date().typeError("Ведите диапазон").required("Ведите диапазон"),
  dateTo: yup
    .date()
    .typeError("Ведите диапазон")
    .required("Ведите диапазон")
    .min(yup.ref("dateFrom"), "начальная дата превышает конечную"),
});
