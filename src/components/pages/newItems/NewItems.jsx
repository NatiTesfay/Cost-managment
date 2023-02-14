import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBContainer,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBValidation,
  MDBTextArea ,
} from "mdb-react-ui-kit";

function NewItems() {
  return (
    <form>
      <MDBContainer className="p-5">
        <MDBRow className="mb-4">
          <MDBCol>
            <MDBInput id="form6Example1" label="Item Name" />
          </MDBCol>
          <MDBValidation className="row g-3">
            <MDBCol>
              <MDBInput label="Price" id="typeNumber" type="number" />
            </MDBCol>
          </MDBValidation>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBDropdown>
            <MDBDropdownToggle>Category</MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem link>Fashion</MDBDropdownItem>
              <MDBDropdownItem link>Food</MDBDropdownItem>
              <MDBDropdownItem link>Sport</MDBDropdownItem>
              <MDBDropdownItem link>Vacations</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBRow>
        <MDBRow className="mb-4">
        <MDBTextArea label='Description' id='textAreaExample' rows={4} />
        </MDBRow>
        <MDBBtn className="mb-4" type="submit" block>
         Add Item
        </MDBBtn>
      </MDBContainer>
    </form>
  );
}

export default NewItems;
