import React from "react";
import { useSelector } from "react-redux";
import { formDataSelector } from "../redux/selector";

import moment from "moment";

import { DataGrid } from "@mui/x-data-grid";

import escapeRegExp from "../utils/tableData/escapeRegExp";
import SearchToolbar from "../utils/tableData/SearchToolbar";
import Header from "../components/Header";
import Loader from "./Loader";
import Footer from "../components/Footer";

/**
 * @name EmployeeList
 * @description create the page for the table caontaining the list of employees
 * @returns {JSX.Element}
 */
export default function Table() 
{
  const employeeInfo = useSelector(formDataSelector);
  const rows = [];
  const rowsLength = employeeInfo.rows.length;  

  // Which information will be filled up, regarding each row and column in the table
  for (let i = 0; i < rowsLength; i += 1) 
  {
    rows.push({
      id: i + 1,
      col1: employeeInfo.rows[i].firstName,
      col2: employeeInfo.rows[i].lastName,
      col3: moment(employeeInfo.rows[i].birth).format("DD/MM/YYYY"),
      col4: moment(employeeInfo.rows[i].startDate).format("DD/MM/YYYY"),
      col5: employeeInfo.rows[i].street,
      col6: employeeInfo.rows[i].city,
      col7: employeeInfo.rows[i].state,
      col8: employeeInfo.rows[i].zipCode,
      col9: employeeInfo.rows[i].department
    })
  };

  // Head table titles
  const gridColumns = [{ 
    field: "col1", 
    headerName: "First Name", 
    flex: 1 
  },
  { 
    field: "col2", 
    headerName: "Last Name", 
    flex: 1 
  },
  { 
    field: "col3", 
    headerName: "Date of birth", 
    flex: 1 
  },
  { 
    field: "col4", 
    headerName: "Start Date", 
    flex: 1 
  },
  { 
    field: "col5", 
    headerName: "Street", 
    flex: 1 
  },
  { 
    field: "col6", 
    headerName: "City", 
    flex: 1 
  },
  { 
    field: "col7", 
    headerName: "State", 
    flex: 1 
  },
  { 
    field: "col8", 
    headerName: "Zip Code", 
    flex: 1 
  },
  { 
    field: "col9", 
    headerName: "Department", 
    flex: 1 
  }]

    const [search, setSearch] = React.useState("");
    const [gridRows, setGridRows] = React.useState(rows);
  
    const searchRequest = (searchInfo) => 
    {
      setSearch(searchInfo);
      const searchNewRegex = new RegExp(escapeRegExp(searchInfo), "i");
      const filteringSearch = rows.filter((row) => 
      {
        return Object.keys(row).some((field) => 
        {
          return searchNewRegex.test(row[field].toString());
        });
      });
      setGridRows(filteringSearch);
    };
  
    React.useEffect(() => 
    {
      setGridRows(gridRows)
    }, [gridRows]);
    

    return (
      <div>
        <Loader />
        <Header />
        <h2>Current Employees</h2>
        <div id="table" className="tableContainer">
          <DataGrid
            sx={{ borderColor: '#FFFAEE', borderRadius: '15px', boxShadow: '0 0 28px #1a548e' }}
            className="tableSize"
            columns={gridColumns}
            rows={gridRows}
            slots={{ 
              toolbar: SearchToolbar,
            }}
            slotProps={{ 
              toolbar: 
              {
                value: search,
                onChange: (event) => searchRequest(event.target.value),
                clearSearch: () => searchRequest(""),
              }
            }}
          />
        </div>
        <Footer />
      </div>
    )
};

        