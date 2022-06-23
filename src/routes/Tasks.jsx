import React, { useEffect, useState } from 'react';
import tasksServices from '../services/tasks';
import styles from '../styles/tasks.module.css';
import Task from '../components/Task';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const Tasks = () => {

    const [tasks, setTasks] = useState([]);

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
                spacing={1}
                direction="column"
                alignItems="center"
                className={styles.grid}
            >
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
