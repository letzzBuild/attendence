import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';



export default function SimpleSelect(props) {


    return (
            <TextField
                select
                label={props.label}
                helperText={props.touched && props.error  ? props.error : ""}
                variant="outlined"
                onChange={props.onChange}
                value={props.values}
                name={props.name}
                onBlur={props.onBlur}
                style={{width:props.width}}

            >
               {
                props.data.map((element)=><MenuItem key={element} value={element}>{element}</MenuItem>)

               }
            </TextField>
    );
}
