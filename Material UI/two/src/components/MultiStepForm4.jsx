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
    if (activeStep === steps.length - 1) {
      // validate all steps before submitting
      const isValid = await validateAllSteps(formik);
      console.log(`🚀 ~ handleNext ~ isValid:`, isValid);
      // formik.handleSubmit();
      if (isValid) {
        formik.handleSubmit();
      }
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  // const handleNext = async (formik) => {
  //   if (activeStep === steps.length - 1) {
  //     // validate all steps before submitting
  //     const isValid = await validateAllSteps(formik);
  //     console.log("Before Formik = ", formik.touched);
  //     const isValid1 = await formik.validateForm();
  //     console.log(`🚀 ~ handleNext ~ isValid1:`, isValid1);
  //     formik.setTouched({ ...formik.touched, ...isValid1 });
  //     console.log("After Formik = ", formik.touched);
  //     if (isValid) {
  //       formik.handleSubmit();
  //     }
  //   } else {
  //     const isValid = await formik.validateForm();
  //     console.log(`🚀 ~ handleNext ~ isValid:`, isValid);
  //     // if (isValid && !formik.errors[Object.keys(isValid)[0]]) {
  //     //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //     // } else {
  //     //   formik.setTouched(
  //     //     Object.keys(formik.values).reduce((acc, key) => {
  //     //       acc[key] = true;
  //     //       return acc;
  //     //     }, {})
  //     //   );
  //     // }

  //     const allTouched = Object.keys(isValid).reduce((acc, i) => {
  //       acc[i] = true;
  //       return acc;
  //     }, {});
  //     formik.setTouched(allTouched);

  //     console.log(`🚀 ~ handleNext ~ x:`, allTouched);
  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   }
  // };

  // const handleNext = async (formik) => {
  //   if (activeStep === steps.length - 1) {
  //     // validate all steps before submitting
  //     const isValid = await validateAllSteps(formik);
  //     if (isValid) {
  //       formik.handleSubmit();
  //     } else {
  //       // Mark all fields as touched if not valid
  //       formik.setTouched({
  //         name: true,
  //         email: true,
  //         address: true,
  //         driver_id: true,
  //         driver_name: true,
  //         phone: true,
  //       });
  //     }
  //   } else {
  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   }
  // };

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
            console.log(err.path);
          });
        }
      }
    }

    formik.setErrors(allErrors);
    formik.setTouched(allTouched);
    console.log(`🚀 ~ validateAllSteps ~ allTouched:`, allTouched);
    console.log(`🚀 ~ validateAllSteps ~ allErrors:`, allErrors);
    return isValid;
  };

  return (
    <>
      <h1>MultiStepForm4</h1>
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
