import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';


function Password(props) {
    const [showPassword, setshowPassword] = useState(false);
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
          type={showPassword ? "text" : "password"}
          style={{width:230}}
          InputProps= {{ endAdornment : (
            <InputAdornment position="end">
              <IconButton
                onClick={()=>setshowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
          }}
        />
        </div>
    )
}

export default Password
