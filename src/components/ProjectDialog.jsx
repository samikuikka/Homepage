import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styles from '../styles/projects.module.css';

const validationSchema = yup.object({
    name: yup.string('Project must be string.')
        .required('Project name must be defined.'),
    reviewFreq: yup.number('review must be number')
});


const ProjectDialog = ({open, handleClose}) => {

    const createProject = async (values) => {
        console.log(values);
    }
    
    const formik = useFormik({
        initialValues: {
            name: '',
            reviewFreq: ''
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            createProject(values);
        }
    });

    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add project</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Add new project to the datagrid.
                </DialogContentText>

                <form onSubmit={formik.handleSubmit}>
                    <Box className={styles.form_container}>
                        <TextField
                            id="name"
                            name="name"
                            label="Project name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            className={styles.inputField}
                            fullWidth
                        />
                        <TextField
                            type="number"
                            id="reviewFreq"
                            name="reviewFreq"
                            label="Review frequency"
                            value={formik.values.reviewFreq}
                            onChange={formik.handleChange}
                            className={styles.inputField}
                            fullWidth
                        />
                        <Button
                            color="secondary"
                            variant="contained"
                            type="submit"
                            className={styles.submit_button}
                            fullWidth
                        >
                            Submit
                        </Button>

                    </Box>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default ProjectDialog;