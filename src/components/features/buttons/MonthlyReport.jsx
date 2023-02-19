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

function MonthlyReport() {
  const [showPopUp, setShowPopUp] = useState(false);

  const [monthlyReport, setMonthlyReport] = useState({
    dataMonth:[
    {monthCategory: ""},
   { yearCategory: ""},
    ]
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("Monthly Report:");

    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);
  // localStorage.clear();

  function handleChange(event) {
    const { name, value } = event.target;
    setMonthlyReport((prevmonthlyReport) => ({
      ...prevmonthlyReport,
      [name]: value,
    }));
  }

  function handleAdd() {
    const newEntry = { ...monthlyReport };
    setData((prevData) => [...prevData, newEntry]);
    setMonthlyReport({
      yearCategory: "",
      monthCategory: "",
    });

    const updatedData = [...data, newEntry];
    localStorage.setItem("Monthly Report:", JSON.stringify(updatedData));
  }

  //arrow function that checks when user press the btn if the state of showPopUp is true
  //if it is true, it will run the function and return popup
console.log(monthlyReport);
  const showPopup = () => setShowPopUp(!showPopUp);

  return (
    <MDBContainer className="p-5">
      <h3>Get your monthly report</h3>
      <MDBBtn onClick={showPopup}>Get Monthly</MDBBtn>
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
              <form>
                <select
                  id="form6Example1"
                  label="yearCategory"
                  name="yearCategory"
                  value={monthlyReport.yearCategory}
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
                <select
                  id="form6Example1"
                  label="monthCategory"
                  name="monthCategory"
                  value={monthlyReport.monthCategory}
                  onChange={handleChange}
                >
                  <option value="">Choose Month</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">June</option>
                  <option value="8">August</option>
                  <option value="9">August</option>
                  <option value="10">August</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <button onClick={handleAdd}>Get Report</button>
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              {/* {
              monthlyReport.map((entry, index) => {
                return (
                  <table>
                    <tr><th>{entry.itemName}</th></tr>
                    <tr><th>{entry.price}</th></tr>
                    <tr><th>{entry.category}</th></tr>
                    <tr><th>{entry.date}</th></tr>
                    <tr><th>{entry.description}</th></tr>
                  </table>
                )
              })
             } */}
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </MDBContainer>
  );
}

export default MonthlyReport;
