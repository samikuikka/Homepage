import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
//import '../styles/login.css'

const Login = () => {

    return(
        <div id="login_container">
            <h1>Log in</h1>

            <Formik
                initialValues={{ username: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.username) {
                    errors.username = 'Required';
                    }
                    if (!values.password) {
                        errors.password = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
                >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="username" />
                        <ErrorMessage name="username" component="div" />
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login;