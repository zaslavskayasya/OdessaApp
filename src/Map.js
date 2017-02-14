import React from 'react';
import {google, maps, Map,  GoogleMap, withGoogleMap,} from '../node_modules/react-google-maps'


class MyMap extends React.Component {
    componentDidMount() {
         new google.maps.Map(this.refs.map), {
            center: {lat: -34.397, lng: 150.644},
            scrollwheel: false,
            zoom: 8,
             key: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAc0iRgrOXhejzd_egRp8wDGM5H1re6psQ&callback=initMap'
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
                <pre>{JSON.stringify(this.props.initialPosition, null,2)}</pre>

            </div>
        );
    }
}

export default  MyMap ;