import React from "react";
import { useFormik } from "formik";
import TextField from "../components/Input";
import Password from "../components/Password";
import Button from "@material-ui/core/Button";
import Select from "../components/Select";
import "./styles.css";
import { Link } from "react-router-dom";
import * as yup from "yup";

function LoginPage() {
  const rolesOfUsers = ["Staff", "HOD", "Mentor", "Principal", "Admin"];

  const schema = yup.object().shape({
    userid: yup.string().required("This is a required field"),
    password: yup.string().required("This is a required field"),
    role: yup.string().required("This is a required field"),
  });
  const formik = useFormik({
    initialValues: {
      userid: "",
      password: "",
      role: "",
    },

    validationSchema: schema,

    onSubmit: (data) => {
      console.log(data);
    },
  });
  return (
    console.log(formik),
    (
      <div className="LoginDiv">
        <div className="LoginDivRow">
          <form onSubmit={formik.handleSubmit}>
            <h1>Sign In</h1>
            <TextField
              name="userid"
              onBlur={formik.handleBlur}
              touched={formik.touched.userid}
              error={formik.errors.userid}
              handleChange={formik.handleChange}
              value={formik.values.userid}
              label="username"
            />
            <br />
            <Password
              name="password"
              onBlur={formik.handleBlur}
              touched={formik.touched.password}
              error={formik.errors.password}
              handleChange={formik.handleChange}
              value={formik.values.password}
              label="password"
            />
            <br />
            <Select
              name="role"
              dropdownValues={rolesOfUsers}
              onBlur={formik.handleBlur}
              touched={formik.touched.role}
              handleChange={formik.handleChange}
              error={formik.errors.role}
              value={formik.values.role}
            />
            <br />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              style={{ fontWeight: "bold", width: 230 }}
            >
              Submit
            </Button>
            <br></br>
            <br></br>
            <Link id="forgotPass" to="changepassword" style={{fontWeight:'normal'}}>
              forgot/change password
            </Link>
          </form>
        </div>
      </div>
    )
  );
}

export default LoginPage;
