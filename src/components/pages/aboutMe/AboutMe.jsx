import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import About from "../../features/card/About";

export default function AboutMe() {
  return (
    <MDBContainer className="d-flex justify-content-center mt-4" >
      <About />
    </MDBContainer>
  );
}
