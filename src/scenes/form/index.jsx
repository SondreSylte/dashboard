// Profile Form with Formik and Yup
// https://formik.org/docs/overview
// https://www.npmjs.com/package/yup

import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React from "react";

// values in the schema
const initialValues = {
  firstName: " ",
  lastName: " ",
  email: " ",
  contact: " ",
  address1: " ",
  address2: " ",
};

// check values based on the string
const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("Required"),
  address2: yup.string().required("Required"),
});

const Form = () => {
  // If we hit a min width of 600px, we are triggering this boolean.
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSumbit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {/* All these values comes from the Formik component, and the arrow function
            allows us to use the values inside the form component. */}
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleFormSubmit,
        }) => (
          <form onSubmit={handleFormSubmit}>
            <Box
              display="grid" //The display property specifies the display behavior (the type of rendering box) of an element.
              gap="30px" // The gap CSS property sets the gaps (gutters) between rows and columns.
              gridTemplateColumns="repeat(4, minmax(0,1fr))" // allows to split grid in 4 sections, each having minimum 0 and max 1 fractional unit. That means each column can have one fraction of this space.
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name" //Displayed as text title
                onBlur={handleBlur} //Represents the function that changes depending if touched or not and touch out of it.
                onChange={handleChange} //Handles the change in text.
                value={values.firstName} //Values of the field. const initialValues
                name="firstName" //has to match the value in const initialValues
                error={!!touched.firstName && !!errors.firstName} //Double negative. Forcing it to become a boolean if the component is "touched". Triggering the error text depending if its touched or not.
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }} //fills up space of 4 instead of 2.
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
