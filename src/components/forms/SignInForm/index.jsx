import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SIGN_IN_SCHEMA } from 'utils/validationSchemas';
const initialValues = {
  password: '',
  email: '',
};

function SignInForm () {
  return (
    <Formik initialValues={initialValues} validationSchema={SIGN_IN_SCHEMA}>
      {formikProps => {
        return (
          <Form>
            <Field type='text' name='email' placeholder='email' />
            <ErrorMessage name='email' component='span'/>
            <Field type='password' name='password' placeholder='password' />
            <ErrorMessage name='password' component='span'/>
            <Field type='submit' value='submit' />
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignInForm;
