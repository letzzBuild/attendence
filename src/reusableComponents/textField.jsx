import React from "react";
import TextField from "@material-ui/core/TextField";



export default function BasicTextFields(props) {
  return (
    <TextField
      error={props.touched && props.error ? true : false}
      label={props.label}
      variant="outlined"
      helperText={props.touched && props.error ?  props.error : ""}
      onBlur={props.onBlur}
      name={props.name}
      value={props.values}
      onChange={props.onChange}
      

       />
  );
}
