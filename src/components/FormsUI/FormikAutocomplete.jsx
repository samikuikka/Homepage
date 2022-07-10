import React from 'react';

import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const filter = createFilterOptions();

const FormikAutocomplete = ({
    field,
    form,
    ...props
}) => {

    const handleChange = (event, value) => {
        if(typeof value === 'string') {
            form.setFieldValue('project', value);
        } else if(value && value.inputValue) {
            form.setFieldValue('project', value.inputValue);
        } else if (value && value.name) {      
            form.setFieldValue('project', value.name);
        }
    }

    const filterOptions = (options, params) => {
        const filtered = filter(options, params);
        
        const { inputValue } = params;
        const isExisting = options.some((option) => inputValue === option.name);
            
        if(inputValue !== '' && !isExisting) {
            filtered.push({
                inputValue,
                name: `Add ${inputValue}`
            });
        }
        
        return filtered;
    }

    
    return (
        <Autocomplete
            {...props}
            {...field}
            onChange={handleChange}
            getOptionLabel={option => {
                if(typeof option === 'string') {
                    return option
                }

                if(option.inputValue) {
                    return option.name;
                }

                return option.name;
            }}
            filterOptions={filterOptions}
            freeSolo
            renderInput={props => (
                <TextField
                    {...props}
                    label="project"
                    error={Boolean(form.errors.project)}
                    helperText={form.errors.project ? form.errors.project : ' '}
                />
            )}
        />
    )
};

export default FormikAutocomplete;