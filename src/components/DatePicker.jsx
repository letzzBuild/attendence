import React from 'react';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function DatePicker(props) {
    return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
         <KeyboardDatePicker
          disableToolbar
          key={props.key}
          variant="inline"
          name={props.name}
          format="dd-MM-yyyy"
          margin="normal"
          label={props.label}
          value={props.value}
          onChange={(date)=>props.setFieldValue(props.name,date)}
          style={{margin:10}}
          KeyboardButtonProps={{
            'aria-label': 'date-picker-inline',
          }}
        />
        </MuiPickersUtilsProvider>
        </div>
    )
}

export default DatePicker;