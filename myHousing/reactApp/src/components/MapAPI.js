import React, {useMemo, Component} from "react";
import { GoogleMap, LoadScript, useLoadScript, Marker, MarkerF, InfoWindow } from "@react-google-maps/api";
import Geocode from "react-geocode";
import logo from "./212_East_apartment.jpg"
import logo1 from "./Here.jpg"
import '../styles/globals.css'
import { List } from "@mui/material";
import ReviewPage from "./ReviewPage";
import { Routes, Route, useNavigate, Link } from 'react-router-dom';

const containerStyle = {
    width: '1400px',
    height: '500px',
  };

const center = {
    lat: 40.11029091857493,
    lng: -88.22888971878801
};

const MapMarkers = ({ housingInfo }) => {
    const navigate = useNavigate();
    const toComponentB = () => {
        navigate('/reviewPage', { state:housingInfo });
    }
    return (
        <MarkerF onClick={() => {toComponentB()}} position={getPosition(housingInfo.latitude, housingInfo.longitude)}>
            <Routes>
                <Route path="/reviewPage" element={<ReviewPage />}>
                </Route>
            </Routes>
        </MarkerF>
    )
}

const justAList = [
    {"name": "second","lat": 40.3, "long": -88.2},
    {"name": "first","lat": 40.5, "long": -87},
    {"name": "third","lat": 40.4, "long": -88.4},
    {"name": "fourth","lat": 40.5, "long": -88.5},
    {"name": "fifth","lat": 40.6, "long": -88},
    {"name": "sixth","lat": 40.7, "long": -88.1},
];

const markFunct = ({ item }) => {
    console.log("Marked", item.name)
    return (
        <Marker position={getPosition(item.lat, item.long)}></Marker>
    )
}

const getPosition = ((x, y) => {
    return { lat: x, lng: y};
})
class MapAPI extends Component {
    state = {
        List: [],
        wholeList: [],
        id: 0,
    };

    async componentDidMount() {
        Geocode.setApiKey("AIzaSyDfA8FqaV3ZR8XwC8mEdpRpljamBZr8t5Q");
        Geocode.setLanguage("en");
        Geocode.setRegion("us");
        try {
            const res = await fetch('http://127.0.0.1:8000/housinginfo/');
            var List = await res.json();
            var wholeList = List.results;
            for (let i = 0; i < wholeList.length; ++i) {
                await Geocode.fromAddress(wholeList[i].street_address + " " + wholeList[i].city).then((response) => {
                    const { lat, lng } = response.results[0].geometry.location;
                    wholeList[i].latitude = lat;
                    wholeList[i].longitude = lng;
                    },
                    (error) => {
                    }
                );
            }
            console.log("done!")
            for (let i = 0; i < wholeList.length; ++i) {
                console.log("checking latitude: ", wholeList[i].latitude);
            }
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
            <LoadScript googleMapsApiKey="AIzaSyCWxMcZftC3H-LO9p0fZnSl0YvYZ8-tg28">
                <GoogleMap   GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15.5} mapContainerClassName="ml-auto mr-auto">
                    {this.state.wholeList.map(ele => (
                        <MapMarkers housingInfo={ele}></MapMarkers>
                    ))}
                </GoogleMap>
            </LoadScript>
        )
    }
}

export default MapAPI;