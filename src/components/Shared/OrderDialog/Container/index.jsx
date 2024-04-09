import styles from "./styles.module.scss";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { Typography } from "antd";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";

import CloseIcon from "@mui/icons-material/Close";
import { toggleOrderDialog } from "../../../../redux/appSlice/appSlice";
import OrderDetails from "../OrderDetails";

export default function OrderDialog() {
  const dispatch = useAppDispatch();
  const orderId = useAppSelector((state) => state.app.selectedOrderKey);
  const order = useAppSelector((state) => state.app.selectedOrder);
  const isOrderDialogOpen = useAppSelector(
    (state) => state.app.isOrderDialogOpen
  );

  const handleClose = () => {
    dispatch(toggleOrderDialog(false));
  };

  return (
    <Dialog
      open={isOrderDialogOpen}
      onClose={() => handleClose()}
      maxWidth="md"
      fullWidth
      PaperProps={{ className: styles.dialogPaper }}
    >
      <DialogTitle className={styles.dialogHeader}>
        <Typography className={styles.title}>
          Order Number: <span>#{orderId?.split("-")[0]}</span>
        </Typography>
        <div onClick={handleClose} className={styles.closeIcon}>
          <CloseIcon />
        </div>
      </DialogTitle>
      <DialogContent className={styles.contentContainer}>
        <div className={styles.details}>
          <Typography className={styles.sectionTitle}>Order Details</Typography>
          <OrderDetails details={order.personalData} />
        </div>
        <div className={styles.items}>
          <Typography className={styles.sectionTitle}>Order Items</Typography>
        </div>
      </DialogContent>
    </Dialog>
  );
}