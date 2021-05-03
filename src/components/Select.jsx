import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

function SelectComponent(props) {

  const {name,dropdownValues,handleChange,value,onBlur,touched,error} = props;

    return (
        <div>
        <FormControl variant="outlined" >
        <InputLabel id="demo-simple-select-outlined-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          onChange={handleChange}
          value={value}
          label="Role"
          name={name}
          style={{width:230,margin:props.margin}}
          onBlur={onBlur}
          error={touched && error ? true : false}
          size={props.size}
        
        >
          {
           dropdownValues.map((ele)=> <MenuItem value={ele} key={ele}>{ele}</MenuItem>)    
          }
          
        </Select>
      </FormControl>
        </div>
    )
}

export default SelectComponent
