import React, { useEffect, useState } from 'react';
import projectServices from '../services/projects';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { DataGrid } from '@mui/x-data-grid';




const Projects = () => {
    const [projects, setProjects] = useState([]);

    const columns = [
        { field: '_id', headerName: 'ID', flex: 1 },
        { field: 'name', headderName: 'Project name', flex: 1},
        { field: 'tasks', headerName: 'Tasks', flex: 1 },
        { field: 'createdAt', headerName: 'Creation date', flex:1},
        { field: 'lastReview', headerName: 'Last Review', flex: 1},
        { field: 'reviewFreq', headerName: 'Review Freq', flex: 1},
        { field: 'overdue', headerName: 'Overdue', flex: 1}
    ];

    useEffect(() => {
        projectServices.initializeNotes().then(projects => 
             setProjects(projects)
            )
    }, [])
    
    return(
        <Box sx={{ flexGrow: 1, height: '100%'}}>
            <DataGrid 
                rows={projects}
                columns={columns}
                getRowId={(row) => row._id}
            />
        </Box>
    );
}

export default Projects;