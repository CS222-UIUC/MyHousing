import React, { Component } from 'react';
import CardReview from './CardReview';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';


class ReviewListAPI extends Component {
    state = {
        List: [],
        wholeList: [],
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

    render() {
        return (
            <div>
                <ScrollMenu>
                    {this.state.wholeList.map(item => (
                        <CardReview housingInfo={item} />
                        /*
                          <div key={item.id}>
                            <h1>{item.housing_name}</h1>
                          </div>
                        ))}
                        */
                    ))}
                </ScrollMenu>
            </div>
        );
    }
}

export default ReviewListAPI;



