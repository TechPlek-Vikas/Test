import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField, Box } from "@mui/material";

const UserForm = () => (
  <Box>
    <Box mb={2}>
      <Field name="username" as={TextField} label="Username" fullWidth />
      <ErrorMessage name="username" component="div" />
    </Box>
    <Box mb={2}>
      <Field name="email" as={TextField} label="Email" fullWidth required />
      <ErrorMessage name="email" component="div" />
    </Box>
    <Box mb={2}>
      <Field name="phone" as={TextField} label="Phone" fullWidth required />
      <ErrorMessage name="phone" component="div" />
    </Box>
    <Box mb={2}>
      <Field name="address" as={TextField} label="Address" fullWidth />
      <ErrorMessage name="address" component="div" />
    </Box>
  </Box>
);

export default UserForm;
