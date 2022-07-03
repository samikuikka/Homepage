import React, { useState } from 'react';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import SubmitIconButton from './FormsUI/SubmitIconButton';
import EditCell from './FormsUI/EditCell';
import EditCheckBox from './FormsUI/EditCheckBox';


const TableEditBody = ({task}) => {
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(true);
    };

    const closeEdit = () => {
        setEdit(false);
    }

    console.log(task)
    return (
        <TableBody>
            <TableRow>
                    <EditCell
                        edit={edit}
                        label="name"
                        name="name"
                    >
                        {task.name}
                    </EditCell>
                    <TableCell>{task.project.name}</TableCell>
                    <EditCheckBox name="done"/>
                    <EditCheckBox name="hiPriority"/>
                    <EditCell
                        edit={edit}
                        label="duration"
                        name="duration"
                        type="number"
                    >
                        {task.duration}
                    </EditCell>
                    <TableCell>DATE HERE</TableCell>
                    <TableCell>
                        {edit ? (
                            <SubmitIconButton close={closeEdit}>
                                <CheckIcon color="primary" />
                            </SubmitIconButton>
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