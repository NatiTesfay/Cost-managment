import React, { useState, useEffect } from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBContainer,
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
    category: "",
    date: "",
    description: "",
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("NewItems:");
    if (storedData) setData(JSON.parse(storedData));
  }, []);
  // localStorage.clear();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function handleAdd() {
    const newEntry = { ...formData };
    setData((prevData) => [...prevData, newEntry]);
    setFormData({
      itemName: "",
      price: "",
      category: "",
      date: "",
      description: "",
    });
    const updatedData = [...data, newEntry];
    localStorage.setItem("NewItems:", JSON.stringify(updatedData));
  }
  //arrow function that checks when user press the btn if the state of showPopUp is true
  //if it is true, it will run the function and return popup
  const showPopup = () => setShowPopUp(!showPopUp);

  return (
      <form onSubmit={handleAdd}>
        <MDBContainer className="p-5">
          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput
                id="form6Example1"
                label="Item Name"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                id="form6Example1"
                type="number"
                label="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                id="form6Example1"
                type="date"
                label="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-4">
            <select
              id="form6Example1"
              label="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="1">Please Select an Option</option>
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
              value={formData.description}
              onChange={handleChange}
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
  );
}
export default NewItems;
