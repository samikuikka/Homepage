import React, { useEffect, useState, useCallback } from 'react';
import projectServices from '../services/projects';
import { useDispatch } from 'react-redux';
import { setNotification } from '../reducers/notificationReducer';

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const useFakeMutation = () => {
    return useCallback( (row) => {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                if(row.name?.trim() === '') {
                    reject(new Error("Name can't be empty"));
                } else {
                    resolve(row);
                }
            }, 200)
        }
        )
    }, [])
}


const Projects = () => {
    const dispatch = useDispatch();
    const mutatedRow = useFakeMutation();
    const [projects, setProjects] = useState([]);

    const columns = [
        { field: '_id', headerName: 'ID', flex: 1 },
        { field: 'name', headerName: 'Project name', flex: 1, editable: true},
        { field: 'tasks', headerName: 'Tasks', flex: 1 },
        { field: 'createdAt', headerName: 'Creation date', flex:1},
        { field: 'lastReview', headerName: 'Last Review', flex: 1},
        { field: 'reviewFreq', headerName: 'Review Freq', flex: 1, editable: true},
        { field: 'overdue', headerName: 'Overdue', flex: 1}
    ];

   const processRowUpdate = useCallback( async (newRow) => {

       const response = await mutatedRow(newRow)
       const res = await projectServices.update(response._id, response);
       let successMessage = {
           severity: 'success',
           message: 'Project updated'
       }
       dispatch(setNotification(successMessage));
       return res;

   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [mutatedRow])

   const onProcessRowUpdateError = useCallback( (error) => {
       let errorMessage = {
           severity: 'error',
           message: error.message
       }
       dispatch(setNotification(errorMessage));
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   

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
                getRowId={(row) => row?._id}
                experimentalFeatures={{ newEditingApi: true}}
                processRowUpdate={processRowUpdate}
                onProcessRowUpdateError={onProcessRowUpdateError}
            />
        </Box>
    );
}

export default Projects;