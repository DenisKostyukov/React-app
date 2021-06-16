import SignInForm from 'components/forms/SignInForm';
import SignUpForm from 'components/forms/SignUpForm';
import React, { useState } from 'react';

function App (props) {

  return (
    <>
      <SignInForm />
      <SignUpForm />
    </>
  );
}

export default App;
