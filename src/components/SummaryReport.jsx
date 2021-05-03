import MaterialTable, { MTableToolbar } from "material-table";
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import "./styles.css";

function BasicFiltering() {
  const data = [
    {
      Name: "Joe James",
      Usn: "2jr28cs020",
      "Total Present": "40",
      "Total Absent": "10",
      "Percentage(%)": "85",
      Attendence_Status: "excellent",
    },
    {
      Name: "John Walsh",
      Usn: "2jr28cs021",
      "Total Present": "0",
      "Total Absent": "50",
      "Percentage(%)": "0",
      Attendence_Status: "poor",
    },
    {
      Name: "Bob Herm",
      Usn: "2jr28cs022",
      "Total Present": "25",
      "Total Absent": "25",
      "Percentage(%)": "50",
      Attendence_Status: "medium",
    },
    {
      Name: "James Houston",
      Usn: "2jr28cs023",
      "Total Present": "30",
      "Total Absent": "20",
      "Percentage(%)": "70",
      Attendence_Status: "good",
    },
  ];
  const columns = [
    { title: "Name", field: "Name" },
    { title: "Usn", field: "Usn" },
    { title: "Total Present", field: "Total Present" },
    { title: "Total Absent", field: "Total Absent" },
    { title: "Percentage(%)", field: "Percentage(%)" },
    {
      title: "Attendence Status",
      field: "Attendence_Status",
      lookup: {
        poor: "poor",
        excellent: "excellent",
        good: "good",
        medium: "medium",
      },
      render: (rowData) => {
        return rowData.Attendence_Status === "good" ? (
          <div
            style={{
              backgroundColor: "#ffd23f",
              padding: 5,
              borderRadius: 4,
              textAlign: "center",
            }}
          >
            {rowData.Attendence_Status}
          </div>
        ) : rowData.Attendence_Status === "medium" ? (
          <div
            style={{
              backgroundColor: "#f79d84",
              padding: 5,
              borderRadius: 4,
              textAlign: "center",
            }}
          >
            {rowData.Attendence_Status}
          </div>
        ) : rowData.Attendence_Status === "poor" ? (
          <div
            style={{
              backgroundColor: "#ef2b2b",
              padding: 5,
              borderRadius: 4,
              color: "white",
              textAlign: "center",
            }}
          >
            {rowData.Attendence_Status}
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "#a1ef7a",
              padding: 5,
              borderRadius: 4,
              textAlign: "center",
            }}
          >
            {rowData.Attendence_Status}
          </div>
        );
      },
    },
  ];

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  return (
    <MaterialTable
      components={{
        Toolbar: (props) => (
          <div
            style={{
              backgroundColor: "#e9edc9",
              fontWeight: "bolder",
              color: "#000000",
            }}
          >
            <MTableToolbar {...props} />
          </div>
        ),
      }}
      style={{ margin: 5 }}
      title="Attendence Summary Report"
      columns={columns}
      data={data}
      icons={tableIcons}
      options={{
        filtering: true,
        search: true,
        exportButton: true,
        filterCellStyle: {},
        headerStyle: {
          backgroundColor: "#003566",
          color: "white",
          fontWeight: "bold",
        },
        searchFieldStyle: {
          color: "black",
        },
      }}
    />
  );
}
export default BasicFiltering;
