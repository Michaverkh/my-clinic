import { array, number, object, string } from "yup";

export const dashboardResponseSchema = object({
  id: string().required(),
  date: string().notRequired().default(""),
  name: string().notRequired().default(""),
  standard: number().notRequired().default(0),
  poorQuality: number().notRequired().default(0),
  suboptimal: number().notRequired().default(0),
  unverifiable: number().notRequired().default(0),
});

const dashboardList = array().of(dashboardResponseSchema).required();

export const dashboardRequestSchema = object({});

export const dashboardResponseItemsSchema = object({
  items: dashboardList,
});
