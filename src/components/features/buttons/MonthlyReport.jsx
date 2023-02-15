import React, { useState, useEffect } from "react";
import {
  MDBBtn,
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
  const [showMonth, setShowMonth] = useState({
    January: "January",
    February: "February",
    March: "March",
    April: "April",
    May: "May",
    June: "June",
    July: "July",
    August: "August",
    October: "October ",
    November: "November",
    December: "December",
  });
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    //storedData hold the data from local storage
    //and then the state get storedData storedData with distracting data and then we get more easily the data
    const storedData = JSON.parse(localStorage.getItem("user")) || {};
    setShowMonth({ ...showMonth, ...storedData });
  }, []);

  //function that will run when the user clicks on the button
  //get the data from the input and save it to local storage
  //the state is updated every time the user clicks on the button
  //e.target.name is the name of the input
  //e.target.value is the value of the input
  const handleInputChange = (e) => {
    setShowMonth({ ...storedData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    // handleSubmit get event from the form and save it to local storage
    //e.preventDefault() will prevent the form from being submitted on all inputs the is generating
    // JSON.stringify(formData) = JSON.stringify turn the updated state the json string

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
                label="category"
                name="category"
                value={formData.category || ""}
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
            </MDBRow>
            <MDBModalBody> Item added successfully!</MDBModalBody>
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
