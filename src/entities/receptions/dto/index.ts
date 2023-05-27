import { InferType } from "yup";
import {
  receptionsRequestSchema,
  receptionsResponseSchema,
} from "../validators";

export type IReceptionsRequestDto = InferType<typeof receptionsRequestSchema>;
export type IReceptionsResponseDto = InferType<typeof receptionsResponseSchema>;

export interface IReceptionFiltersValuesDTO {
  client?: string;
  specialization?: string[];
  dateFrom?: string;
  dateTo?: string;
}
