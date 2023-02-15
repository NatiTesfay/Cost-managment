import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import MonthlyReport from "../../features/buttons/MonthlyReport";
import YearlyReport from "../../features/buttons/YearlyReport";



function Get_report() {
  return (
  <MDBContainer className="d-flex justify-content-evenly p-5 " >
    <MonthlyReport/>
    <YearlyReport/>
  </MDBContainer>
  );
}

export default Get_report;
