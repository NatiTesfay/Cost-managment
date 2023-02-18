import React from "react";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import MonthlyReport from "../../features/buttons/MonthlyReport";
import YearlyReport from "../../features/buttons/YearlyReport";

function AllReports() {
  return (
    
    <MDBContainer className="d-flex justify-content-evenly p-5 ">
      <MDBRow>
        <MonthlyReport />
      </MDBRow>
      <MDBRow>
        <YearlyReport />
      </MDBRow>
    </MDBContainer>
  );
}

export default AllReports;
