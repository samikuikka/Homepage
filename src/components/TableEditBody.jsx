import React, { useState } from 'react';
import { useField } from 'formik';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import SubmitIconButton from './FormsUI/SubmitIconButton';

const EditCell = ({edit, children, name, ...otherProps}) => {
    const [field, meta] = useField(name);

    const config = {
        ...field,
        ...otherProps,
        fullWidth: true,
    }

    if(edit) {
        return (
            <TableCell>
                <TextField
                    {...config}
                >

                </TextField>
            </TableCell>
        )
    }
    return(
        <TableCell>{children}</TableCell>
    );
}

const CheckboxCell = ({edit, value}) => {
    const [checked, setChecked] = useState(value)

    const handleChange = (event) => {
        setChecked(event.target.checked);
    }

    if(edit) {
        return (
            <td>
                <Checkbox 
                    checked={checked}
                    onChange={handleChange} 
                    />
            </td>
        )
    }

    return (
        <td>
            <Checkbox 
            checked={value}
            disabled 
             />
        </td>
    )
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
                        name="name"
                    >
                        {task.name}
                    </EditCell>
                    <TableCell>{task.project.name}</TableCell>
                    <CheckboxCell edit={edit} value={task.done} />
                    <CheckboxCell edit={edit} value={task.hiPriority} />
                    <EditCell
                        edit={edit}
                        label="duration"
                        name="duration"
                        type="number"
                    >
                        {task.duration}
                    </EditCell>
                    <TableCell>
                        {edit ? (
                            <SubmitIconButton onClick={closeEdit}>
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