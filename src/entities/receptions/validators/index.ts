import { array, number, object, string } from "yup";

const reception = object({
  id: string().required(),
  date: string().notRequired().default(""),
  diagnosis: string().notRequired().default(""),
  status: string().notRequired().default(""),
});

const doctor = object({
  specialization: string().notRequired().default(""),
  name: string().notRequired().default(""),
  id: string().notRequired().default(""),
});

const appointment = object({
  status: array().notRequired().default([]),
  count: number().notRequired().default(0),
});

const receptionsList = array()
  .of(
    object({
      reception,
      doctor,
      appointment,
    })
  )
  .notRequired()
  .default([]);

export const receptionsRequestSchema = object({
  limit: number().optional(),
  offset: number().optional(),
  sortDirection: string().optional().default("ask"),
  dateFrom: string().optional(),
  dateTo: string().optional(),
  specialization: array().of(string()).optional(),
  client: string().optional(),
});

export const receptionsResponseSchema = object({
  items: receptionsList,
  limit: number().notRequired().default(10),
  offset: number().notRequired().default(0),
  totalSize: number().notRequired().default(0),
});
