import React from 'react';
import styles from '../styles/task_filter.module.css';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const TaskFilter = () => {
    
    
    return(
        <Box className={styles.header_container}>
            <div className={styles.header_filter}>
                <IconButton
                    sx={{ border: "1px solid grey", borderRadius: 1}}
                    size="small"
                >
                    <ArrowBackIosIcon fontSize="small" />
                </IconButton>
                <Typography variant={"h7"} alignCenter className={styles.link_text}>
                    Archive
                </Typography>
            </div>
            <Typography variant={"h5"} className={styles.header_text} >
                Today
            </Typography>
            <div className={styles.header_filter}>
                <Typography variant={"h7"} alignCenter  className={styles.link_text}>
                    This week
                </Typography>
                <IconButton
                    sx={{ border: "1px solid grey", borderRadius: 1}}
                    size="small"
                >
                    <ArrowForwardIosOutlinedIcon fontSize="small" />
                </IconButton>
            </div>
        </Box>
    );
}

export default TaskFilter;