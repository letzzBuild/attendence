import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "../reusableComponents/textField";
import Select from '../reusableComponents/select';
import Header from "../reusableComponents/header";
import Button from "../reusableComponents/button";
import * as yup from "yup"; 
import axios from "axios";
import {useFormik} from 'formik';
import SuccessToast from '../reusableComponents/successToast';
import {ToastContainer} from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: 200,
    },
  },
}));

export default function TextFieldSizes() {
  const classes = useStyles();
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const branch = [
    "Computer Science",
    "Electronics and Communication",
    "Civil",
    "Electrical",
  ];
  const division = ["A", "B", "C", "D"];
  const semester = [
    "First",
    "Second",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
    "Seven",
    "Eight",
  ];
  const batches = ["2016", "2017", "2018", "2019", "2020"];






 

  const schema = yup.object().shape({
    name: yup.string().required("This field is required"),
    email: yup
      .string()
      .required("This field is required")
      .email("invalid email address"),
    mobile: yup.string().required("This field is required").matches(phoneRegExp, "invalid phone number"),
    usn: yup.string().required("This field is required"),
    branch: yup.string().required("This field is required"),
    semester: yup.string().required("This field is required"),
    division: yup.string().required("This field is required"),
    batch: yup.string().required("This field is required"),
    password: yup.string().required("This field is required").min(8, "password must be at least 8 characters"),
    // confirmPassword: yup.string().required("This field is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      usn: "",
      branch: "",
      semester: "",
      division: "",
      batch: "",
      password: "",
      // confirmPassword: "",
    },
    validationSchema:schema,
    onSubmit: (data) => {
      
     axios({
       url:'http://127.0.0.1:5000//registerStudent',
       method:'post',
       headers: {'Content-Type': 'application/json'},
       data:data
     }).then((res)=>{
      console.log(res)
      SuccessToast("successfully registered student !!");

  
     

     }).catch((error)=>{
       console.log(error);
     })

    },
  });

  return (
      console.log(formik),
      <>

       <form onSubmit={formik.handleSubmit}>
        <div>
          <center>
            
            <div
              style={{
                padding: 10,
                borderRadius: 10,
              }}
            >
              <div>
                <Header
                  data="Student Register"
                  color="white"
                  bgColor="#673ab7"
                  border="#651fff"
                ></Header>
              </div>
              <div className={classes.root}>
                <div>
                  <TextField
                    label="Name"
                    name="name"
                    onChange={formik.handleChange}
                    values={formik.values.name}
                    onBlur={formik.handleBlur}
                    error={formik.errors.name}
                    touched={formik.touched.name}
                  />
                  <TextField
                    label="email"
                    name="email"
                    onChange={formik.handleChange}
                    values={formik.values.email}
                
                    onBlur={formik.handleBlur}
                    error={formik.errors.email}
                    touched={formik.touched.email}
                  />
                </div>
                <div>
                  <TextField
                    label="Mobile Number"
                    name="mobile"
                    values={formik.values.mobile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.mobile}
                    touched={formik.touched.mobile}
                  />
                  <TextField
                    label="USN"
                    name="usn"
                    values={formik.values.usn}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.usn}
                    touched={formik.touched.usn}
                  />
                </div>
                <div>
                  <Select
                    label="Branch"
                    data={branch}
                    name="branch"
                    values={formik.values.branch}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.branch}
                    touched={formik.touched.branch}
                  />
                  <Select
                    label="Semester"
                    data={semester}
                    name="semester"
                    values={formik.values.semester}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.semester}
                    touched={formik.touched.semester}
                  />
                </div>
                <div>
                  <Select
                    label="Division"
                    data={division}
                    name="division"
                    values={formik.values.division}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.division}
                    touched={formik.touched.division}
                  />
                  <Select
                    label="Batch"
                    data={batches}
                    name="batch"
                    values={formik.values.batch}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.batch}
                    touched={formik.touched.batch}
                  />
                </div>
                <div>
                  <TextField
                    label="Password"
                    name="password"
                    values={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.password}
                    touched={formik.touched.password}
                  />
                  {/* <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                  /> */}
                </div>
              </div>
              <Button
                type="submit"
                title="Submit"
                isdisabled={!(formik.dirty && formik.isValid)}
              />
            </div>
          </center>
      </div>
      
      </form>
     <ToastContainer/>
      </>

    )
}
