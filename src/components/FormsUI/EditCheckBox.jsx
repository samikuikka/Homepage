import React from 'react';
import { Field } from 'formik';

import  Checkbox  from '@mui/material/Checkbox';



const EditCheckBox = ({name}) => {

    return(
        <td>
            <Field
                as={Checkbox}
                type="checkbox"
                name={name}
                control={<Checkbox/>}
                label="placeholder"
            />
        </td>
    )
}

export default EditCheckBox;