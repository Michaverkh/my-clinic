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
  limit: number().notRequired().default(10),
  offset: number().notRequired().default(0),
  sortDirection: string().notRequired().default("ask"),
  // dateFrom: string().notRequired(),
  // dateTo: string().notRequired(),
  // specialization: string().notRequired(),
  // client: string().notRequired(),
});

export const receptionsResponseSchema = object({
  items: receptionsList,
  limit: number().notRequired().default(10),
  offset: number().notRequired().default(0),
  totalSize: number().notRequired().default(0),
});
