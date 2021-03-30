import React from 'react';
import {useFormik} from 'formik';
import TextField from '../components/Input';
import SecondaryButton from '../components/SecondaryButton';
import Select from '../components/Select';
import './styles.css';
import {Link} from 'react-router-dom';
import *  as yup from 'yup';


function LoginPage() {
    const rolesOfUsers = ["Staff","HOD","Principal","Admin"];
    const schema =  yup.object().shape({
        username : yup.string().required(),
        password : yup.string().required(),
        role: yup.string().required()
    })
    const formik = useFormik({
        initialValues:{
            username:"",
            password:"",
            role:""
        },

        validationSchema:schema,

        onSubmit:(data)=>{
            console.log(data);
        }
    });
    return (
       
        <div className="LoginDiv">
            <div className="LoginDivRow">
            <form onSubmit={formik.handleSubmit}>
             <h1>Sign In</h1>   
            <TextField name="username" onChange={formik.handleChange} value={formik.values.username}/> <br/>
            <TextField name="password" onChange={formik.handleChange} value={formik.values.password}/> <br/>
            <Select name="role" dropdownValues={rolesOfUsers} onChange={formik.handleChange} value={formik.values.role}/><br/>
            <SecondaryButton name="submit" /><br/>
            <Link id="forgotPass" to='changepassword'>Forgot/Change Password</Link>
            </form>
            </div>
            
            
        </div>
    )
}

export default LoginPage
