import React, { useReducer } from 'react';
import cx from 'classnames';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SIGN_UP_SCHEMA } from 'utils/validationSchemas';
import style from './SignUpForm.module.scss';
import FormInput from './FormInput';
const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

function SignUpForm (props) {


  const submitHandler = event => {
    const { registerUser } = props;
    event.preventDefault();
    console.log('Hello')
    registerUser();
  };
  
  return (
    <>
    <Formik initialValues={initialValues} validationSchema={SIGN_UP_SCHEMA} onSubmit={submitHandler}>
      {formikProps => {
        return (
          <Form className={style.container}>
            <Field type='text' component={FormInput} name='firstName' placeholder='first name' className={style.input} />
            <ErrorMessage name='firstName' component='span'/>
            <Field component={FormInput} name='lastName' placeholder='last name' className={style.input}/>
            <ErrorMessage name='lastName' component='span'/>
            <Field component={FormInput} name='email' placeholder='email' className={style.input}/>
            <ErrorMessage name='email' component='span'/>
            <Field type='password' component={FormInput} name='password' placeholder='password' className={style.input}/>
            <ErrorMessage name='password' component='span'/>
            <Field type='submit' value='submit' />
          </Form>
        );
      }}
    </Formik>
    {/*<form className={style.container} onSubmit={submitHandler}>
      <FormInput
        name='firstname'
        value={firstname}
        onChange={handleChange}
        validationRegex={constants.REGEX_NAME}
        placeholder='Введите имя'
      />
      <FormInput
        name='lastname'
        value={lastname}
        validationRegex={constants.REGEX_NAME}
        onChange={handleChange}
        placeholder='Введите фамилию'
      />
      <FormInput
        name='email'
        value={email}
        validationRegex={constants.REGEX_EMAIL}
        onChange={handleChange}
        placeholder='Введите email'
        type='email'
      />
      <FormInput
        name='password'
        value={password}
        validationRegex={constants.REGEX_PASSWORD}
        onChange={handleChange}
        placeholder='Введите пароль'
        type='password'
      />
      <input className={style.input} type='submit' />
    </form>*/}
    </>
    );
}
/*
class SignUpForm extends Component {
  constructor (props) {
    super(props);
    this.state = { ...intialValues };
  }

  submitHandler = event => {
    const { registerUser } = this.props;
    event.preventDefault();
    registerUser({ ...this.state });
    this.setState({ ...intialValues });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render () {
    const { firstname, lastname, email, password } = this.state;
    return (
      <form className={style.container} onSubmit={this.submitHandler}>
        <FormInput
          name='firstname'
          value={firstname}
          onChange={this.handleChange}
          validationRegex={constants.REGEX_NAME}
          placeholder='Введите имя'
        />
        <FormInput
          name='lastname'
          value={lastname}
          validationRegex={constants.REGEX_NAME}
          onChange={this.handleChange}
          placeholder='Введите фамилию'
        />
        <FormInput
          name='email'
          value={email}
          validationRegex={constants.REGEX_EMAIL}
          onChange={this.handleChange}
          placeholder='Введите email'
          type='email'
        />
        <FormInput
          name='password'
          value={password}
          validationRegex={constants.REGEX_PASSWORD}
          onChange={this.handleChange}
          placeholder='Введите пароль'
          type='password'
        />
        <input className={style.input} type='submit' />
      </form>
    );
  }
}
*/
export default SignUpForm;

/*
  1. Написать функции-обработчики изменений имени, фамилии, email.
  2. Реализовать удаление пробелов во всех полях.
  3. Добавить валидацию этих полей.
*/
