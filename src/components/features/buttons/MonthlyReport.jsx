import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBRow,
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

  const [showMonth, setShowMonth] = useState({
    months: [
      { January: "January" },
      { February: "February" },
      { March: "March" },
      { April: "April" },
      { May: "May" },
      { June: "June" },
      { July: "July" },
      { August: "August" },
      { October: "October " },
      { November: "November" },
      { December: "December" },
    ],
  });
  const [showYear, setShowYear] = useState({
    years: [
      { year1: 2023 },
      { year2: 2022 },
      { year3: 2021 },
      { year4: 2020 },
      { year5: 2019 },
      { year6: 2018 },
      { year7: 2017 },
      { year8: 2016 },
      { year9: 2015 },
      { year10: 2014 },
    ],
  });

  useEffect(() => {
    //storageDataMonth hold the data from local storage
    //and then the state get storageDataMonth storageDataMonth with distracting data and then we get more easily the data
    const storageDataMonth = JSON.parse(localStorage.getItem("userData")) || [];
    setShowMonth({ ...showMonth, ...storageDataMonth });
    
    const storageDataYear = JSON.parse(localStorage.getItem("userData")) || [];
    setShowYear({ ...showYear, ...storageDataYear });
    // localStorage.clear(showMonth);
  }, []);

  //function that will run when the user clicks on the button
  //get the data from the input and save it to local storage
  //the state is updated every time the user clicks on the button
  //e.target.name is the name of the input
  //e.target.value is the value of the input
  const handleInputChange = (e) => {
    setShowMonth({
      ...showMonth,
      [e.target.name]: e.target.value,
    });
    setShowYear({
      ...showYear,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(showMonth));
    localStorage.setItem("userData", JSON.stringify(showYear));
    // handleSubmit get event from the form and save it to local storage
    //e.preventDefault() will prevent the form from being submitted on all inputs the is generating
    // JSON.stringify(showMonth) = JSON.stringify turn the updated state the json string
  };

  const showPopup = () => setShowPopUp(!showPopUp);

  return (
    <form onSubmit={handleSubmit}>
      <MDBBtn onClick={showPopup}>Monthly Report</MDBBtn>
      <MDBModal show={showPopUp} setShow={setShowPopUp} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Pick Year</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={showPopup}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBRow className="mb-4">
              <select
                id="form6Example1"
                label="monthCategory"
                name="monthCategory"
                value={showMonth.months || ""}
                onChange={handleInputChange}
              >
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">vacations</option>
              </select>
              <select
                id="form6Example1"
                label="yearCategory"
                name="yearCategory"
                value={showYear.years || ""}
                onChange={handleInputChange}
              >
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
            </MDBRow>
            <MDBModalBody> Month added successfully!</MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={showPopup}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </form>
  );
}
export default MonthlyReport;
