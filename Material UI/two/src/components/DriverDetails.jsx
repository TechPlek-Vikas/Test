import React from "react";
import { TextField, Grid } from "@mui/material";
import { useFormikContext } from "formik";

const DriverDetails = () => {
  const { values, handleChange, errors, touched } = useFormikContext();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Driver ID"
          name="driver_id"
          value={values.driver_id}
          onChange={handleChange}
          error={touched.driver_id && Boolean(errors.driver_id)}
          helperText={touched.driver_id && errors.driver_id}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Driver Name"
          name="driver_name"
          value={values.driver_name}
          onChange={handleChange}
          error={touched.driver_name && Boolean(errors.driver_name)}
          helperText={touched.driver_name && errors.driver_name}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          error={touched.phone && Boolean(errors.phone)}
          helperText={touched.phone && errors.phone}
        />
      </Grid>
    </Grid>
  );
};

export default DriverDetails;
