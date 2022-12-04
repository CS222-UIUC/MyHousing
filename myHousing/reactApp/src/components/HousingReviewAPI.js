import React, { Component } from 'react';
import CardReview from './CardReview';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import HousingReviewCard from './HousingReviewCard';


class HousingReviewAPI extends Component {
    state = {
        List: [],
        wholeList: [],
        id: 0,
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/reviews/');
            var List = await res.json();
            var wholeList = List.results;
            const { housing_id } = this.props;
            var id = housing_id;
            this.setState({
                List,
                wholeList,
                id
            });
        } catch (e) {
            console.log(e);
        }
    }


    render() {
        return (
            <div>
                    {this.state.wholeList.map(item => (
                        item.housing_info == this.state.id 
                        ? (<div>
                            <HousingReviewCard review={item} />
                        </div>) : null
                        /*
                          <div key={item.id}>
                            <h1>{item.housing_name}</h1>
                          </div>
                        ))}
                        */
                    ))}
            </div>
        );
    }
}

export default HousingReviewAPI;



