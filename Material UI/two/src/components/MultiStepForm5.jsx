import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { Button, Container, Tabs, Tab } from "@mui/material";
import * as Yup from "yup";
import UserDetails from "./UserDetails";
import DriverDetails from "./DriverDetails";

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);

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

  const handleNext = async (formik) => {
    try {
      await validationSchema[activeStep].validate(formik.values, {
        abortEarly: false,
      });
      formik.setErrors({});
      if (activeStep === steps.length - 1) {
        // Validate all steps before submitting
        const allStepsValid = await validateAllSteps(formik);
        if (allStepsValid) {
          formik.handleSubmit();
        }
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = {};
        error.inner.forEach((err) => {
          errors[err.path] = err.message;
        });
        formik.setTouched({
          ...formik.touched,
          ...Object.keys(errors).reduce((acc, key) => {
            acc[key] = true;
            return acc;
          }, {}),
        });
        formik.setErrors(errors);
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const validateAllSteps = async (formik) => {
    let isValid = true;
    const allErrors = {};
    const allTouched = {};

    for (let i = 0; i < validationSchema.length; i++) {
      try {
        await validationSchema[i].validate(formik.values, {
          abortEarly: false,
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          isValid = false;
          error.inner.forEach((err) => {
            allErrors[err.path] = err.message;
            allTouched[err.path] = true;
          });
        }
      }
    }

    formik.setTouched({ ...formik.touched, ...allTouched });
    // formik.setErrors({ ...formik.errors, ...allErrors });
    console.log(`🚀 ~ validateAllSteps ~ isValid:`, isValid);

    return isValid;
  };

  return (
    <>
      <h1>MultiStepForm 5</h1>
      <Container>
        <Tabs
          value={activeStep}
          onChange={(e, step) => setActiveStep(step)}
          aria-label="multi-step form"
        >
          {steps.map((label, index) => (
            <Tab key={index} label={label} />
          ))}
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
    </>
  );
};

export default MultiStepForm;
