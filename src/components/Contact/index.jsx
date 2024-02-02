import React, { useState } from "react";
import styles from "./styles.module.scss";
import GoogleMapReact from "google-map-react";
import MarkerIcon from "../../assets/images/marker.png";
import { Typography, Input, Form } from "antd";
import CircularProgress from "@mui/material/CircularProgress";
import { ReactComponent as Checkmark } from "../../assets/images/checkmark.svg";
import { Instagram, Facebook, Twitter } from "@mui/icons-material";

const SOCIALS = [
  { label: "Instagram", icon: <Instagram /> },
  { label: "Facebook", icon: <Facebook /> },
  { label: "Twitter", icon: <Twitter /> },
];

const Marker = ({ text }) => text;

export default function Contact() {
  const defaultProps = {
    zoom: 17,
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAsk6FIQmJ4zRsIrKZAQX1jkLtCEWK1Tvc" }}
          center={{
            lat: 41.3187414012359,
            lng: 19.814408275584277,
          }}
          zoom={defaultProps.zoom}
          draggable={false}
        >
          <Marker
            lat={41.3187414012359}
            lng={19.814408275584277}
            text={<img src={MarkerIcon} alt="marker" width={30} height={30} />}
          />
        </GoogleMapReact>
      </div>
      <div className={styles.contactInfo}>
        <Typography className={styles.title}>Contact Us</Typography>
        <Typography className={styles.subTitle}>
          24 / 7 at your sevice!
        </Typography>
        <div className={styles.infoContainer}>
          <div className={styles.formContainer}>
            <SendMessageForm />
          </div>
          <div className={styles.infoGrid}>
            <div className={styles.singleInfoContainer}>
              <Typography className={styles.sectionTitle}>
                Business Inqueries
              </Typography>
              <div className={styles.info}>
                <Typography className={styles.infoLabel}>
                  E-mail address:{" "}
                  <a
                    href="mailto:soniceye@business.com"
                    className={styles.email}
                  >
                    soniceye@business.com
                  </a>
                </Typography>
                <Typography className={styles.infoLabel}>
                  Mobile: <span>+355 67 777 999</span>
                </Typography>
                <Typography className={styles.infoLabel}>
                  Phone: <span>+355 4 420 3846</span>
                </Typography>
                <Typography className={styles.infoLabel}>
                  Fax: <span>(111) 1234 - 3456</span>
                </Typography>
              </div>
            </div>
            <div className={styles.singleInfoContainer}>
              <Typography className={styles.sectionTitle}>
                Customer Service
              </Typography>
              <div className={styles.info}>
                <Typography className={styles.infoLabel}>
                  E-mail address:{" "}
                  <a
                    href="mailto:soniceye.forcustomers@service.com"
                    className={styles.email}
                  >
                    soniceye.forcustomers@service.com
                  </a>
                </Typography>
                <Typography className={styles.infoLabel}>
                  Mobile: <span>+355 69 777 999</span>
                </Typography>
                <Typography className={styles.infoLabel}>
                  Phone: <span>+355 4 422 3846</span>
                </Typography>
                <Typography className={styles.infoLabel}>
                  Fax: <span>(111) 1236 - 3476</span>
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.socials}>
          <Typography className={styles.socialsTitle}>Follow us on:</Typography>
          <div className={styles.socialsContainer}>
            {SOCIALS.map((social) => (
              <div className={styles.singleSocialContainer}>
                <div className={styles.socialIcon}>{social.icon}</div>
                <Typography className={styles.socialLabel}>
                  {social.label}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SendMessageForm() {
  const [isLoading, setIsLoading] = useState("not loading");
  const [messageData, setMessageData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (name, value) => {
    setMessageData({ ...messageData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading("loading");
    setTimeout(() => {
      setIsLoading("finished");
    }, 5000);
    setMessageData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={styles.formAndMessageContainer}>
      {isLoading !== "finished" ? (
        <>
          {isLoading === "loading" && (
            <div className={styles.overlayMessage}>
              <CircularProgress size={55} />
            </div>
          )}
          <Typography className={styles.textMessage}>
            Fill out the fields below with your information, and we will get
            back to you as soon as possible!
          </Typography>
          <Form
            onSubmitCapture={(e) => handleSubmit(e)}
            className={styles.form}
          >
            <Input
              placeholder="Full Name"
              name="name"
              value={messageData.name}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              type="text"
              size="large"
              required
              className={styles.input}
            />
            <Input
              placeholder="E-mail"
              name="email"
              value={messageData.email}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              type="email"
              size="large"
              required
              className={styles.input}
            />
            <Input.TextArea
              placeholder="You message"
              name="message"
              value={messageData.message}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              type="text"
              autoSize={{ minRows: 3 }}
              size="large"
              required
              className={styles.input}
            />
            <input type="submit" className={styles.submitButton} />
          </Form>
        </>
      ) : (
        <div className={styles.finishedContainer}>
          <Checkmark className={styles.checkmarkIcon} />
          <Typography className={styles.success}>
            Message sent sucessfully!
          </Typography>
          <Typography className={styles.subMessage}>
            We will contact your shortly
          </Typography>
        </div>
      )}
    </div>
  );
}
