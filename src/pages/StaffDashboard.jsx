import React, { useState } from "react";
import AppBar from "../components/Appbar";
import ReportSelectionContainer from "../components/ReportSelectionContainer";
import SummaryReport from "../components/SummaryReport";
import DetailedReport from "../components/DetailedReport";
import DatePicker from "../components/DatePicker";
import { useFormik } from "formik";
import { Button } from "@material-ui/core";

function TeacherDashboard() {
  const [report, setstate] = useState("");

  const setreportType = (data) => {
    console.log(data);
    setstate(data.reportType);
  };

  const formik = useFormik({
    initialValues: {
      fromDate: Date(),
      toDate: Date(),
    },
    onSubmit: (data) => {
      console.log(data);
    },
  });
  return (
    <div className="staffParentContainer">
      <AppBar></AppBar>
      <ReportSelectionContainer
        reportType={setreportType}
      ></ReportSelectionContainer>
      {report === "summary" ? (
        <div>
          <div className="reportHeader">
            <h3>
              Total Classes : <span style={{ color: "#003566" }}>50</span>{" "}
            </h3>
            <h3>
              Average Attendence : <span style={{ color: "#003566" }}>80%</span>{" "}
            </h3>
          </div>
          <SummaryReport></SummaryReport>
        </div>
      ) : report === "detail" ? (
        <React.Fragment>
          <div className="reportHeader">
            <h3>
              Total Classes : <span style={{ color: "#003566" }}>50</span>{" "}
            </h3>
            <form onSubmit={formik.handleSubmit} className="select-date">
              <DatePicker
                name="fromData"
                label="From Date"
                value={formik.values.fromDate}
                setFieldValue={formik.setFieldValue}
                key={1}
              ></DatePicker>
              <DatePicker
                name="toDate"
                label="To Date"
                value={formik.values.toDate}
                setFieldValue={formik.setFieldValue}
                key={2}
              ></DatePicker>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ fontWeight: "bold", marginLeft: 16, width: 200 }}
              >
                Submit
              </Button>
            </form>
          </div>
          <DetailedReport></DetailedReport>
        </React.Fragment>
      ) : (
        ""
      )}
    </div>
  );
}

export default TeacherDashboard;
