import React from "react";
import { TextField, Grid } from "@mui/material";
import { useFormikContext } from "formik";

const UserDetails = () => {
  const { values, handleChange, errors, touched, getFieldProps } =
    useFormikContext();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          // value={values.name}
          // onChange={handleChange}
          // error={touched.name && Boolean(errors.name)}
          {...getFieldProps("name")}
          error={Boolean(touched.name && errors.name)}
          helperText={touched.name && errors.name}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Address"
          name="address"
          value={values.address}
          onChange={handleChange}
          error={touched.address && Boolean(errors.address)}
          helperText={touched.address && errors.address}
        />
      </Grid>
    </Grid>
  );
};

export default UserDetails;
