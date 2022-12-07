import React, { Component, useState } from 'react';
import CardReview from './CardReview';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

class ReviewListAPI extends Component {
    state = {
        List: [],
        wholeList: [],
        input: "",
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/housinginfo/');
            var List = await res.json();
            var wholeList = List.results;
            this.setState({
                List,
                wholeList
            });
        } catch (e) {
            console.log(e);
        }
    }

    onChangeHandler(e){
        this.setState({
            input: e.target.value,
        })
    }


    render() {
        const list = this.state.wholeList
        .filter(ele => this.state.input === '' || ele.housing_name.toLowerCase().includes(this.state.input.toLowerCase()))
        return (
            <div>
                <InputGroup className="mb-3 pl-10">
                    <Form.Control
                    placeholder="Apartment Name"
                    aria-label="Apartment Name"
                    aria-describedby="basic-addon2"
                    value={this.state.input}
                    type="text"
                    onChange={this.onChangeHandler.bind(this)}
                    />
                </InputGroup>
                <ScrollMenu>
                    {list.map(item => (
                        <CardReview housingInfo={item} />
                    ))}
                </ScrollMenu>
            </div>
        );
    }
}

export default ReviewListAPI;



