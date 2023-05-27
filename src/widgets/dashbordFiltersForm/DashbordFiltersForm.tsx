import { Box } from "@mui/system";
import { FC } from "react";
import { Formik } from "formik";
import {
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";
import { FormikDatePicker } from "shared/components/datePicker";
import {
  dashboardFiltersSchema,
  dashboardInitialValues,
  sectionOptions,
  specializationOptions,
} from "./constants";
import { handleSubmit } from "./handlers";
import useStore from "app/hooks/useStore";

export const DashbordFiltersForm: FC = () => {
  const { dashboardItems } = useStore();

  return (
    <Box>
      <Formik
        onSubmit={handleSubmit(dashboardItems.getList)}
        initialValues={dashboardInitialValues}
        validationSchema={dashboardFiltersSchema}
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
              <FormControl>
                <InputLabel id="section-id">Параметр отсчета</InputLabel>
                <Select
                  id="section-id"
                  onChange={handleChange}
                  value={values.section}
                  label="Параметр отсчета"
                  name="section"
                >
                  {sectionOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="specialization-id">Специализация</InputLabel>
                <Select
                  id="specialization-id"
                  onChange={handleChange}
                  value={values.specialization}
                  label="Специализация"
                  name="specialization"
                  multiple
                >
                  {specializationOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormikDatePicker label="Дата от" name="dateFrom" />
              {!!touched.dateFrom && !!errors.dateFrom && (
                <Typography variant="h6">{errors.dateFrom}</Typography>
              )}
              <FormikDatePicker label="Дата до" name="dateTo" />

              {!!touched.dateTo && !!errors.dateTo && (
                <Typography variant="h6">{errors.dateTo}</Typography>
              )}
            </Box>
            <Box display="flex" justifyContent="flex-end" mt="20px">
              <Button
                color="info"
                variant="contained"
                onClick={() => {
                  dashboardItems.getList();
                  handleReset();
                }}
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
