import React, { Component } from 'react'
import { Container , Form, Row, Col, Button} from 'react-bootstrap'
import axios from 'axios';

export default class CreateReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rev_id: '',
      rev_housing_id: '',
      rev_title: '',
      rev_body: '',
      rev_stars: '',
    };
    this.handleChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
onChange = (e) => this.setState({ [e.target.name]: e.target.value });
handleSubmit(event) {
    axios.post('http://127.0.0.1:8000/reviews/', {
        review_id: this.state.rev_id,
        housing_info: this.state.rev_housing_id,
        title: this.state.rev_title,
        body: this.state.rev_body,
        stars: this.state.rev_stars,
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
    event.preventDefault();
}
render() {
  return (
      <Container>
        <Form style={{ margin: '50px' }} >
            <Col>
               <Form.Control placeholder="Review ID" name="rev_id" value={this.state.rev_id} onChange={this.onChange}/>
            </Col>
            <Col>
               <Form.Control placeholder="Housing ID" name="rev_housing_id" value={this.state.rev_housing_id} onChange={this.onChange}/>
            </Col>
            <Col>
               <Form.Control placeholder="Title" name="rev_title" value={this.state.rev_title} onChange={this.onChange}/>
            </Col>
            <Col>
               <Form.Control placeholder="Body" name="rev_body" value={this.state.rev_body} onChange={this.onChange}/>
            </Col>
            <Col>
               <Form.Control placeholder="Stars" name="rev_stars" value={this.state.rev_stars} onChange={this.onChange}/>
            </Col>
          <Button variant="outline-secondary" style={{ margin: '30px', float: 'right' }} onClick={this.handleSubmit}>Add Review</Button>
       </Form>
     </Container>
      )
   }
}