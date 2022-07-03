import React from 'react';
import  Button  from '@mui/material/Button';
import { useFormikContext } from 'formik';

const ButtonWrapper = ({
    children,
    close,
    ...otherProps
}) => {
    const { submitForm } = useFormikContext();

    const handleSubmit = () => {
        submitForm();
        if(close) {
            close();
        }
    }

    const config = {
        color: 'secondary',
        onClick: handleSubmit,
        fullWidth: true,
        variant: 'contained'
    }

    return (
        <Button
            {...config}
        >
            {children}
        </Button>
    );
}

export default ButtonWrapper;