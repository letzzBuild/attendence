import React from 'react'
import TextField from '@material-ui/core/TextField';

function InputField(props) {
  const {name,onChange,value} = props;

    return (
        <div>
        <TextField
          label={name}
          variant="outlined"
          onChange={onChange}
          value={value}
          name={name}
        />
        </div>
    )
}

export default InputField;
