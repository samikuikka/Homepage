import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import styles from '../styles/register.module.css';

const validationSchema = yup.object({
    username: yup
        .string('Enter your username')
        .required('Username required'),
    password: yup
        .string('Enter your password')
        .required('Password is required'),
    passwordConfirmation: yup
        .string('Enter your password')
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Repeat the password'),
});

const Register = () => {

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            passwordConfirmation: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    return (
        <Paper elevation={10} className={styles.paper} >
            <form onSubmit={formik.handleSubmit} >
                <Typography variant="h3" component="div" className={styles.login_text}>
                    Register
                </Typography>

                <TextField
                    id="username"
                    name="username"
                    label="Username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username ? formik.errors.username ? formik.errors.username : ' ' : 'Please enter your username'}
                    className={styles.textField}
                    fullWidth
                />
                <TextField
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password ? formik.errors.password ? formik.errors.password : ' ' : 'Please enter your password'}
                    className={styles.textField}
                    fullWidth
                />
                <TextField
                    id="passwordConfirmation"
                    name="passwordConfirmation"
                    label="Password confirmation"
                    type="password"
                    value={formik.values.passwordConfirmation}
                    onChange={formik.handleChange}
                    error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
                    helperText={formik.touched.passwordConfirmation ? formik.errors.passwordConfirmation ? formik.errors.passwordConfirmation : ' ' : 'Please enter your password again'}
                    className={styles.textField}
                    fullWidth
                />
                <Button color="secondary" variant="contained" type="submit" className={styles.submit_button} fullWidth>
                    Register
                </Button>
            </form>
        </Paper>
    );
}

export default Register;
