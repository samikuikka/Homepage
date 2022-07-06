import React from 'react';
import { useField } from 'formik';
import TextField from '@mui/material/TextField';

const Textfield = ({name, ...otherProps}) => {
    const [field, meta] = useField(name);
   
    const config = {
        ...field,
        ...otherProps,
        fullWidth: true
    };

    return (
        <TextField
            {...config}
            sx={{ display: 'block'}}
            error={Boolean(meta.error)}
            helperText={meta.error ? meta.error : ' '}
        >

        </TextField>
    )
}

export default Textfield;