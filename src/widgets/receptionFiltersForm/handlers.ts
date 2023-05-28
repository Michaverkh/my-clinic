import { IReceptionFiltersValuesDTO } from "entities/receptions/dto";
import { IReceptionFiltersValues } from "./interfaces";
import { format } from "date-fns";

export const handleSubmit =
  (
    setFilters: (filters: IReceptionFiltersValuesDTO) => void,
    sendData: () => Promise<void>
  ) =>
  (values: IReceptionFiltersValues): void => {
    const formData: Record<string, any> = { ...values };
    formData.client = values.client ? values.client.toString() : "";
    formData.dateFrom = values.dateFrom
      ? format(values.dateFrom, "dd.MM.YYY")
      : "";
    formData.dateTo = values.dateTo ? format(values.dateTo, "dd.MM.YYY") : "";

    setFilters(formData);
    sendData();
  };
