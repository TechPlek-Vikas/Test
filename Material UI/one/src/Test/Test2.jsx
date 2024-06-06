import { useState, useEffect } from "react";
import { TextField, Button, Grid } from "@mui/material";

import { Formik, Form, Field } from "formik";

const Test2 = () => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      // Call your API here using the inputValue state
      console.log("API called with input:", inputValue);
    }, 5000); // Adjust the debounce delay as needed

    return () => clearTimeout(delayDebounceFn);
  }, [inputValue]);

  return (
    <Formik
      initialValues={{ inputField: "" }}
      onSubmit={(values, actions) => {
        console.log(values); // You can do something with the form values here
        actions.setSubmitting(false);
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Grid container direction="column" alignItems="center">
            <Field name="inputField">
              {({ field }) => (
                <TextField
                  {...field}
                  label="Input"
                  variant="outlined"
                  placeholder="Enter your input"
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    field.onChange(e);
                  }}
                />
              )}
            </Field>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default Test2;
