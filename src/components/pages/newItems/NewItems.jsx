import React, { useState, useEffect } from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBContainer,
  MDBValidation,
  MDBTextArea,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
//import modules from "react-ui-kit/dist/modules";

function NewItems() {
  //state change when user clicks on the button and turn to true
  //when state changes to true, it will run the function and return popup
  const [showPopUp, setShowPopUp] = useState(false);
  //state for the input , user can enter the name of the item
  //the data saved in local storage every time the user clicks on the button that run the function
  const [formData, setFormData] = useState({
    itemName: "",
    price: "",
    category: [
      {
        fashion: "fashion",
      },
      {
        food: "food",
      },
      {
        sport: "sport",
      },
      {
        vacations: "vacations",
      },
    ],
    data: "",

    description: "",
  });

  useEffect(() => {
    //storageData hold the data from local storage
    //and then the state get storageData storageData with distracting data and then we get more easily the data
    const storageData = JSON.parse(localStorage.getItem("user")) || [];
    setFormData({ ...formData, ...storageData });
  }, [formData]);

  //function that will run when the user clicks on the button
  //get the data from the input and save it to local storage
  //the state is updated every time the user clicks on the button
  //e.target.name is the name of the input
  //e.target.value is the value of the input
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    // handleSubmit get event from the form and save it to local storage
    //e.preventDefault() will prevent the form from being submitted on all inputs the is generating
    // JSON.stringify(formData) = JSON.stringify turn the updated state the json string
  };
  const localStorageData = [];
  localStorageData.push(formData);


  //arrow function that checks when user press the btn if the state of showPopUp is true
  //if it is true, it will run the function and return popup
  const showPopup = () => setShowPopUp(!showPopUp);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <MDBContainer className="p-5">
          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput
                id="form6Example1"
                label="Item Name"
                name="itemName"
                value={formData.itemName || ""}
                onChange={handleInputChange}
              />
            </MDBCol>
            <MDBValidation className="row g-3">
              <MDBCol>
                <MDBInput
                  id="form6Example1"
                  type="number"
                  label="price"
                  name="price"
                  value={formData.price || ""}
                  onChange={handleInputChange}
                />
              </MDBCol>
            </MDBValidation>
          </MDBRow>
          <MDBRow className="mb-4">
            <select
              id="form6Example1"
              label="category"
              name="category"
              value={formData.category || ""}
              onChange={handleInputChange}
            >
              <option value="fashion">fashion</option>
              <option value="food">food</option>
              <option value="sport">sport</option>
              <option value="vacations">vacations</option>
            </select>
          </MDBRow>
          <MDBRow className="mb-4">
            <MDBTextArea
              id="form6Example1"
              label="description"
              name="description"
              value={formData.description || ""}
              onChange={handleInputChange}
            />
          </MDBRow>

          <MDBBtn onClick={showPopup}>Add Item</MDBBtn>
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
                <MDBModalBody> Item added successfully!</MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color="secondary" onClick={showPopup}>
                    Close
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </MDBContainer>
      </form>
    </>
  );
}

export default NewItems;

//this component build to let the user to add new item and save it to local storage
//after user enter data the component will be used to show the popup when the user click on the button
