import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
import "./styles.css";
import AccountCircle from '@material-ui/icons/AccountCircle';

function Appbar() {
  return (
    <div >
      <AppBar position="static" elevation={2} style={{backgroundColor:"#6f2dbd"}}>
        <Toolbar className="appbar">
          <Typography variant="h6">
            <spam style={{ fontWeight: "bold" }}>
              Attendence Management Software 
            </spam> | Staff Dashboard
             
          </Typography>
          {/* <FormControlLabel
          value="end"
          control={<Switch color="secondary" />}
          label="DarkMode"
          labelPlacement="end"
        /> */}
        <div className="right-elements">
        <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                size='medium'
                style={{marginRight:10}}
              >
                <AccountCircle style={{width:60,height:40}} /> 
              </IconButton>
              <h6 style={{fontSize:14,marginRight:20}}>Sagar Patil</h6>
          <Button
            color="secondary"
            variant="contained"
            style={{color: "white", fontWeight: "bold" }}
          >
            Logout
          </Button>
        </div>
             
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Appbar;
