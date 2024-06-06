import React, { useState } from "react";
import { Formik, Form } from "formik";
import {
  Button,
  Stepper,
  Step,
  StepLabel,
  Container,
  Tabs,
  Tab,
} from "@mui/material";
import * as Yup from "yup";
import UserDetails from "./UserDetails";
import DriverDetails from "./DriverDetails";

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  const steps = ["User Details", "Driver Details"];

  const validationSchema = [
    Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      address: Yup.string(),
    }),
    Yup.object({
      driver_id: Yup.string().required("Required"),
      driver_name: Yup.string(),
      phone: Yup.string().required("Required"),
    }),
  ];

  const initialValues = {
    name: "",
    email: "",
    address: "",
    driver_id: "",
    driver_name: "",
    phone: "",
  };

  const handleNext = (formik) => {
    if (activeStep === steps.length - 1) {
      // submit the form
      formik.handleSubmit();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container>
      <Tabs
        value={activeStep}
        onChange={(e, step) => setActiveStep(step)}
        aria-label="multi-step form"
      >
        <Tab label="User" />
        <Tab label="Driver" />
      </Tabs>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema[activeStep]}
        onSubmit={(values) => {
          console.log("Form data", values);
          alert("Form Submitted!");
        }}
      >
        {(formik) => (
          <Form>
            {activeStep === 0 && <UserDetails />}
            {activeStep === 1 && <DriverDetails />}
            <div style={{ marginTop: "20px" }}>
              {activeStep > 0 && (
                <Button onClick={handleBack} style={{ marginRight: "10px" }}>
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleNext(formik)}
              >
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default MultiStepForm;
