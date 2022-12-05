import React, { Component } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createReview } from "../actions/reviews";

export class CreateReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rev_title: "",
      rev_body: "",
      rev_stars: "",
    };
    this.handleChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    createReview: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit(event) {
    this.props.createReview({
      housing_info: this.props.id,
      is_currently_resident: 0,
      title: this.state.rev_title,
      body: this.state.rev_body,
      stars: this.state.rev_stars,
    });
    event.preventDefault();
  }

  render() {
    return (
      <Container>
        <Form style={{ margin: "50px" }}>
          <Col>
            <Form.Control
              placeholder="Title"
              name="rev_title"
              value={this.state.rev_title}
              onChange={this.onChange}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Body"
              name="rev_body"
              value={this.state.rev_body}
              onChange={this.onChange}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Stars"
              name="rev_stars"
              type="number"
              min="1"
              max="5"
              value={this.state.rev_stars}
              onChange={this.onChange}
            />
          </Col>
          <Button
            variant="outline-secondary"
            style={{ margin: "30px", float: "right" }}
            onClick={this.handleSubmit}
          >
            Add Review
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { createReview })(CreateReview);
