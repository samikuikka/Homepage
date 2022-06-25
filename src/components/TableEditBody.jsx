import React, { useState } from 'react';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

const EditCell = ({edit, children, label}) => {

    if(edit) {
        return (
            <TableCell>
                <TextField
                    fullWidth
                    label={label}
                    defaultValue={children}
                >

                </TextField>
            </TableCell>
        )
    }
    return(
        <TableCell>{children}</TableCell>
    );
}

const TableEditBody = ({task}) => {
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(true);
    };

    const closeEdit = () => {
        setEdit(false);
    }

    return (
        <TableBody>
            <TableRow>
                <EditCell 
                    edit={edit}
                    label="name"
                >
                    {task.name}
                </EditCell>
                <TableCell>{task.project.name}</TableCell>
                <TableCell>{task.done.toString()}</TableCell>
                <TableCell>{task.hiPriority.toString()}</TableCell>
                <EditCell edit={edit}>{task.duration}</EditCell>
                <TableCell>
                    {edit ? (
                        <IconButton onClick={closeEdit}>
                            <CheckIcon color="primary" />
                        </IconButton>
                    ) : (
                        <IconButton onClick={handleEdit}>
                            <EditIcon color="green" />
                        </IconButton>
                    )}
                </TableCell>
            </TableRow>
        </TableBody>
    )

}

export default TableEditBody;