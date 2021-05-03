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
      "23-04-2021" : 1 ,
      "24-04-2021" : 1,
      "25-04-2021" : 1,
      "26-04-2021" : 0
    },
    {
      Name: "John Walsh",
      Usn: "2jr28cs021",
      "23-04-2021" : 0 ,
      "24-04-2021" : 1 ,
      "25-04-2021" : 0 ,
      "26-04-2021" : 0 

    },
    {
      Name: "Bob Herm",
      Usn: "2jr28cs022",
      "23-04-2021" : 1,
      "24-04-2021" : 1,
      "25-04-2021" : 1,
      "26-04-2021" : 1
    },
    {
      Name: "James Houston",
      Usn: "2jr28cs023",
      "23-04-2021" : 0 ,
      "24-04-2021" : 0 ,
      "25-04-2021" : 0 ,
      "26-04-2021" : 0 
    },
  ];
  const columns = [
    { title: "Name", field: "Name" },
    { title: "Usn", field: "Usn" },
    { title: "23-04-2021", field: "23-04-2021" },
    { title: "24-04-2021", field: "24-04-2021" },
    { title: "25-04-2021", field: "25-04-2021" },
    {
      title: "26-04-2021",
      field: "26-04-2021",
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
        search: true,
        exportButton: true,
        filterCellStyle: {},
        headerStyle: {
          backgroundColor: "#003566",
          color: "white",
          fontWeight: "bold",
        },
        
      }}
    />
  );
}
export default BasicFiltering;
