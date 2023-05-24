import { Box } from "@mui/system";
import React, { FC } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { InputBase } from "shared/components/inputBase";
import {
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { IOption } from "shared/interfaces";

interface IReceptionFiltersValues {
  clientId?: number;
  specialisation?: string[];
}

const receptionInitialValues: IReceptionFiltersValues = {
  clientId: 0,
  specialisation: [],
};

const receptionFiltersSchema = yup.object().shape({
  clientId: yup.number().typeError("Неверный формат"),
});

const specialisationOptions: IOption[] = [
  {
    label: "отоларинголог",
    value: "otolaryngology",
  },
  {
    label: "кардиолог",
    value: "cardiology",
  },
  {
    label: "невролог",
    value: "neurology",
  },
];

export const ReceptionFiltersForm: FC = () => {
  const handleSubmit = (values: IReceptionFiltersValues): void => {
    console.log(values);
  };

  return (
    <Box>
      <Formik
        onSubmit={handleSubmit}
        initialValues={receptionInitialValues}
        validationSchema={receptionFiltersSchema}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          touched,
          handleReset,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box display="grid" gap="16px" gridAutoColumns="1fr">
              <InputBase
                label="id клиента"
                onChange={handleChange}
                value={values.clientId}
                name="clientId"
                error={!!touched.clientId && !!errors.clientId}
                helperText={touched.clientId && errors.clientId}
                size="small"
              />
              <FormControl>
                <InputLabel id="specialisation-id">Специализация</InputLabel>
                <Select
                  id="specialisation-id"
                  onChange={handleChange}
                  value={values.specialisation}
                  label="Специализация"
                  name="specialisation"
                  size="small"
                  multiple
                >
                  {specialisationOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl></FormControl>
            </Box>
            <Box display="flex" justifyContent="flex-end" mt="20px">
              <Button
                color="info"
                variant="contained"
                onClick={handleReset}
                sx={{ marginRight: "16px" }}
              >
                Сбросить
              </Button>
              <Button type="submit" color="secondary" variant="contained">
                Применить
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
