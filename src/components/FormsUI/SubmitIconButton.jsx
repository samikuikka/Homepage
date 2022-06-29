import React from 'react';
import  IconButton  from '@mui/material/IconButton';
import { useFormikContext } from 'formik';

const IconButtonWrapper = ({
    children,
    ...otherProps
}) => {
    const { submitForm } = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    }

    const config = {
        color: 'primary',
        onClick: handleSubmit
    }

    return (
        <IconButton
            {...config}
        >
            {children}
        </IconButton>
    );
}

export default IconButtonWrapper;