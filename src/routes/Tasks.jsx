import React, { useEffect, useState } from 'react';
import tasksServices from '../services/tasks';
import styles from '../styles/tasks.module.css';
import Task from '../components/Task';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TaskDialog from '../components/TaskDialog';
import TaskFilter from '../components/TaskFilter';

const Tasks = () => {

    const [tasks, setTasks] = useState([]);
    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState('');

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const updateTasks = () => {
        tasksServices.getTasks(filter).then( data => {
            setTasks(data);
        });
    }

    //Get tasks
    useEffect( () => {
        tasksServices.getTasks(filter).then( data => {
            setTasks(data)
        })
    }, [filter]);
    
    return(
        <div>
            <TaskFilter setFilter={setFilter}/>

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
                        <Task key={task.id} task={task} updateTasks={updateTasks} />
                    )
                })}
            </Grid>
        </div>
    );
}

export default Tasks;
