import React, { useState } from 'react';
import styles from '../styles/tasks.module.css';
import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';

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

const Task = ({ task }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
      console.log(task)
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
                        <Typography>
                            sadjas
                        </Typography>
                    </Collapse>
                </div>
            </Paper>

        </Grid>
    )
}

export default Task;