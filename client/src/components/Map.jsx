import React, { useState, useRef, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import useSupercluster from 'use-supercluster';
import '../css/Map.css';
import { Link } from 'react-router-dom';
import mapStyles from '../../../config/mapStyles.js';
const apiKey = require('../../../config/keys.js').GOOGLE_MAPS_API.KEY;

const Marker = ({children}) => children;

export default function Map({ itemList, setCurrentItem, lat, long }) {
  //1) map setup
  const mapRef = useRef();
  const [zoom, setZoom] = useState(10);
  const [bounds, setBounds] = useState(null);

  //2) load and format data
  console.log('itemList', itemList);

  //map items in itemList to GeoJSON objects

  const points = itemList.map(item => ({
    type: 'Feature',
    properties: { cluster: false, resultId: item.id, brand: item.brand, price: item.price, itemRef: item },
    geometry: {
      type: 'Point',
      coordinates: [
        parseFloat(item.loc_lng),
        parseFloat(item.loc_lat)
      ]
    }
  }));

  //3) get clusters
  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 }
  });

  const mapOptions = {
    styles: mapStyles
  };

  //*************************************************************** */
  const handleClick = (item) => {
    setCurrentItem(item);
  };
  //*************************************************************** */

  //4) render map
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        options={mapOptions}
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={{ lat: lat, lng: long }}
        defaultZoom={1}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat
          ]);
        }}
      >
        {clusters.map(cluster => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const {
            cluster: isCluster,
            point_count: pointCount
          } = cluster.properties;

          if (isCluster) {
            return (
              <Marker
                key={`cluster-${cluster.id}`}
                lat={latitude}
                lng={longitude}
              >
                <div
                  className="cluster-marker"
                  style={{
                    width: `${10 + (pointCount / points.length) * 20}px`,
                    height: `${10 + (pointCount / points.length) * 20}px`
                  }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20
                    );
                    mapRef.current.setZoom(expansionZoom);
                    mapRef.current.panTo({ lat: latitude, lng: longitude });
                  }}
                >
                  {pointCount}
                </div>
              </Marker>
            );
          }

          return (
            <Marker
              key={`result-${cluster.properties.resultId}`}
              lat={latitude}
              lng={longitude}
            >
              <Link to='/item' className="result-link">
                <button
                  className="result-marker"
                  // style={{
                  //   width: '200px',
                  //   height: '200px'
                  // }}
                  onClick={() => handleClick(cluster.properties.itemRef)}
                >
                  {/* <img src="/misato.jpg" alt="bestgirl" /> */}
                  {`$${cluster.properties.price}`}
                </button>
              </Link>
            </Marker>
          );
        })}
      </GoogleMapReact>
    </div>
  );
}
