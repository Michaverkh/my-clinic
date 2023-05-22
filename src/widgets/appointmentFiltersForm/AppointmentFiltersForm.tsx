import { Box } from "@mui/system";
import React, { FC } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { InputBase } from "shared/components/inputBase";
import { Button } from "@mui/material";

interface IAppointmentFiltersValues {
  clientName: string;
  insuranceNumber?: number;
}

const appointmentInitialValues: IAppointmentFiltersValues = {
  clientName: "",
};

const appointmentFiltersSchema = yup.object().shape({
  clientName: yup.string().required("обязательное поле"),
  insuranceNumber: yup
    .number()
    .required("обязательное поле")
    .typeError("Неверный формат"),
});

export const AppointmentFiltersForm: FC = () => {
  const handleSubmit = (values: IAppointmentFiltersValues): void => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Formik
        onSubmit={handleSubmit}
        initialValues={appointmentInitialValues}
        validationSchema={appointmentFiltersSchema}
      >
        {({ values, errors, handleChange, handleSubmit, touched }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridAutoColumns="repeat(4, minMax(0, 1fr)"
            >
              <InputBase
                label="Имя клиента"
                onChange={handleChange}
                value={values.clientName}
                name="clientName"
                error={!!touched.clientName && !!errors.clientName}
                helperText={touched.clientName && errors.clientName}
                sx={{ gridColumn: "span 2" }}
              />
              <InputBase
                label="Номер полиса"
                onChange={handleChange}
                value={values.insuranceNumber}
                name="insuranceNumber"
                error={!!touched.insuranceNumber && !!errors.insuranceNumber}
                helperText={touched.insuranceNumber && errors.insuranceNumber}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Применить фильтры
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
