import React from "react";
import styles from "./styles.module.scss";
import GoogleMapReact from "google-map-react";
import MarkerIcon from "../../assets/images/marker.png";

const Marker = ({ text }) => <div>{text}</div>;

export default function Contact() {
  const defaultProps = {
    center: {
      lat: 41.3187414012359,
      lng: 19.814408275584277,
    },
    zoom: 17,
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAsk6FIQmJ4zRsIrKZAQX1jkLtCEWK1Tvc" }}
          center={defaultProps.center}
          zoom={defaultProps.zoom}
          draggable={false}
        >
          <Marker
            lat={41.3187414012359}
            lng={19.814408275584277}
            text={<img alt="marker" src={MarkerIcon} width={50} height={50} />}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}
