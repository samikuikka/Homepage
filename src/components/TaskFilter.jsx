import React, { useState } from 'react';
import styles from '../styles/task_filter.module.css';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const initialState = [
    {
        name: '',
        label: 'All'
    },
    {
        name: 'today',
        label: 'Today'
    },
    {
        name: 'week',
        label: 'This week'
    }
];

const TaskFilter = ({setFilter}) => {
    const [state, setState] = useState(initialState)
    
    const swapLeftSide = () => {
        const newState = [
            state[1],
            state[0],
            state[2]
        ];
        setFilter(state[0].name);
        setState(newState);
    }

    const swapRightSide = () => {
        const newState = [
            state[0],
            state[2],
            state[1]
        ];
        setFilter(state[2].name);
        setState(newState);
    }

    return(
        <Box className={styles.header_container}>
            <div className={styles.header_filter}>
                <IconButton
                    sx={{ border: "1px solid grey", borderRadius: 1}}
                    size="small"
                    onClick={swapLeftSide}
                >
                    <ArrowBackIosIcon fontSize="small" />
                </IconButton>
                <Typography variant={"h7"} className={styles.link_text}>
                    {state[0].label}
                </Typography>
            </div>
            <Typography variant={"h5"} className={styles.header_text} >
                {state[1].label}
            </Typography>
            <div className={styles.header_filter}>
                <Typography variant={"h7"}  className={styles.link_text}>
                    {state[2].label}
                </Typography>
                <IconButton
                    sx={{ border: "1px solid grey", borderRadius: 1}}
                    size="small"
                    onClick={swapRightSide}
                >
                    <ArrowForwardIosOutlinedIcon fontSize="small" />
                </IconButton>
            </div>
        </Box>
    );
}

export default TaskFilter;