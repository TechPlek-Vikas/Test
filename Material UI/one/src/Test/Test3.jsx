import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const UserForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      dob: null, // null for initial state of DatePicker
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      dob: Yup.date().required("Date of Birth is required").nullable(),
    }),
    onSubmit: (values) => {
      console.log("Form data", values);

      console.log(typeof values.dob);
      // Handle form submission here
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <DatePicker
          label="Date of Birth"
          value={formik.values.dob}
          onChange={(value) => formik.setFieldValue("dob", value)}
          renderInput={(params) => (
            <TextField
              {...params}
              name="dob"
              error={formik.touched.dob && Boolean(formik.errors.dob)}
              helperText={formik.touched.dob && formik.errors.dob}
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </LocalizationProvider>
  );
};

export default UserForm;
