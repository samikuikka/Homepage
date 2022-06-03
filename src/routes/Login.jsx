import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
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
            <form onSubmit={formik.handleSubmit} style={{
                 height: '380px',
                 width: '400px',
                 position: 'absolute',
                 top: '50%',
                 left: '50%',
                 transform: 'translate(-50%, -45%)',
                 padding: '50px 35px',
                 backgroundColor: '#819ca9',
                 borderRadius: '10px',
                 }}>

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
                        sx={{ 
                            display: 'block',
                            marginTop: '25px',
                        }}
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
                        sx={{
                            display: 'block',
                            marginTop: '25px',
                        }}
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
    )
}

export default Login;