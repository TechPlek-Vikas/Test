import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField, Box } from "@mui/material";

const DriverForm = () => (
  <Box>
    <Box mb={2}>
      <Field
        name="driver_id"
        as={TextField}
        label="Driver ID"
        fullWidth
      />
      <ErrorMessage name="driver_id" component="div" />
    </Box>
    <Box mb={2}>
      <Field name="driver_name" as={TextField} label="Driver Name" fullWidth />
      <ErrorMessage name="driver_name" component="div" />
    </Box>
    <Box mb={2}>
      <Field
        name="vehicle_number"
        as={TextField}
        label="Vehicle Number"
        fullWidth
      />
      <ErrorMessage name="vehicle_number" component="div" />
    </Box>
  </Box>
);

export default DriverForm;
