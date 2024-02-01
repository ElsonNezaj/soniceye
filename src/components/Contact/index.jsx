import React from "react";
import styles from "./styles.module.scss";
import GoogleMapReact from "google-map-react";
import MarkerIcon from "../../assets/images/marker.png";
import { Typography } from "antd";

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
      <div className={styles.contactInfo}>
        <Typography className={styles.title}>Contact Us</Typography>
        <Typography className={styles.subTitle}>
          24 / 7 at your sevice!
        </Typography>
        <div className={styles.infoContainer}>
          <div className={styles.formContainer}></div>
          <div className={styles.infoGrid}>
            <div className={styles.singleInfoContainer}>
              <Typography>Business Inqueries</Typography>
              {/* Business Contact Here*/}
            </div>
            <div className={styles.singleInfoContainer}>
              <Typography>Customer Service</Typography>
              {/* Customer Service Contact Here*/}
            </div>
          </div>
        </div>
        <div className={styles.socials}>{/* All Socials Here*/}</div>
      </div>
    </div>
  );
}
