import React, { useEffect, useState } from 'react';
import tasksServices from '../services/tasks';
import styles from '../styles/tasks.module.css';
import Task from '../components/Task';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TaskDialog from '../components/TaskDialog';

const Tasks = () => {

    const [tasks, setTasks] = useState([]);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    //Get tasks
    useEffect( () => {
        tasksServices.getTasks().then( data => {
            setTasks(data)
        })
    }, [])
    //console.log('tasks: ',tasks);
    return(
        <div>
            <Typography variant={"h5"} className={styles.header_text}>
                Tasks
            </Typography>

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
                <TaskDialog open={open} handleClose={handleClose}/>
                
                {tasks.map((task, index) => {
                    return(
                        <Task key={index} task={task} />
                    )
                })}
            </Grid>
        </div>
    );
}

export default Tasks;
