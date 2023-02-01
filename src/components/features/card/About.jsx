import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

function About() {
  return (
    <MDBCard
      style={{ maxWidth: "1000px" }}
      className="d-flex justify-content-start"
    >
      <MDBRow className="g-0">
        <MDBCol md="4">
          <MDBCardImage
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp"
            alt="..."
            fluid
          />
        </MDBCol>
        <MDBCol md="6">
          <MDBCardBody>
            <MDBCardTitle>My Name Is Netanel Tesfay</MDBCardTitle>
            <MDBCardTitle> Im Full Stack Web Developer</MDBCardTitle>
            <MDBCardText>
              <small className="text-muted"></small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}
export default About;
