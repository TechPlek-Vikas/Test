import { Box, Button, Stack, Tab, Tabs, TextField } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  address: "",
  driverId: "",
  driverName: "",
  phone: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  driverId: Yup.string().required("Driver ID is required"),
});
const MultiStepForm7 = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["User Details", "Driver Details"];

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const isLastStep = activeStep === 1;

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const {
    errors,
    touched,
    handleSubmit,
    isSubmitting,
    getFieldProps,
    setFieldValue,
    values,
  } = formik;

  return (
    <>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate>
          <Stack>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ alignSelf: "end" }}
            >
              Submit
            </Button>
            <Tabs
              value={activeStep}
              onChange={(e, step) => setActiveStep(step)}
              aria-label="multi-step form"
            >
              {steps.map((label, index) => (
                <Tab key={index} label={label} />
              ))}
            </Tabs>

            {activeStep === 0 && (
              <div>
                <TextField
                  label="Name"
                  name="name"
                  // value={formik.values.name}
                  // onChange={formik.handleChange}
                  {...getFieldProps("name")}
                />
                <TextField
                  label="Email"
                  name="email"
                  // value={formik.values.email}
                  // onChange={formik.handleChange}
                  // error={formik.touched.email && Boolean(formik.errors.email)}
                  // helperText={formik.touched.email && formik.errors.email}
                  {...getFieldProps("email")}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  label="Address"
                  name="address"
                  // value={formik.values.address}
                  // onChange={formik.handleChange}
                  {...getFieldProps("address")}
                />
              </div>
            )}

            {activeStep === 1 && (
              <div>
                <TextField
                  label="Driver ID"
                  name="driverId"
                  // value={formik.values.driverId}
                  // onChange={formik.handleChange}
                  // error={
                  //   formik.touched.driverId && Boolean(formik.errors.driverId)
                  // }
                  // helperText={formik.touched.driverId && formik.errors.driverId}
                  {...getFieldProps("driverId")}
                  error={Boolean(touched.driverId && errors.driverId)}
                  helperText={touched.driverId && errors.driverId}
                />
                <TextField
                  label="Driver Name"
                  name="driverName"
                  // value={formik.values.driverName}
                  // onChange={formik.handleChange}
                  {...getFieldProps("driverName")}
                />
                <TextField
                  label="Phone"
                  name="phone"
                  // value={formik.values.phone}
                  // onChange={formik.handleChange}
                  // error={formik.touched.phone && Boolean(formik.errors.phone)}
                  // helperText={formik.touched.phone && formik.errors.phone}
                  {...getFieldProps("phone")}
                  error={Boolean(touched.phone && errors.phone)}
                  helperText={touched.phone && errors.phone}
                />
              </div>
            )}

            {activeStep !== 0 && (
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
            )}

            {!isLastStep && (
              <Button variant="contained" color="primary" onClick={handleNext}>
                Next
              </Button>
            )}
            {isLastStep && (
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            )}
          </Stack>
        </Form>
      </FormikProvider>
    </>
  );
};

export default MultiStepForm7;
