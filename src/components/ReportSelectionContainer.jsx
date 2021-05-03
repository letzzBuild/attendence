import React from "react";
import Select from "./Select";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";

function ReportSelectionContainer(props) {
  const divisions = ["A", "B"];
  const semesters = ["First", "Second", "Third", "Forth"];
  const branches = ["CSE", "E&C", "E&E", "Civil"];
  const reportTypes = ["summary", "detail"];
  const subjects = ["Web Technology"];

  const schema = yup.object().shape({
    branch: yup.string().required("This is required field"),
    semester: yup.string().required("This is required field"),
    division: yup.string().required("This is required field"),
    subject: yup.string().required("This is required field"),
    reportType: yup.string().required("This is required field"),
  });

  const formik = useFormik({
    initialValues: {
      branch: "",
      semester: "",
      division: "",
      subject: "",
      reportType: "",
    },
    validationSchema: schema,
    onSubmit: (data) => {
      console.log(data);
      props.reportType(data)
      
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="reportSelectionContainer">
        <Select
          margin={8}
          className="select"
          name="branch"
          dropdownValues={branches}
          onBlur={formik.handleBlur}
          touched={formik.touched.branch}
          handleChange={formik.handleChange}
          error={formik.errors.branch}
          value={formik.values.branch}
        />
        <Select
          className="select"
          name="semester"
          margin={8}
          dropdownValues={semesters}
          onBlur={formik.handleBlur}
          touched={formik.touched.semester}
          handleChange={formik.handleChange}
          error={formik.errors.semester}
          value={formik.values.semester}
        />
        <Select
          margin={8}
          className="select"
          name="division"
          dropdownValues={divisions}
          onBlur={formik.handleBlur}
          touched={formik.touched.division}
          handleChange={formik.handleChange}
          error={formik.errors.division}
          value={formik.values.division}
        />
        <Select
          margin={8}
          className="select"
          name="subject"
          dropdownValues={subjects}
          onBlur={formik.handleBlur}
          touched={formik.touched.subject}
          handleChange={formik.handleChange}
          error={formik.errors.subject}
          value={formik.values.subject}
          size="small"
        />
        <Select
          margin={8}
          className="select"
          name="reportType"
          dropdownValues={reportTypes}
          onBlur={formik.handleBlur}
          touched={formik.touched.reportType}
          handleChange={formik.handleChange}
          error={formik.errors.reportType}
          value={formik.values.reportType}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ fontWeight: "bold" ,marginLeft:16,width:200 }}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

export default ReportSelectionContainer;
