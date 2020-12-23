import React from "react";
import Header from "../reusableComponents/header";
import InputField from "../reusableComponents/textField";
import Dropdown from "../reusableComponents/select";
import Button from "../reusableComponents/button";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";

export default function LoginPage(props) {
  const userTypes = ["student", "faculty", "admin"];

  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
    userType: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      userType: "",
    },
    validationSchema: schema,
    onSubmit: (data) => {
      console.log(data);
      axios({
          url:'http://127.0.0.1:5000/login',
          method:'post',
          headers:{'Content-Type': 'application/json'},
          data:data
      }).then((response) => {console.log(response);}).catch((error) =>{console.log(error)})
    },
  });
  return (
      console.log(formik),
    <>
    <form onSubmit={formik.handleSubmit}>
      <center>
        <Header
          data="Sign In"
          color="white"
          bgColor="#673ab7"
          border="#651fff"
        />
        <div style={{ margin: 15 }}>
          <InputField
            label="User Name"
            name="username"
            onChange={formik.handleChange}
            values={formik.values.username}
            onBlur={formik.handleBlur}
            error={formik.errors.username}
            touched={formik.touched.username}
          />
        </div>
        <div style={{ margin: 15 }}>
          <InputField
            label="Password"
            name="password"
            onChange={formik.handleChange}
            values={formik.values.password}
            onBlur={formik.handleBlur}
            error={formik.errors.password}
            touched={formik.touched.password}
          />
        </div>
        <div style={{ margin: 15 }}>
          <Dropdown
            label="User Type"
            width={190}
            data={userTypes}
            name="userType"
            values={formik.values.userType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.userType}
            touched={formik.touched.userType}
          />
        </div>

        <Button type="submit" title="Submit" />
      </center>
      </form>
    </>
  );
}
