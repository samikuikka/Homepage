import React, { useState } from 'react';
import styles from '../styles/tasks.module.css';
import { styled } from '@mui/material/styles';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import tasksServices from '../services/tasks'
import { setNotification } from '../reducers/notificationReducer';


import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableEditBody from './TableEditBody';
import Checkbox  from '@mui/material/Checkbox';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteIcon from '@mui/icons-material/Delete';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
}));

const validationSchema = yup.object({
    name: yup.string('Task name must be string.')
        .required('Name must be provided.'),
});


const Task = ({ task, updateTasks}) => {
    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState(false);
    const [data, setData] = useState(task);
   
    const initialState = {
        name: task.name,
        duration: task.duration,
        done: task.done,
        hiPriority: task.hiPriority,
        dueDate: task.dueDate
    }

    

    const handleSubmission = (values) => {
        console.log(values)
        try {
            tasksServices.update(task.id, values);
            setData({...data, ...values})
            dispatch(setNotification({ severity: 'success', message: 'Task updated'}));
        } catch (error) {
            let errorMessage = {
                severity: 'error',
                message: error.message
            }
            dispatch(setNotification(errorMessage));
        }
        
    }


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleDelete = async (event) => {
        if(event.target.checked) {
            await tasksServices.remove(task.id);
            updateTasks();
        }
    }

    
    return (
        <Grid
            item
            className={styles.task_card}
            xs={12}
        >
            <Paper elevation={2} className={styles.content_container}>
                <div className={styles.content_header}>
                    <IconButton size="small" id={styles.timer_button}>
                        <PlayCircleIcon color="primary" fontSize="large" />
                    </IconButton>
                    <Divider orientation="vertical" flexItem id={styles.divider}  />
                    <Checkbox 
                        icon={<DeleteOutlineIcon />}
                        checkedIcon={<DeleteIcon />}
                        onChange={handleDelete}
                    />
                    <Typography variant="h6" id={styles.task_name}>
                        {task.name}
                    </Typography>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                            <ExpandMoreIcon />
                    </ExpandMore>
                </div>
                <div className={styles.content_expanded}>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Divider />
                        <Formik 
                            initialValues={initialState}
                            validationSchema={validationSchema}
                            onSubmit={ values => handleSubmission(values) }
                            >
                            <Form>
                                <TableContainer 
                                    component={Paper}
                                    sx={{
                                        border: '1px solid rgba(0,0,0,0.1)'
                                    }}
                                >
                                    <Table sx={{ minWidth: 650 }} aria-label="task table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell width="15%">name</TableCell>
                                                <TableCell width="15%">project</TableCell>
                                                <TableCell width="15%">done</TableCell>
                                                <TableCell width="15">high priority</TableCell>
                                                <TableCell width="15%">duration</TableCell>
                                                <TableCell width="15%">due date</TableCell>
                                                <TableCell width="5%"></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableEditBody task={data}/>
                                    </Table>

                                </TableContainer>
                            </Form>
                        </Formik>
                    </Collapse>
                </div>
            </Paper>

        </Grid>
    )
}

export default Task;