import React from "react"
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';

function SignInPage() {
    return(

        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <h1>Sign-In Here</h1>
      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>


      <MDBBtn className="mb-4">Sign in</MDBBtn>

    </MDBContainer>
    );
}

export default SignInPage