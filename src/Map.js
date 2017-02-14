import React from 'react';
import {google, maps, Map, GoogleMap, withGoogleMap,} from '../node_modules/react-google-maps'


export default class MyMap extends React.Component {
    componentDidMount() {
         new google.maps.Map(this.refs.map), {
            center: {lat: -34.397, lng: 150.644},
            scrollwheel: false,
            zoom: 8
        }
    }

    render() {
        const mapStyle = {
            width: 500,
            height: 300,
            border: '1px solid black'
        };

        return (
            <div ref="map" style={mapStyle}>


            </div>
        );
    }
}

