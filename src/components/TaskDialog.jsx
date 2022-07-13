import React, { useState } from 'react';
import { Formik, Form, useFormikContext, useField } from 'formik';
import * as yup from 'yup';
import styles from '../styles/task_form.module.css'
import { Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import tasksServices from '../services/tasks';
import projectServices from '../services/projects';
import { setNotes } from '../reducers/projectReducer';
import { setNotification } from '../reducers/notificationReducer';

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
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import FormikAutocomplete from './FormsUI/FormikAutocomplete';

const CustomCheckbox = ({
    field,
    form: { touched, errors},
    ...props
}) => {

    return (
        <FormControlLabel control={<Checkbox {...field} />} {...props} sx={{width: '100%'}}/>
    )
}

const CustomDatePicker = ({
    field,
    form,
    ...props
}) => {
    
    return (
        <DesktopDatePicker
            label="due date"
            inputFormat="dd/MM/yyyy"
            value={field.value}
            onChange={(values) => form.setFieldValue(field.name, values)}
            sx={{ width: '100%'}}
            renderInput={(params) => <TextField
                {...params}
                className={styles.input_field} 
                fullWidth
                error={Boolean(form.errors.dueDate)}
                helperText={form.errors.dueDate ? form.errors.dueDate : ' '}
            />}
        />
    )
}

const today = new Date();
today.setHours(0,0,0,0);

const validationSchema = yup.object({
    name: yup.string('task name must be string')
        .required('name is requred'),
    hiPriority: yup.boolean(),
    project: yup.string().min(4).required('project is required'),
    duration: yup.number('duration must be number')
        .min(0, "duration can't be negative"),
    dueDate: yup.date('must be date').min(today, 'date cannot be in the past')
})


const TaskDialog = ({open, handleClose, updateTasks}) => {
    const projects = useSelector(state => state.projects.projects);
    let dispatch = useDispatch();

    const initialValues = {
        name: '',
        hiPriority: false,
        project: '',
        duration: '',
        dueDate: new Date()
    };


    const handleSubmission = async (values) => {
        console.log(values);
        try {
            const id = await projectServices.getID(values.project);
            await tasksServices.create(id, values);
            updateTasks();
            //Update project list
            projectServices.initializeNotes().then(notes => {
                dispatch(setNotes(notes));
            })
            updateTasks();
            //Send success message
            dispatch(setNotification({ severity: 'success', message: 'task added'}))
            handleClose();
        } catch (error) {
            console.log(error);
            dispatch(setNotification({severity: 'error', message: 'error while adding task'}))
        }
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
                    validationSchema={validationSchema}
                    >
                    <Form>
                        <Box id={styles.form_container}>
                        <Textfield 
                            name="name" 
                            label="name"
                            className={styles.textfield_input}
                        />
                        <Textfield 
                            name="duration" 
                            label="duration" 
                            type="number"
                            className={styles.textfield_input} 
                        />
                        <Field 
                            name="hiPriority"
                            label="high priority"
                            component={CustomCheckbox}
                            className={styles.input_field}
                        />

                        <Box className={styles.textfield_input} >
                            <Field 
                                name="project"
                                component={FormikAutocomplete}
                                label="project"
                                options={projects}
                            />
                        </Box>
                        <Field 
                            name="dueDate"
                            label="due date"
                            component={CustomDatePicker}
                        />


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