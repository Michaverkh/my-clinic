import { IOption } from "shared/interfaces";
import { IReceptionFiltersValues } from "./interfaces";
import * as yup from "yup";

export const specialisationOptions: IOption[] = [
  {
    label: "отоларинголог",
    value: "otolaryngology",
  },
  {
    label: "кардиолог",
    value: "cardiology",
  },
  {
    label: "невролог",
    value: "neurology",
  },
];

export const receptionInitialValues: IReceptionFiltersValues = {
  clientId: 0,
  specialisation: [],
  dateFrom: null,
  dateTo: null,
};

export const receptionFiltersSchema = yup.object().shape({
  clientId: yup.number().typeError("Неверный формат"),
});
