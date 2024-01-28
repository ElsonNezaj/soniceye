import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Typography, Tooltip, Input } from "antd";
import ModelView from "./3dGlass";
import { ChevronLeft, ChevronRight, HelpOutline } from "@mui/icons-material";
import { PRODUCTS } from "../../../assets/constants/constants";

export default function SingleProductRoute(match) {
  const { productCode } = match.match.params;
  const data = PRODUCTS.find((el) => el.productCode === Number(productCode));

  const [quantity, setQuanitity] = useState(1);

  return (
    <div className={styles.singleRouteContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.modelContainer}>
          <Tooltip
            title={
              <span className={styles.tooltipMessage}>
                Drag on the left side of the page to rotate the model
              </span>
            }
            placement="right"
          >
            <Typography className={styles.quickMessage}>
              <HelpOutline />
            </Typography>
          </Tooltip>
          <ModelView />
        </div>
        <div className={styles.dataContainer}>
          <Typography className={styles.titleLabel}>{data.name}</Typography>
          <div className={styles.infoContainer}>
            <Typography className={styles.infoName}>
              {data.name}{" "}
              <span className={styles.productCode}>#{data.productCode}</span>
            </Typography>
            <div className={styles.tags}>
              {data.tags.map((tag) => (
                <div className={styles.singletag} key={tag}>
                  <Typography className={styles.tagLabel}>{tag}</Typography>
                </div>
              ))}
            </div>
            <div className={styles.description}>
              <Typography className={styles.descriptionLabel}>
                {data.description}
              </Typography>
            </div>
            <div className={styles.description}>
              <Typography className={styles.subDescriptionLabel}>
                Discover our collection of premium eyewear. From classic frames
                to modern designs, our range of glasses offers something for
                every taste and preference. Whether you're looking for sleek,
                minimalist frames or bold, statement-making styles, we have the
                perfect pair to complement your individual look. Our glasses are
                crafted with high-quality materials and precision, ensuring
                durability and comfort with every wear. With a variety of lens
                options available, including blue light protection and
                prescription lenses. Explore our diverse selection and find the
                ideal pair of glasses to elevate your everyday style.
              </Typography>
            </div>
            <div className={styles.colors}>
              {data.colors.map((color) => (
                <div
                  key={color}
                  style={{ background: color }}
                  className={styles.sinlgeColor}
                />
              ))}
            </div>
            <div className={styles.addToCartContainer}>
              <Typography className={styles.label}>Quant.</Typography>
              <div className={styles.arrow}>
                <ChevronLeft />
              </div>
              <div className={styles.inputContainer}>
                <Input type="number" className={styles.input} />
              </div>
              <div className={styles.arrow}>
                <ChevronRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
