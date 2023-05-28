import { InferType } from "yup";
import { detailedRequestSchema, detailedResponseSchema } from "../validators";

export type IDetailedRequestDto = InferType<typeof detailedRequestSchema>;
export type IDetailedResponseDto = InferType<typeof detailedResponseSchema>;
