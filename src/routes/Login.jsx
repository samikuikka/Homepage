import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import styles from '../styles/login.module.css';

const validationSchema = yup.object({
    username: yup
        .string('Enter your username')
        .required('Username required'),
    password: yup
        .string('Enter your password')
        .required('Password is required'),
});

const Login = () => {

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    return(
        <Paper elevation={10} className={styles.paper} >
            <form onSubmit={formik.handleSubmit} >
                <Typography variant="h3" component="div" sx={{
                    textAlign: 'center',
                    fontSize: '32px',
                    fontWeight: 500,
                    linwHeight: '42px'
                }}>
                    Welcome
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
                <Button color="secondary" variant="contained" type="submit" sx={{
                    display: 'block',
                    marginTop: '40px',
                    cursor: 'pointer',
                    padding: '15px 0',
                    fontSize: '18px',
                    fontWeight: 600,
                }}
                    fullWidth
                >
                    Log In
                </Button>
            </form>
        </Paper>
    
    )
}

export default Login;