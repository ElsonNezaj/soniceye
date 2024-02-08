import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Typography, Tooltip, Input, Button } from "antd";
import ModelView from "./model";
import { ChevronLeft, ChevronRight, HelpOutline } from "@mui/icons-material";
import { PRODUCTS } from "../../../assets/constants/constants";
import { useAppDispatch } from "../../../redux/hooks";
import { addItemFromRoute } from "../../../redux/cartSlice/cartSlice";

export default function SingleProductRoute(match) {
  const dispatch = useAppDispatch();
  const { productCode } = match.match.params;
  const data = PRODUCTS.find((el) => el.productCode === Number(productCode));

  const [quantity, setQuanitity] = useState(1);

  const handleQuantityChange = (state) => {
    if (state === "increase") {
      setQuanitity(quantity + 1);
    } else {
      if (quantity === 1) {
        return;
      } else {
        setQuanitity(quantity - 1);
      }
    }
  };

  const addToCart = (data) => {
    const newElement = { ...data, quantity: quantity };
    dispatch(addItemFromRoute(newElement));
  };

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
              <div
                onClick={() => handleQuantityChange("decrease")}
                className={styles.arrow}
              >
                <ChevronLeft />
              </div>
              <div className={styles.inputContainer}>
                <Input
                  value={quantity}
                  type="number"
                  onChange={(e) => {
                    if (Number(e.target.value) === 0) {
                      setQuanitity(1);
                    } else {
                      setQuanitity(Number(e.target.value));
                    }
                  }}
                  className={styles.input}
                />
              </div>
              <div
                onClick={() => handleQuantityChange("increase")}
                className={styles.arrow}
              >
                <ChevronRight />
              </div>
              <Button onClick={() => addToCart(data)} className={styles.button}>
                Add To Cart
              </Button>
            </div>
            <Typography className={styles.price}>
              Price: {data.price * quantity}&euro;
            </Typography>
          </div>
          <div
            style={{ width: "100%", height: "20px", background: "transprent" }}
          />
        </div>
        <Typography className={styles.titleLabelDesktop}>
          {data.name}
        </Typography>
      </div>
    </div>
  );
}
