import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
//import modules from "react-ui-kit/dist/modules";

function YearlyReport(filter) {
  const [yearlyReport, setYearlyReport] = useState({
    yearData: [{ yearCategory: "" }],
  });
  const [data, setData] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);


  // get yearly report data after component render
  useEffect(() => {
    const storedData = localStorage.getItem("YearlyReportData");

    if (storedData) {
      // return updated data
      setData(JSON.parse(storedData));
    }
  }, []);

  

  function handleChange(event) {
    const { name, value } = event.target;
    setYearlyReport((prevYearlyReport) => ({
      ...prevYearlyReport,
      [name]: value,
    }));

    localStorage.setItem("year", value);
  }
  const showPopup = () => setShowPopUp(!showPopUp);

  function handleAdd() {
    setShowPopUp(!showPopUp);


  }

  return (
    <MDBContainer className="p-5">
      <h3>Get your yearly report</h3>
      <MDBBtn onClick={showPopup}>Get Yearly report</MDBBtn>
      <MDBModal show={showPopUp} setShow={setShowPopUp} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={showPopup}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <>
                <select
                  id="form6Example1"
                  label="yearCategory"
                  name="yearCategory"
                  value={yearlyReport.yearCategory}
                  onChange={handleChange}
                >
                  <option value="">Choose Year</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                </select>
                <button onClick={handleAdd}>Get Report</button>
              </>
            </MDBModalBody>
            <MDBModalFooter>
      
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </MDBContainer>
  );
}

export default YearlyReport;
