import { array, boolean, number, object, string } from "yup";

const reception = object({
  id: string().required(),
  date: string().notRequired().default(""),
  diagnosis: string().notRequired().default(""),
  status: string().notRequired().default(""),
});

const doctor = object({
  specialization: string().notRequired().default(""),
  name: string().notRequired().default(""),
  id: string().required(),
});

const research = object({
  id: number().required(),
  name: string().notRequired().default(""),
  isNecessary: boolean().notRequired().default(false),
  status: string().notRequired().default(""),
});

export const detailedRequestSchema = object({
  id: string().optional(),
});

export const detailedResponseSchema = object({
  reception,
  doctor,
  research: array().of(research).notRequired().default([]),
});
