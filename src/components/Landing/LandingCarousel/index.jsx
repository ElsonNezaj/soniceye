import React from "react";
import styles from "./styles.module.scss";
import { Carousel, Typography } from "antd";

export default function LandingCarousel() {
  return (
    <div className={styles.landingCarouselContainer}>
      <Carousel
        autoplay
        autoplaySpeed={5000}
        easing="linear"
        effect="fade"
        dots={styles.dots}
        className={styles.carousel}
      >
        <div className={styles.carouselItem}>
          <Typography className={styles.itemTitle}>Your Sonic Eyes</Typography>
          <Typography className={styles.itemContent}>
            High-End Glasses With Sonic Sensors
          </Typography>
        </div>
        <div className={styles.carouselItem}>
          <Typography className={styles.itemTitle}>
            Easier Way of Living
          </Typography>
          <Typography className={styles.itemContent}>
            Slim design , fit for everyday, 24 hour usage
          </Typography>
        </div>
        <div className={styles.carouselItem}>
          <Typography className={styles.itemTitle}>Ultrasoundrific</Typography>
          <Typography className={styles.itemContent}>
            Powerful sensor , with a range up to 62 cm
          </Typography>
        </div>
      </Carousel>
    </div>
  );
}
