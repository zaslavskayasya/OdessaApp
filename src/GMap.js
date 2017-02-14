import React from 'react';

import GoogleMap from 'google-map-react';


export default class SimpleMapPage extends React.Component {

    constructor() {
        super();
        this.state = {
            center: {lat: 59.938043, lng: 30.337157},
            zoom: 9,
            greatPlaceCoords: {lat: 59.724465, lng: 30.080121},
            key: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAc0iRgrOXhejzd_egRp8wDGM5H1re6psQ&callback=initMap'
        }
    }

    render() {
        return (
            <GoogleMap
                bootstrapURLKeys={{
                    key: 'AIzaSyAc0iRgrOXhejzd_egRp8wDGM5H1re6psQ',

                }}
                defaultCenter={this.state.center}
                defaultZoom={this.state.zoom}
            className="mapWindow">

            </GoogleMap>
        );
    }
}