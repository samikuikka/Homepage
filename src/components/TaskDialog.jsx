import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import styles from '../styles/task_form.module.css'
import { Field } from 'formik';
import { useSelector } from 'react-redux';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Textfield from './FormsUI/Textfield';
import Checkbox from '@mui/material/Checkbox';
import SubmitButton from './FormsUI/SubmitButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const CustomCheckbox = ({
    field,
    form: { touched, errors},
    ...props
}) => {

    return (
        <FormControlLabel control={<Checkbox {...field} />} {...props} sx={{width: '100%'}}/>
    )
}

const CustomSelect = ({
    field,
    ...props
}) => {
    return (
        <Select  {...props} {...field}/>
    );
}

const TaskDialog = ({open, handleClose}) => {
    const projects = useSelector(state => state.projects.projects);

    const initialValues = {
        name: '',
        hiPriority: false,
        project: '',
        duration: '',
    };

    const handleSubmission = (values) => {
        console.log(values);
    };
    
   
    return (
        <Dialog
            open={open}
            onClose={handleClose}    
        >
            <DialogTitle>
                Add new task
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Add information about new task
                </DialogContentText>

                <Formik
                    initialValues={initialValues}
                    onSubmit={ (values) => handleSubmission(values)}
                    >
                    <Form>
                        <Box id={styles.form_container}>
                        <Textfield name="name" label="name"/>
                        <Textfield name="duration" label="duration" type="number" />
                        <Field 
                            name="hiPriority"
                            label="high priority"
                            component={CustomCheckbox}
                        />

                        <Field
                            name="project"
                            component={CustomSelect}
                        >
                            {projects.map((project,id) => {
                                return (
                                    <MenuItem value={project._id} key={id}>{project.name}</MenuItem>
                                )
                            })}
                        </Field>


                        <SubmitButton >
                            Add
                        </SubmitButton>
                        </Box>
                    </Form>
                </Formik>
            </DialogContent>
        </Dialog>
    )
}

export default TaskDialog;