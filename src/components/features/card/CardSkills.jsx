import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import AllSkills from "../../../data/programsSkills";

function CardSkills() {
  return (
    <>
      {AllSkills.map((skill, i) => {
        return (
          <MDBRow className='p-4 m-2'>
          <MDBCol>
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>{skill.language}</MDBCardTitle>
                <MDBCardText>
                  {skill.about}
                </MDBCardText>
                <MDBBtn href='/home'>Back to homePage</MDBBtn>
              </MDBCardBody>
            </MDBCard>
            </MDBCol>
        </MDBRow>
        );
      })}
    </>
  );
}
export default CardSkills;
