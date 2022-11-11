import {useMemo} from "react";
import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from "@react-google-maps/api";
import logo from "./212_East_apartment.jpg"
import logo1 from "./Here.jpg"
import '../styles/globals.css'

export default function MapAPI() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCWxMcZftC3H-LO9p0fZnSl0YvYZ8-tg28",
      });
    
    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}
function Map() {
    const center = useMemo(() => ({ lat: 40.1164, lng: -88.2434 }), []);
    return ( 
    <GoogleMap zoom={15} center= {center}  mapContainerClassName="map-container ml-auto mr-auto">
        <MarkerF key = "center" position={{ lat: 40.1164, lng: -88.2434 }}/>
        <MarkerF  key = "here-apartment" position={{ lat: 40.1105385, lng: -88.23423 }}>
            <InfoWindow position = {{ lat: 40.1105385, lng: -88.23423 }}><div><img src={logo1} width="100px" height="100px"/></div></InfoWindow> 
        </MarkerF>
        <MarkerF  key = "212-apartment" position={{ lat: 40.110390, lng: -88.235640 }}>
            <InfoWindow position = {{ lat: 40.110390, lng: -88.235640 }}><div><img src={logo} width="100px" height="100px"/></div></InfoWindow> 
        </MarkerF>
    </GoogleMap>
    )
}