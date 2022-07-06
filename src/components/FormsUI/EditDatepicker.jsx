import React from 'react';
import { useField, useFormikContext } from 'formik';

import TableCell from '@mui/material/TableCell';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField  from '@mui/material/TextField';

const EditDatepicker = ({edit, children, name, ...otherProps}) => {
    const [field, meta] = useField(name);
    const formik = useFormikContext();
    
    if(edit) {
        return(
            <TableCell>
                <DesktopDatePicker 
                    label="due date"
                    inputFormat="dd/MM/yyyy"
                    value={field.value}
                    onChange={(values) => formik.setFieldValue('dueDate', values)}
                    renderInput={ (params) => <TextField 
                        {...params}
                        fullWidth
                    />}
                />
            </TableCell>
        )
    }

    return(
        <TableCell>{children}</TableCell>
    )
}

export default EditDatepicker;