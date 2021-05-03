import React from 'react'
import TextField from '@material-ui/core/TextField';

function InputField(props) {
  const {name,handleChange,value,error,touched,onBlur,label} = props;

    return (
        <div>
        <TextField
          label={label}
          variant="outlined"
          onChange={handleChange}
          value={value}
          name={name}
          helperText={touched && error ? error : ""}
          error={touched && error ?  true : false}
          onBlur={onBlur}
        />
        </div>
    )
}

export default InputField;
