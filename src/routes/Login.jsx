import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

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
            <form onSubmit={formik.handleSubmit} style={{ height: '100%'}}>
                <Box sx={{ 
                    display: 'flex',
                    height: '100%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TextField
                        id="username"
                        name="username"
                        label="Username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username ? formik.errors.username ? formik.errors.username : ' ' : 'Please enter your username'}
                        sx={{ margin: '0px'}}
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
                        sx={{ margin: '0px'}}
                    />
                    <Button color="primary" variant="oontained" type="submit" sx={{
                        
                    }}>
                        Submit
                    </Button>
                </Box>       
            </form>
    )
}

export default Login;