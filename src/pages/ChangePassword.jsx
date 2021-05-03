import React, { useState } from "react";
import SecondaryButton from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import ChangePassComp from "../components/ChangePass";
import ForgotPassComp from "../components/ForgotPass";
import ForgotPassImage from '../assets/forgotPass.jpg'

function ChangePassword() {
  const [state, setstate] = useState("");

  return (
    <div className="ChangePassPageConatiner"> 
    <div className="forgotPassImage">
      <img src={ForgotPassImage} style={{marginTop:60}} width={700} height={600} alt=""/>
    </div>
    
    <div className="changePasswordOuterContainer">
      <div className="changePasswordInnerContainer">
        <h1 style={{color:"black",fontWeight:'normal',fontSize:36,fontFamily:'PermanentMarker'}}>Forgot Password ? </h1>
        <div className="innerContainerContent">
          <Box m={1}>
            <SecondaryButton
              variant="contained"
              color="primary"
              style={{ fontWeight: "bold",backgroundColor:"#0505FF"}}
              onClick={() => setstate("changePass")}
            >
              Change Password
            </SecondaryButton>
          </Box>
          <Box m={1}>
            <SecondaryButton
              variant="contained"
              color="primary"
              style={{ fontWeight: "bold",backgroundColor:"#0505FF" }}
              onClick={() => setstate("forgotPass")}
            >
              Forgot Password
            </SecondaryButton>
          </Box>
        </div>
        <div className="containerBody">
          {state === "forgotPass" && <ForgotPassComp></ForgotPassComp>}

          {state === "changePass" && <ChangePassComp></ChangePassComp>}
        </div>
      </div>
    </div>
  </div>
  );
}

export default ChangePassword;
