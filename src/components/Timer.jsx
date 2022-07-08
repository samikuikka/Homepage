import React from 'react';
import useTimer from '../hooks/useTimer';
import { formatTime } from '../utils/utils';

import IconButton from '@mui/material/IconButton';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import Box from '@mui/material/Box';

const Timer = () => {
    const { timer, isPaused, handleStart, handlePause } = useTimer(0)

    return(
        <Box>
            {
                !isPaused ?
                <IconButton 
                    size="small"
                    onClick={handleStart}
                    >
                        <PlayCircleIcon color="primary" fontSize="large" />
                </IconButton> :
                <IconButton 
                size="small"
                onClick={handlePause}
                >
                    <PauseCircleIcon color="primary" fontSize="large" />
                </IconButton>
            }
            {formatTime(timer)}
        </Box>
    );
}

export default Timer;
