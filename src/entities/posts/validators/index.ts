import { array, number, object, string } from "yup";

export const postsRequestSchema = object({});

export const postsResponseSchema = array().of(
  object({
    id: number().required(),
    userId: number().notRequired().default(0),
    title: string().notRequired().default(""),
    body: string().notRequired().default(""),
  })
);
