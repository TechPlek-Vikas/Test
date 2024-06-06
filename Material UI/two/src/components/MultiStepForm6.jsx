import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Tabs, Tab, AppBar } from "@mui/material";

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

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["User Details", "Driver Details"];

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const isLastStep = activeStep === 1;

  return (
    <form onSubmit={formik.handleSubmit}>
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
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <TextField
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            label="Address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
          />
        </div>
      )}
      {activeStep === 1 && (
        <div>
          <TextField
            label="Driver ID"
            name="driverId"
            value={formik.values.driverId}
            onChange={formik.handleChange}
            error={formik.touched.driverId && Boolean(formik.errors.driverId)}
            helperText={formik.touched.driverId && formik.errors.driverId}
          />
          <TextField
            label="Driver Name"
            name="driverName"
            value={formik.values.driverName}
            onChange={formik.handleChange}
          />
          <TextField
            label="Phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </div>
      )}
      <Button disabled={activeStep === 0} onClick={handleBack}>
        Back
      </Button>
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
    </form>
  );
};

export default MultiStepForm;
