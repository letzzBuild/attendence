import React from 'react';
import {useFormik} from 'formik';
import Button from '@material-ui/core/Button';
import Password from './Password';
import './styles.css';

import * as yup from 'yup';

function ChangePass() {

    const schema =  yup.object().shape({
        originalPassword: yup.string().required("This is required field"),
        newPassword : yup.string().required("This is required field"),
        confirmPassword : yup.string().required("This is required field").oneOf([yup.ref('newPassword'), null], 'Passwords must match'),

    })

    const formik = useFormik({
        initialValues:{
            originalPassword:"",
            newPassword:"",
            confirmPassword:""
        },
        validationSchema:schema,
        onSubmit : (data)=>{
            console.log(data);
        }
    })

    return (
        <div className="ChangePassContainer">
            <form onSubmit={formik.handleSubmit}>
             <Password
              name="originalPassword"
              onBlur={formik.handleBlur}
              touched={formik.touched.originalPassword}
              error={formik.errors.originalPassword}
              handleChange={formik.handleChange}
              value={formik.values.originalPassword}
              label="old password"
              
            /> <br/>
             <Password
              name="newPassword"
              onBlur={formik.handleBlur}
              touched={formik.touched.newPassword}
              error={formik.errors.newPassword}
              handleChange={formik.handleChange}
              value={formik.values.newPassword}
              label="new password"
            /> <br/>
            <Password
              name="confirmPassword"
              onBlur={formik.handleBlur}
              touched={formik.touched.confirmPassword}
              error={formik.errors.confirmPassword}
              handleChange={formik.handleChange}
              value={formik.values.confirmPassword}
              label="confirm password"
            /> <br/>
            
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              style={{ fontWeight: "bold", width: 230 }}
            >
              Submit
            </Button>
            </form>
        </div>
    )
}

export default ChangePass
