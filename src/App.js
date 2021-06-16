import React, { useState } from 'react';
import { SIGN_UP_SCHEMA } from 'utils/validationSchemas';
function App (props) {
  const data = SIGN_UP_SCHEMA.validateSync({
    firstName: 'Fefwf',
    lastName: 'Fdfwgwg',
    password: 'dsgD3#dsg',
    email: 'test@gmail.com',
  });
  console.log(data)
  return <></>;
}

export default App;
