import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate, useLocation } from 'react-router';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import styles from '../styles/login.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/userReducer';
import { setNotification } from '../reducers/notificationReducer';
import loginService from '../services/login';
import projectServices from '../services/projects';

const validationSchema = yup.object({
    username: yup
        .string('Enter your username')
        .required('Username required'),
    password: yup
        .string('Enter your password')
        .required('Password is required'),
});

const Login = () => {

    const dispatch = useDispatch()
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || '/';


    const handleLogin = async (values) => {

        try {
            const user = await loginService.login(values);
            window.localStorage.setItem('user', JSON.stringify(user));
            dispatch(login(values));
            let successMessage = {
                severity: 'success',
                message: 'Login succesful'
            }

            dispatch(setNotification(successMessage));
            projectServices.setToken(user.token);
            navigate(from, { replace: true });
        } catch (error) {
            let errorMessage = {
                severity: 'error',
                message: "Something went wrong"
            }
            if(error.response.data.error) errorMessage.message = error.response.data.error;
            dispatch(setNotification(errorMessage));
        }
    }

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            handleLogin(values);
        }
    });

    return(
        <Paper elevation={10} className={styles.paper} >
            <form onSubmit={formik.handleSubmit} >
                <Typography variant="h3" component="div" className={styles.login_text}>
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
                
                <Button color="secondary" variant="contained" type="submit" className={styles.submit_button} fullWidth>
                    Log In
                </Button>
            </form>
        </Paper>
    
    )
}

export default Login;