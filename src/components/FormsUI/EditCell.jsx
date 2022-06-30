import React from 'react';
import { useField } from 'formik';

import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';

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

export default EditCell;