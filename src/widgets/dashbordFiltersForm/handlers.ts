import { format } from "date-fns";
import { IDashboardFiltersValues } from "./interfaces";

export const handleSubmit =
  (sendData: (params: Record<string, any>) => void) =>
  (values: IDashboardFiltersValues): void => {
    const formData: Record<string, any> = { ...values };

    if (values.dateFrom) {
      formData.dateFrom = format(values.dateFrom, "dd.MM.YYY");
    }
    if (values.dateTo) {
      formData.dateTo = format(values.dateTo, "dd.MM.YYY");
    }
    sendData(formData);
  };
