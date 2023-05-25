import { InferType } from "yup";
import {
  receptionsRequestSchema,
  receptionsResponseSchema,
} from "../validators";

export type IReceptionsRequestDto = InferType<typeof receptionsRequestSchema>;
export type IReceptionsResponseDto = InferType<typeof receptionsResponseSchema>;
