import { boolean, object } from "yup";

export const dataSetResponseSchema = object({
  isSuccess: boolean().notRequired().default(false),
});
