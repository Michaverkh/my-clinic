import { InferType } from "yup";
import {
  dashboardRequestSchema,
  dashboardResponseSchema,
  dashboardResponseItemsSchema,
} from "../validators";

export type IDashboardRequestDto = InferType<typeof dashboardRequestSchema>;
export type IDashboardResponseDto = InferType<typeof dashboardResponseSchema>;
export type IDashboardResponseItemsDto = InferType<
  typeof dashboardResponseItemsSchema
>;
