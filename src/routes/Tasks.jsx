import React, { useEffect, useState } from 'react';
import tasksServices from '../services/tasks';

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
            sdasod
        </div>
    );
}

export default Tasks;