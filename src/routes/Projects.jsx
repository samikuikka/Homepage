import React, { useEffect, useState, useCallback } from 'react';
import projectServices from '../services/projects';
import { useDispatch } from 'react-redux';
import { setNotification } from '../reducers/notificationReducer';

import Box from '@mui/material/Box';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
  GridToolbarQuickFilter
} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import ProjectDialog from '../components/ProjectDialog';



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

const CustomToolbar = ({setOpen, deleteRows}) => {

    return(
        <GridToolbarContainer>
            <Box sx={{flex: 1}}>
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport />
            </Box>
            <Button
                variant="contained"
                color="error"
                sx={{marginRight: 2.5}}
                onClick={deleteRows}
            >
                Delete
            </Button>
            <Button
                variant="contained"
                color="secondary"
                sx={{ marginRight: 2.5}}
                onClick={() => setOpen(true)}
            >
                    ADD
            </Button>
            <GridToolbarQuickFilter />
        </GridToolbarContainer>
    );
}

const columns = [
    { field: '_id', headerName: 'ID', flex: 1 , sortable: false},
    { field: 'name', headerName: 'Project name', flex: 1, editable: true},
    { field: 'tasks', headerName: 'Tasks', flex: 1 },
    { field: 'createdAt', headerName: 'Creation date', flex:1},
    { field: 'lastReview', headerName: 'Last Review', flex: 1},
    { field: 'reviewFreq', headerName: 'Review Freq', flex: 1, editable: true},
    { field: 'overdue', headerName: 'Overdue', flex: 1}
];


const Projects = () => {
    const dispatch = useDispatch();
    const mutatedRow = useFakeMutation();
    const [projects, setProjects] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);

    //Delete selected rows
    const deleteRows = async () => {
       for( const id of selectedRows) {
           await projectServices.remove(id);
       }
       let successMessage = {
           severity: 'success',
           message: "Project('s) deleted"
       }
       projectServices.initializeNotes().then(projects => 
        setProjects(projects)
       )
       dispatch(setNotification(successMessage));
    }

    //Close dialog
    const handleClose = () => {
        setOpen(false);
    }

    // Update row
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

    // Show error in row editing
   const onProcessRowUpdateError = useCallback( (error) => {
       let errorMessage = {
           severity: 'error',
           message: error.message
       }
       dispatch(setNotification(errorMessage));
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   
   //Get Projects
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
                components={{ Toolbar: CustomToolbar }}
                componentsProps={{ toolbar: { setOpen: setOpen, deleteRows: deleteRows } }}
                checkboxSelection
                onSelectionModelChange={(ids) => {
                    setSelectedRows(ids);
                }}
            />
            <ProjectDialog open={open} handleClose={handleClose} setProjects={setProjects} />
            
        </Box>
    );
}

export default Projects;