import React, {Component} from "react";
import {Link, Navigate} from "react-router-dom";
import PropTypes from "prop-types"
import {connect} from 'react-redux'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';

import {register} from "../actions/auth";
import { createMessage } from '../actions/messages';
export class RegisterationPage extends Component {
  state = {
    email: '',
    password: '',
    password2: '',
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password, password2 } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });
      console.log('Passwords do not match');
    } else {
      console.log("EMail:" + email);
      const newUser = {
        email,
        password,
      };
      this.props.register(newUser);
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Navigate to="/" />;
    }
    const { email, password, password2 } = this.state;
    return (
      <MDBContainer className = "w-50">

            <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
              <MDBCardBody>
                {/* <MDBRow> */}
                  <MDBCol className='order-2 order-lg-1 d-flex flex-column align-items-center'>
      
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register for MyHousing</p>
      
                    <form onSubmit={this.onSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <MDBIcon fas icon="envelope me-3" size='lg'/>
                        <MDBInput label='Your Email' id='form2' type='email' name='email' onChange={this.onChange} value={email}/>
                      </div>
        
                      <div className="d-flex flex-row align-items-center mb-4">
                        <MDBIcon fas icon="lock me-3" size='lg'/>
                        <MDBInput label='Password' id='form3' type='password' name="password" onChange={this.onChange} value={password}/>
                      </div>
        
                      <div className="d-flex flex-row align-items-center mb-4">
                        <MDBIcon fas icon="key me-3" size='lg'/>
                        <MDBInput label='Repeat your password' id='form4' type='password' name="password2" onChange={this.onChange} value={password2}/>
                      </div>
        
                      {/* <div className='mb-4'>
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                      </div> */}
        
                      <MDBBtn type="submit" className='mb-4' size='lg'>Register</MDBBtn>
                    </form>
                  </MDBCol>
      
                  {/* <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
                  </MDBCol> */}
      
                {/* </MDBRow> */}
              </MDBCardBody>
            </MDBCard>
      
          </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(RegisterationPage);

// import React from "react"
// import {
//     MDBBtn,
//     MDBContainer,
//     MDBRow,
//     MDBCol,
//     MDBCard,
//     MDBCardBody,
//     MDBCardImage,
//     MDBInput,
//     MDBIcon,
//     MDBCheckbox
//   }
//   from 'mdb-react-ui-kit';

// function RegistrationPage() {
//     return(
//         <MDBContainer className = "w-50">

//       <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
//         <MDBCardBody>
//           {/* <MDBRow> */}
//             <MDBCol className='order-2 order-lg-1 d-flex flex-column align-items-center'>

//               <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register for MyHousing</p>

//               <div className="d-flex flex-row align-items-center mb-4 ">
//                 <MDBIcon fas icon="user me-3" size='lg'/>
//                 <MDBInput label='Your Name' id='form1' type='text' className='w-100'/>
//               </div>

//               <div className="d-flex flex-row align-items-center mb-4">
//                 <MDBIcon fas icon="envelope me-3" size='lg'/>
//                 <MDBInput label='Your Email' id='form2' type='email'/>
//               </div>

//               <div className="d-flex flex-row align-items-center mb-4">
//                 <MDBIcon fas icon="lock me-3" size='lg'/>
//                 <MDBInput label='Password' id='form3' type='password'/>
//               </div>

//               <div className="d-flex flex-row align-items-center mb-4">
//                 <MDBIcon fas icon="key me-3" size='lg'/>
//                 <MDBInput label='Repeat your password' id='form4' type='password'/>
//               </div>

//               {/* <div className='mb-4'>
//                 <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
//               </div> */}

//               <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>

//             </MDBCol>

//             {/* <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
//               <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
//             </MDBCol> */}

//           {/* </MDBRow> */}
//         </MDBCardBody>
//       </MDBCard>

//     </MDBContainer>
//     );
// }

// export default RegistrationPage;