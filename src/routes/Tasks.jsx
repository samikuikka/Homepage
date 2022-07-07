import React, { useEffect, useState } from 'react';
import tasksServices from '../services/tasks';
import styles from '../styles/tasks.module.css';
import Task from '../components/Task';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TaskDialog from '../components/TaskDialog';
import TaskFilter from '../components/TaskFilter';

const Tasks = () => {

    const [tasks, setTasks] = useState([]);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const updateTasks = () => {
        tasksServices.getTasks().then( data => {
            setTasks(data);
        });
    }

    //Get tasks
    useEffect( () => {
        tasksServices.getTasks().then( data => {
            setTasks(data)
        })
    }, [])

    return(
        <div>
            <TaskFilter />

            <Grid
                container
                spacing={1.5}
                direction="column"
                alignItems="center"
                className={styles.grid}
            >
                <Grid 
                    item
                    xs={12}
                    id={styles.add_container}
                >
                    <Button 
                        fullWidth
                        variant="outlined"
                        id={styles.add_button}
                        onClick={handleOpen}
                    >
                        add
                    </Button>
                </Grid>
                <TaskDialog open={open} handleClose={handleClose} updateTasks={updateTasks}/>
                
                {tasks.map((task, index) => {
                    return(
                        <Task key={index} task={task} updateTasks={updateTasks} />
                    )
                })}
            </Grid>
        </div>
    );
}

export default Tasks;
