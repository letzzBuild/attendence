import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "./Input";
import { useFormik } from "formik";
import * as yup from "yup";
import "./styles.css";
import { useRef } from "react";
import { Toast } from "primereact/toast";
import Timer from './counterTimer';
import Password from './Password';

function ForgotPass() {
  const toast = useRef(null);
  
  const [showEmail, setshowEmail] = useState(true);
  const [showOTP, setshowOTP] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const [resendOtp, setresendOtp] = useState(false);
  const [counterKey, setcounterKey] = useState(0)


  function showMessage() {
    setresendOtp(false);
    setcounterKey(counterKey+1)
    toast.current.show({
      severity: "success",
      summary: "Success Message",
      detail: "Otp Resent Successfully",
      life: 3000,
    });
  }

 const onTimerCompletion = ()=>{
   setresendOtp(true);
 }


  const formikEmail = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("this is required field")
        .email("enter a valid email address"),
    }),
    onSubmit: (data) => {
      console.log(data);
      setshowEmail(false);
      setshowOTP(true);
      toast.current.show({
        severity: "success",
        summary: "Success Message",
        detail: "Otp Sent Successfully",
        life: 3000,
      });
    },
  });

  const formikOtp = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: yup.object().shape({
      otp: yup.string()
      .required("this is required field")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(6, 'Must be exactly 6 digits')
      .max(6)
    }),
    onSubmit: (data) => {
      console.log(data);
      setshowOTP(false);
      setshowPassword(true);

    },
  });

  const formikPass = useFormik({
    initialValues: {
      password: "",
      confirmPassword:""
    },
    validationSchema: yup.object().shape({
      password:yup.string().required("this is required field").max(8,"password must of atleast of 8 letters"),
      confirmPassword:yup.string().required("This is required field").oneOf([yup.ref('password'), null], 'Passwords must match')
    }),
    onSubmit: (data) => {
      console.log(data);
      

    },
  });

  return (
    <div>
      <Toast ref={toast} position="top-right" />
      <p></p>
      {showEmail && (
        <form
          onSubmit={formikEmail.handleSubmit}
          className="forgotPasssContainer"
        >
          <TextField
            name="email"
            onBlur={formikEmail.handleBlur}
            touched={formikEmail.touched.email}
            error={formikEmail.errors.email}
            handleChange={formikEmail.handleChange}
            value={formikEmail.values.email}
            label="Enter your Email"
          />
          <br></br>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            style={{ fontWeight: "bold" }}
          >
            Get OTP
          </Button>
        </form>
      )}

      {showOTP && (
        <form
        onSubmit={formikOtp.handleSubmit}
        className="forgotPasssContainer"
      >
        <TextField
          name="otp"
          onBlur={formikOtp.handleBlur}
          touched={formikOtp.touched.otp}
          error={formikOtp.errors.otp}
          handleChange={formikOtp.handleChange}
          value={formikOtp.values.otp}
          label="Enter OTP "
        />
        <br></br>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent:"flex-end",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            style={{ fontWeight: "bold", margin: 10 }}
          >
            Submit
          </Button>
          <Button
            disabled={!resendOtp}
            type="button"
            variant="contained"
            color="secondary"
            style={{
              fontWeight: "bold",
              margin: 10,
              backgroundColor: "#75F880",
              color:'black'
            }}
            onClick={showMessage}
          >
            Resend OTP
          </Button>
          <Timer key={counterKey} onComplete={onTimerCompletion}></Timer>

        </div>
      </form>
      )}

      {
        showPassword && (
          <form
          onSubmit={formikPass.handleSubmit}
          className="forgotPasssContainer"
        >
          <Password
            name="password"
            onBlur={formikPass.handleBlur}
            touched={formikPass.touched.password}
            error={formikPass.errors.password}
            handleChange={formikPass.handleChange}
            value={formikPass.values.password}
            label="Enter New Password "
          />
          <br></br>
          <Password
            name="confirmPassword"
            onBlur={formikPass.handleBlur}
            touched={formikPass.touched.confirmPassword}
            error={formikPass.errors.confirmPassword}
            handleChange={formikPass.handleChange}
            value={formikPass.values.confirmPassword}
            label="Confirm Password"
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent:"center",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              style={{ fontWeight: "bold", margin: 10 }}
            >
              Submit
            </Button>
            
        
          </div>
        </form>
        )
      }

    </div>
  );
}

export default ForgotPass;


