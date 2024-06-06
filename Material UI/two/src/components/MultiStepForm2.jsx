import React from "react";
import { Container, Tab, Tabs, Box, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import UserForm from "./UserForm";
import DriverForm from "./DriverForm";

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const validationSchema = [
    Yup.object().shape({
      email: Yup.string().email("Invalid email format").required("Required"),
      phone: Yup.string().required("Required"),
      username: Yup.string(),
      address: Yup.string(),
    }),
    Yup.object().shape({
      driver_id: Yup.string().required("Required"),
      driver_name: Yup.string(),
      vehicle_number: Yup.string().required("Required"),
    }),
  ];

  const initialValues = {
    email: "",
    phone: "",
    username: "",
    address: "",
    driver_id: "",
    driver_name: "",
    vehicle_number: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleNext = (validateForm) => {
    validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  
  return (
    <Container>
      <Tabs
        value={activeStep}
        onChange={(e, newValue) => setActiveStep(newValue)}
      >
        <Tab label="User" />
        <Tab label="Driver" />
      </Tabs>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema[activeStep]}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ isSubmitting, isValid, dirty, validateForm }) => (
          <Form noValidate>
            <Box mt={2}>
              {activeStep === 0 && <UserForm />}
              {activeStep === 1 && <DriverForm />}
            </Box>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              {activeStep === validationSchema.length - 1 ? (
                <Button type="submit" color="primary" disabled={isSubmitting}>
                  Submit
                </Button>
              ) : (
                <Button
                  color="primary"
                  onClick={() => handleNext(validateForm)}
                >
                  Next
                </Button>
              )}
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default MultiStepForm;
