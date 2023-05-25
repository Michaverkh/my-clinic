import { Box } from "@mui/system";
import { FC } from "react";
import { Formik } from "formik";
import { InputBase } from "shared/components/inputBase";
import {
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { FormikDatePicker } from "shared/components/datePicker";
import {
  receptionFiltersSchema,
  receptionInitialValues,
  specialisationOptions,
} from "./constants";
import { handleSubmit } from "./handlers";

export const ReceptionFiltersForm: FC = () => {
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
              />
              <FormControl>
                <InputLabel id="specialisation-id">Специализация</InputLabel>
                <Select
                  id="specialisation-id"
                  onChange={handleChange}
                  value={values.specialisation}
                  label="Специализация"
                  name="specialisation"
                  multiple
                >
                  {specialisationOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormikDatePicker label="Дата от" name="dateFrom" />
              <FormikDatePicker label="Дата до" name="dateTo" />
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
