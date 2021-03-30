import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

function SelectComponent(props) {

  const {name,dropdownValues,onChange,value} = props;

    return (
        <div>
        <FormControl variant="outlined" >
        <InputLabel id="demo-simple-select-outlined-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={onChange}
          value={value}
          label="Role"
          name={name}
          style={{width:230}}
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
