import { InferType } from "yup";
import { dataSetResponseSchema } from "../validators";

export type IDataSetRequestDto = InferType<typeof dataSetResponseSchema>;
